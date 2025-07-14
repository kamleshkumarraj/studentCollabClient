import { Button } from "@/components/ui/button";
import {
  User,
  Users,
  UserPlus,
  FileCode,
  Clock,
  Code2,
  BookOpen,
  Target,
  TrendingUp,
  Award,
  ArrowRight,
  Sparkles,
  MessageSquare,
  Video,
} from "lucide-react";

const portalOptions = [
  {
    id: "profile",
    title: "My Profile",
    description:
      "Manage your personal information, skills, and learning progress",
    icon: User,
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
    features: [
      "Personal Info",
      "Skills Tracking",
      "Achievements",
      "Progress Analytics",
    ],
    route: "/student-dashboard?tab=profile",
  },
  {
    id: "tutors",
    title: "Find Tutors",
    description: "Connect with expert teachers and book one-on-one sessions",
    icon: Users,
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
    iconColor: "text-green-600",
    features: [
      "Expert Teachers",
      "Live Sessions",
      "Instant Help",
      "24/7 Support",
    ],
    route: "/student-dashboard?tab=tutors",
  },
  {
    id: "network",
    title: "My Network",
    description: "Connect with fellow students and join study groups",
    icon: UserPlus,
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600",
    features: [
      "Study Groups",
      "Peer Learning",
      "Friends Network",
      "Collaboration",
    ],
    route: "/student-dashboard?tab=friends",
  },
  {
    id: "chat",
    title: "Teacher Chat",
    description: "Get instant help through real-time messaging with teachers",
    icon: MessageSquare,
    color: "from-indigo-500 to-indigo-600",
    bgColor: "bg-indigo-50",
    iconColor: "text-indigo-600",
    features: [
      "Real-time Chat",
      "Code Sharing",
      "File Attachments",
      "Instant Support",
    ],
    route: "/student-dashboard?tab=chat",
  },
  {
    id: "meeting",
    title: "Video Meetings",
    description: "Join live video sessions with teachers and screen sharing",
    icon: Video,
    color: "from-red-500 to-red-600",
    bgColor: "bg-red-50",
    iconColor: "text-red-600",
    features: [
      "HD Video Calls",
      "Screen Sharing",
      "Group Sessions",
      "Recording",
    ],
    route: "/student-dashboard?tab=meeting",
  },
  {
    id: "editor",
    title: "Code Editor",
    description:
      "Practice coding with our advanced Monaco editor and syntax highlighting",
    icon: FileCode,
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-50",
    iconColor: "text-orange-600",
    features: [
      "Monaco Editor",
      "Syntax Highlighting",
      "Auto-completion",
      "Multi-language Support",
    ],
    route: "/student-dashboard?tab=editor",
  },
  {
    id: "history",
    title: "File History",
    description: "Track your coding progress and manage your file hierarchy",
    icon: Clock,
    color: "from-cyan-500 to-cyan-600",
    bgColor: "bg-cyan-50",
    iconColor: "text-cyan-600",
    features: [
      "File Tree Structure",
      "Progress Tracking",
      "Version History",
      "Statistics",
    ],
    route: "/student-dashboard?tab=files",
  },
];

const stats = [
  { label: "Active Students", value: "5,000+", icon: Users },
  { label: "Expert Tutors", value: "500+", icon: BookOpen },
  { label: "Success Rate", value: "98%", icon: Target },
  { label: "Hours Learned", value: "50K+", icon: TrendingUp },
];

export default function StudentPortal() {
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
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">
                    Student Portal
                  </h1>
                  <p
                    className="text-gray-600 animate-fade-in"
                    style={{ animationDelay: "0.2s" }}
                  >
                    Welcome back, Alex!
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
              Your Learning Journey Starts Here
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-slide-up">
              Choose Your{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent animate-pulse">
                Learning Path
              </span>
            </h2>
            <p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              Access all the tools and resources you need to accelerate your
              coding journey. From expert tutors to advanced code editors,
              everything is at your fingertips.
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
            {portalOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <div
                  key={option.id}
                  className="glass-card rounded-3xl p-8 shadow-lg border border-white/30 hover:shadow-xl transition-all duration-300 interactive-card group cursor-pointer animate-scale-in relative overflow-hidden"
                  onClick={() => handleNavigate(option.route)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${option.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-float shadow-lg`}
                      style={{ animationDelay: `${index * -0.5}s` }}
                    >
                      <Icon className="w-8 h-8 text-white" />
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
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>

                  {/* Hover effect gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-cyan-50 rounded-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>

                  {/* Floating decorative elements */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-300 animate-pulse"></div>
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-500 animate-bounce"></div>
                </div>
              );
            })}
          </div>

          {/* Quick Actions Section */}
          <div
            className="glass-card rounded-3xl p-8 shadow-lg border border-white/30 animate-slide-up"
            style={{ animationDelay: "1s" }}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2 animate-fade-in">
                Quick Actions
              </h3>
              <p
                className="text-gray-600 animate-fade-in"
                style={{ animationDelay: "1.2s" }}
              >
                Jump straight to the most popular features
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Button
                className="h-16 bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-700 hover:to-cyan-700 text-white rounded-xl text-lg hover-glow group animate-scale-in"
                onClick={() => handleNavigate("/student-dashboard?tab=editor")}
                style={{ animationDelay: "1.4s" }}
              >
                <FileCode className="w-5 h-5 mr-3 group-hover:animate-bounce" />
                Start Coding
              </Button>

              <Button
                variant="outline"
                className="h-16 glass border-2 border-white/30 hover:border-indigo-300 rounded-xl text-lg hover-glow group animate-scale-in"
                onClick={() => handleNavigate("/student-dashboard?tab=chat")}
                style={{ animationDelay: "1.5s" }}
              >
                <MessageSquare className="w-5 h-5 mr-3 group-hover:animate-bounce" />
                Chat Teacher
              </Button>

              <Button
                variant="outline"
                className="h-16 glass border-2 border-white/30 hover:border-indigo-300 rounded-xl text-lg hover-glow group animate-scale-in"
                onClick={() => handleNavigate("/student-dashboard?tab=meeting")}
                style={{ animationDelay: "1.6s" }}
              >
                <Video className="w-5 h-5 mr-3 group-hover:animate-bounce" />
                Join Meeting
              </Button>

              <Button
                variant="outline"
                className="h-16 glass border-2 border-white/30 hover:border-indigo-300 rounded-xl text-lg hover-glow group animate-scale-in"
                onClick={() => handleNavigate("/student-dashboard?tab=tutors")}
                style={{ animationDelay: "1.7s" }}
              >
                <Users className="w-5 h-5 mr-3 group-hover:animate-bounce" />
                Find Tutor
              </Button>
            </div>
          </div>

          {/* Achievement Preview */}
          <div
            className="mt-16 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-3xl p-8 text-white text-center relative overflow-hidden animate-slide-up"
            style={{ animationDelay: "1.8s" }}
          >
            <div className="max-w-2xl mx-auto relative z-10">
              <Award className="w-16 h-16 mx-auto mb-4 text-yellow-300 animate-float" />
              <h3
                className="text-2xl font-semibold mb-4 animate-fade-in"
                style={{ animationDelay: "2s" }}
              >
                Your Progress
              </h3>
              <p
                className="text-indigo-100 mb-6 animate-fade-in"
                style={{ animationDelay: "2.2s" }}
              >
                You're doing great! Keep up the momentum and achieve your coding
                goals.
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div
                  className="glass-dark rounded-xl p-4 hover-glow animate-scale-in"
                  style={{ animationDelay: "2.4s" }}
                >
                  <div className="text-2xl font-bold">24</div>
                  <div className="text-sm text-indigo-100">Sessions</div>
                </div>
                <div
                  className="glass-dark rounded-xl p-4 hover-glow animate-scale-in"
                  style={{ animationDelay: "2.5s" }}
                >
                  <div className="text-2xl font-bold">48h</div>
                  <div className="text-sm text-indigo-100">Study Time</div>
                </div>
                <div
                  className="glass-dark rounded-xl p-4 hover-glow animate-scale-in"
                  style={{ animationDelay: "2.6s" }}
                >
                  <div className="text-2xl font-bold">7</div>
                  <div className="text-sm text-indigo-100">Day Streak</div>
                </div>
              </div>
            </div>

            {/* Background decorative elements */}
            <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full animate-pulse"></div>
            <div className="absolute bottom-4 left-4 w-6 h-6 bg-yellow-400/30 rounded-full animate-bounce"></div>
            <div className="absolute top-1/2 right-8 w-4 h-4 bg-cyan-300/40 rounded-full animate-ping"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
