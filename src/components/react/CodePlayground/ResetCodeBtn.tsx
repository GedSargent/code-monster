import { useSandpack } from "@codesandbox/sandpack-react";
import { AnimatePresence, motion } from "framer-motion";
import { useId, useRef, useState } from "react";
import { SkipBack } from "react-feather";
import Boop from "../Boop";
import SvgSpinner from "../SvgSpinner";

const ResetCodeBtn = () => {
  const [isPressingReset, setIsPressingReset] = useState(false);
  const { sandpack } = useSandpack();
  const spinnerId = useId();

  let timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const handleOnMouseDown = () => {
    setIsPressingReset(true);

    timerRef.current = setTimeout(async () => {
      sandpack.resetAllFiles();
      sandpack.openFile("/App.tsx");
      sandpack.setActiveFile("/App.tsx");
      
      await sandpack.runSandpack();

      setIsPressingReset(false);
    }, 1500);
  };

  const handleOnMouseUp = () => {
    clearTimeout(timerRef.current as NodeJS.Timeout);
    setIsPressingReset(false);
  };

  return (
    <>
      <div className="w-4 h-4 flex items-center justify-center">
        <AnimatePresence mode="wait">
          {isPressingReset && (
            <motion.div
              key={spinnerId}
              id={spinnerId}
              className="absolute"
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: { duration: 0.5 }
              }}
              exit={{ opacity: 0, scale: 0, transition: { duration: 0.5 } }}
            >
              <SvgSpinner />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
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
