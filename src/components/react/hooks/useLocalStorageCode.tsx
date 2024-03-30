import { useSandpack } from "@codesandbox/sandpack-react";
import { useEffect } from "react";

interface SandpackFile {
  code: string;
  active?: boolean;
  [key: string]: any; // If Sandpack file objects have more properties, this line allows for them.
}

interface SandpackFiles {
  [filePath: string]: SandpackFile;
}

const useLocalStorageCode = (localStorageLabel: string) => {
  const { sandpack } = useSandpack();
  const standardBoilerplateFiles = [
    "/index.tsx",
    "/package.json",
    "/public/index.html",
    "/styles.css",
    "/tsconfig.json",
  ];

  // Function to filter out boilerplate files and return a SandpackFiles object
  const getFilesToEdit = (): SandpackFiles => {
    return Object.entries(sandpack.files)
      .filter(([key]) => !standardBoilerplateFiles.includes(key))
      .reduce((acc: SandpackFiles, [key, value]) => {
        acc[key] = value;
        return acc;
      }, {} as SandpackFiles); // Type assertion for the accumulator's initial value
  };

  // Load from localStorage on component mount.
  useEffect(() => {
    const storedFiles = localStorage.getItem(localStorageLabel);

    if (storedFiles) {
      try {
        const parsedFiles: SandpackFiles = JSON.parse(storedFiles);

        Object.keys(parsedFiles).forEach((path) => {
          if (parsedFiles[path]?.code) {
            sandpack.updateFile(path, parsedFiles[path].code);
          }
        });
      } catch (error) {
        console.error("Failed to load files from localStorage", error);
      }
    }
  }, []); // Run once on mount (initial page load) to prevent infinite loops

  // Save to localStorage when user leaves or refreshes the page
  useEffect(() => {
    const saveFiles = () => {
      const filesToSave = getFilesToEdit();
      localStorage.setItem(localStorageLabel, JSON.stringify(filesToSave));
    };

    window.addEventListener("beforeunload", saveFiles);
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "hidden") {
        saveFiles();
      }
    });

    return () => {
      window.removeEventListener("beforeunload", saveFiles);
      document.removeEventListener("visibilitychange", saveFiles);
    };
  }, [sandpack.files, localStorageLabel]); // Re-run if sandpack.files changes
};

export default useLocalStorageCode;
