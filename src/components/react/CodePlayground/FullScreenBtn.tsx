import { Maximize } from "react-feather";
import Boop from "../Boop";

interface FullScreenBtnProps {
  isFullScreen: boolean;
  setIsFullScreen: React.Dispatch<React.SetStateAction<boolean>>;
}

const FullScreenBtn = ({
  isFullScreen,
  setIsFullScreen,
}: FullScreenBtnProps) => {
  return (
    <button
      title="Full screen toggle"
      type="button"
      className="mx-1 bg-transparent"
      onClick={() => setIsFullScreen(!isFullScreen)}
    >
      <Boop scale={1.1}>
        <Maximize
          className={`h-auto w-4 stroke-neutral-400 shadow-sm hover:stroke-neutral-200 group-hover:stroke-neutral-200`}
        />
      </Boop>
    </button>
  );
};

export default FullScreenBtn;
