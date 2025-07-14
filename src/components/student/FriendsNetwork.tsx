import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Search,
  UserPlus,
  MessageSquare,
  Video,
  MoreHorizontal,
  Users,
  Star,
  Clock,
  Code2,
  Award,
  Filter,
  UserCheck,
  UserX,
} from "lucide-react";

const friends = [
  {
    id: 1,
    name: "Maria Rodriguez",
    avatar: "MR",
    status: "online",
    specialty: "Frontend Development",
    currentStreak: 12,
    mutualFriends: 5,
    lastActive: "Active now",
    studyHours: 45,
    badges: ["JavaScript Pro", "React Expert"],
    currentProject: "E-commerce Platform",
    bio: "Passionate frontend developer focused on React and modern web technologies.",
    connectionDate: "3 months ago",
  },
  {
    id: 2,
    name: "David Kim",
    avatar: "DK",
    status: "away",
    specialty: "Backend Development",
    currentStreak: 8,
    mutualFriends: 3,
    lastActive: "30 minutes ago",
    studyHours: 62,
    badges: ["Node.js Master", "Database Expert"],
    currentProject: "API Development",
    bio: "Backend enthusiast working with Node.js, databases, and cloud services.",
    connectionDate: "2 months ago",
  },
  {
    id: 3,
    name: "Emily Chen",
    avatar: "EC",
    status: "online",
    specialty: "Mobile Development",
    currentStreak: 15,
    mutualFriends: 8,
    lastActive: "Active now",
    studyHours: 38,
    badges: ["React Native", "Flutter Pro"],
    currentProject: "Fitness Tracking App",
    bio: "Mobile app developer specializing in cross-platform solutions.",
    connectionDate: "4 months ago",
  },
  {
    id: 4,
    name: "James Wilson",
    avatar: "JW",
    status: "offline",
    specialty: "Data Science",
    currentStreak: 5,
    mutualFriends: 2,
    lastActive: "2 hours ago",
    studyHours: 72,
    badges: ["Python Expert", "ML Enthusiast"],
    currentProject: "Predictive Analytics",
    bio: "Data science student exploring machine learning and analytics.",
    connectionDate: "1 month ago",
  },
];

const suggestions = [
  {
    id: 5,
    name: "Lisa Park",
    avatar: "LP",
    specialty: "UI/UX Design",
    mutualFriends: 4,
    reason: "Studies similar subjects",
    badges: ["Design Pro", "Figma Expert"],
  },
  {
    id: 6,
    name: "Ryan Thompson",
    avatar: "RT",
    specialty: "DevOps",
    mutualFriends: 6,
    reason: "In your coding group",
    badges: ["Docker Expert", "Cloud Pro"],
  },
  {
    id: 7,
    name: "Sophie Martinez",
    avatar: "SM",
    specialty: "Game Development",
    mutualFriends: 3,
    reason: "Same learning path",
    badges: ["Unity Pro", "C# Master"],
  },
];

const studyGroups = [
  {
    id: 1,
    name: "React Developers United",
    members: 24,
    lastActivity: "2 hours ago",
    description: "Advanced React concepts and best practices",
    isJoined: true,
  },
  {
    id: 2,
    name: "JavaScript Fundamentals",
    members: 18,
    lastActivity: "5 hours ago",
    description: "Learning JavaScript from basics to advanced",
    isJoined: true,
  },
  {
    id: 3,
    name: "Full-Stack Bootcamp",
    members: 32,
    lastActivity: "1 day ago",
    description: "Complete full-stack development journey",
    isJoined: false,
  },
];

type TabType = "friends" | "suggestions" | "groups";

export default function FriendsNetwork() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<TabType>("friends");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFriends = friends.filter((friend) =>
    friend.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleMessageFriend = (friend: (typeof friends)[0]) => {
    navigate("/student-dashboard?tab=chat", {
      state: {
        chatWith: {
          id: friend.id,
          name: friend.name,
          specialty: friend.specialty,
          avatar: friend.avatar,
          isOnline: friend.status === "online",
        },
      },
    });
  };

  const handleVideoCall = (friend: (typeof friends)[0]) => {
    navigate("/student-dashboard?tab=meeting", {
      state: {
        action: "call",
        friend: {
          id: friend.id,
          name: friend.name,
          specialty: friend.specialty,
          avatar: friend.avatar,
          isOnline: friend.status === "online",
        },
      },
    });
  };

  const handleConnectSuggestion = (suggestion: (typeof suggestions)[0]) => {
    // In a real app, this would send a connection request
    alert(`Connection request sent to ${suggestion.name}!`);
  };

  const handleMessageSuggestion = (suggestion: (typeof suggestions)[0]) => {
    navigate("/student-dashboard?tab=chat", {
      state: {
        chatWith: {
          id: suggestion.id,
          name: suggestion.name,
          specialty: suggestion.specialty,
          avatar: suggestion.avatar,
          isOnline: true, // Assuming online for simplicity
        },
      },
    });
  };

  const tabs = [
    { id: "friends" as const, label: "My Friends", count: friends.length },
    {
      id: "suggestions" as const,
      label: "Suggestions",
      count: suggestions.length,
    },
    { id: "groups" as const, label: "Study Groups", count: studyGroups.length },
  ];

  return (
    <div className="container mx-auto px-6 lg:px-8 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            My Learning Network
          </h1>
          <p className="text-gray-600">
            Connect with fellow learners and grow together
          </p>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 mb-8">
          <div className="flex border-b border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-4 font-medium transition-colors ${
                  activeTab === tab.id
                    ? "text-indigo-600 border-b-2 border-indigo-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`px-2 py-1 text-xs rounded-full ${
                    activeTab === tab.id
                      ? "bg-indigo-100 text-indigo-600"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="p-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder={`Search ${activeTab}...`}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Content */}
        {activeTab === "friends" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredFriends.map((friend) => (
              <div
                key={friend.id}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="relative">
                      <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                        {friend.avatar}
                      </div>
                      <div
                        className={`absolute bottom-0 right-3 w-3 h-3 border-2 border-white rounded-full ${
                          friend.status === "online"
                            ? "bg-green-500"
                            : friend.status === "away"
                              ? "bg-yellow-500"
                              : "bg-gray-400"
                        }`}
                      ></div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {friend.name}
                      </h3>
                      <p className="text-sm text-indigo-600">
                        {friend.specialty}
                      </p>
                      <p className="text-xs text-gray-500">
                        {friend.lastActive}
                      </p>
                    </div>
                  </div>
                  <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                </div>

                {/* Bio */}
                <p className="text-sm text-gray-600 mb-4">{friend.bio}</p>

                {/* Badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {friend.badges.map((badge, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-indigo-100 text-indigo-700 text-xs font-medium rounded-full"
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-4 py-3 border-t border-gray-100">
                  <div className="text-center">
                    <div className="text-lg font-semibold text-gray-900">
                      {friend.currentStreak}
                    </div>
                    <div className="text-xs text-gray-500">Day Streak</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-semibold text-gray-900">
                      {friend.studyHours}h
                    </div>
                    <div className="text-xs text-gray-500">Study Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-semibold text-gray-900">
                      {friend.mutualFriends}
                    </div>
                    <div className="text-xs text-gray-500">Mutual</div>
                  </div>
                </div>

                {/* Current Project */}
                <div className="bg-gray-50 rounded-lg p-3 mb-4">
                  <div className="flex items-center mb-1">
                    <Code2 className="w-4 h-4 text-indigo-600 mr-2" />
                    <span className="text-sm font-medium text-gray-700">
                      Current Project
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">
                    {friend.currentProject}
                  </p>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <Button
                    onClick={() => handleMessageFriend(friend)}
                    className="flex-1 bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-700 hover:to-cyan-700"
                  >
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Message
                  </Button>
                  <Button
                    onClick={() => handleVideoCall(friend)}
                    variant="outline"
                    className="px-4"
                    title={`Video call ${friend.name}`}
                  >
                    <Video className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "suggestions" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {suggestions.map((suggestion) => (
              <div
                key={suggestion.id}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-semibold mx-auto mb-4">
                    {suggestion.avatar}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {suggestion.name}
                  </h3>
                  <p className="text-sm text-indigo-600 mb-2">
                    {suggestion.specialty}
                  </p>
                  <p className="text-xs text-gray-500 mb-4">
                    {suggestion.mutualFriends} mutual friends •{" "}
                    {suggestion.reason}
                  </p>

                  {/* Badges */}
                  <div className="flex flex-wrap justify-center gap-1 mb-4">
                    {suggestion.badges.map((badge, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <Button
                      onClick={() => handleConnectSuggestion(suggestion)}
                      className="flex-1"
                    >
                      <UserPlus className="w-4 h-4 mr-2" />
                      Connect
                    </Button>
                    <Button
                      onClick={() => handleMessageSuggestion(suggestion)}
                      variant="outline"
                      className="px-4"
                      title={`Message ${suggestion.name}`}
                    >
                      <MessageSquare className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "groups" && (
          <div className="space-y-6">
            {studyGroups.map((group) => (
              <div
                key={group.id}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {group.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-1">
                        {group.description}
                      </p>
                      <div className="flex items-center text-xs text-gray-500">
                        <Users className="w-4 h-4 mr-1" />
                        <span>{group.members} members</span>
                        <span className="mx-2">•</span>
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{group.lastActivity}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {group.isJoined ? (
                      <>
                        <Button variant="outline">
                          <MessageSquare className="w-4 h-4 mr-2" />
                          Open Chat
                        </Button>
                        <Button
                          variant="outline"
                          className="text-red-600 hover:text-red-700"
                        >
                          Leave
                        </Button>
                      </>
                    ) : (
                      <Button>
                        <UserPlus className="w-4 h-4 mr-2" />
                        Join Group
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Discover More Groups */}
            <div className="text-center">
              <Button variant="outline" className="px-8">
                <Search className="w-4 h-4 mr-2" />
                Discover More Groups
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
