import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  TrendingUp,
  TrendingDown,
  Users,
  DollarSign,
  Clock,
  Star,
  Calendar,
  Download,
  Filter,
  BarChart3,
  PieChart,
  LineChart,
  Target,
  Award,
  BookOpen,
  MessageSquare,
  Video,
} from "lucide-react";

const timeRanges = [
  "Last 7 days",
  "Last 30 days",
  "Last 3 months",
  "Last year",
];

const metrics = [
  {
    title: "Total Revenue",
    value: "$12,450",
    change: "+15.2%",
    trend: "up",
    icon: DollarSign,
    color: "text-green-600",
    bgColor: "bg-green-100",
  },
  {
    title: "Active Students",
    value: "124",
    change: "+8.1%",
    trend: "up",
    icon: Users,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    title: "Teaching Hours",
    value: "85.5h",
    change: "+12.5%",
    trend: "up",
    icon: Clock,
    color: "text-purple-600",
    bgColor: "bg-purple-100",
  },
  {
    title: "Average Rating",
    value: "4.9",
    change: "+0.2",
    trend: "up",
    icon: Star,
    color: "text-yellow-600",
    bgColor: "bg-yellow-100",
  },
  {
    title: "Course Completion",
    value: "87%",
    change: "+5.3%",
    trend: "up",
    icon: Target,
    color: "text-indigo-600",
    bgColor: "bg-indigo-100",
  },
  {
    title: "Session Success Rate",
    value: "96%",
    change: "-1.2%",
    trend: "down",
    icon: Video,
    color: "text-cyan-600",
    bgColor: "bg-cyan-100",
  },
];

const topCourses = [
  {
    id: 1,
    name: "Complete React Development",
    students: 45,
    revenue: "$4,500",
    rating: 4.9,
    completion: 78,
  },
  {
    id: 2,
    name: "JavaScript Fundamentals",
    students: 67,
    revenue: "$3,200",
    rating: 4.8,
    completion: 85,
  },
  {
    id: 3,
    name: "Node.js Backend Development",
    students: 32,
    revenue: "$2,800",
    rating: 4.7,
    completion: 72,
  },
];

const recentActivity = [
  {
    id: 1,
    type: "enrollment",
    message: "Alex Johnson enrolled in React Development",
    time: "2 hours ago",
    icon: Users,
    color: "text-blue-600",
  },
  {
    id: 2,
    type: "rating",
    message: "Maria Rodriguez gave 5-star rating",
    time: "4 hours ago",
    icon: Star,
    color: "text-yellow-600",
  },
  {
    id: 3,
    type: "completion",
    message: "David Kim completed JavaScript course",
    time: "6 hours ago",
    icon: Award,
    color: "text-green-600",
  },
  {
    id: 4,
    type: "session",
    message: "Completed session with Emily Chen",
    time: "8 hours ago",
    icon: Video,
    color: "text-purple-600",
  },
  {
    id: 5,
    type: "message",
    message: "New message from Sarah Williams",
    time: "10 hours ago",
    icon: MessageSquare,
    color: "text-indigo-600",
  },
];

const studentProgress = [
  {
    name: "Alex Johnson",
    avatar: "AJ",
    course: "React Development",
    progress: 75,
    sessionsCompleted: 18,
    lastActive: "2 hours ago",
  },
  {
    name: "Maria Rodriguez",
    avatar: "MR",
    course: "JavaScript Fundamentals",
    progress: 92,
    sessionsCompleted: 22,
    lastActive: "1 day ago",
  },
  {
    name: "David Kim",
    avatar: "DK",
    course: "Node.js Backend",
    progress: 68,
    sessionsCompleted: 15,
    lastActive: "3 hours ago",
  },
  {
    name: "Emily Chen",
    avatar: "EC",
    course: "React Development",
    progress: 84,
    sessionsCompleted: 20,
    lastActive: "Active now",
  },
];

export default function Analytics() {
  const [selectedTimeRange, setSelectedTimeRange] = useState("Last 30 days");
  const [activeTab, setActiveTab] = useState<
    "overview" | "students" | "revenue"
  >("overview");

  return (
    <div className="container mx-auto px-6 lg:px-8 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Teaching Analytics
            </h1>
            <p className="text-gray-600">
              Track your teaching performance and student engagement
            </p>
          </div>
          <div className="flex gap-3">
            <select
              value={selectedTimeRange}
              onChange={(e) => setSelectedTimeRange(e.target.value)}
              className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            >
              {timeRanges.map((range) => (
                <option key={range} value={range}>
                  {range}
                </option>
              ))}
            </select>
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Export Report
            </Button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-8">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 ${metric.bgColor} rounded-xl flex items-center justify-center`}
                  >
                    <Icon className={`w-6 h-6 ${metric.color}`} />
                  </div>
                  <div
                    className={`flex items-center text-sm font-medium ${
                      metric.trend === "up" ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {metric.trend === "up" ? (
                      <TrendingUp className="w-4 h-4 mr-1" />
                    ) : (
                      <TrendingDown className="w-4 h-4 mr-1" />
                    )}
                    {metric.change}
                  </div>
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  {metric.value}
                </div>
                <div className="text-sm text-gray-600">{metric.title}</div>
              </div>
            );
          })}
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 mb-8">
          <div className="flex border-b border-gray-200">
            {[
              { id: "overview", label: "Overview" },
              { id: "students", label: "Student Progress" },
              { id: "revenue", label: "Revenue Analysis" },
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
              </button>
            ))}
          </div>

          {/* Overview Tab */}
          {activeTab === "overview" && (
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                {/* Revenue Chart */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Revenue Trend
                    </h3>
                    <LineChart className="w-5 h-5 text-gray-400" />
                  </div>
                  <div className="h-64 bg-gradient-to-r from-indigo-100 to-cyan-100 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <TrendingUp className="w-12 h-12 text-indigo-600 mx-auto mb-2" />
                      <p className="text-gray-600">
                        Revenue chart visualization
                      </p>
                    </div>
                  </div>
                </div>

                {/* Student Engagement */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Student Engagement
                    </h3>
                    <BarChart3 className="w-5 h-5 text-gray-400" />
                  </div>
                  <div className="h-64 bg-gradient-to-r from-green-100 to-blue-100 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <Users className="w-12 h-12 text-green-600 mx-auto mb-2" />
                      <p className="text-gray-600">
                        Engagement chart visualization
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Top Performing Courses */}
              <div className="bg-gray-50 rounded-xl p-6 mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">
                  Top Performing Courses
                </h3>
                <div className="space-y-4">
                  {topCourses.map((course, index) => (
                    <div
                      key={course.id}
                      className="bg-white rounded-lg p-4 flex items-center justify-between"
                    >
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-semibold mr-4">
                          {index + 1}
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">
                            {course.name}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {course.students} students enrolled
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-6 text-sm">
                        <div className="text-center">
                          <div className="font-semibold text-gray-900">
                            {course.revenue}
                          </div>
                          <div className="text-gray-600">Revenue</div>
                        </div>
                        <div className="text-center">
                          <div className="font-semibold text-gray-900">
                            {course.rating}
                          </div>
                          <div className="text-gray-600">Rating</div>
                        </div>
                        <div className="text-center">
                          <div className="font-semibold text-gray-900">
                            {course.completion}%
                          </div>
                          <div className="text-gray-600">Completion</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">
                  Recent Activity
                </h3>
                <div className="space-y-4">
                  {recentActivity.map((activity) => {
                    const Icon = activity.icon;
                    return (
                      <div
                        key={activity.id}
                        className="bg-white rounded-lg p-4 flex items-center"
                      >
                        <div
                          className={`w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-4`}
                        >
                          <Icon className={`w-5 h-5 ${activity.color}`} />
                        </div>
                        <div className="flex-1">
                          <p className="text-gray-900">{activity.message}</p>
                          <p className="text-sm text-gray-600">
                            {activity.time}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* Student Progress Tab */}
          {activeTab === "students" && (
            <div className="p-6">
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Student Progress Overview
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                  <div className="bg-blue-50 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-blue-600">124</div>
                    <div className="text-sm text-blue-700">Total Students</div>
                  </div>
                  <div className="bg-green-50 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-green-600">87%</div>
                    <div className="text-sm text-green-700">
                      Average Progress
                    </div>
                  </div>
                  <div className="bg-yellow-50 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-yellow-600">18</div>
                    <div className="text-sm text-yellow-700">Active Today</div>
                  </div>
                  <div className="bg-purple-50 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-purple-600">
                      4.8
                    </div>
                    <div className="text-sm text-purple-700">
                      Avg Satisfaction
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="font-semibold text-gray-900 mb-4">
                  Individual Student Progress
                </h4>
                <div className="space-y-4">
                  {studentProgress.map((student) => (
                    <div key={student.name} className="bg-white rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                            {student.avatar}
                          </div>
                          <div>
                            <h5 className="font-medium text-gray-900">
                              {student.name}
                            </h5>
                            <p className="text-sm text-gray-600">
                              {student.course}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-gray-600">
                            {student.lastActive}
                          </div>
                          <div className="text-sm text-gray-500">
                            {student.sessionsCompleted} sessions
                          </div>
                        </div>
                      </div>
                      <div className="mb-2">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-600">Progress</span>
                          <span className="font-medium">
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
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Revenue Analysis Tab */}
          {activeTab === "revenue" && (
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                {/* Revenue Breakdown */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Revenue Breakdown
                    </h3>
                    <PieChart className="w-5 h-5 text-gray-400" />
                  </div>
                  <div className="h-64 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <DollarSign className="w-12 h-12 text-purple-600 mx-auto mb-2" />
                      <p className="text-gray-600">Revenue breakdown chart</p>
                    </div>
                  </div>
                </div>

                {/* Monthly Earnings */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Monthly Earnings
                    </h3>
                    <Calendar className="w-5 h-5 text-gray-400" />
                  </div>
                  <div className="h-64 bg-gradient-to-r from-green-100 to-teal-100 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <TrendingUp className="w-12 h-12 text-green-600 mx-auto mb-2" />
                      <p className="text-gray-600">Monthly earnings chart</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Revenue Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <DollarSign className="w-8 h-8" />
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div className="text-3xl font-bold mb-2">$12,450</div>
                  <div className="text-green-100">Total Revenue</div>
                  <div className="text-sm text-green-200 mt-2">
                    +15.2% from last month
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <Clock className="w-8 h-8" />
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div className="text-3xl font-bold mb-2">$145</div>
                  <div className="text-blue-100">Avg. Hourly Rate</div>
                  <div className="text-sm text-blue-200 mt-2">
                    +8.5% from last month
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-6 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <BookOpen className="w-8 h-8" />
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div className="text-3xl font-bold mb-2">85.5h</div>
                  <div className="text-purple-100">Hours Taught</div>
                  <div className="text-sm text-purple-200 mt-2">
                    +12.5% from last month
                  </div>
                </div>
              </div>

              {/* Course Revenue Table */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">
                  Course Revenue Breakdown
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 font-medium text-gray-900">
                          Course
                        </th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">
                          Students
                        </th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">
                          Revenue
                        </th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">
                          Avg. Price
                        </th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">
                          Growth
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {topCourses.map((course) => (
                        <tr
                          key={course.id}
                          className="border-b border-gray-100"
                        >
                          <td className="py-3 px-4">
                            <div className="font-medium text-gray-900">
                              {course.name}
                            </div>
                          </td>
                          <td className="py-3 px-4 text-gray-600">
                            {course.students}
                          </td>
                          <td className="py-3 px-4 font-medium text-gray-900">
                            {course.revenue}
                          </td>
                          <td className="py-3 px-4 text-gray-600">
                            $
                            {Math.round(
                              parseInt(course.revenue.replace(/[$,]/g, "")) /
                                course.students,
                            )}
                          </td>
                          <td className="py-3 px-4">
                            <span className="inline-flex items-center text-sm font-medium text-green-600">
                              <TrendingUp className="w-4 h-4 mr-1" />
                              +12.5%
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
