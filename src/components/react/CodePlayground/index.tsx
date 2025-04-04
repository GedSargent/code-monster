import {
  SandpackConsole,
  SandpackLayout,
  SandpackPreview,
  SandpackProvider,
  SandpackThemeProvider,
  type SandpackFiles,
  type SandpackInternalOptions,
  type SandpackProviderProps,
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
  customOptions?: Pick<SandpackProviderProps, 'options'>
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
  showPreview?: boolean;
}

const CodePlayground = ({
  customSetup,
  customOptions,
  localStorageId,
  title = "Code Playground",
  template = "react-ts",
  files,
  showConsole = false,
  showTabs = true,
  showPreview = true,
}: CodeSandboxProps) => {
  const codeMirrorInstance = useRef<any>(undefined);
  const wrapperRef = useRef<any>(null);
  const combinedOptions: SandpackInternalOptions = {
    autoReload: false,
    externalResources: ["https://cdn.tailwindcss.com"],
    ...customOptions
  }

  const [isFullScreen, setIsFullScreen] = useState(false);

  const panelHeight = isFullScreen ? "calc(100vh - 4rem)" : "20rem";

  return (
      <RemoveScroll enabled={isFullScreen}>
        <div
          className={`${isFullScreen ? "fixed inset-0 p-8" : "relative pt-8"}`}
          id="code-playground-wrapper"
          ref={wrapperRef}
        >
          <SandpackProvider
            options={combinedOptions}
            template={template}
            files={files}
            customSetup={customSetup}
          >
            <SandpackThemeProvider theme={customThemeDark}>
              <SandpackLayout className={isFullScreen ? `flex` : `block shadow-lg shadow-black/20`}>
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
                  {showPreview && (<>
                    <PanelResizeHandle className="w-2 border-x border-neutral-700 transition duration-500 hover:bg-neutral-700 hover:border-neutral-600" />
                    <Panel className={`w-full`}>
                      <SandpackPreview
                        showOpenInCodeSandbox={false}
                        style={{height: panelHeight}}
                      />
                    </Panel>
                  </>)}
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
