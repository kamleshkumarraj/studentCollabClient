import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Folder,
  Plus,
  Search,
  Star,
  Calendar,
  Code2,
  Users,
  GitBranch,
  Play,
  Settings,
  MoreHorizontal,
  Edit3,
  Trash2,
  Download,
  Share,
  Eye,
  Activity,
} from "lucide-react";

interface Project {
  id: string;
  name: string;
  description: string;
  language: string;
  framework?: string;
  lastModified: Date;
  created: Date;
  totalFiles: number;
  totalLines: number;
  status: "active" | "completed" | "paused";
  isStarred: boolean;
  collaborators: number;
  privacy: "private" | "public";
  tags: string[];
  progress: number;
  folder: string;
}

const mockProjects: Project[] = [
  {
    id: "1",
    name: "E-commerce Platform",
    description: "A full-stack e-commerce application with React and Node.js",
    language: "JavaScript",
    framework: "React",
    lastModified: new Date(Date.now() - 1000 * 60 * 30),
    created: new Date(Date.now() - 1000 * 60 * 60 * 24 * 30),
    totalFiles: 24,
    totalLines: 2450,
    status: "active",
    isStarred: true,
    collaborators: 3,
    privacy: "private",
    tags: ["react", "nodejs", "mongodb", "stripe"],
    progress: 75,
    folder: "/My Projects/Full-Stack/",
  },
  {
    id: "2",
    name: "Task Management App",
    description:
      "A modern task management application with drag-and-drop functionality",
    language: "TypeScript",
    framework: "Next.js",
    lastModified: new Date(Date.now() - 1000 * 60 * 60 * 2),
    created: new Date(Date.now() - 1000 * 60 * 60 * 24 * 15),
    totalFiles: 18,
    totalLines: 1890,
    status: "active",
    isStarred: false,
    collaborators: 2,
    privacy: "public",
    tags: ["typescript", "nextjs", "tailwind", "dnd"],
    progress: 60,
    folder: "/My Projects/Frontend/",
  },
  {
    id: "3",
    name: "Weather Dashboard",
    description: "A responsive weather dashboard with charts and forecasts",
    language: "JavaScript",
    framework: "Vue.js",
    lastModified: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7),
    created: new Date(Date.now() - 1000 * 60 * 60 * 24 * 45),
    totalFiles: 12,
    totalLines: 1250,
    status: "completed",
    isStarred: true,
    collaborators: 1,
    privacy: "public",
    tags: ["vuejs", "api", "charts", "responsive"],
    progress: 100,
    folder: "/My Projects/Frontend/",
  },
  {
    id: "4",
    name: "Data Analysis Tool",
    description: "Python-based data analysis and visualization tool",
    language: "Python",
    framework: "Flask",
    lastModified: new Date(Date.now() - 1000 * 60 * 60 * 24 * 14),
    created: new Date(Date.now() - 1000 * 60 * 60 * 24 * 60),
    totalFiles: 8,
    totalLines: 890,
    status: "paused",
    isStarred: false,
    collaborators: 0,
    privacy: "private",
    tags: ["python", "pandas", "matplotlib", "data-science"],
    progress: 40,
    folder: "/My Projects/Python/",
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "active":
      return "bg-green-100 text-green-800";
    case "completed":
      return "bg-blue-100 text-blue-800";
    case "paused":
      return "bg-yellow-100 text-yellow-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const getLanguageColor = (language: string) => {
  switch (language.toLowerCase()) {
    case "javascript":
      return "text-yellow-600";
    case "typescript":
      return "text-blue-600";
    case "python":
      return "text-green-600";
    case "java":
      return "text-red-600";
    default:
      return "text-gray-600";
  }
};

export default function ProjectManager() {
  const [projects, setProjects] = useState(mockProjects);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const languages = ["all", "JavaScript", "TypeScript", "Python", "Java"];
  const statuses = ["all", "active", "completed", "paused"];

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase()),
      );

    const matchesLanguage =
      selectedLanguage === "all" || project.language === selectedLanguage;

    const matchesStatus =
      selectedStatus === "all" || project.status === selectedStatus;

    return matchesSearch && matchesLanguage && matchesStatus;
  });

  const toggleStar = (projectId: string) => {
    setProjects((prev) =>
      prev.map((project) =>
        project.id === projectId
          ? { ...project, isStarred: !project.isStarred }
          : project,
      ),
    );
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

  return (
    <div className="container mx-auto px-6 lg:px-8 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              My Projects
            </h1>
            <p className="text-gray-600">
              Organize and manage your coding projects
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              New Project
            </Button>
            <Button variant="outline">
              <GitBranch className="w-4 h-4 mr-2" />
              Import from Git
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mr-4">
                <Folder className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">
                  {projects.length}
                </div>
                <div className="text-sm text-gray-600">Total Projects</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                <Activity className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">
                  {projects.filter((p) => p.status === "active").length}
                </div>
                <div className="text-sm text-gray-600">Active Projects</div>
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
                  {projects.reduce((sum, p) => sum + p.totalLines, 0)}
                </div>
                <div className="text-sm text-gray-600">Lines of Code</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">
                  {projects.reduce((sum, p) => sum + p.collaborators, 0)}
                </div>
                <div className="text-sm text-gray-600">Collaborators</div>
              </div>
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search projects..."
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
                  {lang === "all" ? "All Languages" : lang}
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
                onClick={() => setViewMode("grid")}
                className={`px-4 py-3 text-sm font-medium rounded-l-lg ${
                  viewMode === "grid"
                    ? "bg-indigo-600 text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Grid
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`px-4 py-3 text-sm font-medium rounded-r-lg ${
                  viewMode === "list"
                    ? "bg-indigo-600 text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                List
              </button>
            </div>
          </div>
        </div>

        {/* Projects Grid/List */}
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-lg flex items-center justify-center mr-3">
                      <Code2 className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 truncate">
                        {project.name}
                      </h3>
                      <div className="flex items-center text-xs text-gray-500">
                        <span className={getLanguageColor(project.language)}>
                          {project.language}
                        </span>
                        {project.framework && (
                          <>
                            <span className="mx-1">•</span>
                            <span>{project.framework}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <button
                      onClick={() => toggleStar(project.id)}
                      className={`p-1 rounded ${
                        project.isStarred
                          ? "text-yellow-500"
                          : "text-gray-300 hover:text-yellow-500"
                      }`}
                    >
                      <Star
                        className={`w-4 h-4 ${project.isStarred ? "fill-current" : ""}`}
                      />
                    </button>
                    <button className="p-1 text-gray-400 hover:text-gray-600 rounded">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Status and Progress */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}
                    >
                      {project.status}
                    </span>
                    <span className="text-sm text-gray-600">
                      {project.progress}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-indigo-500 to-cyan-500 h-2 rounded-full"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-4 py-3 border-t border-gray-100">
                  <div className="text-center">
                    <div className="text-lg font-semibold text-gray-900">
                      {project.totalFiles}
                    </div>
                    <div className="text-xs text-gray-500">Files</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-semibold text-gray-900">
                      {Math.floor(project.totalLines / 1000)}k
                    </div>
                    <div className="text-xs text-gray-500">Lines</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-semibold text-gray-900">
                      {project.collaborators}
                    </div>
                    <div className="text-xs text-gray-500">People</div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{formatTimeAgo(project.lastModified)}</span>
                  <div className="flex items-center space-x-2">
                    <Button size="sm" variant="outline">
                      <Eye className="w-3 h-3 mr-1" />
                      Open
                    </Button>
                    <Button size="sm">
                      <Play className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // List View
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="text-left py-4 px-6 font-semibold text-gray-900">
                      Project
                    </th>
                    <th className="text-left py-4 px-6 font-semibold text-gray-900">
                      Language
                    </th>
                    <th className="text-left py-4 px-6 font-semibold text-gray-900">
                      Status
                    </th>
                    <th className="text-left py-4 px-6 font-semibold text-gray-900">
                      Progress
                    </th>
                    <th className="text-left py-4 px-6 font-semibold text-gray-900">
                      Modified
                    </th>
                    <th className="text-left py-4 px-6 font-semibold text-gray-900">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProjects.map((project, index) => (
                    <tr
                      key={project.id}
                      className={`border-b border-gray-100 hover:bg-gray-50 ${
                        index % 2 === 0 ? "bg-white" : "bg-gray-25"
                      }`}
                    >
                      <td className="py-4 px-6">
                        <div className="flex items-center">
                          <button
                            onClick={() => toggleStar(project.id)}
                            className={`mr-2 p-1 rounded ${
                              project.isStarred
                                ? "text-yellow-500"
                                : "text-gray-300 hover:text-yellow-500"
                            }`}
                          >
                            <Star
                              className={`w-4 h-4 ${project.isStarred ? "fill-current" : ""}`}
                            />
                          </button>
                          <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-lg flex items-center justify-center mr-3">
                            <Code2 className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">
                              {project.name}
                            </div>
                            <div className="text-sm text-gray-500">
                              {project.description.substring(0, 50)}...
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <span
                          className={`font-medium ${getLanguageColor(project.language)}`}
                        >
                          {project.language}
                        </span>
                        {project.framework && (
                          <div className="text-xs text-gray-500">
                            {project.framework}
                          </div>
                        )}
                      </td>
                      <td className="py-4 px-6">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}
                        >
                          {project.status}
                        </span>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center">
                          <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                            <div
                              className="bg-gradient-to-r from-indigo-500 to-cyan-500 h-2 rounded-full"
                              style={{ width: `${project.progress}%` }}
                            ></div>
                          </div>
                          <span className="text-sm text-gray-600">
                            {project.progress}%
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <div className="text-sm text-gray-900">
                          {formatTimeAgo(project.lastModified)}
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center space-x-2">
                          <Button size="sm" variant="outline">
                            <Eye className="w-3 h-3" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Edit3 className="w-3 h-3" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Share className="w-3 h-3" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <Folder className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              No projects found
            </h3>
            <p className="text-gray-600 mb-4">
              Create your first project or adjust your filters
            </p>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Create New Project
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
