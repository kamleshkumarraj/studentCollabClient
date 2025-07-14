import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Clock,
  Plus,
  ChevronLeft,
  ChevronRight,
  Video,
  User,
  MapPin,
  Edit3,
  Trash2,
  CheckCircle,
  XCircle,
  AlertCircle,
} from "lucide-react";

const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const timeSlots = [
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
];

const sessions = [
  {
    id: 1,
    title: "React Fundamentals",
    student: "Alex Johnson",
    studentAvatar: "AJ",
    date: "2024-03-15",
    time: "10:00",
    duration: 60,
    status: "confirmed",
    type: "video",
    notes: "Review React hooks and state management",
    meetingLink: "https://meet.example.com/abc-123",
  },
  {
    id: 2,
    title: "JavaScript Advanced",
    student: "Maria Rodriguez",
    studentAvatar: "MR",
    date: "2024-03-15",
    time: "14:00",
    duration: 90,
    status: "pending",
    type: "video",
    notes: "Closures, async/await, and promises",
    meetingLink: "https://meet.example.com/def-456",
  },
  {
    id: 3,
    title: "Node.js Backend",
    student: "David Kim",
    studentAvatar: "DK",
    date: "2024-03-16",
    time: "11:00",
    duration: 60,
    status: "confirmed",
    type: "video",
    notes: "Building REST APIs with Express",
    meetingLink: "https://meet.example.com/ghi-789",
  },
  {
    id: 4,
    title: "Code Review Session",
    student: "Emily Chen",
    studentAvatar: "EC",
    date: "2024-03-16",
    time: "16:00",
    duration: 45,
    status: "completed",
    type: "video",
    notes: "Review mobile app project",
    meetingLink: "https://meet.example.com/jkl-012",
  },
];

const availabilitySlots = [
  { day: "Monday", slots: ["09:00-12:00", "14:00-18:00"] },
  { day: "Tuesday", slots: ["10:00-16:00"] },
  { day: "Wednesday", slots: ["09:00-12:00", "13:00-17:00"] },
  { day: "Thursday", slots: ["10:00-18:00"] },
  { day: "Friday", slots: ["09:00-15:00"] },
  { day: "Saturday", slots: ["10:00-14:00"] },
  { day: "Sunday", slots: [] },
];

export default function ScheduleManagement() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [viewMode, setViewMode] = useState<
    "calendar" | "list" | "availability"
  >("calendar");
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [showNewSessionModal, setShowNewSessionModal] = useState(false);

  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  // Generate calendar days
  const generateCalendarDays = () => {
    const firstDay = new Date(currentYear, currentMonth, 1);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];

    // Add empty cells for days before month starts
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }

    return days;
  };

  const formatDate = (year: number, month: number, day: number) => {
    return `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
  };

  const getSessionsForDate = (date: string) => {
    return sessions.filter((session) => session.date === date);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-green-100 text-green-700 border-green-200";
      case "pending":
        return "bg-yellow-100 text-yellow-700 border-yellow-200";
      case "completed":
        return "bg-blue-100 text-blue-700 border-blue-200";
      case "cancelled":
        return "bg-red-100 text-red-700 border-red-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "confirmed":
        return <CheckCircle className="w-4 h-4" />;
      case "pending":
        return <AlertCircle className="w-4 h-4" />;
      case "completed":
        return <CheckCircle className="w-4 h-4" />;
      case "cancelled":
        return <XCircle className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  const navigateMonth = (direction: "prev" | "next") => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      if (direction === "prev") {
        newDate.setMonth(newDate.getMonth() - 1);
      } else {
        newDate.setMonth(newDate.getMonth() + 1);
      }
      return newDate;
    });
  };

  const upcomingSessions = sessions
    .filter((session) => new Date(session.date) >= new Date())
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, 5);

  return (
    <div className="container mx-auto px-6 lg:px-8 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Schedule Management
            </h1>
            <p className="text-gray-600">
              Manage your teaching sessions and availability
            </p>
          </div>
          <div className="flex gap-3">
            <Button
              variant="outline"
              onClick={() => setShowNewSessionModal(true)}
            >
              <Plus className="w-4 h-4 mr-2" />
              New Session
            </Button>
            <Button className="bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-700 hover:to-cyan-700">
              <Calendar className="w-4 h-4 mr-2" />
              Set Availability
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Today</p>
                <p className="text-2xl font-bold text-gray-900">3</p>
                <p className="text-xs text-gray-500">sessions</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <Calendar className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">This Week</p>
                <p className="text-2xl font-bold text-gray-900">12</p>
                <p className="text-xs text-gray-500">sessions</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <Video className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Pending</p>
                <p className="text-2xl font-bold text-gray-900">4</p>
                <p className="text-xs text-gray-500">confirmations</p>
              </div>
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Hours/Week</p>
                <p className="text-2xl font-bold text-gray-900">24</p>
                <p className="text-xs text-gray-500">teaching time</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <Clock className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>
        </div>

        {/* View Mode Tabs */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 mb-8">
          <div className="flex border-b border-gray-200">
            {[
              { id: "calendar", label: "Calendar View" },
              { id: "list", label: "List View" },
              { id: "availability", label: "Availability" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setViewMode(tab.id as any)}
                className={`flex items-center space-x-2 px-6 py-4 font-medium transition-colors ${
                  viewMode === tab.id
                    ? "text-indigo-600 border-b-2 border-indigo-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Calendar View */}
          {viewMode === "calendar" && (
            <div className="p-6">
              {/* Calendar Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  {months[currentMonth]} {currentYear}
                </h3>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => navigateMonth("prev")}
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentDate(new Date())}
                  >
                    Today
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => navigateMonth("next")}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-1 mb-4">
                {weekDays.map((day) => (
                  <div
                    key={day}
                    className="p-3 text-center text-sm font-medium text-gray-500 bg-gray-50 rounded-lg"
                  >
                    {day}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-1">
                {generateCalendarDays().map((day, index) => {
                  if (!day) {
                    return <div key={index} className="p-3"></div>;
                  }

                  const dateStr = formatDate(currentYear, currentMonth, day);
                  const daySessions = getSessionsForDate(dateStr);
                  const isToday =
                    new Date().toDateString() ===
                    new Date(currentYear, currentMonth, day).toDateString();

                  return (
                    <div
                      key={day}
                      className={`p-2 min-h-[80px] border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 ${
                        isToday ? "bg-indigo-50 border-indigo-200" : "bg-white"
                      }`}
                      onClick={() => setSelectedDate(dateStr)}
                    >
                      <div
                        className={`text-sm font-medium mb-1 ${
                          isToday ? "text-indigo-600" : "text-gray-900"
                        }`}
                      >
                        {day}
                      </div>
                      <div className="space-y-1">
                        {daySessions.slice(0, 2).map((session) => (
                          <div
                            key={session.id}
                            className={`text-xs p-1 rounded border ${getStatusColor(session.status)}`}
                          >
                            {session.time} {session.student.split(" ")[0]}
                          </div>
                        ))}
                        {daySessions.length > 2 && (
                          <div className="text-xs text-gray-500">
                            +{daySessions.length - 2} more
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* List View */}
          {viewMode === "list" && (
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Upcoming Sessions
              </h3>
              <div className="space-y-4">
                {upcomingSessions.map((session) => (
                  <div
                    key={session.id}
                    className="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-semibold">
                          {session.studentAvatar}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">
                            {session.title}
                          </h4>
                          <p className="text-sm text-gray-600">
                            with {session.student}
                          </p>
                          <div className="flex items-center space-x-4 mt-1">
                            <span className="text-sm text-gray-500">
                              {new Date(session.date).toLocaleDateString()} at{" "}
                              {session.time}
                            </span>
                            <span className="text-sm text-gray-500">
                              {session.duration} min
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span
                          className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-full border ${getStatusColor(session.status)}`}
                        >
                          {getStatusIcon(session.status)}
                          <span className="ml-1 capitalize">
                            {session.status}
                          </span>
                        </span>
                        <Button variant="outline" size="sm">
                          <Edit3 className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Video className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    {session.notes && (
                      <div className="mt-3 pt-3 border-t border-gray-200">
                        <p className="text-sm text-gray-600">{session.notes}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Availability View */}
          {viewMode === "availability" && (
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Weekly Availability
              </h3>
              <div className="space-y-4">
                {availabilitySlots.map((daySlot) => (
                  <div key={daySlot.day} className="bg-gray-50 rounded-xl p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-20 font-medium text-gray-900">
                          {daySlot.day}
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {daySlot.slots.length > 0 ? (
                            daySlot.slots.map((slot, index) => (
                              <span
                                key={index}
                                className="px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full"
                              >
                                {slot}
                              </span>
                            ))
                          ) : (
                            <span className="px-3 py-1 bg-gray-200 text-gray-500 text-sm rounded-full">
                              Not available
                            </span>
                          )}
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        <Edit3 className="w-4 h-4 mr-2" />
                        Edit
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
