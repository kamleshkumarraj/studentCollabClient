import { Button } from "@/components/ui/button";
import {
  Code2,
  User,
  Users,
  UserPlus,
  Bell,
  Settings,
  LogOut,
  Search,
  FileCode,
  Clock,
  MessageSquare,
  Video,
} from "lucide-react";

interface DashboardNavigationProps {
  activeTab:
    | "profile"
    | "tutors"
    | "friends"
    | "editor"
    | "files"
    | "chat"
    | "meeting";
  setActiveTab: (
    tab:
      | "profile"
      | "tutors"
      | "friends"
      | "editor"
      | "files"
      | "chat"
      | "meeting",
  ) => void;
}

export default function DashboardNavigation({
  activeTab,
  setActiveTab,
}: DashboardNavigationProps) {
  const navItems = [
    { id: "profile" as const, label: "My Profile", icon: User },
    { id: "tutors" as const, label: "Find Tutors", icon: Users },
    { id: "friends" as const, label: "My Network", icon: UserPlus },
    { id: "chat" as const, label: "Teacher Chat", icon: MessageSquare },
    { id: "meeting" as const, label: "Meetings", icon: Video },
    { id: "editor" as const, label: "Code Editor", icon: FileCode },
    { id: "files" as const, label: "File History", icon: Clock },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">
                  Student Portal
                </h1>
                <p className="text-sm text-gray-500">Welcome back, Alex!</p>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="hidden md:flex items-center space-x-1 bg-gray-100 rounded-xl p-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;

                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                      isActive
                        ? "bg-white text-indigo-600 shadow-sm"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 transition-colors">
                <Search className="w-5 h-5" />
              </button>

              {/* Notifications */}
              <button className="relative p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 transition-colors">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  3
                </span>
              </button>

              {/* Settings */}
              <button
                onClick={() => (window.location.href = "/settings")}
                className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Settings className="w-5 h-5" />
              </button>

              {/* Profile Menu */}
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-semibold">A</span>
                </div>
                <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 transition-colors">
                  <LogOut className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden pb-4">
            <div className="flex space-x-1 bg-gray-100 rounded-xl p-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;

                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`flex-1 flex items-center justify-center space-x-1 px-2 py-2 rounded-lg transition-all duration-200 ${
                      isActive
                        ? "bg-white text-indigo-600 shadow-sm"
                        : "text-gray-600"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-xs font-medium">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
