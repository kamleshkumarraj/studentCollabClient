import { Button } from "@/components/ui/button";
import {
  User,
  Users,
  Calendar,
  FileCode,
  BarChart3,
  MessageSquare,
  Video,
  BookOpen,
  Target,
  TrendingUp,
  Award,
  ArrowRight,
  Sparkles,
  GraduationCap,
} from "lucide-react";

const portalOptions = [
  {
    id: "profile",
    title: "My Profile",
    description:
      "Manage your professional information, specialties, and teaching credentials",
    icon: User,
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
    features: [
      "Professional Info",
      "Specialties & Skills",
      "Certifications",
      "Teaching Stats",
    ],
    route: "/teacher-dashboard?tab=profile",
  },
  {
    id: "students",
    title: "My Students",
    description:
      "View and manage your students, track their progress and performance",
    icon: Users,
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
    iconColor: "text-green-600",
    features: [
      "Student Directory",
      "Progress Tracking",
      "Performance Analytics",
      "Communication Hub",
    ],
    route: "/teacher-dashboard?tab=students",
  },
  {
    id: "schedule",
    title: "Schedule Management",
    description: "Manage your teaching sessions, availability, and calendar",
    icon: Calendar,
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600",
    features: [
      "Session Calendar",
      "Availability Settings",
      "Booking Management",
      "Time Tracking",
    ],
    route: "/teacher-dashboard?tab=schedule",
  },
  {
    id: "chat",
    title: "Student Messages",
    description: "Communicate with students through real-time messaging",
    icon: MessageSquare,
    color: "from-indigo-500 to-indigo-600",
    bgColor: "bg-indigo-50",
    iconColor: "text-indigo-600",
    features: [
      "Real-time Chat",
      "Code Sharing",
      "File Attachments",
      "Quick Responses",
    ],
    route: "/teacher-dashboard?tab=chat",
  },
  {
    id: "meeting",
    title: "Teaching Sessions",
    description:
      "Host live video sessions with screen sharing and collaboration tools",
    icon: Video,
    color: "from-red-500 to-red-600",
    bgColor: "bg-red-50",
    iconColor: "text-red-600",
    features: [
      "HD Video Sessions",
      "Screen Sharing",
      "Interactive Whiteboard",
      "Session Recording",
    ],
    route: "/teacher-dashboard?tab=meeting",
  },
  {
    id: "courses",
    title: "Course Management",
    description:
      "Create and manage your courses, assignments, and learning materials",
    icon: BookOpen,
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-50",
    iconColor: "text-orange-600",
    features: [
      "Course Creation",
      "Assignment Management",
      "Resource Library",
      "Content Organization",
    ],
    route: "/teacher-dashboard?tab=courses",
  },
  {
    id: "analytics",
    title: "Teaching Analytics",
    description:
      "Track your teaching performance and student engagement metrics",
    icon: BarChart3,
    color: "from-cyan-500 to-cyan-600",
    bgColor: "bg-cyan-50",
    iconColor: "text-cyan-600",
    features: [
      "Performance Metrics",
      "Student Progress",
      "Engagement Analytics",
      "Revenue Tracking",
    ],
    route: "/teacher-dashboard?tab=analytics",
  },
];

const stats = [
  { label: "Active Students", value: "124", icon: Users },
  { label: "Sessions Taught", value: "1,250+", icon: Video },
  { label: "Student Rating", value: "4.9", icon: Award },
  { label: "Hours Taught", value: "2,400+", icon: TrendingUp },
];

export default function TeacherPortal() {
  const handleNavigate = (route: string) => {
    window.location.href = route;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 blur-2xl animate-float"></div>
      <div
        className="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-20 blur-2xl animate-float"
        style={{ animationDelay: "-3s" }}
      ></div>

      {/* Header */}
      <div className="glass border-b border-white/20 shadow-lg">
        <div className="container mx-auto px-6 lg:px-8 py-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between animate-slide-up">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4 hover-glow animate-float">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">
                    Teacher Portal
                  </h1>
                  <p
                    className="text-gray-600 animate-fade-in"
                    style={{ animationDelay: "0.2s" }}
                  >
                    Welcome back, Dr. Sarah!
                  </p>
                </div>
              </div>
              <Button
                variant="outline"
                className="glass border-white/30 hover-glow"
                onClick={() => (window.location.href = "/")}
              >
                Back to Home
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Welcome Section */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 rounded-full glass text-indigo-700 text-sm font-medium mb-6 hover-glow animate-bounce-slow">
              <Sparkles className="w-4 h-4 mr-2 text-yellow-500" />
              Your Teaching Dashboard Awaits
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-slide-up">
              Manage Your{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent animate-pulse">
                Teaching Journey
              </span>
            </h2>
            <p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              Access all the tools you need to provide exceptional education.
              From student management to analytics, everything is designed for
              your teaching success.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="glass-card rounded-2xl p-6 border border-white/30 text-center hover-glow interactive-card animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4 animate-float shadow-lg">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>

          {/* Portal Options Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
            {portalOptions.map((option) => {
              const Icon = option.icon;
              return (
                <div
                  key={option.id}
                  className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer"
                  onClick={() => handleNavigate(option.route)}
                >
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-16 h-16 ${option.bgColor} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className={`w-8 h-8 ${option.iconColor}`} />
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all duration-300" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300">
                    {option.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {option.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {option.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div
                    className={`w-full h-12 bg-gradient-to-r ${option.color} rounded-xl flex items-center justify-center text-white font-medium group-hover:shadow-lg transition-all duration-300`}
                  >
                    Manage
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>

                  {/* Hover effect gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-cyan-50 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
              );
            })}
          </div>

          {/* Quick Actions Section */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                Quick Actions
              </h3>
              <p className="text-gray-600">
                Jump straight to the most used teaching features
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Button
                className="h-16 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white rounded-xl text-lg"
                onClick={() => handleNavigate("/teacher-dashboard?tab=meeting")}
              >
                <Video className="w-5 h-5 mr-3" />
                Start Session
              </Button>

              <Button
                variant="outline"
                className="h-16 border-2 border-gray-200 hover:border-indigo-300 rounded-xl text-lg"
                onClick={() => handleNavigate("/teacher-dashboard?tab=chat")}
              >
                <MessageSquare className="w-5 h-5 mr-3" />
                Student Messages
              </Button>

              <Button
                variant="outline"
                className="h-16 border-2 border-gray-200 hover:border-indigo-300 rounded-xl text-lg"
                onClick={() =>
                  handleNavigate("/teacher-dashboard?tab=schedule")
                }
              >
                <Calendar className="w-5 h-5 mr-3" />
                View Schedule
              </Button>

              <Button
                variant="outline"
                className="h-16 border-2 border-gray-200 hover:border-indigo-300 rounded-xl text-lg"
                onClick={() =>
                  handleNavigate("/teacher-dashboard?tab=students")
                }
              >
                <Users className="w-5 h-5 mr-3" />
                View Students
              </Button>
            </div>
          </div>

          {/* Teaching Achievement Preview */}
          <div className="mt-16 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-3xl p-8 text-white text-center">
            <div className="max-w-2xl mx-auto">
              <Award className="w-16 h-16 mx-auto mb-4 text-yellow-300" />
              <h3 className="text-2xl font-semibold mb-4">
                Teaching Excellence
              </h3>
              <p className="text-indigo-100 mb-6">
                Your dedication to teaching is making a real difference. Keep
                inspiring the next generation of developers!
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white/10 rounded-xl p-4">
                  <div className="text-2xl font-bold">4.9</div>
                  <div className="text-sm text-indigo-100">Avg Rating</div>
                </div>
                <div className="bg-white/10 rounded-xl p-4">
                  <div className="text-2xl font-bold">124</div>
                  <div className="text-sm text-indigo-100">Students</div>
                </div>
                <div className="bg-white/10 rounded-xl p-4">
                  <div className="text-2xl font-bold">98%</div>
                  <div className="text-sm text-indigo-100">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
