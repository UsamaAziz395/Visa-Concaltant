
import React from 'react';
import TourVisaData from '../../data/TourVisadata';
import Tourvisa from '../../assets/images/Tourvisa.jpg';

function TourVisa() {
  return (
    <section className="bg-white">
      {TourVisaData.map((visa) => (
        <div
          key={visa.id}
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-5 border-b border-gray-200">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#0D0D18]">
              {visa.title}
            </h1>

            <a
              href={visa.buttonLink}
              className="inline-flex items-center justify-center bg-[#4361EE] hover:bg-blue-700 text-white text-sm font-semibold px-6 py-3 rounded-lg transition-colors duration-300"
            >
              {visa.buttonText}
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-6">
            <div className="w-full h-72 sm:h-80 md:h-[360px] overflow-hidden rounded-lg">
              <img
                src={Tourvisa}
                alt={visa.title}
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div>
              <h2 className="text-lg sm:text-xl font-bold text-[#101018] mb-4">
                Description
              </h2>

              {visa.description.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-sm text-slate-500 leading-6 mb-4"
                >
                  {paragraph}
                </p>
              ))}

              <h2 className="text-lg sm:text-xl font-bold text-[#101018] mt-6 mb-4">
                Requirements
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5">
                {[
                  visa.requirements.slice(0, 4),
                  visa.requirements.slice(4),
                ].map((items, index) => (
                  <ul
                    key={index}
                    className="list-disc pl-5 text-sm text-slate-500 space-y-1.5"
                  >
                    {items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default TourVisa;
