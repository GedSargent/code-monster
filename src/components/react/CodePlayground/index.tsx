import {
  Sandpack,
  SandpackConsole,
  SandpackLayout,
  SandpackPreview,
  SandpackProvider,
  SandpackThemeProvider,
  type SandpackFiles,
  type SandpackSetup,
} from "@codesandbox/sandpack-react";
import { monokaiPro } from "@codesandbox/sandpack-themes";
import type { SandpackTheme } from "@codesandbox/sandpack-themes/dist/types/types";
import { useRef, useState } from "react";
import useWindowSize from "../hooks/useWindowSize";
import CustomControlsBar from "./CustomControlsBar";
import LocalStorageCodeEditor from "./LocalStorageCodeEditor";
import ResizeableWrapper from "./ResizeableWrapper";

interface CodeSandboxProps {
  localStorageId: string;
  customSetup?: SandpackSetup;
  template?:
    | "react-ts"
    | "react"
    | "vanilla"
    | "vanilla-ts"
    | "vue"
    | "vue-ts"
    | "angular"
    | "svelte"
    | "solid"
    | "test-ts";
  theme?: SandpackTheme;
  title?: string;
  files: SandpackFiles;
  activeFile?: string;
  showTabs?: boolean;
  showConsole?: boolean;
}

const CodePlayground = ({
  customSetup,
  localStorageId,
  title = "Code Playground",
  template = "react-ts",
  theme = monokaiPro,
  files,
  showConsole = false,
  showTabs = true,
}: CodeSandboxProps) => {
  const { width } = useWindowSize();
  const codeMirrorInstance = useRef<any>(undefined);

  const [isFullScreen, setIsFullScreen] = useState(false);
  const sandpackHeight = isFullScreen ? "calc(100vh - 26.5px)" : "36rem";

  return (
    <div
      className="relative"
      id="code-playground-wrapper"
    >
      <SandpackProvider
        options={{
          externalResources: ["https://cdn.tailwindcss.com"],
        }}
        template={template}
        files={files}
        customSetup={customSetup}
      >
        <SandpackThemeProvider theme={theme}>
          <SandpackLayout>
            <CustomControlsBar
              codeMirrorInstance={codeMirrorInstance}
              title={title}
              isFullScreen={isFullScreen}
              setIsFullScreen={setIsFullScreen}
            />
            {/* TODO: Option for adding <SandpackFileExplorer /> - probably needs complete new layout */}
            <div className="w-full z-30">
              <div>
                <LocalStorageCodeEditor
                  id={localStorageId}
                  codeMirrorInstance={codeMirrorInstance}
                  showTabs={showTabs}
                />
              </div>
            <div className="">
              <SandpackPreview
                showOpenInCodeSandbox={false}
              />
            </div>
            </div>
            {showConsole && (
              <div className="w-full">
                <SandpackConsole className="w-full border-b-0" />
              </div>
            )}
          </SandpackLayout>
        </SandpackThemeProvider>
      </SandpackProvider>
    </div>
  );
};

export default CodePlayground;
