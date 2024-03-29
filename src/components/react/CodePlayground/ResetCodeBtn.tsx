import { useSandpack } from "@codesandbox/sandpack-react";
import { useRef, useState } from "react";
import { SkipBack } from "react-feather";
import Boop from "../Boop";

const ResetCodeBtn = () => {
  const [isPressingButton, setIsPressingButton] = useState(false);
  const { sandpack } = useSandpack();

  let timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const duration = 1500;

  const handleOnMouseDown = () => {
    setIsPressingButton(true);

    timerRef.current = setTimeout(() => {
      sandpack.resetAllFiles();
      setIsPressingButton(false);
    }, duration);
  };

  const handleOnMouseUp = () => {
    clearTimeout(timerRef.current as NodeJS.Timeout);
    setIsPressingButton(false);
  };

  return (
    <>
      <span
        className={`w-4 overflow-hidden h-4 rounded-full bg-[#2b2b2b] shadow-[60px_-60px_0_2px_#2b2b2b,_-60px_-60px_0_2px_#2b2b2b,_-60px_60px_0_2px_#2b2b2b,_60px_60px_0_2px_#2b2b2b,_0_0_0_2px_#2b2b2b] ${
          isPressingButton ? "animate-draw-circle" : ""
        }`}
      />
      <button
        title="Reset changes"
        type="button"
        className="mx-1 bg-transparent"
        onMouseDown={handleOnMouseDown}
        onMouseUp={handleOnMouseUp}
      >
        <Boop x={-2}>
          <SkipBack
            className={`h-auto w-4 stroke-neutral-400 shadow-sm hover:stroke-neutral-200 group-hover:stroke-neutral-200`}
          />
        </Boop>
      </button>
    </>
  );
};

export default ResetCodeBtn;
