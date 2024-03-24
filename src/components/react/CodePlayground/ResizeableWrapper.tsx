import { Rnd } from "react-rnd";
import ResizeHandle from "./ResizeHandle";

interface ResizeableWrapperProps {
  children: React.ReactNode;
}

const ResizeableWrapper = ({ children }: ResizeableWrapperProps) => {
  return (
    <Rnd
      enableResizing={{
        top: false,
        right: true,
        bottom: false,
        left: false,
        topRight: false,
        bottomRight: false,
        bottomLeft: false,
        topLeft: false,
      }}
      disableDragging
      style={{ position: "relative" }}
      default={{ x: 0, y: 0, width: "50%", height: "auto" }}
      resizeHandleComponent={{
        right: <ResizeHandle />,
      }}
    >
      {children}
    </Rnd>
  );
};

export default ResizeableWrapper;
