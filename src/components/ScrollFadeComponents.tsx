import React, { useEffect, useRef } from 'react';

interface ScrollFadeComponentProps {
  children: React.ReactNode;
}

const ScrollFadeComponent: React.FC<ScrollFadeComponentProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            container.classList.add('visible');
          } else {
            container.classList.remove('visible');
          }
        });
      },
      {
        threshold: 0.5, // Progi obserwacji - dostosuj wartość do swoich potrzeb
      }
    );

    observer.observe(container);

    return () => {
      observer.unobserve(container);
    };
  }, []);

  return (
    <div ref={containerRef} className="scroll-fade-component">
      {children}
    </div>
  );
};

export default ScrollFadeComponent;
