
import React from 'react';
import Pricingdata from '../../data/Pricingdata';

function Plan() {
  return (
    <section className="bg-white py-10 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center mb-8">
        <h1 className="text-amber-400 font-bold text-xs sm:text-sm tracking-widest mb-3">
          PRICING PLAN
        </h1>

        <h2 className="text-2xl sm:text-3xl font-bold text-[#0D132E] leading-tight">
          Explore ImmiGo's Visa and
          <br className="hidden sm:block" />
          {' '}Immigration Costs
        </h2>

        <p className="mt-4 text-sm text-slate-500 leading-6 max-w-xl mx-auto">
          Posuere sed eu proin elementum nulla. Sed non blandit auctor
          consequat sit orci sem. Ultrices adipiscing dictumst purus
          convallis.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {Pricingdata.map((plan) => (
          <div
            key={plan.id}
            className="border border-gray-200 flex flex-col min-w-0"
          >
            <div className="group p-4 sm:p-5 min-h-[112px] bg-white border-b border-gray-200 hover:bg-[#0D132E] hover:border-[#0D132E] transition-colors duration-300">
              <h3 className="text-base sm:text-lg font-bold mb-2 text-gray-900 group-hover:text-amber-400 transition-colors duration-300">
                {plan.title}
              </h3>

              <p className="text-xs sm:text-sm leading-5 text-slate-500 group-hover:text-gray-400 transition-colors duration-300">
                {plan.description}
              </p>
            </div>

            <div className="bg-white p-4 sm:p-5 flex flex-col flex-1">
              <div className="flex items-baseline gap-2 mb-4">
                <h3 className="text-3xl font-bold text-[#4361EE]">
                  ${plan.price}
                </h3>

                <span className="text-xs text-slate-500">
                  {plan.billing}
                </span>
              </div>

              <h4 className="text-xs font-bold text-slate-500 mb-3">
                FEATURE &amp; BENEFIT
              </h4>

              <ul className="flex-1">
                {plan.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 py-2.5 border-b border-gray-200 text-xs sm:text-sm text-slate-500"
                  >
                    <span className="text-[#4361EE] font-bold shrink-0">
                      ✓
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                className="w-full mt-5 py-2.5 px-3 rounded-md bg-[#4361EE] text-white text-sm font-semibold hover:bg-blue-600 transition-colors duration-300"
              >
                {plan.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Plan;
