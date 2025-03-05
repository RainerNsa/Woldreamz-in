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
      <div className="text-4xl font-bold gradient-text mb-2">
        {count}{suffix}
      </div>
      <p className="text-slate-300 text-sm">{label}</p>
    </div>
  );
};

const Stats = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden page-background">
      <div className="absolute -top-[200px] -left-[200px] w-[500px] h-[500px] bg-woldreamz-50 rounded-full filter blur-3xl opacity-20 animate-float"></div>
      <div className="absolute -bottom-[150px] -right-[150px] w-[400px] h-[400px] bg-woldreamz-100 rounded-full filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              <StatItem value={300} suffix="+" label="Projects Delivered" />
              <StatItem value={98} suffix="%" label="Client Satisfaction" />
              <StatItem value={10} suffix="+" label="Years Experience" />
              <StatItem value={150} suffix="+" label="Happy Clients" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;