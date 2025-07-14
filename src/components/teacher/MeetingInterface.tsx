import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Video,
  VideoOff,
  Mic,
  MicOff,
  Monitor,
  MonitorOff,
  PhoneOff,
  Settings,
  Users,
  MessageSquare,
  MoreVertical,
  Volume2,
  VolumeX,
  Hand,
  Maximize,
  Minimize,
  Circle,
  Calendar,
  Clock,
  User,
  Copy,
} from "lucide-react";

const upcomingSessions = [
  {
    id: 1,
    title: "React Fundamentals",
    student: "Alex Johnson",
    studentAvatar: "AJ",
    time: "10:00 AM",
    duration: "60 min",
    status: "starting-soon",
    meetingLink: "https://meet.example.com/abc-123",
  },
  {
    id: 2,
    title: "JavaScript Advanced",
    student: "Maria Rodriguez",
    studentAvatar: "MR",
    time: "2:00 PM",
    duration: "90 min",
    status: "scheduled",
    meetingLink: "https://meet.example.com/def-456",
  },
  {
    id: 3,
    title: "Node.js Backend",
    student: "David Kim",
    studentAvatar: "DK",
    time: "4:00 PM",
    duration: "60 min",
    status: "scheduled",
    meetingLink: "https://meet.example.com/ghi-789",
  },
];

const ongoingSessions = [
  {
    id: 1,
    title: "Code Review Session",
    student: "Emily Chen",
    studentAvatar: "EC",
    startTime: "3:30 PM",
    duration: "45 min",
    participants: 2,
    isRecording: true,
  },
];

const participants = [
  {
    id: 1,
    name: "Alex Johnson",
    avatar: "AJ",
    isMuted: false,
    isVideoOn: true,
    isHost: false,
    isHandRaised: false,
    connectionQuality: "good",
  },
  {
    id: 2,
    name: "Dr. Sarah (You)",
    avatar: "DS",
    isMuted: false,
    isVideoOn: true,
    isHost: true,
    isHandRaised: false,
    connectionQuality: "excellent",
  },
];

export default function MeetingInterface() {
  const location = useLocation();
  const [activeView, setActiveView] = useState<"lobby" | "meeting">("lobby");
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isScreenSharing, setIsScreenSharing] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [showParticipants, setShowParticipants] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [selectedSession, setSelectedSession] = useState(upcomingSessions[0]);

  // Handle navigation state for starting sessions
  useEffect(() => {
    if (location.state?.action === "start") {
      setActiveView("meeting");
    } else if (location.state?.action === "schedule") {
      // Auto-select the tutor's session for scheduling
      const { tutor } = location.state;
      // You would typically create a new session here
    }
  }, [location.state]);

  const startMeeting = (session: (typeof upcomingSessions)[0]) => {
    setSelectedSession(session);
    setActiveView("meeting");
  };

  const endMeeting = () => {
    setActiveView("lobby");
    setIsMuted(false);
    setIsVideoOn(true);
    setIsScreenSharing(false);
    setIsRecording(false);
    setShowParticipants(false);
    setShowChat(false);
  };

  const copyMeetingLink = (link: string) => {
    navigator.clipboard.writeText(link);
    // You could show a toast notification here
  };

  if (activeView === "meeting") {
    return (
      <div className="h-screen bg-gray-900 flex flex-col">
        {/* Meeting Header */}
        <div className="bg-gray-800 px-6 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h2 className="text-white font-semibold">
              {selectedSession.title}
            </h2>
            <span className="text-gray-300 text-sm">
              with {selectedSession.student}
            </span>
            {isRecording && (
              <div className="flex items-center space-x-2 bg-red-600 px-3 py-1 rounded-full">
                <Circle className="w-3 h-3 text-white fill-current" />
                <span className="text-white text-xs font-medium">REC</span>
              </div>
            )}
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-gray-300 text-sm">
              {new Date().toLocaleTimeString()}
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowParticipants(!showParticipants)}
            >
              <Users className="w-4 h-4 mr-1" />
              {participants.length}
            </Button>
          </div>
        </div>

        {/* Main Meeting Area */}
        <div className="flex-1 flex">
          {/* Video Grid */}
          <div className="flex-1 p-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-full">
              {participants.map((participant) => (
                <div
                  key={participant.id}
                  className="relative bg-gray-800 rounded-lg overflow-hidden"
                >
                  {/* Video placeholder */}
                  <div className="w-full h-full bg-gradient-to-br from-indigo-600 to-cyan-600 flex items-center justify-center">
                    {participant.isVideoOn ? (
                      <div className="w-32 h-32 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-white text-3xl font-semibold">
                        {participant.avatar}
                      </div>
                    ) : (
                      <div className="w-32 h-32 bg-gray-700 rounded-full flex items-center justify-center text-white text-3xl font-semibold">
                        {participant.avatar}
                      </div>
                    )}
                  </div>

                  {/* Participant Info */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-black bg-opacity-50 rounded-lg px-3 py-2 flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-white font-medium">
                          {participant.name}
                        </span>
                        {participant.isHost && (
                          <span className="bg-indigo-600 text-white text-xs px-2 py-1 rounded">
                            Host
                          </span>
                        )}
                      </div>
                      <div className="flex items-center space-x-1">
                        {participant.isHandRaised && (
                          <Hand className="w-4 h-4 text-yellow-400" />
                        )}
                        {!participant.isMuted ? (
                          <Mic className="w-4 h-4 text-green-400" />
                        ) : (
                          <MicOff className="w-4 h-4 text-red-400" />
                        )}
                        {!participant.isVideoOn && (
                          <VideoOff className="w-4 h-4 text-red-400" />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Connection Quality */}
                  <div className="absolute top-4 right-4">
                    <div
                      className={`w-3 h-3 rounded-full ${
                        participant.connectionQuality === "excellent"
                          ? "bg-green-400"
                          : participant.connectionQuality === "good"
                            ? "bg-yellow-400"
                            : "bg-red-400"
                      }`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Participants Sidebar */}
          {showParticipants && (
            <div className="w-80 bg-gray-800 border-l border-gray-700 p-4">
              <h3 className="text-white font-semibold mb-4">
                Participants ({participants.length})
              </h3>
              <div className="space-y-3">
                {participants.map((participant) => (
                  <div
                    key={participant.id}
                    className="flex items-center justify-between p-3 bg-gray-700 rounded-lg"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                        {participant.avatar}
                      </div>
                      <div>
                        <div className="text-white font-medium">
                          {participant.name}
                        </div>
                        {participant.isHost && (
                          <div className="text-xs text-indigo-400">Host</div>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {participant.isHandRaised && (
                        <Hand className="w-4 h-4 text-yellow-400" />
                      )}
                      {!participant.isMuted ? (
                        <Mic className="w-4 h-4 text-green-400" />
                      ) : (
                        <MicOff className="w-4 h-4 text-gray-400" />
                      )}
                      {!participant.isVideoOn && (
                        <VideoOff className="w-4 h-4 text-gray-400" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Chat Sidebar */}
          {showChat && (
            <div className="w-80 bg-gray-800 border-l border-gray-700 p-4 flex flex-col">
              <h3 className="text-white font-semibold mb-4">Meeting Chat</h3>
              <div className="flex-1 space-y-3 overflow-y-auto">
                <div className="bg-gray-700 rounded-lg p-3">
                  <div className="text-sm text-gray-300 mb-1">Alex Johnson</div>
                  <div className="text-white">
                    Thanks for the clear explanation!
                  </div>
                </div>
                <div className="bg-indigo-600 rounded-lg p-3">
                  <div className="text-sm text-indigo-200 mb-1">You</div>
                  <div className="text-white">
                    You're welcome! Any questions?
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="w-full px-3 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
            </div>
          )}
        </div>

        {/* Meeting Controls */}
        <div className="bg-gray-800 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Button
                variant={isMuted ? "destructive" : "outline"}
                size="sm"
                onClick={() => setIsMuted(!isMuted)}
                className="bg-gray-700 border-gray-600 text-white hover:bg-gray-600"
              >
                {isMuted ? (
                  <MicOff className="w-4 h-4" />
                ) : (
                  <Mic className="w-4 h-4" />
                )}
              </Button>

              <Button
                variant={!isVideoOn ? "destructive" : "outline"}
                size="sm"
                onClick={() => setIsVideoOn(!isVideoOn)}
                className="bg-gray-700 border-gray-600 text-white hover:bg-gray-600"
              >
                {isVideoOn ? (
                  <Video className="w-4 h-4" />
                ) : (
                  <VideoOff className="w-4 h-4" />
                )}
              </Button>

              <Button
                variant={isScreenSharing ? "default" : "outline"}
                size="sm"
                onClick={() => setIsScreenSharing(!isScreenSharing)}
                className="bg-gray-700 border-gray-600 text-white hover:bg-gray-600"
              >
                {isScreenSharing ? (
                  <MonitorOff className="w-4 h-4" />
                ) : (
                  <Monitor className="w-4 h-4" />
                )}
              </Button>

              <Button
                variant={isRecording ? "destructive" : "outline"}
                size="sm"
                onClick={() => setIsRecording(!isRecording)}
                className="bg-gray-700 border-gray-600 text-white hover:bg-gray-600"
              >
                <Circle className="w-4 h-4" />
              </Button>
            </div>

            <div className="flex items-center space-x-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowChat(!showChat)}
                className="bg-gray-700 border-gray-600 text-white hover:bg-gray-600"
              >
                <MessageSquare className="w-4 h-4" />
              </Button>

              <Button
                variant="outline"
                size="sm"
                className="bg-gray-700 border-gray-600 text-white hover:bg-gray-600"
              >
                <Settings className="w-4 h-4" />
              </Button>

              <Button
                variant="destructive"
                size="sm"
                onClick={endMeeting}
                className="bg-red-600 hover:bg-red-700"
              >
                <PhoneOff className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 lg:px-8 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Teaching Sessions
          </h1>
          <p className="text-gray-600">
            Host live video sessions with your students
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Today</p>
                <p className="text-2xl font-bold text-gray-900">3</p>
                <p className="text-xs text-gray-500">sessions</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <Video className="w-6 h-6 text-blue-600" />
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
                <Calendar className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Avg Duration
                </p>
                <p className="text-2xl font-bold text-gray-900">68</p>
                <p className="text-xs text-gray-500">minutes</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <Clock className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Now</p>
                <p className="text-2xl font-bold text-gray-900">1</p>
                <p className="text-xs text-gray-500">session</p>
              </div>
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-red-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Ongoing Sessions */}
        {ongoingSessions.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Ongoing Sessions
            </h2>
            <div className="space-y-4">
              {ongoingSessions.map((session) => (
                <div
                  key={session.id}
                  className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-6 border border-green-200"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-semibold">
                        {session.studentAvatar}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          {session.title}
                        </h3>
                        <p className="text-gray-600">with {session.student}</p>
                        <div className="flex items-center space-x-4 mt-1">
                          <span className="text-sm text-gray-500">
                            Started at {session.startTime}
                          </span>
                          <span className="text-sm text-gray-500">
                            Duration: {session.duration}
                          </span>
                          <span className="text-sm text-gray-500">
                            {session.participants} participants
                          </span>
                          {session.isRecording && (
                            <span className="inline-flex items-center px-2 py-1 bg-red-100 text-red-700 text-xs font-medium rounded-full">
                              <Circle className="w-3 h-3 mr-1 fill-current" />
                              Recording
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <Button
                      onClick={() => startMeeting(session as any)}
                      className="bg-green-600 hover:bg-green-700"
                    >
                      Join Session
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Upcoming Sessions */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Upcoming Sessions
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {upcomingSessions.map((session) => (
              <div
                key={session.id}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-semibold">
                      {session.studentAvatar}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {session.title}
                      </h3>
                      <p className="text-gray-600">with {session.student}</p>
                    </div>
                  </div>
                  <span
                    className={`px-3 py-1 text-xs font-medium rounded-full ${
                      session.status === "starting-soon"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {session.status === "starting-soon"
                      ? "Starting Soon"
                      : "Scheduled"}
                  </span>
                </div>

                <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {session.time}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {session.duration}
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-3 mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Meeting Link:</span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => copyMeetingLink(session.meetingLink)}
                    >
                      <Copy className="w-4 h-4 mr-1" />
                      Copy
                    </Button>
                  </div>
                  <div className="text-xs text-gray-500 mt-1 font-mono">
                    {session.meetingLink}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button
                    onClick={() => startMeeting(session)}
                    className="flex-1 bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-700 hover:to-cyan-700"
                    disabled={session.status !== "starting-soon"}
                  >
                    <Video className="w-4 h-4 mr-2" />
                    {session.status === "starting-soon"
                      ? "Start Session"
                      : "Join at Time"}
                  </Button>
                  <Button variant="outline" className="px-4">
                    <MoreVertical className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Start Meeting */}
        <div className="mt-8 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-semibold mb-4">Start Instant Session</h3>
          <p className="text-indigo-100 mb-6">
            Need to start an impromptu session? Create an instant meeting room.
          </p>
          <Button
            onClick={() => setActiveView("meeting")}
            className="bg-white text-indigo-600 hover:bg-gray-100"
          >
            <Video className="w-4 h-4 mr-2" />
            Start Instant Meeting
          </Button>
        </div>
      </div>
    </div>
  );
}
