import { useRef, useEffect } from 'react';

interface ClickOutsideProps {
  children: React.ReactNode;
  exceptionRef?: React.RefObject<any>;
  onClick: () => void;
  className?: string;
}

export default function ClickOutside({ children, exceptionRef, onClick, className }: ClickOutsideProps) {
  const wrapperRef = useRef< HTMLDivElement | null >(null);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickListener);

    return () => {
      document.removeEventListener('mousedown', handleClickListener);
    };
  }, []);

  const handleClickListener = (event: Event) => {
    let clickedInside: Boolean | undefined = false;

    // Ensure wrapperRef?.current and exceptionRef?.current are treated as Node when calling contains
    const target = event.target as Node; // Safely asserting event.target as Node

    if (exceptionRef && exceptionRef.current) {
      clickedInside = wrapperRef?.current?.contains(target) || exceptionRef.current === target || exceptionRef.current.contains(target);
    } else {
      clickedInside = wrapperRef?.current?.contains(target);
    }

    if (!clickedInside) {
      onClick();
    }
  };

  return (
    <div ref={wrapperRef} className={`${className || ''}`}>
      {children}
    </div>
  );
};
