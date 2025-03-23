import { useSandpack } from "@codesandbox/sandpack-react";
import { useRef, useState } from "react";
import { SkipBack } from "react-feather";
import Boop from "../Boop";

const SvgSpinner = () => {
  return (
    <svg
      className="mr-3 -ml-1 size-4 animate-spin text-white"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
    </svg>
  )
}

const ResetCodeBtn = () => {
  const [isPressingReset, setIsPressingReset] = useState(false);
  const { sandpack } = useSandpack();

  let timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const handleOnMouseDown = () => {
    setIsPressingReset(true);

    timerRef.current = setTimeout(() => {
      sandpack.resetAllFiles();
      setIsPressingReset(false);
    }, 1500);
  };

  const handleOnMouseUp = () => {
    clearTimeout(timerRef.current as NodeJS.Timeout);
    setIsPressingReset(false);
  };

  return (
    <>
      {isPressingReset ?  <SvgSpinner />: <div className="w-4 h-4" />}
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
