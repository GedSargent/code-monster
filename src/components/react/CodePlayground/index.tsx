import {
  SandpackConsole,
  SandpackLayout,
  SandpackPreview,
  SandpackProvider,
  SandpackThemeProvider,
  type SandpackFiles,
  type SandpackSetup
} from "@codesandbox/sandpack-react";
import { useRef, useState } from "react";
import { RemoveScroll } from "react-remove-scroll";
import CustomControlsBar from "./CustomControlsBar";
import LocalStorageCodeEditor from "./LocalStorageCodeEditor";
import customThemeDark from "./customThemeDark";

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
  files,
  showConsole = false,
  showTabs = true,
}: CodeSandboxProps) => {
  const codeMirrorInstance = useRef<any>(undefined);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const panelHeight = isFullScreen ? "calc((100vh - 6rem) / 2)" : "20rem";

  return (
      <RemoveScroll enabled={isFullScreen}>
        <div
          className={`${isFullScreen ? "fixed inset-0 z-50 px-[18.75rem] pt-16" : "relative py-8"}`}
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
            <SandpackThemeProvider theme={customThemeDark}>
              <SandpackLayout>
                <CustomControlsBar
                  codeMirrorInstance={codeMirrorInstance}
                  title={title}
                  isFullScreen={isFullScreen}
                  setIsFullScreen={setIsFullScreen}
                />
                <div className={`block w-full`}>
                  <div className={`w-full`}>
                    <LocalStorageCodeEditor
                      id={localStorageId}
                      codeMirrorInstance={codeMirrorInstance}
                      showTabs={showTabs}
                      height={panelHeight}
                    />
                  </div>
                <div className={`w-full`}>
                  <SandpackPreview
                    showOpenInCodeSandbox={false}
                    style={{height: panelHeight}}
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
      </RemoveScroll>
  );
};

export default CodePlayground;
