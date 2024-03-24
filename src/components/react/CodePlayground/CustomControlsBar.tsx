import FormatCodeBtn from "./FormatCodeBtn";
import FullScreenBtn from "./FullScreenBtn";
import ResetCodeBtn from "./ResetCodeBtn";
import SandpackForkBtn from "./SandpackForkBtn";

interface CustomControlsBarProps {
  title: string;
  codeMirrorInstance: any;
  isFullScreen: boolean;
  setIsFullScreen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CustomControlsBar = ({
  codeMirrorInstance,
  title,
  isFullScreen,
  setIsFullScreen,
}: CustomControlsBarProps) => {
  return (
    <div className="flex min-w-full items-center justify-between overflow-hidden rounded-t-xl px-2 py-1">
      <span className="mx-2 text-xs font-bold uppercase text-neutral-400">
        {title}
      </span>
      <div className="flex items-center">
        <ResetCodeBtn />
        <FullScreenBtn
          isFullScreen={isFullScreen}
          setIsFullScreen={setIsFullScreen}
        />
        <FormatCodeBtn codeMirrorInstance={codeMirrorInstance} />
      </div>
    </div>
  );
};

export default CustomControlsBar;
