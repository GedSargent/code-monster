import { Maximize } from "react-feather";
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

  const handleToggleFullScreen = () => {
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
  }

  return (
    <button
      title="Full screen toggle"
      type="button"
      className="mx-1 bg-transparent"
      onClick={handleToggleFullScreen}
    >
      <Boop scale={1.1}>
        <Maximize
          className="h-auto w-4 stroke-neutral-400 shadow-sm hover:stroke-neutral-200 group-hover:stroke-neutral-200"
        />
      </Boop>
    </button>
  );
};

export default FullScreenBtn;
