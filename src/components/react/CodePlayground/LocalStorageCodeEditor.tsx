import { autocompletion } from "@codemirror/autocomplete";
import { SandpackCodeEditor } from "@codesandbox/sandpack-react";
import useLocalStorageCode from "../hooks/useLocalStorageCode";

interface LocalStorageCodeEditorProps {
  id: string;
  codeMirrorInstance: any;
  showTabs: boolean;
  height: string;
}

const LocalStorageCodeEditor = ({
  id,
  codeMirrorInstance,
  showTabs,
  height
}: LocalStorageCodeEditorProps) => {
  if (id) {
    useLocalStorageCode(id);
  }

  return (
    <SandpackCodeEditor
      ref={codeMirrorInstance}
      className="overflow-auto"
      style={{
        height
      }}
      extensions={[autocompletion()]}
      showTabs={showTabs}
      showLineNumbers={true}
      showInlineErrors={true}
      wrapContent={true}
    />
  );
};

export default LocalStorageCodeEditor;
