import { animated, useSpring } from "@react-spring/web";
import React, { type ReactNode } from "react";

interface BoopProps {
  rotation?: number;
  timing?: number;
  children: ReactNode;
  x?: number;
  y?: number;
  scale?: number;
}

const Boop = ({
  x = 0,
  y = 0,
  rotation = 0,
  scale = 1,
  timing = 150,
  children,
}: BoopProps) => {
  const [isBooped, setIsBooped] = React.useState(false);

  const style = useSpring({
    display: "inline-block",
    backfaceVisibility: "hidden" as "hidden",
    transform: isBooped
      ? `translate(${x}px, ${y}px)
         rotate(${rotation}deg)
         scale(${scale})`
      : `translate(0px, 0px)
         rotate(0deg)
         scale(1)`,
    config: {
      tension: 300,
      friction: 10,
    },
  });

  React.useEffect(() => {
    if (!isBooped) {
      return;
    }
    const timeoutId = window.setTimeout(() => {
      setIsBooped(false);
    }, timing);
    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [isBooped, timing]);

  const trigger = () => {
    setIsBooped(true);
  };

  return (
    <animated.span
      className={`cursor-pointer`}
      onMouseEnter={trigger}
      style={style}
    >
      {children}
    </animated.span>
  );
};

export default Boop;
