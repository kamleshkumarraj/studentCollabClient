import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Editor from "@monaco-editor/react";
import {
  File,
  Folder,
  FilePlus,
  Save,
  Play,
  RotateCcw,
  Download,
  Settings,
  Terminal,
  Clock,
  ChevronRight,
  ChevronDown,
  X,
  FolderPlus,
} from "lucide-react";

interface FileNode {
  id: string;
  name: string;
  type: "file" | "folder";
  content?: string;
  language?: string;
  children?: FileNode[];
  isOpen?: boolean;
  lastModified: Date;
  size?: number;
  path: string;
}

const initialFileStructure: FileNode[] = [
  {
    id: "1",
    name: "c",
    type: "folder",
    isOpen: true,
    lastModified: new Date(),
    path: "c",
    children: [
      {
        id: "2",
        name: "programs",
        type: "folder",
        isOpen: true,
        lastModified: new Date(),
        path: "c/programs",
        children: [
          {
            id: "3",
            name: "hello.c",
            type: "file",
            language: "c",
            path: "c/programs/hello.c",
            content: `#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    return 0;
}`,
            lastModified: new Date(),
            size: 87,
          },
          {
            id: "4",
            name: "calculator.c",
            type: "file",
            language: "c",
            path: "c/programs/calculator.c",
            content: `#include <stdio.h>

int main() {
    int a, b, choice;
    printf("Enter two numbers: ");
    scanf("%d %d", &a, &b);

    printf("1. Add\\n2. Subtract\\n3. Multiply\\n4. Divide\\n");
    printf("Enter choice: ");
    scanf("%d", &choice);

    switch(choice) {
        case 1: printf("Result: %d\\n", a + b); break;
        case 2: printf("Result: %d\\n", a - b); break;
        case 3: printf("Result: %d\\n", a * b); break;
        case 4:
            if(b != 0) printf("Result: %.2f\\n", (float)a / b);
            else printf("Error: Division by zero\\n");
            break;
        default: printf("Invalid choice\\n");
    }
    return 0;
}`,
            lastModified: new Date(),
            size: 612,
          },
        ],
      },
    ],
  },
  {
    id: "5",
    name: "cpp",
    type: "folder",
    isOpen: false,
    lastModified: new Date(),
    path: "cpp",
    children: [
      {
        id: "6",
        name: "basics",
        type: "folder",
        isOpen: false,
        lastModified: new Date(),
        path: "cpp/basics",
        children: [
          {
            id: "7",
            name: "hello.cpp",
            type: "file",
            language: "cpp",
            path: "cpp/basics/hello.cpp",
            content: `#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!" << endl;
    return 0;
}`,
            lastModified: new Date(),
            size: 112,
          },
        ],
      },
    ],
  },
  {
    id: "8",
    name: "java",
    type: "folder",
    isOpen: false,
    lastModified: new Date(),
    path: "java",
    children: [
      {
        id: "9",
        name: "programs",
        type: "folder",
        isOpen: false,
        lastModified: new Date(),
        path: "java/programs",
        children: [
          {
            id: "10",
            name: "HelloWorld.java",
            type: "file",
            language: "java",
            path: "java/programs/HelloWorld.java",
            content: `public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,
            lastModified: new Date(),
            size: 123,
          },
        ],
      },
    ],
  },
  {
    id: "11",
    name: "python",
    type: "folder",
    isOpen: false,
    lastModified: new Date(),
    path: "python",
    children: [
      {
        id: "12",
        name: "scripts",
        type: "folder",
        isOpen: false,
        lastModified: new Date(),
        path: "python/scripts",
        children: [
          {
            id: "13",
            name: "hello.py",
            type: "file",
            language: "python",
            path: "python/scripts/hello.py",
            content: `# Hello World in Python
print("Hello, World!")

# Basic function example
def greet(name):
    return f"Hello, {name}!"

if __name__ == "__main__":
    name = input("Enter your name: ")
    print(greet(name))`,
            lastModified: new Date(),
            size: 234,
          },
        ],
      },
    ],
  },
  {
    id: "14",
    name: "javascript",
    type: "folder",
    isOpen: false,
    lastModified: new Date(),
    path: "javascript",
    children: [
      {
        id: "15",
        name: "programs",
        type: "folder",
        isOpen: false,
        lastModified: new Date(),
        path: "javascript/programs",
        children: [
          {
            id: "16",
            name: "hello.js",
            type: "file",
            language: "javascript",
            path: "javascript/programs/hello.js",
            content: `// Hello World in JavaScript
console.log("Hello, World!");

// Function example
function greet(name) {
    return \`Hello, \${name}!\`;
}

// Get user input (Node.js)
const name = "Student";
console.log(greet(name));`,
            lastModified: new Date(),
            size: 234,
          },
        ],
      },
    ],
  },
];

const languageColors = {
  javascript: "text-yellow-600",
  java: "text-red-600",
  python: "text-green-600",
  c: "text-blue-600",
  cpp: "text-purple-600",
};

const monacoLanguageMap = {
  javascript: "javascript",
  java: "java",
  python: "python",
  c: "c",
  cpp: "cpp",
};

const languageCommands = {
  javascript: "node",
  java: "javac && java",
  python: "python3",
  c: "gcc -o program && ./program",
  cpp: "g++ -o program && ./program",
};

export default function CodeEditor() {
  const [fileStructure, setFileStructure] =
    useState<FileNode[]>(initialFileStructure);
  const [selectedFile, setSelectedFile] = useState<FileNode | null>(
    initialFileStructure[0]?.children?.[0]?.children?.[0] || null,
  );
  const [openTabs, setOpenTabs] = useState<FileNode[]>(
    [initialFileStructure[0]?.children?.[0]?.children?.[0] || null].filter(
      Boolean,
    ),
  );
  const [isTerminalOpen, setIsTerminalOpen] = useState(true);
  const [isUnsaved, setIsUnsaved] = useState(false);
  const [terminalOutput, setTerminalOutput] = useState<string[]>([
    "Terminal ready. Select a file and click 'Run' to execute.",
  ]);
  const [showNewFileDialog, setShowNewFileDialog] = useState(false);
  const [newFileName, setNewFileName] = useState("");
  const [selectedFolder, setSelectedFolder] = useState<FileNode | null>(null);
  const [theme, setTheme] = useState<"vs-dark" | "light">("vs-dark");

  const editorRef = useRef<any>(null);

  const supportedLanguages = ["c", "cpp", "java", "python", "javascript"];

  const toggleFolder = (folderId: string) => {
    const updateFolder = (nodes: FileNode[]): FileNode[] => {
      return nodes.map((node) => {
        if (node.id === folderId && node.type === "folder") {
          return { ...node, isOpen: !node.isOpen };
        }
        if (node.children) {
          return { ...node, children: updateFolder(node.children) };
        }
        return node;
      });
    };
    setFileStructure(updateFolder(fileStructure));
  };

  const selectFile = (file: FileNode) => {
    if (file.type === "file") {
      setSelectedFile(file);
      if (!openTabs.find((tab) => tab.id === file.id)) {
        setOpenTabs([...openTabs, file]);
      }
    }
  };

  const closeTab = (fileId: string) => {
    const newTabs = openTabs.filter((tab) => tab.id !== fileId);
    setOpenTabs(newTabs);
    if (selectedFile?.id === fileId) {
      setSelectedFile(newTabs[newTabs.length - 1] || null);
    }
  };

  const updateFileContent = (content: string) => {
    if (selectedFile) {
      const updateContent = (nodes: FileNode[]): FileNode[] => {
        return nodes.map((node) => {
          if (node.id === selectedFile.id) {
            return { ...node, content, lastModified: new Date() };
          }
          if (node.children) {
            return { ...node, children: updateContent(node.children) };
          }
          return node;
        });
      };
      setFileStructure(updateContent(fileStructure));
      setSelectedFile({ ...selectedFile, content });
      setIsUnsaved(true);
    }
  };

  const saveFile = () => {
    setIsUnsaved(false);
    setTerminalOutput((prev) => [
      ...prev,
      `✓ File saved: ${selectedFile?.name}`,
    ]);
  };

  const runCode = () => {
    if (selectedFile?.content && selectedFile?.language) {
      const command =
        languageCommands[
          selectedFile.language as keyof typeof languageCommands
        ];
      setTerminalOutput((prev) => [
        ...prev,
        `$ ${command} ${selectedFile.name}`,
        "Running code...",
        "Output will appear here in a real implementation.",
        "---",
      ]);
    }
  };

  const createNewFile = () => {
    if (newFileName && selectedFolder) {
      const extension = getDefaultExtension(selectedFolder.name);
      const fullFileName = newFileName.includes(".")
        ? newFileName
        : newFileName + extension;

      // Create new file logic here
      setTerminalOutput((prev) => [
        ...prev,
        `✓ Created new file: ${selectedFolder.path}/${fullFileName}`,
      ]);
      setNewFileName("");
      setShowNewFileDialog(false);
      setSelectedFolder(null);
    }
  };

  const getDefaultExtension = (language: string) => {
    const extensions = {
      c: ".c",
      cpp: ".cpp",
      java: ".java",
      python: ".py",
      javascript: ".js",
    };
    return extensions[language as keyof typeof extensions] || "";
  };

  const renderFileTree = (nodes: FileNode[], depth: number = 0) => {
    return nodes.map((node) => {
      const indentLevel = depth * 16;

      return (
        <div key={node.id}>
          <div
            className={`flex items-center py-1.5 px-2 hover:bg-gray-100 cursor-pointer group ${
              selectedFile?.id === node.id
                ? "bg-indigo-50 border-r-2 border-indigo-500"
                : ""
            }`}
            style={{ paddingLeft: `${8 + indentLevel}px` }}
            onClick={() => {
              if (node.type === "folder") {
                toggleFolder(node.id);
              } else {
                selectFile(node);
              }
            }}
            onContextMenu={(e) => {
              e.preventDefault();
              if (node.type === "folder") {
                setSelectedFolder(node);
                setShowNewFileDialog(true);
              }
            }}
          >
            {node.type === "folder" && (
              <div className="mr-1">
                {node.isOpen ? (
                  <ChevronDown className="w-4 h-4 text-gray-500" />
                ) : (
                  <ChevronRight className="w-4 h-4 text-gray-500" />
                )}
              </div>
            )}
            {node.type === "folder" ? (
              <Folder
                className={`w-4 h-4 mr-2 ${node.isOpen ? "text-blue-600" : "text-blue-400"}`}
              />
            ) : (
              <File
                className={`w-4 h-4 mr-2 ${
                  languageColors[
                    node.language as keyof typeof languageColors
                  ] || "text-gray-600"
                }`}
              />
            )}
            <span className="text-sm text-gray-800 truncate flex-1">
              {node.name}
            </span>
            {node.type === "file" && (
              <span className="text-xs text-gray-400 ml-2">{node.size}B</span>
            )}
            {node.type === "folder" && (
              <button
                className="opacity-0 group-hover:opacity-100 p-1 hover:bg-gray-200 rounded"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedFolder(node);
                  setShowNewFileDialog(true);
                }}
              >
                <FilePlus className="w-3 h-3 text-gray-500" />
              </button>
            )}
          </div>
          {node.type === "folder" && node.isOpen && node.children && (
            <div>{renderFileTree(node.children, depth + 1)}</div>
          )}
        </div>
      );
    });
  };

  const handleEditorDidMount = (editor: any, monaco: any) => {
    editorRef.current = editor;

    // Configure Monaco Editor options
    monaco.editor.defineTheme("myCustomTheme", {
      base: "vs-dark",
      inherit: true,
      rules: [],
      colors: {
        "editor.background": "#1e1e1e",
      },
    });

    // JavaScript/Node.js completions
    monaco.languages.registerCompletionItemProvider("javascript", {
      provideCompletionItems: (model: any, position: any) => {
        const suggestions = [
          {
            label: "console.log",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "console.log(${1:message});",
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "Prints to the console",
            detail: "console.log(message)",
          },
          {
            label: "function",
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText:
              "function ${1:functionName}(${2:parameters}) {\n\t${3:// function body}\n\treturn ${4:result};\n}",
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "Function declaration",
            detail: "function declaration",
          },
          {
            label: "arrow function",
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText:
              "const ${1:functionName} = (${2:parameters}) => {\n\t${3:// function body}\n\treturn ${4:result};\n};",
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "Arrow function expression",
            detail: "arrow function",
          },
          {
            label: "for",
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText:
              "for (let ${1:i} = 0; ${1:i} < ${2:array}.length; ${1:i}++) {\n\t${3:// loop body}\n}",
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "For loop",
            detail: "for loop",
          },
          {
            label: "if",
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: "if (${1:condition}) {\n\t${2:// if body}\n}",
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "If statement",
            detail: "if statement",
          },
          {
            label: "try-catch",
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText:
              "try {\n\t${1:// try body}\n} catch (${2:error}) {\n\t${3:// catch body}\n}",
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "Try-catch block",
            detail: "try-catch statement",
          },
        ];
        return { suggestions };
      },
    });

    // Java completions
    monaco.languages.registerCompletionItemProvider("java", {
      provideCompletionItems: (model: any, position: any) => {
        const suggestions = [
          {
            label: "main method",
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText:
              "public static void main(String[] args) {\n\t${1:// main method body}\n}",
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "Main method declaration",
            detail: "main method",
          },
          {
            label: "System.out.println",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "System.out.println(${1:message});",
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "Print line to console",
            detail: "System.out.println(message)",
          },
          {
            label: "class",
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText:
              "public class ${1:ClassName} {\n\t${2:// class body}\n}",
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "Class declaration",
            detail: "public class",
          },
          {
            label: "for",
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText:
              "for (int ${1:i} = 0; ${1:i} < ${2:length}; ${1:i}++) {\n\t${3:// loop body}\n}",
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "For loop",
            detail: "for loop",
          },
          {
            label: "if",
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: "if (${1:condition}) {\n\t${2:// if body}\n}",
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "If statement",
            detail: "if statement",
          },
        ];
        return { suggestions };
      },
    });

    // Python completions
    monaco.languages.registerCompletionItemProvider("python", {
      provideCompletionItems: (model: any, position: any) => {
        const suggestions = [
          {
            label: "print",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "print(${1:message})",
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "Print to console",
            detail: "print(message)",
          },
          {
            label: "def",
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText:
              "def ${1:function_name}(${2:parameters}):\n\t${3:# function body}\n\treturn ${4:result}",
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "Function definition",
            detail: "function definition",
          },
          {
            label: "class",
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText:
              "class ${1:ClassName}:\n\tdef __init__(self${2:, parameters}):\n\t\t${3:# constructor body}\n\t\tpass",
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "Class definition",
            detail: "class definition",
          },
          {
            label: "for",
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: "for ${1:item} in ${2:iterable}:\n\t${3:# loop body}",
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "For loop",
            detail: "for loop",
          },
          {
            label: "if",
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: "if ${1:condition}:\n\t${2:# if body}",
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "If statement",
            detail: "if statement",
          },
          {
            label: "try-except",
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText:
              "try:\n\t${1:# try body}\nexcept ${2:Exception} as ${3:e}:\n\t${4:# except body}",
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "Try-except block",
            detail: "try-except statement",
          },
        ];
        return { suggestions };
      },
    });

    // C completions
    monaco.languages.registerCompletionItemProvider("c", {
      provideCompletionItems: (model: any, position: any) => {
        const suggestions = [
          {
            label: "main function",
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText:
              "int main() {\n\t${1:// main function body}\n\treturn 0;\n}",
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "Main function declaration",
            detail: "main function",
          },
          {
            label: "printf",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'printf("${1:format}", ${2:args});',
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "Print formatted output",
            detail: "printf(format, args)",
          },
          {
            label: "scanf",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'scanf("${1:format}", ${2:&variable});',
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "Read formatted input",
            detail: "scanf(format, &variable)",
          },
          {
            label: "for",
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText:
              "for (int ${1:i} = 0; ${1:i} < ${2:n}; ${1:i}++) {\n\t${3:// loop body}\n}",
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "For loop",
            detail: "for loop",
          },
          {
            label: "if",
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: "if (${1:condition}) {\n\t${2:// if body}\n}",
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "If statement",
            detail: "if statement",
          },
          {
            label: "include",
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: "#include <${1:stdio.h}>",
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "Include header file",
            detail: "#include directive",
          },
        ];
        return { suggestions };
      },
    });

    // C++ completions
    monaco.languages.registerCompletionItemProvider("cpp", {
      provideCompletionItems: (model: any, position: any) => {
        const suggestions = [
          {
            label: "main function",
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText:
              "int main() {\n\t${1:// main function body}\n\treturn 0;\n}",
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "Main function declaration",
            detail: "main function",
          },
          {
            label: "cout",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "cout << ${1:message} << endl;",
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "Output to console",
            detail: "cout << message << endl",
          },
          {
            label: "cin",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "cin >> ${1:variable};",
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "Input from console",
            detail: "cin >> variable",
          },
          {
            label: "class",
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText:
              "class ${1:ClassName} {\npublic:\n\t${2:// public members}\nprivate:\n\t${3:// private members}\n};",
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "Class declaration",
            detail: "class declaration",
          },
          {
            label: "for",
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText:
              "for (int ${1:i} = 0; ${1:i} < ${2:n}; ${1:i}++) {\n\t${3:// loop body}\n}",
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "For loop",
            detail: "for loop",
          },
          {
            label: "if",
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: "if (${1:condition}) {\n\t${2:// if body}\n}",
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "If statement",
            detail: "if statement",
          },
          {
            label: "include",
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: "#include <${1:iostream}>",
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "Include header file",
            detail: "#include directive",
          },
        ];
        return { suggestions };
      },
    });

    // Enable additional IntelliSense features
    monaco.languages.typescript.javascriptDefaults.setEagerModelSync(true);
    monaco.languages.typescript.javascriptDefaults.setCompilerOptions({
      target: monaco.languages.typescript.ScriptTarget.ES2020,
      allowNonTsExtensions: true,
      moduleResolution: monaco.languages.typescript.ModuleResolutionKind.NodeJs,
      module: monaco.languages.typescript.ModuleKind.CommonJS,
      noEmit: true,
      esModuleInterop: true,
      jsx: monaco.languages.typescript.JsxEmit.React,
      reactNamespace: "React",
      allowJs: true,
      typeRoots: ["node_modules/@types"],
    });

    // Configure suggestion behavior
    editor.updateOptions({
      suggestOnTriggerCharacters: true,
      acceptSuggestionOnEnter: "on",
      tabCompletion: "on",
      wordBasedSuggestions: "allDocuments",
      quickSuggestions: {
        other: true,
        comments: false,
        strings: true,
      },
    });
  };

  return (
    <div className="container mx-auto px-6 lg:px-8 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Monaco Code Editor
            </h1>
            <p className="text-gray-600">
              Advanced coding environment with syntax highlighting and
              auto-completion
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() =>
                setTheme(theme === "vs-dark" ? "light" : "vs-dark")
              }
            >
              {theme === "vs-dark" ? "Light Theme" : "Dark Theme"}
            </Button>
            <Button variant="outline" size="sm">
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </Button>
          </div>
        </div>

        {/* New File Dialog */}
        {showNewFileDialog && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-6 w-96">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">
                  Create New File in {selectedFolder?.name}
                </h3>
                <button
                  onClick={() => setShowNewFileDialog(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    File Name:
                  </label>
                  <input
                    type="text"
                    value={newFileName}
                    onChange={(e) => setNewFileName(e.target.value)}
                    placeholder={`example${getDefaultExtension(selectedFolder?.name || "")}`}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    autoFocus
                  />
                </div>
                <div className="flex space-x-2">
                  <Button
                    onClick={createNewFile}
                    disabled={!newFileName}
                    className="flex-1"
                  >
                    Create File
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setShowNewFileDialog(false)}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Main Editor Layout */}
        <div
          className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden"
          style={{ height: "700px" }}
        >
          <div className="flex h-full">
            {/* Sidebar - File Explorer */}
            <div className="w-72 bg-gray-50 border-r border-gray-200 flex flex-col">
              {/* Sidebar Header */}
              <div className="p-4 border-b border-gray-200">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-gray-800">File Explorer</h3>
                  <div className="flex space-x-1">
                    <button
                      className="p-1.5 hover:bg-gray-200 rounded"
                      title="New Folder"
                    >
                      <FolderPlus className="w-4 h-4 text-gray-600" />
                    </button>
                    <button
                      className="p-1.5 hover:bg-gray-200 rounded"
                      title="New File"
                      onClick={() => setShowNewFileDialog(true)}
                    >
                      <FilePlus className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                </div>
                <div className="text-xs text-gray-600">
                  Right-click folders to add files
                </div>
              </div>

              {/* File Tree */}
              <div className="flex-1 overflow-y-auto">
                {renderFileTree(fileStructure)}
              </div>

              {/* Supported Languages */}
              <div className="p-3 border-t border-gray-200 bg-gray-100">
                <div className="text-xs text-gray-600 mb-2">
                  Supported Languages:
                </div>
                <div className="flex flex-wrap gap-1">
                  {supportedLanguages.map((lang) => (
                    <span
                      key={lang}
                      className="px-2 py-1 bg-white text-gray-700 text-xs rounded"
                    >
                      {lang.toUpperCase()}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Editor Area */}
            <div className="flex-1 flex flex-col">
              {/* Tab Bar */}
              <div className="bg-gray-100 border-b border-gray-200 flex items-center overflow-x-auto">
                {openTabs.map((tab) => (
                  <div
                    key={tab.id}
                    className={`flex items-center px-4 py-3 border-r border-gray-200 cursor-pointer min-w-0 group ${
                      selectedFile?.id === tab.id
                        ? "bg-white border-b-2 border-indigo-500"
                        : "hover:bg-gray-200"
                    }`}
                    onClick={() => setSelectedFile(tab)}
                  >
                    <File className="w-4 h-4 mr-2 text-gray-600 flex-shrink-0" />
                    <span className="text-sm truncate">{tab.name}</span>
                    {isUnsaved && selectedFile?.id === tab.id && (
                      <div className="w-2 h-2 bg-orange-500 rounded-full ml-2 flex-shrink-0"></div>
                    )}
                    <button
                      className="ml-2 p-1 opacity-0 group-hover:opacity-100 hover:bg-gray-300 rounded flex-shrink-0"
                      onClick={(e) => {
                        e.stopPropagation();
                        closeTab(tab.id);
                      }}
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>

              {/* Toolbar */}
              <div className="bg-white border-b border-gray-200 p-3 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Button
                    size="sm"
                    onClick={saveFile}
                    disabled={!isUnsaved}
                    className="bg-green-600 hover:bg-green-700"
                  >
                    <Save className="w-4 h-4 mr-1" />
                    Save
                  </Button>
                  <Button size="sm" variant="outline" onClick={runCode}>
                    <Play className="w-4 h-4 mr-1" />
                    Run
                  </Button>
                  <Button size="sm" variant="outline">
                    <RotateCcw className="w-4 h-4 mr-1" />
                    Reset
                  </Button>
                  <Button size="sm" variant="outline">
                    <Download className="w-4 h-4 mr-1" />
                    Download
                  </Button>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span>
                    {selectedFile?.language?.toUpperCase() ||
                      "No file selected"}
                  </span>
                </div>
              </div>

              {/* Monaco Editor */}
              <div className="flex-1 relative">
                {selectedFile ? (
                  <div className="h-full flex flex-col">
                    {/* File Path */}
                    <div className="px-4 py-2 bg-gray-50 border-b border-gray-200 text-sm text-gray-600">
                      {selectedFile.path}
                    </div>

                    {/* Editor */}
                    <div className="flex-1">
                      <Editor
                        height="100%"
                        language={
                          monacoLanguageMap[
                            selectedFile.language as keyof typeof monacoLanguageMap
                          ] || "plaintext"
                        }
                        value={selectedFile.content || ""}
                        theme={theme}
                        onChange={(value) => updateFileContent(value || "")}
                        onMount={handleEditorDidMount}
                        options={{
                          fontSize: 14,
                          fontFamily:
                            'Consolas, Monaco, "Courier New", monospace',
                          wordWrap: "on",
                          minimap: { enabled: true },
                          scrollBeyondLastLine: false,
                          automaticLayout: true,
                          tabSize: 2,
                          insertSpaces: true,
                          formatOnPaste: true,
                          formatOnType: true,
                          // Enhanced suggestion settings
                          suggestOnTriggerCharacters: true,
                          acceptSuggestionOnEnter: "on",
                          acceptSuggestionOnCommitCharacter: true,
                          tabCompletion: "on",
                          wordBasedSuggestions: "allDocuments",
                          quickSuggestions: {
                            other: true,
                            comments: false,
                            strings: true,
                          },
                          quickSuggestionsDelay: 100,
                          suggestSelection: "first",
                          // IntelliSense settings
                          parameterHints: {
                            enabled: true,
                            cycle: true,
                          },
                          hover: { enabled: true },
                          // Code assistance
                          bracketPairColorization: { enabled: true },
                          autoIndent: "advanced",
                          autoClosingBrackets: "languageDefined",
                          autoClosingQuotes: "languageDefined",
                          autoSurround: "languageDefined",
                          // Suggestion widget settings
                          suggest: {
                            showKeywords: true,
                            showSnippets: true,
                            showClasses: true,
                            showFunctions: true,
                            showVariables: true,
                            showModules: true,
                            showProperties: true,
                            showValues: true,
                            showMethods: true,
                            showWords: true,
                            showColors: true,
                            showFiles: true,
                            showReferences: true,
                            showFolders: true,
                            showTypeParameters: true,
                            showIssues: true,
                            showUsers: true,
                            filterGraceful: true,
                            snippetsPreventQuickSuggestions: false,
                            localityBonus: true,
                          },
                        }}
                      />
                    </div>
                  </div>
                ) : (
                  <div className="h-full flex items-center justify-center text-gray-500">
                    <div className="text-center">
                      <File className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                      <p className="text-lg font-medium">No file selected</p>
                      <p className="text-sm">
                        Select a file from the explorer to start coding
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Terminal */}
              {isTerminalOpen && (
                <div className="h-48 bg-gray-900 text-green-400 font-mono text-sm border-t border-gray-200">
                  <div className="flex items-center justify-between bg-gray-800 px-4 py-2">
                    <span className="text-white text-sm font-medium">
                      Terminal Output
                    </span>
                    <button
                      onClick={() => setIsTerminalOpen(false)}
                      className="text-gray-400 hover:text-white"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="p-4 h-full overflow-y-auto">
                    {terminalOutput.map((line, index) => (
                      <div key={index} className="text-white mb-1">
                        {line}
                      </div>
                    ))}
                    <div className="flex items-center mt-2">
                      <span className="text-green-400">$ </span>
                      <div className="w-2 h-4 bg-green-400 ml-1 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              onClick={() => setIsTerminalOpen(!isTerminalOpen)}
            >
              <Terminal className="w-4 h-4 mr-2" />
              {isTerminalOpen ? "Hide Terminal" : "Show Terminal"}
            </Button>
            <span className="text-sm text-gray-600">
              Monaco Editor • Auto-completion enabled
            </span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <span>Theme: {theme === "vs-dark" ? "Dark" : "Light"}</span>
            <span>•</span>
            <span>File: {selectedFile?.path || "None"}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
