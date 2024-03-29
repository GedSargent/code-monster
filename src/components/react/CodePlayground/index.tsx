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
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
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
  const wrapperRef = useRef<any>(null);

  const [isFullScreen, setIsFullScreen] = useState(false);

  const panelHeight = isFullScreen ? "calc(100vh - 4rem)" : "20rem";

  return (
      <RemoveScroll enabled={isFullScreen}>
        <div
          className={`${isFullScreen ? "fixed inset-0 p-8" : "relative py-8"}`}
          id="code-playground-wrapper"
          ref={wrapperRef}
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
              <SandpackLayout className={isFullScreen ? `flex` : `block`}>
                <CustomControlsBar
                  codeMirrorInstance={codeMirrorInstance}
                  title={title}
                  isFullScreen={isFullScreen}
                  setIsFullScreen={setIsFullScreen}
                  wrapperRef={wrapperRef}
                />
                <PanelGroup direction="horizontal" className={isFullScreen ? `flex` : `block`}>
                  <Panel className={`w-full`}>
                    <LocalStorageCodeEditor
                      id={localStorageId}
                      codeMirrorInstance={codeMirrorInstance}
                      showTabs={showTabs}
                      height={panelHeight}
                    />
                  </Panel>
                <PanelResizeHandle className="w-2 transition duration-500 hover:bg-neutral-200/50" />
                <Panel className={`w-full`}>
                  <SandpackPreview
                    showOpenInCodeSandbox={false}
                    style={{height: panelHeight}}
                  />
                </Panel>
                </PanelGroup>
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
