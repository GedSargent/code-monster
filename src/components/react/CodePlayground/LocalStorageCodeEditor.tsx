import { autocompletion } from "@codemirror/autocomplete";
import { SandpackCodeEditor } from "@codesandbox/sandpack-react";
import useLocalStorageCode from "../hooks/useLocalStorageCode";

interface LocalStorageCodeEditorProps {
  id: string;
  codeMirrorInstance: any;
  showTabs: boolean;
  minHeight: string;
}

const LocalStorageCodeEditor = ({
  id,
  codeMirrorInstance,
  showTabs,
  minHeight
}: LocalStorageCodeEditorProps) => {
  if (id) {
    useLocalStorageCode(id);
  }

  return (
    <SandpackCodeEditor
      ref={codeMirrorInstance}
      style={{
        width: "100%",
        minHeight
      }}
      extensions={[autocompletion()]}
      showTabs={showTabs}
      showLineNumbers
      showInlineErrors
      wrapContent
    />
  );
};

export default LocalStorageCodeEditor;
