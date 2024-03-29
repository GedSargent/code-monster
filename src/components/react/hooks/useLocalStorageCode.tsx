import { useActiveCode } from "@codesandbox/sandpack-react";
import { useEffect } from "react";
import usePrevious from "./usePrevious";

export default function useLocalStorageCode(localStorageLabel: string) {
  const { code, updateCode } = useActiveCode();
  const previousCode = usePrevious(code);
  const localStorageId = localStorageLabel;

  useEffect(() => {
    const storedCode = localStorage.getItem(localStorageId);

    if (storedCode) {
      updateCode(storedCode);
    }
  }, []);

  useEffect(() => {
    if (previousCode !== code) {
      setTimeout(() => {
        localStorage.setItem(localStorageId, code);
      }, 1500);
    }
  }, [code, localStorageId, previousCode]);
}
