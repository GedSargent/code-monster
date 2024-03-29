import { useActiveCode, useSandpack } from "@codesandbox/sandpack-react";
import prettier from "prettier";
import parserBabel from "prettier/parser-babel";
import { useEffect, useState } from "react";
import { Code } from "react-feather";
import Boop from "../Boop";

interface FormatCodeBtnProps {
  codeMirrorInstance: any;
}

const FormatCodeBtn = ({ codeMirrorInstance }: FormatCodeBtnProps) => {
  const [prettierCode, setPrettierCode] = useState("");
  const { sandpack } = useSandpack();
  const activeCode = useActiveCode();

  const runPrettier = () => {
    if (activeCode.code) {
      try {
        const formatted = prettier.format(activeCode.code, {
          parser: "babel",
          plugins: [parserBabel],
        });

        setPrettierCode(formatted);
      } catch {
        alert("Failed to format code - please refresh the page and try again.")
      }
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Check for CMD + S on macOS or CTRL + S on Windows/Linux
      if ((event.metaKey || event.ctrlKey) && event.key === 's') {
        event.preventDefault(); // Prevent the default save action
        runPrettier();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [runPrettier]);

  useEffect(() => {
    if (prettierCode) {
      const cmInstance = codeMirrorInstance.current.getCodemirror();

      if (cmInstance) {
        const trans = cmInstance.state.update({
          selection: cmInstance.state.selection,
          changes: {
            from: 0,
            to: cmInstance.state.doc.length,
            insert: prettierCode,
          },
        });

        cmInstance.update([trans]);
      }

      sandpack.updateFile(sandpack.activeFile, prettierCode);
      setPrettierCode("");
    }
  }, [prettierCode, codeMirrorInstance, sandpack]);

  return (
    <button
      title="Tidy code"
      type="button"
      className="mx-1 bg-transparent"
      onClick={runPrettier}
    >
      <Boop scale={1.1}>
        <Code
          className={`h-auto w-4 stroke-neutral-400 shadow-sm hover:stroke-neutral-200 group-hover:stroke-neutral-200`}
        />
      </Boop>
    </button>
  );
};

export default FormatCodeBtn;
