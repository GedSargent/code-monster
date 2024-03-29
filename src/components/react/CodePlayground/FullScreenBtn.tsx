import React from 'react';
import { Maximize, Minimize } from "react-feather";
import Boop from "../Boop";

interface FullScreenBtnProps {
  isFullScreen: boolean;
  setIsFullScreen: React.Dispatch<React.SetStateAction<boolean>>;
  wrapperRef: any;
}

const FullScreenBtn = ({
  isFullScreen,
  setIsFullScreen,
  wrapperRef,
}: FullScreenBtnProps) => {
  const handleToggleFullScreen = React.useCallback(() => {
    const elem = wrapperRef.current;

    if (elem && !isFullScreen) {
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
        setIsFullScreen(!isFullScreen);
      }
    } else if (elem && isFullScreen && document) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullScreen(!isFullScreen);
      }
    }
  }, [isFullScreen, setIsFullScreen, wrapperRef])

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === 'Escape' && isFullScreen) {
        handleToggleFullScreen();
      }
    };

    const syncFullScreenState = () => {
      const isCurrentlyFullScreen = document?.fullscreenElement != null;
      setIsFullScreen(isCurrentlyFullScreen);
    };

    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('fullscreenchange', syncFullScreenState);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('fullscreenchange', syncFullScreenState);
    };
  }, [isFullScreen, handleToggleFullScreen, setIsFullScreen]);

  const btnClassName = `h-auto w-4 stroke-neutral-400 shadow-sm hover:stroke-neutral-200 transition duration-300 ${isFullScreen ? 'hover:scale-75' : 'hover:scale-[1.3]'} group-hover:stroke-neutral-200`

  return (
    <button
      title="Full screen toggle"
      type="button"
      className="mx-1 bg-transparent"
      onClick={handleToggleFullScreen}
    >
      <Boop scale={isFullScreen ? 1.25 : 0.9}>
        {isFullScreen ?
          <Minimize className={btnClassName} /> :
          <Maximize className={btnClassName}/>
        }
      </Boop>
    </button>
  );
};

export default FullScreenBtn;
