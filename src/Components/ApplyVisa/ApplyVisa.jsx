
import React, { useState } from "react";

function ApplyVisa() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    nationality: "",
    passportNumber: "",
    visaType: "Tourist Visa",
    destination: "",
    travelDate: "",
    purpose: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const today = new Date();
  const minDate = `${today.getFullYear()}-${String(
    today.getMonth() + 1
  ).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;

  const validateField = (name, value) => {
    const trimmedValue = value.trim();

    switch (name) {
      case "fullName":
        if (!trimmedValue) return "Full name is required.";
        if (trimmedValue.length < 3)
          return "Name must contain at least 3 characters.";
        if (!/^[\p{L}\s'-]+$/u.test(trimmedValue))
          return "Name can contain only letters, spaces, hyphens and apostrophes.";
        return "";

      case "email":
        if (!trimmedValue) return "Email address is required.";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedValue))
          return "Please enter a valid email address.";
        return "";

      case "phone": {
        if (!trimmedValue) return "Phone number is required.";

        const digits = value.replace(/\D/g, "");

        if (!/^\+?[\d\s()-]+$/.test(value) || digits.length < 10 || digits.length > 15)
          return "Enter a valid phone number with 10–15 digits.";

        return "";
      }

      case "nationality":
        if (!trimmedValue) return "Nationality is required.";
        if (!/^[\p{L}\s'-]+$/u.test(trimmedValue))
          return "Enter a valid nationality.";
        return "";

      case "passportNumber":
        if (!trimmedValue) return "Passport number is required.";
        if (!/^[A-Za-z0-9]{5,20}$/.test(trimmedValue))
          return "Passport number must be 5–20 letters or digits, without spaces.";
        return "";

      case "visaType":
        if (!trimmedValue) return "Please select a visa type.";
        return "";

      case "destination":
        if (!trimmedValue) return "Destination country is required.";
        if (!/^[\p{L}\s'-]+$/u.test(trimmedValue))
          return "Enter a valid country name.";
        return "";

      case "travelDate":
        if (!trimmedValue) return "Travel date is required.";
        if (trimmedValue < minDate)
          return "Travel date cannot be in the past.";
        return "";

      case "purpose":
        if (!trimmedValue) return "Purpose of visit is required.";
        if (trimmedValue.length < 10)
          return "Please enter at least 10 characters.";
        if (trimmedValue.length > 500)
          return "Purpose cannot exceed 500 characters.";
        return "";

      default:
        return "";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (submitted || errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: validateField(name, value),
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);

      if (error) {
        newErrors[key] = error;
      }
    });

    setErrors(newErrors);
    setSubmitted(true);

    if (Object.keys(newErrors).length > 0) {
      const firstInvalidField = Object.keys(newErrors)[0];
      document.querySelector(`[name="${firstInvalidField}"]`)?.focus();
      return;
    }

    console.log("Visa Application:", formData);
    alert("Application submitted successfully!");
  };

  const inputClass = (field) =>
    `w-full rounded-lg border px-4 py-3 text-sm outline-none transition ${
      errors[field]
        ? "border-red-500 focus:ring-2 focus:ring-red-100"
        : "border-slate-300 focus:border-[#4361EE] focus:ring-2 focus:ring-blue-100"
    }`;

  const renderError = (field) =>
    errors[field] ? (
      <p className="mt-1.5 text-sm text-red-600" role="alert">
        {errors[field]}
      </p>
    ) : null;

  return (
    <section className="min-h-screen bg-slate-50 px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#4361EE]">
            ImmiGo Visa Services
          </p>

          <h1 className="mb-3 text-3xl font-bold text-[#0D0D18] sm:text-4xl">
            Visa Application Form
          </h1>

          <p className="text-slate-500">
            Fill in your details to apply for a visa.
          </p>
        </div>

        <form
          noValidate
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-5 rounded-2xl bg-white p-6 shadow-sm sm:grid-cols-2 sm:p-8"
        >
          <div>
            <label htmlFor="fullName" className="mb-2 block text-sm font-medium text-slate-700">
              Full Name
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              autoComplete="name"
              value={formData.fullName}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter your full name"
              aria-invalid={Boolean(errors.fullName)}
              aria-describedby={errors.fullName ? "fullName-error" : undefined}
              className={inputClass("fullName")}
            />
            {renderError("fullName")}
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter your email"
              aria-invalid={Boolean(errors.email)}
              className={inputClass("email")}
            />
            {renderError("email")}
          </div>

          <div>
            <label htmlFor="phone" className="mb-2 block text-sm font-medium text-slate-700">
              Phone Number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              value={formData.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="+92 300 1234567"
              aria-invalid={Boolean(errors.phone)}
              className={inputClass("phone")}
            />
            {renderError("phone")}
          </div>

          <div>
            <label htmlFor="nationality" className="mb-2 block text-sm font-medium text-slate-700">
              Nationality
            </label>
            <input
              id="nationality"
              name="nationality"
              type="text"
              autoComplete="country-name"
              value={formData.nationality}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="e.g. Pakistani"
              aria-invalid={Boolean(errors.nationality)}
              className={inputClass("nationality")}
            />
            {renderError("nationality")}
          </div>

          <div>
            <label htmlFor="passportNumber" className="mb-2 block text-sm font-medium text-slate-700">
              Passport Number
            </label>
            <input
              id="passportNumber"
              name="passportNumber"
              type="text"
              autoComplete="off"
              value={formData.passportNumber}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter passport number"
              aria-invalid={Boolean(errors.passportNumber)}
              className={inputClass("passportNumber")}
            />
            {renderError("passportNumber")}
          </div>

          <div>
            <label htmlFor="visaType" className="mb-2 block text-sm font-medium text-slate-700">
              Visa Type
            </label>
            <select
              id="visaType"
              name="visaType"
              value={formData.visaType}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={Boolean(errors.visaType)}
              className={`${inputClass("visaType")} bg-white`}
            >
              <option value="">Select visa type</option>
              <option value="Tourist Visa">Tourist Visa</option>
              <option value="Business Visa">Business Visa</option>
              <option value="Student Visa">Student Visa</option>
              <option value="Work Visa">Work Visa</option>
              <option value="Family Visa">Family Visa</option>
            </select>
            {renderError("visaType")}
          </div>

          <div>
            <label htmlFor="destination" className="mb-2 block text-sm font-medium text-slate-700">
              Destination Country
            </label>
            <input
              id="destination"
              name="destination"
              type="text"
              value={formData.destination}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="e.g. United Kingdom"
              aria-invalid={Boolean(errors.destination)}
              className={inputClass("destination")}
            />
            {renderError("destination")}
          </div>

          <div>
            <label htmlFor="travelDate" className="mb-2 block text-sm font-medium text-slate-700">
              Expected Travel Date
            </label>
            <input
              id="travelDate"
              name="travelDate"
              type="date"
              min={minDate}
              value={formData.travelDate}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={Boolean(errors.travelDate)}
              className={inputClass("travelDate")}
            />
            {renderError("travelDate")}
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="purpose" className="mb-2 block text-sm font-medium text-slate-700">
              Purpose of Visit
            </label>
            <textarea
              id="purpose"
              name="purpose"
              rows={4}
              maxLength={500}
              value={formData.purpose}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Explain why you want to travel"
              aria-invalid={Boolean(errors.purpose)}
              className={inputClass("purpose")}
            />
            <div className="mt-1 flex items-center justify-between gap-3">
              {renderError("purpose")}
              <span className="ml-auto text-xs text-slate-400">
                {formData.purpose.length}/500
              </span>
            </div>
          </div>

          <button
            type="submit"
            className="rounded-lg bg-[#4361EE] px-6 py-3 font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 sm:col-span-2"
          >
            Submit Application
          </button>
        </form>
      </div>
    </section>
  );
}

export default ApplyVisa;
