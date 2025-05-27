import { useState, useEffect, useRef } from 'react';
import CountUp from 'react-countup';

const CountUpOnVisible = ({ end, duration } : {end:number,duration:number}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
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

  return (
    <div ref={ref}>
      {isVisible && <CountUp end={end} duration={duration} />}
    </div>
  );
};

export default CountUpOnVisible;
