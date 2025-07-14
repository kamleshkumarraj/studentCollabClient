import { Button } from "@/components/ui/button";
import {
  User,
  Users,
  Calendar,
  MessageSquare,
  Video,
  BookOpen,
  BarChart3,
  GraduationCap,
  Settings,
  LogOut,
  Bell,
} from "lucide-react";

type ActiveTab =
  | "profile"
  | "students"
  | "schedule"
  | "chat"
  | "meeting"
  | "courses"
  | "analytics";

interface DashboardNavigationProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
}

const navigationItems = [
  {
    id: "profile" as const,
    label: "My Profile",
    icon: User,
    description: "Manage your professional profile",
  },
  {
    id: "students" as const,
    label: "My Students",
    icon: Users,
    description: "View and manage students",
  },
  {
    id: "schedule" as const,
    label: "Schedule",
    icon: Calendar,
    description: "Manage your teaching calendar",
  },
  {
    id: "chat" as const,
    label: "Messages",
    icon: MessageSquare,
    description: "Student communications",
  },
  {
    id: "meeting" as const,
    label: "Sessions",
    icon: Video,
    description: "Live teaching sessions",
  },
  {
    id: "courses" as const,
    label: "Courses",
    icon: BookOpen,
    description: "Course management",
  },
  {
    id: "analytics" as const,
    label: "Analytics",
    icon: BarChart3,
    description: "Teaching performance metrics",
  },
];

export default function DashboardNavigation({
  activeTab,
  setActiveTab,
}: DashboardNavigationProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Title */}
          <div className="flex items-center">
            <div
              className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4 cursor-pointer"
              onClick={() => (window.location.href = "/teacher-portal")}
            >
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-gray-900">
                Teacher Dashboard
              </h1>
              <p className="text-sm text-gray-500">Welcome back, Dr. Sarah</p>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-indigo-100 text-indigo-700 shadow-sm"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                  }`}
                  title={item.description}
                >
                  <Icon
                    className={`w-4 h-4 ${isActive ? "text-indigo-600" : "text-gray-500"}`}
                  />
                  <span className="hidden xl:inline">{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-3">
            {/* Notifications */}
            <button className="relative p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
              <Bell className="w-5 h-5" />
              <div className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></div>
            </button>

            {/* Settings */}
            <button
              onClick={() => (window.location.href = "/settings")}
              className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Settings className="w-5 h-5" />
            </button>

            {/* Profile Menu */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                DS
              </div>
            </div>

            {/* Logout */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => (window.location.href = "/")}
              className="text-gray-600 hover:text-gray-700"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden pb-4">
          <div className="flex space-x-1 overflow-x-auto">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex flex-col items-center space-y-1 px-3 py-2 rounded-lg text-xs font-medium transition-all duration-200 whitespace-nowrap ${
                    isActive
                      ? "bg-indigo-100 text-indigo-700"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                  }`}
                >
                  <Icon
                    className={`w-4 h-4 ${isActive ? "text-indigo-600" : "text-gray-500"}`}
                  />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
