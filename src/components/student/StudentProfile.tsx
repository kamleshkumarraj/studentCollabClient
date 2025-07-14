import { Button } from "@/components/ui/button";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Code2,
  Award,
  Target,
  BookOpen,
  Edit3,
  Camera,
  Star,
  TrendingUp,
} from "lucide-react";

const skills = [
  { name: "JavaScript", level: 85, color: "bg-yellow-500" },
  { name: "React", level: 78, color: "bg-blue-500" },
  { name: "Python", level: 72, color: "bg-green-500" },
  { name: "Node.js", level: 65, color: "bg-emerald-500" },
  { name: "TypeScript", level: 60, color: "bg-blue-600" },
];

const achievements = [
  {
    icon: Award,
    title: "Fast Learner",
    description: "Completed 10 courses in 2 months",
    date: "Dec 2024",
  },
  {
    icon: Target,
    title: "Problem Solver",
    description: "Solved 50+ coding challenges",
    date: "Nov 2024",
  },
  {
    icon: Code2,
    title: "First Project",
    description: "Built first full-stack application",
    date: "Oct 2024",
  },
];

const recentActivity = [
  {
    type: "session",
    title: "JavaScript Fundamentals",
    tutor: "Sarah Williams",
    time: "2 hours ago",
    rating: 5,
  },
  {
    type: "challenge",
    title: "Array Manipulation Challenge",
    status: "completed",
    time: "1 day ago",
  },
  {
    type: "session",
    title: "React Hooks Deep Dive",
    tutor: "Mike Chen",
    time: "3 days ago",
    rating: 4,
  },
];

export default function StudentProfile() {
  return (
    <div className="container mx-auto px-6 lg:px-8 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Overview */}
          <div className="lg:col-span-1 space-y-6">
            {/* Profile Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="text-center">
                <div className="relative inline-block">
                  <div className="w-24 h-24 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                    A
                  </div>
                  <button className="absolute bottom-0 right-0 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-gray-100 hover:bg-gray-50 transition-colors">
                    <Camera className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-1">
                  Alex Johnson
                </h2>
                <p className="text-gray-500 mb-4">
                  Aspiring Full-Stack Developer
                </p>
                <Button className="w-full bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-700 hover:to-cyan-700">
                  <Edit3 className="w-4 h-4 mr-2" />
                  Edit Profile
                </Button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Contact Information
              </h3>
              <div className="space-y-3">
                <div className="flex items-center text-gray-600">
                  <Mail className="w-4 h-4 mr-3" />
                  <span>alex.johnson@email.com</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Phone className="w-4 h-4 mr-3" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-4 h-4 mr-3" />
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Calendar className="w-4 h-4 mr-3" />
                  <span>Joined December 2024</span>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Quick Stats
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Sessions Completed</span>
                  <span className="font-semibold text-indigo-600">24</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Hours Learned</span>
                  <span className="font-semibold text-cyan-600">48</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Average Rating</span>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                    <span className="font-semibold">4.8</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Streak</span>
                  <span className="font-semibold text-green-600">7 days</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Skills Progress */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  Skill Progress
                </h3>
                <TrendingUp className="w-5 h-5 text-green-500" />
              </div>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-gray-900">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${skill.color} transition-all duration-500`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">
                Recent Achievements
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {achievements.map((achievement, index) => {
                  const Icon = achievement.icon;
                  return (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-indigo-50 to-cyan-50 rounded-xl p-4 border border-indigo-100"
                    >
                      <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-lg flex items-center justify-center mb-3">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {achievement.title}
                      </h4>
                      <p className="text-sm text-gray-600 mb-2">
                        {achievement.description}
                      </p>
                      <span className="text-xs text-indigo-600 font-medium">
                        {achievement.date}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">
                Recent Activity
              </h3>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-xl"
                  >
                    <div className="flex items-center">
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center mr-4 ${
                          activity.type === "session"
                            ? "bg-indigo-100"
                            : "bg-green-100"
                        }`}
                      >
                        {activity.type === "session" ? (
                          <BookOpen
                            className={`w-5 h-5 ${
                              activity.type === "session"
                                ? "text-indigo-600"
                                : "text-green-600"
                            }`}
                          />
                        ) : (
                          <Code2 className="w-5 h-5 text-green-600" />
                        )}
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">
                          {activity.title}
                        </h4>
                        <p className="text-sm text-gray-500">
                          {activity.type === "session" && activity.tutor
                            ? `with ${activity.tutor}`
                            : activity.status}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">{activity.time}</p>
                      {activity.rating && (
                        <div className="flex items-center mt-1">
                          {[...Array(activity.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-3 h-3 text-yellow-400 fill-current"
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
