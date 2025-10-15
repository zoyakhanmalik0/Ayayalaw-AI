"use client";

import { useEffect, useRef, useState } from "react";
import { Users, Download } from "lucide-react";

// Counter Component
const Counter = ({ target, duration = 2000 }: { target: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    let observer: IntersectionObserver;
    let started = false;

    if (ref.current) {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && !started) {
            started = true;
            let current = 0;
            const increment = target / (duration / 16); // ~60fps

            const step = () => {
              current += increment;
              if (current < target) {
                setCount(Math.floor(current));
                requestAnimationFrame(step);
              } else {
                setCount(target); // ensure exact end
              }
            };

            requestAnimationFrame(step);
          }
        },
        { threshold: 0.3 }
      );

      observer.observe(ref.current);
    }

    return () => {
      if (observer && ref.current) observer.unobserve(ref.current);
    };
  }, [target, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
};

// Stats Section
export default function StatsSection() {
  const stats = [
    { number: 50000, label: "Active Users", suffix: "+" },
    { number: 1000000, label: "Tasks Completed", suffix: "+" },
    { number: 99, label: "Satisfaction Rate", suffix: "%" },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-blue-600 via-cyan-500 to-blue-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzBoLTRWMjZoNHY0em0wIDRoLTR2NGg0di00em0tNCA0aC00djRoNHYtNHptLTQtNGgtNHY0aDR2LTR6bTAtNGgtNHY0aDR2LTR6bTQtNGgtNHY0aDR2LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-4">
            <Users className="text-white" size={40} />
          </div>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Join Thousands of Happy Users
          </h2>

          {/* Description */}
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Ayayalaw AI has helped countless users streamline their digital lives,
            boost productivity, and achieve more with less effort.
          </p>

          {/* Animated Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
              >
                <div className="text-5xl font-bold text-white mb-2">
                  <Counter target={stat.number} />
                  {stat.suffix}
                </div>
                <div className="text-lg text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="pt-12">
            <button className="group bg-white text-blue-600 hover:bg-gray-50 px-10 py-5 rounded-full font-bold text-xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-300 flex items-center mx-auto space-x-3">
              <Download size={28} className="group-hover:animate-bounce" />
              <span>Get Started for Free</span>
            </button>
            <p className="text-white/80 mt-4 text-sm">
              No credit card required • Free forever
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
