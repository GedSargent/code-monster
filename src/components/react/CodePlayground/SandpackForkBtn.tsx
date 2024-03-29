import { UnstyledOpenInCodeSandboxButton } from "@codesandbox/sandpack-react";
import { Codesandbox } from "react-feather";
import Boop from "../Boop";

const SandpackForkBtn = () => {
  return (
    <UnstyledOpenInCodeSandboxButton className="ml-1 mr-2">
      <Boop rotation={8} scale={1.1}>
        <Codesandbox
          className={`h-auto w-4 stroke-neutral-400 hover:stroke-neutral-200`}
        />
      </Boop>
    </UnstyledOpenInCodeSandboxButton>
  );
};

export default SandpackForkBtn;
