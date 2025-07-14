import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Clock,
  File,
  Folder,
  Search,
  Download,
  Eye,
  RotateCcw,
  Trash2,
  Star,
  Code2,
  Activity,
  ChevronRight,
  ChevronDown,
  FolderOpen,
} from "lucide-react";

interface FileRecord {
  id: string;
  name: string;
  type: "file" | "folder";
  language?: string;
  lastModified: Date;
  fileSize?: number;
  version?: number;
  changes?: number;
  status?: "saved" | "draft" | "synced";
  isStarred?: boolean;
  totalLines?: number;
  timeSpent?: number; // in minutes
  compilations?: number;
  errors?: number;
  children?: FileRecord[];
  isOpen?: boolean;
  path: string;
}

const mockFileStructure: FileRecord[] = [
  {
    id: "1",
    name: "c",
    type: "folder",
    lastModified: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7),
    isOpen: false,
    path: "c",
    children: [
      {
        id: "2",
        name: "programs",
        type: "folder",
        lastModified: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3),
        isOpen: false,
        path: "c/programs",
        children: [
          {
            id: "3",
            name: "hello.c",
            type: "file",
            language: "c",
            lastModified: new Date(Date.now() - 1000 * 60 * 30),
            fileSize: 87,
            version: 3,
            changes: 5,
            status: "saved",
            isStarred: true,
            totalLines: 7,
            timeSpent: 25,
            compilations: 8,
            errors: 2,
            path: "c/programs/hello.c",
          },
          {
            id: "4",
            name: "calculator.c",
            type: "file",
            language: "c",
            lastModified: new Date(Date.now() - 1000 * 60 * 60 * 2),
            fileSize: 612,
            version: 7,
            changes: 15,
            status: "synced",
            isStarred: false,
            totalLines: 35,
            timeSpent: 85,
            compilations: 12,
            errors: 4,
            path: "c/programs/calculator.c",
          },
        ],
      },
      {
        id: "5",
        name: "algorithms",
        type: "folder",
        lastModified: new Date(Date.now() - 1000 * 60 * 60 * 24 * 4),
        isOpen: false,
        path: "c/algorithms",
        children: [
          {
            id: "6",
            name: "array_sort.c",
            type: "file",
            language: "c",
            lastModified: new Date(Date.now() - 1000 * 60 * 60 * 24 * 4),
            fileSize: 445,
            version: 8,
            changes: 20,
            status: "saved",
            isStarred: true,
            totalLines: 28,
            timeSpent: 120,
            compilations: 15,
            errors: 6,
            path: "c/algorithms/array_sort.c",
          },
        ],
      },
    ],
  },
  {
    id: "7",
    name: "cpp",
    type: "folder",
    lastModified: new Date(Date.now() - 1000 * 60 * 60 * 5),
    isOpen: false,
    path: "cpp",
    children: [
      {
        id: "8",
        name: "basics",
        type: "folder",
        lastModified: new Date(Date.now() - 1000 * 60 * 60 * 5),
        isOpen: false,
        path: "cpp/basics",
        children: [
          {
            id: "9",
            name: "hello.cpp",
            type: "file",
            language: "cpp",
            lastModified: new Date(Date.now() - 1000 * 60 * 60 * 5),
            fileSize: 112,
            version: 2,
            changes: 3,
            status: "saved",
            isStarred: true,
            totalLines: 8,
            timeSpent: 15,
            compilations: 5,
            errors: 1,
            path: "cpp/basics/hello.cpp",
          },
        ],
      },
    ],
  },
  {
    id: "10",
    name: "java",
    type: "folder",
    lastModified: new Date(Date.now() - 1000 * 60 * 60 * 24),
    isOpen: false,
    path: "java",
    children: [
      {
        id: "11",
        name: "programs",
        type: "folder",
        lastModified: new Date(Date.now() - 1000 * 60 * 60 * 24),
        isOpen: false,
        path: "java/programs",
        children: [
          {
            id: "12",
            name: "HelloWorld.java",
            type: "file",
            language: "java",
            lastModified: new Date(Date.now() - 1000 * 60 * 60 * 24),
            fileSize: 123,
            version: 4,
            changes: 8,
            status: "draft",
            isStarred: false,
            totalLines: 6,
            timeSpent: 35,
            compilations: 6,
            errors: 3,
            path: "java/programs/HelloWorld.java",
          },
        ],
      },
      {
        id: "13",
        name: "oop",
        type: "folder",
        lastModified: new Date(Date.now() - 1000 * 60 * 60 * 24 * 5),
        isOpen: false,
        path: "java/oop",
        children: [
          {
            id: "14",
            name: "Student.java",
            type: "file",
            language: "java",
            lastModified: new Date(Date.now() - 1000 * 60 * 60 * 24 * 5),
            fileSize: 567,
            version: 6,
            changes: 18,
            status: "saved",
            isStarred: false,
            totalLines: 42,
            timeSpent: 95,
            compilations: 11,
            errors: 5,
            path: "java/oop/Student.java",
          },
        ],
      },
    ],
  },
  {
    id: "15",
    name: "python",
    type: "folder",
    lastModified: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2),
    isOpen: false,
    path: "python",
    children: [
      {
        id: "16",
        name: "scripts",
        type: "folder",
        lastModified: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2),
        isOpen: false,
        path: "python/scripts",
        children: [
          {
            id: "17",
            name: "hello.py",
            type: "file",
            language: "python",
            lastModified: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2),
            fileSize: 234,
            version: 6,
            changes: 12,
            status: "saved",
            isStarred: true,
            totalLines: 15,
            timeSpent: 45,
            compilations: 10,
            errors: 1,
            path: "python/scripts/hello.py",
          },
        ],
      },
    ],
  },
  {
    id: "18",
    name: "javascript",
    type: "folder",
    lastModified: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3),
    isOpen: false,
    path: "javascript",
    children: [
      {
        id: "19",
        name: "programs",
        type: "folder",
        lastModified: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3),
        isOpen: false,
        path: "javascript/programs",
        children: [
          {
            id: "20",
            name: "hello.js",
            type: "file",
            language: "javascript",
            lastModified: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3),
            fileSize: 234,
            version: 5,
            changes: 10,
            status: "synced",
            isStarred: false,
            totalLines: 12,
            timeSpent: 30,
            compilations: 8,
            errors: 2,
            path: "javascript/programs/hello.js",
          },
        ],
      },
    ],
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "saved":
      return "bg-green-100 text-green-800";
    case "draft":
      return "bg-yellow-100 text-yellow-800";
    case "synced":
      return "bg-blue-100 text-blue-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const getLanguageColor = (language: string) => {
  switch (language) {
    case "javascript":
      return "text-yellow-600";
    case "java":
      return "text-red-600";
    case "python":
      return "text-green-600";
    case "c":
      return "text-blue-600";
    case "cpp":
      return "text-purple-600";
    default:
      return "text-gray-600";
  }
};

const formatTimeAgo = (date: Date) => {
  const now = new Date();
  const diffInMs = now.getTime() - date.getTime();
  const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
  const diffInHours = Math.floor(diffInMinutes / 60);
  const diffInDays = Math.floor(diffInHours / 24);

  if (diffInMinutes < 60) {
    return `${diffInMinutes} min ago`;
  } else if (diffInHours < 24) {
    return `${diffInHours} hour${diffInHours > 1 ? "s" : ""} ago`;
  } else {
    return `${diffInDays} day${diffInDays > 1 ? "s" : ""} ago`;
  }
};

export default function FileHistory() {
  const [fileStructure, setFileStructure] = useState(mockFileStructure);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [viewMode, setViewMode] = useState<"tree" | "flat">("tree");

  const languages = ["all", "c", "cpp", "java", "python", "javascript"];
  const statuses = ["all", "saved", "draft", "synced"];

  const toggleFolder = (folderId: string) => {
    const updateFolder = (nodes: FileRecord[]): FileRecord[] => {
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

  const toggleStar = (fileId: string) => {
    const updateStar = (nodes: FileRecord[]): FileRecord[] => {
      return nodes.map((node) => {
        if (node.id === fileId && node.type === "file") {
          return { ...node, isStarred: !node.isStarred };
        }
        if (node.children) {
          return { ...node, children: updateStar(node.children) };
        }
        return node;
      });
    };
    setFileStructure(updateStar(fileStructure));
  };

  const getAllFiles = (nodes: FileRecord[]): FileRecord[] => {
    let files: FileRecord[] = [];
    nodes.forEach((node) => {
      if (node.type === "file") {
        files.push(node);
      }
      if (node.children) {
        files = files.concat(getAllFiles(node.children));
      }
    });
    return files;
  };

  const filteredFiles = getAllFiles(fileStructure).filter((file) => {
    const matchesSearch =
      file.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      file.path.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLanguage =
      selectedLanguage === "all" || file.language === selectedLanguage;
    const matchesStatus =
      selectedStatus === "all" || file.status === selectedStatus;

    return matchesSearch && matchesLanguage && matchesStatus;
  });

  const renderTreeView = (nodes: FileRecord[], depth: number = 0) => {
    return nodes.map((node) => {
      const indentLevel = depth * 20;

      return (
        <div key={node.id}>
          <div
            className={`flex items-center py-2 px-4 hover:bg-gray-50 cursor-pointer border-l-4 ${
              node.type === "folder" ? "border-blue-200" : "border-transparent"
            }`}
            style={{ paddingLeft: `${16 + indentLevel}px` }}
            onClick={() => {
              if (node.type === "folder") {
                toggleFolder(node.id);
              }
            }}
          >
            {/* Expand/Collapse Icon */}
            {node.type === "folder" && (
              <div className="mr-2">
                {node.isOpen ? (
                  <ChevronDown className="w-4 h-4 text-gray-500" />
                ) : (
                  <ChevronRight className="w-4 h-4 text-gray-500" />
                )}
              </div>
            )}

            {/* File/Folder Icon */}
            {node.type === "folder" ? (
              node.isOpen ? (
                <FolderOpen className="w-5 h-5 mr-3 text-blue-600" />
              ) : (
                <Folder className="w-5 h-5 mr-3 text-blue-500" />
              )
            ) : (
              <File
                className={`w-4 h-4 mr-3 ${
                  node.language
                    ? getLanguageColor(node.language)
                    : "text-gray-600"
                }`}
              />
            )}

            {/* Name and Details */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <div className="flex items-center min-w-0">
                  <span
                    className={`font-medium truncate ${
                      node.type === "folder" ? "text-gray-900" : "text-gray-800"
                    }`}
                  >
                    {node.name}
                  </span>
                  {node.type === "file" && node.isStarred && (
                    <Star className="w-4 h-4 ml-2 text-yellow-500 fill-current flex-shrink-0" />
                  )}
                </div>

                {/* File Actions */}
                {node.type === "file" && (
                  <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleStar(node.id);
                      }}
                      className={`p-1 rounded ${
                        node.isStarred
                          ? "text-yellow-500"
                          : "text-gray-400 hover:text-yellow-500"
                      }`}
                    >
                      <Star
                        className={`w-4 h-4 ${node.isStarred ? "fill-current" : ""}`}
                      />
                    </button>
                    <button className="p-1 text-gray-400 hover:text-gray-600 rounded">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="p-1 text-gray-400 hover:text-gray-600 rounded">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>

              {/* File metadata */}
              {node.type === "file" && (
                <div className="flex items-center space-x-4 mt-1 text-xs text-gray-500">
                  <span>{formatTimeAgo(node.lastModified!)}</span>
                  <span>{node.fileSize}B</span>
                  <span>{node.totalLines} lines</span>
                  {node.status && (
                    <span
                      className={`px-2 py-0.5 rounded-full text-xs font-medium ${getStatusColor(node.status)}`}
                    >
                      {node.status}
                    </span>
                  )}
                  <span>
                    {Math.floor((node.timeSpent || 0) / 60)}h{" "}
                    {(node.timeSpent || 0) % 60}m
                  </span>
                  <span>{node.compilations} runs</span>
                </div>
              )}

              {/* Folder metadata */}
              {node.type === "folder" && (
                <div className="text-xs text-gray-500 mt-1">
                  {node.children?.length || 0} items • Last modified{" "}
                  {formatTimeAgo(node.lastModified)}
                </div>
              )}
            </div>
          </div>

          {/* Render children if folder is open */}
          {node.type === "folder" && node.isOpen && node.children && (
            <div className="border-l border-gray-200 ml-4">
              {renderTreeView(node.children, depth + 1)}
            </div>
          )}
        </div>
      );
    });
  };

  const totalFiles = getAllFiles(fileStructure).length;
  const totalTimeSpent = getAllFiles(fileStructure).reduce(
    (sum, file) => sum + (file.timeSpent || 0),
    0,
  );
  const totalLines = getAllFiles(fileStructure).reduce(
    (sum, file) => sum + (file.totalLines || 0),
    0,
  );

  return (
    <div className="container mx-auto px-6 lg:px-8 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            File History & Structure
          </h1>
          <p className="text-gray-600">
            Explore your coding files in an organized tree structure
          </p>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mr-4">
                <File className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">
                  {totalFiles}
                </div>
                <div className="text-sm text-gray-600">Total Files</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                <Clock className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">
                  {Math.floor(totalTimeSpent / 60)}h {totalTimeSpent % 60}m
                </div>
                <div className="text-sm text-gray-600">Time Spent</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                <Code2 className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">
                  {totalLines}
                </div>
                <div className="text-sm text-gray-600">Lines of Code</div>
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search files and folders..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>

            {/* Language Filter */}
            <select
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            >
              {languages.map((lang) => (
                <option key={lang} value={lang}>
                  {lang === "all" ? "All Languages" : lang.toUpperCase()}
                </option>
              ))}
            </select>

            {/* Status Filter */}
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            >
              {statuses.map((status) => (
                <option key={status} value={status}>
                  {status === "all"
                    ? "All Status"
                    : status.charAt(0).toUpperCase() + status.slice(1)}
                </option>
              ))}
            </select>

            {/* View Mode Toggle */}
            <div className="flex border border-gray-200 rounded-lg">
              <button
                onClick={() => setViewMode("tree")}
                className={`px-4 py-3 text-sm font-medium rounded-l-lg ${
                  viewMode === "tree"
                    ? "bg-indigo-600 text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Tree View
              </button>
              <button
                onClick={() => setViewMode("flat")}
                className={`px-4 py-3 text-sm font-medium rounded-r-lg ${
                  viewMode === "flat"
                    ? "bg-indigo-600 text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                List View
              </button>
            </div>
          </div>
        </div>

        {/* File Structure */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          {viewMode === "tree" ? (
            <div className="divide-y divide-gray-100">
              {renderTreeView(fileStructure)}
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="text-left py-4 px-6 font-semibold text-gray-900">
                      File Path
                    </th>
                    <th className="text-left py-4 px-6 font-semibold text-gray-900">
                      Language
                    </th>
                    <th className="text-left py-4 px-6 font-semibold text-gray-900">
                      Status
                    </th>
                    <th className="text-left py-4 px-6 font-semibold text-gray-900">
                      Modified
                    </th>
                    <th className="text-left py-4 px-6 font-semibold text-gray-900">
                      Stats
                    </th>
                    <th className="text-left py-4 px-6 font-semibold text-gray-900">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredFiles.map((file, index) => (
                    <tr
                      key={file.id}
                      className={`border-b border-gray-100 hover:bg-gray-50 ${
                        index % 2 === 0 ? "bg-white" : "bg-gray-25"
                      }`}
                    >
                      <td className="py-4 px-6">
                        <div className="flex items-center">
                          <button
                            onClick={() => toggleStar(file.id)}
                            className={`mr-3 p-1 rounded ${
                              file.isStarred
                                ? "text-yellow-500"
                                : "text-gray-300 hover:text-yellow-500"
                            }`}
                          >
                            <Star
                              className={`w-4 h-4 ${file.isStarred ? "fill-current" : ""}`}
                            />
                          </button>
                          <File
                            className={`w-4 h-4 mr-3 ${
                              file.language
                                ? getLanguageColor(file.language)
                                : "text-gray-600"
                            }`}
                          />
                          <div>
                            <div className="font-medium text-gray-900">
                              {file.name}
                            </div>
                            <div className="text-sm text-gray-500">
                              {file.path}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <span
                          className={`font-medium ${
                            file.language
                              ? getLanguageColor(file.language)
                              : "text-gray-600"
                          }`}
                        >
                          {file.language?.toUpperCase() || "Unknown"}
                        </span>
                      </td>
                      <td className="py-4 px-6">
                        {file.status && (
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(file.status)}`}
                          >
                            {file.status}
                          </span>
                        )}
                      </td>
                      <td className="py-4 px-6">
                        <div className="text-sm text-gray-900">
                          {formatTimeAgo(file.lastModified!)}
                        </div>
                        <div className="text-xs text-gray-500">
                          v{file.version} • {file.changes} changes
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <div className="text-sm">
                          <div className="text-gray-900">
                            {Math.floor((file.timeSpent || 0) / 60)}h{" "}
                            {(file.timeSpent || 0) % 60}m
                          </div>
                          <div className="text-xs text-gray-500">
                            {file.compilations} runs • {file.errors} errors
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center space-x-2">
                          <Button size="sm" variant="outline">
                            <Eye className="w-3 h-3" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Download className="w-3 h-3" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <RotateCcw className="w-3 h-3" />
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="text-red-600 hover:text-red-700"
                          >
                            <Trash2 className="w-3 h-3" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Empty State */}
          {filteredFiles.length === 0 && (
            <div className="text-center py-12">
              <File className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                No files found
              </h3>
              <p className="text-gray-600 mb-4">
                Try adjusting your search criteria or filters
              </p>
              <Button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedLanguage("all");
                  setSelectedStatus("all");
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
