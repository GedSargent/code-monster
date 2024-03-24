import { autocompletion, completionKeymap } from "@codemirror/autocomplete";
import { SandpackCodeEditor } from "@codesandbox/sandpack-react";
import useLocalStorageCode from "../hooks/useLocalStorageCode";

interface LocalStorageCodeEditorProps {
  id: string;
  codeMirrorInstance: any;
  showTabs: boolean;
}

const LocalStorageCodeEditor = ({
  id,
  codeMirrorInstance,
  showTabs,
}: LocalStorageCodeEditorProps) => {
  if (id) {
    useLocalStorageCode(id);
  }

  return (
    <SandpackCodeEditor
      ref={codeMirrorInstance}
      style={{
        width: "100%",
      }}
      extensions={[autocompletion()]}
      extensionsKeymap={[completionKeymap]}
      showTabs={showTabs}
      showLineNumbers
      showInlineErrors
      wrapContent
    />
  );
};

export default LocalStorageCodeEditor;
