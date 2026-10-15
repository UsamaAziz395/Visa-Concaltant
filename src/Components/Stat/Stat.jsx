
import React, { useEffect, useState } from 'react';

function AnimatedNumber({ end, suffix, duration = 2500 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min(
        (timestamp - startTime) / duration,
        1
      );

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
}

function Stat() {
  const statsData = [
    { value: 15, suffix: '+', label: 'Years of Experience' },
    { value: 93, suffix: '%', label: 'Visa Success Rate' },
    { value: 2, suffix: 'X', label: 'Faster Process' },
    { value: 50, suffix: 'K', label: 'Successful Applications' },
  ];

  return (
    <section className="w-full bg-[#0D132E] text-white py-16 px-4 md:px-8">
      <div className="max-w-[1200px] mx-auto">

        <div className="flex flex-col md:flex-row justify-between items-start gap-10 md:gap-16 mb-20">
          <div className="flex-1">
            <h3 className="text-amber-300 font-bold text-sm tracking-widest uppercase mb-3">
              Immigo Stats
            </h3>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              The Numbers <br /> Speak
            </h1>
          </div>

          <div className="flex-1 flex flex-col items-start gap-6 max-w-xl">
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus illum ipsa ullam ad quia consequatur voluptatum aliquid? Vitae, corrupti quod voluptatum obcaecati perferendis optio architecto at quisquam beatae magni fugit quam, facere, aut nisi ipsam omnis praesentium? Unde rerum laboriosam, eum autem esse accusantium a quasi officiis perspiciatis culpa expedita!
            </p>

            <button className="px-6 py-3 bg-[#4F46E5] hover:bg-[#4338CA] transition-colors text-white font-medium rounded-lg shadow-md">
              Learn More
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4   border-t border-gray-700/50 pt-10">
          {statsData.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-bold mb-2">
                <AnimatedNumber
                  end={stat.value}
                  suffix={stat.suffix}
                  duration={2500}
                />
              </span>

              <span className="text-gray-400 text-sm">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Stat;
