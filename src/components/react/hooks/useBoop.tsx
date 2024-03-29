// hooks/use-boop.js
import { useSpring } from "@react-spring/web";
import React from "react";

export default function useBoop({
  x = 0,
  y = 0,
  rotation = 0,
  scale = 1,
  timing = 150,
  springConfig = {
    tension: 300,
    friction: 10,
  },
}) {
  // TODO - fix to make this work
  const [isBooped, setIsBooped] = React.useState(false);

  const style = useSpring({
    display: "inline-block",
    backfaceVisibility: "hidden" as "hidden",
    transform: isBooped
      ? `translate(${x}px, ${y}px) rotate(${rotation}deg) scale(${scale})`
      : `translate(0px, 0px) rotate(0deg) scale(1)`,
    config: springConfig,
  });

  React.useEffect(() => {
    if (!isBooped) {
      return;
    }
    const timeoutId = setTimeout(() => {
      setIsBooped(false);
    }, timing);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [isBooped, timing]);

  const trigger = React.useCallback(() => {
    setIsBooped(true);
  }, [setIsBooped]);

  return [style, trigger];
}
