
import React, { useState, useEffect, useRef } from 'react';

interface StatItemProps {
  value: number;
  suffix?: string;
  label: string;
  duration?: number;
}

const StatItem: React.FC<StatItemProps> = ({ value, suffix = '', label, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = Math.min(value, 9999);
    const incrementTime = duration / end;
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, incrementTime);

    return () => {
      clearInterval(timer);
    };
  }, [value, duration, isInView]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl font-bold text-woldreamz-blue mb-2">
        {count}{suffix}
      </div>
      <p className="text-slate-600">{label}</p>
    </div>
  );
};

const Stats = () => {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-slate-50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-slate-50 to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="glass-card p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <StatItem value={500} suffix="+" label="Projects Delivered" />
              <StatItem value={98} suffix="%" label="Client Satisfaction" />
              <StatItem value={7} suffix="+" label="Years Experience" />
              <StatItem value={250} suffix="+" label="Happy Clients" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
