import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Plus,
  Search,
  Filter,
  BookOpen,
  Users,
  Clock,
  Star,
  Edit3,
  Trash2,
  Eye,
  Play,
  FileText,
  Video,
  Download,
  Upload,
  MoreVertical,
  Calendar,
  TrendingUp,
  Award,
  Target,
} from "lucide-react";

const courses = [
  {
    id: 1,
    title: "Complete React Development Course",
    description:
      "Master React from basics to advanced concepts including hooks, context, and performance optimization.",
    level: "Intermediate",
    duration: "12 weeks",
    studentsEnrolled: 45,
    rating: 4.9,
    totalRatings: 38,
    status: "active",
    price: 299,
    thumbnail: "react-course.jpg",
    lessons: 24,
    assignments: 8,
    projects: 3,
    completionRate: 78,
    lastUpdated: "2024-02-15",
    category: "Frontend Development",
  },
  {
    id: 2,
    title: "JavaScript Fundamentals",
    description:
      "Learn JavaScript from scratch including ES6+, async programming, and modern development practices.",
    level: "Beginner",
    duration: "8 weeks",
    studentsEnrolled: 67,
    rating: 4.8,
    totalRatings: 52,
    status: "active",
    price: 199,
    thumbnail: "js-course.jpg",
    lessons: 18,
    assignments: 6,
    projects: 2,
    completionRate: 85,
    lastUpdated: "2024-02-10",
    category: "Programming Basics",
  },
  {
    id: 3,
    title: "Node.js Backend Development",
    description:
      "Build scalable backend applications with Node.js, Express, and MongoDB.",
    level: "Advanced",
    duration: "10 weeks",
    studentsEnrolled: 32,
    rating: 4.7,
    totalRatings: 28,
    status: "draft",
    price: 349,
    thumbnail: "nodejs-course.jpg",
    lessons: 20,
    assignments: 10,
    projects: 4,
    completionRate: 0,
    lastUpdated: "2024-02-20",
    category: "Backend Development",
  },
];

const assignments = [
  {
    id: 1,
    title: "Build a Todo App with React Hooks",
    course: "Complete React Development Course",
    dueDate: "2024-03-20",
    submissions: 35,
    totalStudents: 45,
    averageScore: 87,
    status: "active",
  },
  {
    id: 2,
    title: "JavaScript Array Methods Practice",
    course: "JavaScript Fundamentals",
    dueDate: "2024-03-18",
    submissions: 62,
    totalStudents: 67,
    averageScore: 92,
    status: "active",
  },
  {
    id: 3,
    title: "Create REST API with Express",
    course: "Node.js Backend Development",
    dueDate: "2024-03-25",
    submissions: 0,
    totalStudents: 0,
    averageScore: 0,
    status: "draft",
  },
];

const categories = [
  "All Categories",
  "Frontend Development",
  "Backend Development",
  "Programming Basics",
  "Mobile Development",
  "Data Science",
];

const levels = ["All Levels", "Beginner", "Intermediate", "Advanced"];
const statuses = ["All Status", "active", "draft", "archived"];

export default function CourseManager() {
  const [activeTab, setActiveTab] = useState<
    "courses" | "assignments" | "analytics"
  >("courses");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedLevel, setSelectedLevel] = useState("All Levels");
  const [selectedStatus, setSelectedStatus] = useState("All Status");

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All Categories" ||
      course.category === selectedCategory;

    const matchesLevel =
      selectedLevel === "All Levels" || course.level === selectedLevel;

    const matchesStatus =
      selectedStatus === "All Status" || course.status === selectedStatus;

    return matchesSearch && matchesCategory && matchesLevel && matchesStatus;
  });

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-green-100 text-green-700";
      case "Intermediate":
        return "bg-yellow-100 text-yellow-700";
      case "Advanced":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-700";
      case "draft":
        return "bg-yellow-100 text-yellow-700";
      case "archived":
        return "bg-gray-100 text-gray-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="container mx-auto px-6 lg:px-8 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Course Management
            </h1>
            <p className="text-gray-600">
              Create and manage your courses, assignments, and content
            </p>
          </div>
          <Button className="bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-700 hover:to-cyan-700">
            <Plus className="w-4 h-4 mr-2" />
            Create New Course
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Total Courses
                </p>
                <p className="text-2xl font-bold text-gray-900">
                  {courses.length}
                </p>
                <p className="text-xs text-gray-500">2 active, 1 draft</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Total Students
                </p>
                <p className="text-2xl font-bold text-gray-900">144</p>
                <p className="text-xs text-gray-500">across all courses</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Avg Completion
                </p>
                <p className="text-2xl font-bold text-gray-900">82%</p>
                <p className="text-xs text-gray-500">course completion rate</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <Target className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Avg Rating</p>
                <p className="text-2xl font-bold text-gray-900">4.8</p>
                <p className="text-xs text-gray-500">from 118 reviews</p>
              </div>
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                <Star className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 mb-8">
          <div className="flex border-b border-gray-200">
            {[
              { id: "courses", label: "My Courses", count: courses.length },
              {
                id: "assignments",
                label: "Assignments",
                count: assignments.length,
              },
              { id: "analytics", label: "Analytics", count: null },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center space-x-2 px-6 py-4 font-medium transition-colors ${
                  activeTab === tab.id
                    ? "text-indigo-600 border-b-2 border-indigo-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                <span>{tab.label}</span>
                {tab.count !== null && (
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      activeTab === tab.id
                        ? "bg-indigo-100 text-indigo-600"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {tab.count}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Courses Tab */}
          {activeTab === "courses" && (
            <div className="p-6">
              {/* Search and Filters */}
              <div className="flex flex-col lg:flex-row gap-4 mb-6">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search courses..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>

                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>

                <select
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                >
                  {levels.map((level) => (
                    <option key={level} value={level}>
                      {level}
                    </option>
                  ))}
                </select>

                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                >
                  {statuses.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
              </div>

              {/* Courses Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredCourses.map((course) => (
                  <div
                    key={course.id}
                    className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300"
                  >
                    {/* Course Thumbnail */}
                    <div className="w-full h-40 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-xl mb-4 flex items-center justify-center">
                      <BookOpen className="w-12 h-12 text-white" />
                    </div>

                    {/* Course Info */}
                    <div className="mb-4">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-semibold text-gray-900 line-clamp-2">
                          {course.title}
                        </h3>
                        <button className="p-1 text-gray-400 hover:text-gray-600">
                          <MoreVertical className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                        {course.description}
                      </p>

                      {/* Badges */}
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span
                          className={`px-2 py-1 text-xs font-medium rounded-full ${getLevelColor(course.level)}`}
                        >
                          {course.level}
                        </span>
                        <span
                          className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(course.status)}`}
                        >
                          {course.status}
                        </span>
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                        <div className="flex items-center">
                          <Users className="w-4 h-4 text-gray-400 mr-1" />
                          <span className="text-gray-600">
                            {course.studentsEnrolled} students
                          </span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 text-gray-400 mr-1" />
                          <span className="text-gray-600">
                            {course.duration}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 mr-1" />
                          <span className="text-gray-600">
                            {course.rating} ({course.totalRatings})
                          </span>
                        </div>
                        <div className="flex items-center">
                          <TrendingUp className="w-4 h-4 text-gray-400 mr-1" />
                          <span className="text-gray-600">
                            {course.completionRate}% completion
                          </span>
                        </div>
                      </div>

                      {/* Course Content */}
                      <div className="bg-white rounded-lg p-3 mb-4">
                        <div className="grid grid-cols-3 gap-2 text-xs text-gray-600">
                          <div className="text-center">
                            <div className="font-semibold text-gray-900">
                              {course.lessons}
                            </div>
                            <div>Lessons</div>
                          </div>
                          <div className="text-center">
                            <div className="font-semibold text-gray-900">
                              {course.assignments}
                            </div>
                            <div>Assignments</div>
                          </div>
                          <div className="text-center">
                            <div className="font-semibold text-gray-900">
                              {course.projects}
                            </div>
                            <div>Projects</div>
                          </div>
                        </div>
                      </div>

                      {/* Price */}
                      <div className="text-center mb-4">
                        <span className="text-2xl font-bold text-gray-900">
                          ${course.price}
                        </span>
                      </div>

                      {/* Actions */}
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 text-xs"
                        >
                          <Eye className="w-3 h-3 mr-1" />
                          View
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 text-xs"
                        >
                          <Edit3 className="w-3 h-3 mr-1" />
                          Edit
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="px-2 text-xs"
                        >
                          <Trash2 className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Assignments Tab */}
          {activeTab === "assignments" && (
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  Recent Assignments
                </h3>
                <Button variant="outline">
                  <Plus className="w-4 h-4 mr-2" />
                  Create Assignment
                </Button>
              </div>

              <div className="space-y-4">
                {assignments.map((assignment) => (
                  <div
                    key={assignment.id}
                    className="bg-gray-50 rounded-xl p-6 border border-gray-100"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {assignment.title}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {assignment.course}
                        </p>
                      </div>
                      <span
                        className={`px-3 py-1 text-xs font-medium rounded-full ${getStatusColor(assignment.status)}`}
                      >
                        {assignment.status}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      <div>
                        <div className="text-sm text-gray-600">Due Date</div>
                        <div className="font-medium">
                          {new Date(assignment.dueDate).toLocaleDateString()}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Submissions</div>
                        <div className="font-medium">
                          {assignment.submissions}/{assignment.totalStudents}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">
                          Average Score
                        </div>
                        <div className="font-medium">
                          {assignment.averageScore}%
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">
                          Completion Rate
                        </div>
                        <div className="font-medium">
                          {assignment.totalStudents > 0
                            ? Math.round(
                                (assignment.submissions /
                                  assignment.totalStudents) *
                                  100,
                              )
                            : 0}
                          %
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Eye className="w-4 h-4 mr-1" />
                        View Submissions
                      </Button>
                      <Button variant="outline" size="sm">
                        <Edit3 className="w-4 h-4 mr-1" />
                        Edit
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4 mr-1" />
                        Export Results
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Analytics Tab */}
          {activeTab === "analytics" && (
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">
                Course Analytics
              </h3>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Revenue Chart Placeholder */}
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <h4 className="font-semibold text-gray-900 mb-4">
                    Monthly Revenue
                  </h4>
                  <div className="h-48 bg-gradient-to-r from-indigo-100 to-cyan-100 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <TrendingUp className="w-12 h-12 text-indigo-600 mx-auto mb-2" />
                      <p className="text-gray-600">Chart visualization</p>
                    </div>
                  </div>
                </div>

                {/* Enrollment Chart Placeholder */}
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <h4 className="font-semibold text-gray-900 mb-4">
                    Student Enrollment
                  </h4>
                  <div className="h-48 bg-gradient-to-r from-green-100 to-blue-100 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <Users className="w-12 h-12 text-green-600 mx-auto mb-2" />
                      <p className="text-gray-600">Chart visualization</p>
                    </div>
                  </div>
                </div>

                {/* Top Performing Courses */}
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <h4 className="font-semibold text-gray-900 mb-4">
                    Top Performing Courses
                  </h4>
                  <div className="space-y-3">
                    {courses
                      .sort((a, b) => b.rating - a.rating)
                      .slice(0, 3)
                      .map((course, index) => (
                        <div
                          key={course.id}
                          className="flex items-center justify-between p-3 bg-white rounded-lg"
                        >
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-semibold text-sm mr-3">
                              {index + 1}
                            </div>
                            <div>
                              <div className="font-medium text-gray-900 text-sm">
                                {course.title}
                              </div>
                              <div className="text-xs text-gray-600">
                                {course.studentsEnrolled} students
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-semibold text-gray-900">
                              {course.rating}
                            </div>
                            <div className="text-xs text-gray-600">rating</div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <h4 className="font-semibold text-gray-900 mb-4">
                    Recent Activity
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center p-3 bg-white rounded-lg">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                        <Users className="w-4 h-4 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          5 new enrollments
                        </div>
                        <div className="text-xs text-gray-600">2 hours ago</div>
                      </div>
                    </div>
                    <div className="flex items-center p-3 bg-white rounded-lg">
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                        <Star className="w-4 h-4 text-green-600" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          New 5-star review
                        </div>
                        <div className="text-xs text-gray-600">4 hours ago</div>
                      </div>
                    </div>
                    <div className="flex items-center p-3 bg-white rounded-lg">
                      <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                        <Award className="w-4 h-4 text-purple-600" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          Student completed course
                        </div>
                        <div className="text-xs text-gray-600">6 hours ago</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
