import { useState, useEffect } from "react";
import StudentProfile from "@/components/student/StudentProfile";
import TutorDirectory from "@/components/student/TutorDirectory";
import FriendsNetwork from "@/components/student/FriendsNetwork";
import CodeEditor from "@/components/student/CodeEditor";
import FileHistory from "@/components/student/FileHistory";
import ChatInterface from "@/components/student/ChatInterface";
import MeetingInterface from "@/components/student/MeetingInterface";
import DashboardNavigation from "@/components/student/DashboardNavigation";

type ActiveTab =
  | "profile"
  | "tutors"
  | "friends"
  | "editor"
  | "files"
  | "chat"
  | "meeting";

export default function StudentDashboard() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("profile");

  // Get tab from URL parameter on mount
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const tabParam = urlParams.get("tab");
    if (
      tabParam &&
      [
        "profile",
        "tutors",
        "friends",
        "editor",
        "files",
        "chat",
        "meeting",
      ].includes(tabParam)
    ) {
      setActiveTab(tabParam as ActiveTab);
    }
  }, []);

  // Update URL when tab changes
  const handleTabChange = (tab: ActiveTab) => {
    setActiveTab(tab);
    const url = new URL(window.location.href);
    url.searchParams.set("tab", tab);
    window.history.pushState({}, "", url.toString());
  };

  const renderActiveComponent = () => {
    switch (activeTab) {
      case "profile":
        return <StudentProfile />;
      case "tutors":
        return <TutorDirectory />;
      case "friends":
        return <FriendsNetwork />;
      case "editor":
        return <CodeEditor />;
      case "files":
        return <FileHistory />;
      case "chat":
        return <ChatInterface />;
      case "meeting":
        return <MeetingInterface />;
      default:
        return <StudentProfile />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardNavigation
        activeTab={activeTab}
        setActiveTab={handleTabChange}
      />
      <main className="pt-20">{renderActiveComponent()}</main>
    </div>
  );
}
