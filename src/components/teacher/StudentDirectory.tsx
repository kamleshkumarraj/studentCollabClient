import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Search,
  Filter,
  Star,
  MapPin,
  Clock,
  TrendingUp,
  MessageSquare,
  Video,
  BookOpen,
  Target,
  Users,
  Calendar,
  Award,
  MoreHorizontal,
} from "lucide-react";

const students = [
  {
    id: 1,
    name: "Alex Johnson",
    avatar: "AJ",
    email: "alex.johnson@email.com",
    joinDate: "2024-01-15",
    totalSessions: 24,
    hoursStudied: 48,
    currentStreak: 7,
    level: "Intermediate",
    specialization: "Full-Stack Development",
    progress: 75,
    lastActive: "2 hours ago",
    isOnline: true,
    location: "New York, NY",
    sessionsThisWeek: 3,
    averageRating: 4.8,
    currentProject: "E-commerce Platform",
    goals: ["Master React", "Learn Node.js", "Build Portfolio"],
    upcomingSessions: ["Today 2:00 PM", "Tomorrow 10:00 AM"],
  },
  {
    id: 2,
    name: "Maria Rodriguez",
    avatar: "MR",
    email: "maria.rodriguez@email.com",
    joinDate: "2024-02-01",
    totalSessions: 18,
    hoursStudied: 36,
    currentStreak: 12,
    level: "Beginner",
    specialization: "Frontend Development",
    progress: 45,
    lastActive: "30 minutes ago",
    isOnline: true,
    location: "Los Angeles, CA",
    sessionsThisWeek: 2,
    averageRating: 4.9,
    currentProject: "Personal Website",
    goals: ["Learn JavaScript", "Understand CSS", "Build First App"],
    upcomingSessions: ["Today 4:00 PM"],
  },
  {
    id: 3,
    name: "David Kim",
    avatar: "DK",
    email: "david.kim@email.com",
    joinDate: "2023-11-20",
    totalSessions: 45,
    hoursStudied: 90,
    currentStreak: 5,
    level: "Advanced",
    specialization: "Backend Development",
    progress: 85,
    lastActive: "1 day ago",
    isOnline: false,
    location: "Seattle, WA",
    sessionsThisWeek: 4,
    averageRating: 4.7,
    currentProject: "API Development",
    goals: ["Master Databases", "Learn DevOps", "System Design"],
    upcomingSessions: ["Tomorrow 1:00 PM", "Friday 3:00 PM"],
  },
  {
    id: 4,
    name: "Emily Chen",
    avatar: "EC",
    email: "emily.chen@email.com",
    joinDate: "2024-01-08",
    totalSessions: 32,
    hoursStudied: 64,
    currentStreak: 15,
    level: "Intermediate",
    specialization: "Mobile Development",
    progress: 60,
    lastActive: "Active now",
    isOnline: true,
    location: "Austin, TX",
    sessionsThisWeek: 5,
    averageRating: 4.9,
    currentProject: "Fitness Tracking App",
    goals: ["React Native", "App Store", "UI/UX Design"],
    upcomingSessions: ["Today 6:00 PM", "Thursday 11:00 AM"],
  },
];

const levels = ["All Levels", "Beginner", "Intermediate", "Advanced"];
const specializations = [
  "All Specializations",
  "Full-Stack Development",
  "Frontend Development",
  "Backend Development",
  "Mobile Development",
  "Data Science",
];

export default function StudentDirectory() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("All Levels");
  const [selectedSpecialization, setSelectedSpecialization] = useState(
    "All Specializations",
  );
  const [showOnlineOnly, setShowOnlineOnly] = useState(false);

  const filteredStudents = students.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.specialization.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesLevel =
      selectedLevel === "All Levels" || student.level === selectedLevel;

    const matchesSpecialization =
      selectedSpecialization === "All Specializations" ||
      student.specialization === selectedSpecialization;

    const matchesOnlineFilter = !showOnlineOnly || student.isOnline;

    return (
      matchesSearch &&
      matchesLevel &&
      matchesSpecialization &&
      matchesOnlineFilter
    );
  });

  const handleMessageStudent = (student: (typeof students)[0]) => {
    navigate("/teacher-dashboard?tab=chat", {
      state: {
        chatWith: {
          id: student.id,
          name: student.name,
          avatar: student.avatar,
          isOnline: student.isOnline,
          specialization: student.specialization,
        },
      },
    });
  };

  const handleStartSession = (student: (typeof students)[0]) => {
    navigate("/teacher-dashboard?tab=meeting", {
      state: {
        action: "start",
        student: {
          id: student.id,
          name: student.name,
          avatar: student.avatar,
          specialization: student.specialization,
        },
      },
    });
  };

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

  return (
    <div className="container mx-auto px-6 lg:px-8 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Students</h1>
          <p className="text-gray-600">
            Manage and track your students' learning progress
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Total Students
                </p>
                <p className="text-2xl font-bold text-gray-900">124</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Active Today
                </p>
                <p className="text-2xl font-bold text-gray-900">18</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <Target className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Avg Progress
                </p>
                <p className="text-2xl font-bold text-gray-900">68%</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Sessions Today
                </p>
                <p className="text-2xl font-bold text-gray-900">12</p>
              </div>
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                <Calendar className="w-6 h-6 text-indigo-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search students by name, email, or specialization..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>

            {/* Level Filter */}
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

            {/* Specialization Filter */}
            <select
              value={selectedSpecialization}
              onChange={(e) => setSelectedSpecialization(e.target.value)}
              className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            >
              {specializations.map((spec) => (
                <option key={spec} value={spec}>
                  {spec}
                </option>
              ))}
            </select>

            {/* Online Filter */}
            <label className="flex items-center space-x-2 px-4 py-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
              <input
                type="checkbox"
                checked={showOnlineOnly}
                onChange={(e) => setShowOnlineOnly(e.target.checked)}
                className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
              <span className="text-sm font-medium text-gray-700">
                Online Now
              </span>
            </label>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredStudents.length} student
            {filteredStudents.length !== 1 ? "s" : ""}
          </p>
        </div>

        {/* Students Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredStudents.map((student) => (
            <div
              key={student.id}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-lg font-semibold mr-4">
                      {student.avatar}
                    </div>
                    {student.isOnline && (
                      <div className="absolute bottom-0 right-3 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                    )}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {student.name}
                    </h3>
                    <p className="text-indigo-600 font-medium">
                      {student.specialization}
                    </p>
                    <div className="flex items-center mt-1">
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded-full ${getLevelColor(student.level)}`}
                      >
                        {student.level}
                      </span>
                      <span className="text-sm text-gray-500 ml-2">
                        {student.lastActive}
                      </span>
                    </div>
                  </div>
                </div>
                <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
                  <MoreHorizontal className="w-5 h-5" />
                </button>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">
                    Learning Progress
                  </span>
                  <span className="text-sm text-gray-500">
                    {student.progress}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-indigo-600 to-cyan-600 h-2 rounded-full"
                    style={{ width: `${student.progress}%` }}
                  ></div>
                </div>
              </div>

              {/* Current Project */}
              <div className="bg-gray-50 rounded-lg p-3 mb-4">
                <div className="flex items-center mb-1">
                  <BookOpen className="w-4 h-4 text-indigo-600 mr-2" />
                  <span className="text-sm font-medium text-gray-700">
                    Current Project
                  </span>
                </div>
                <p className="text-sm text-gray-600">
                  {student.currentProject}
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 mb-4 py-3 border-t border-gray-100">
                <div className="text-center">
                  <div className="text-lg font-semibold text-gray-900">
                    {student.totalSessions}
                  </div>
                  <div className="text-xs text-gray-500">Sessions</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-gray-900">
                    {student.currentStreak}
                  </div>
                  <div className="text-xs text-gray-500">Day Streak</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-gray-900">
                    {student.hoursStudied}h
                  </div>
                  <div className="text-xs text-gray-500">Studied</div>
                </div>
              </div>

              {/* Goals */}
              <div className="mb-4">
                <p className="text-sm font-medium text-gray-700 mb-2">
                  Learning Goals:
                </p>
                <div className="flex flex-wrap gap-1">
                  {student.goals.slice(0, 2).map((goal, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-md"
                    >
                      {goal}
                    </span>
                  ))}
                  {student.goals.length > 2 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">
                      +{student.goals.length - 2} more
                    </span>
                  )}
                </div>
              </div>

              {/* Upcoming Sessions */}
              <div className="mb-4">
                <p className="text-sm font-medium text-gray-700 mb-2">
                  Upcoming Sessions:
                </p>
                <div className="flex flex-wrap gap-2">
                  {student.upcomingSessions.map((session, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-md"
                    >
                      {session}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2">
                <Button
                  onClick={() => handleStartSession(student)}
                  className="flex-1 bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-700 hover:to-cyan-700"
                >
                  <Video className="w-4 h-4 mr-2" />
                  Start Session
                </Button>
                <Button
                  onClick={() => handleMessageStudent(student)}
                  variant="outline"
                  className="px-4"
                  title={`Message ${student.name}`}
                >
                  <MessageSquare className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        {filteredStudents.length > 0 && (
          <div className="text-center mt-8">
            <Button variant="outline" className="px-8">
              Load More Students
            </Button>
          </div>
        )}

        {/* No Results */}
        {filteredStudents.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              No students found
            </h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your search criteria or filters
            </p>
            <Button
              onClick={() => {
                setSearchTerm("");
                setSelectedLevel("All Levels");
                setSelectedSpecialization("All Specializations");
                setShowOnlineOnly(false);
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
