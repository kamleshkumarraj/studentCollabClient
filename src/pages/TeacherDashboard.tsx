import { useState, useEffect } from "react";
import TeacherProfile from "@/components/teacher/TeacherProfile";
import StudentDirectory from "@/components/teacher/StudentDirectory";
import ScheduleManagement from "@/components/teacher/ScheduleManagement";
import ChatInterface from "@/components/teacher/ChatInterface";
import MeetingInterface from "@/components/teacher/MeetingInterface";
import CourseManager from "@/components/teacher/CourseManager";
import Analytics from "@/components/teacher/Analytics";
import DashboardNavigation from "@/components/teacher/DashboardNavigation";

type ActiveTab =
  | "profile"
  | "students"
  | "schedule"
  | "chat"
  | "meeting"
  | "courses"
  | "analytics";

export default function TeacherDashboard() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("profile");

  // Get tab from URL parameter on mount
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const tabParam = urlParams.get("tab");
    if (
      tabParam &&
      [
        "profile",
        "students",
        "schedule",
        "chat",
        "meeting",
        "courses",
        "analytics",
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
        return <TeacherProfile />;
      case "students":
        return <StudentDirectory />;
      case "schedule":
        return <ScheduleManagement />;
      case "chat":
        return <ChatInterface />;
      case "meeting":
        return <MeetingInterface />;
      case "courses":
        return <CourseManager />;
      case "analytics":
        return <Analytics />;
      default:
        return <TeacherProfile />;
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
