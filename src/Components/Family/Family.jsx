
import React from 'react';
import Teamdata from '../../data/Teamdata';

function Family() {
  return (
    <section className="bg-white py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-8 sm:mb-10">
          <p className="text-[#4361EE] text-xs sm:text-sm font-bold tracking-widest mb-3">
            OUR TEAM
          </p>

          <h2 className="text-3xl sm:text-4xl font-semibold text-[#0D132E]">
            The ImmiGo Family
          </h2>

          <p className="text-sm sm:text-base text-gray-500 mt-4 max-w-2xl mx-auto leading-7">
            Meet the dedicated professionals helping you navigate your
            immigration journey with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {Teamdata.map((member) => (
            <div
              key={member.id}
              className="overflow-hidden"
            >
              <div className="w-full h-64 sm:h-64 md:h-72 lg:h-64 xl:h-72 bg-[#3652BE] overflow-hidden">
                {member.image && (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                  />
                )}
              </div>

              <div className="bg-[#F0F2FF] min-h-[70px] px-3 py-4 flex flex-col items-center justify-center text-center">
                <h3 className="text-sm sm:text-base font-semibold text-[#0D132E]">
                  {member.name}
                </h3>

                <p className="text-[10px] sm:text-xs font-bold text-[#4361EE] mt-1">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Family;
