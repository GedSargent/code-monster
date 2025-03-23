import FormatCodeBtn from "./FormatCodeBtn";
import FullScreenBtn from "./FullScreenBtn";
import ResetCodeBtn from "./ResetCodeBtn";

interface CustomControlsBarProps {
  title: string;
  codeMirrorInstance: any;
  isFullScreen: boolean;
  setIsFullScreen: React.Dispatch<React.SetStateAction<boolean>>;
  wrapperRef: any;
}

const CustomControlsBar = ({
  codeMirrorInstance,
  title,
  isFullScreen,
  setIsFullScreen,
  wrapperRef
}: CustomControlsBarProps) => {
  return (
    <div className="flex min-w-full items-center justify-between overflow-hidden rounded-t-xl px-2 py-2">
      <span className="mx-2 text-xs font-bold uppercase text-neutral-400">
        {title}
      </span>
      <div className="flex gap-2 items-center">
        <ResetCodeBtn />
        <FullScreenBtn
          isFullScreen={isFullScreen}
          setIsFullScreen={setIsFullScreen}
          wrapperRef={wrapperRef}
        />
        <FormatCodeBtn codeMirrorInstance={codeMirrorInstance} />
      </div>
    </div>
  );
};

export default CustomControlsBar;
