import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Video,
  VideoOff,
  Mic,
  MicOff,
  PhoneOff,
  Monitor,
  MonitorOff,
  MessageSquare,
  Users,
  Settings,
  MoreVertical,
  Hand,
  Camera,
  Volume2,
  VolumeX,
  Maximize,
  Minimize,
  Calendar,
  Clock,
  User,
} from "lucide-react";

interface Meeting {
  id: string;
  title: string;
  teacherName: string;
  teacherAvatar: string;
  subject: string;
  startTime: Date;
  duration: number; // in minutes
  status: "scheduled" | "ongoing" | "completed";
  participants: number;
  type: "one-on-one" | "group";
}

interface Participant {
  id: string;
  name: string;
  avatar: string;
  role: "student" | "teacher";
  isVideoOn: boolean;
  isAudioOn: boolean;
  isHandRaised: boolean;
  isSpeaking: boolean;
  isPresenting: boolean;
}

const mockMeetings: Meeting[] = [
  {
    id: "1",
    title: "JavaScript Debugging Session",
    teacherName: "Dr. Sarah Williams",
    teacherAvatar: "SW",
    subject: "JavaScript",
    startTime: new Date(Date.now() + 1000 * 60 * 30), // 30 minutes from now
    duration: 60,
    status: "scheduled",
    participants: 1,
    type: "one-on-one",
  },
  {
    id: "2",
    title: "React Components Workshop",
    teacherName: "Prof. Mike Chen",
    teacherAvatar: "MC",
    subject: "React",
    startTime: new Date(Date.now() - 1000 * 60 * 15), // Started 15 minutes ago
    duration: 90,
    status: "ongoing",
    participants: 5,
    type: "group",
  },
  {
    id: "3",
    title: "Data Structures Study Group",
    teacherName: "Dr. Emma Davis",
    teacherAvatar: "ED",
    subject: "Algorithms",
    startTime: new Date(Date.now() + 1000 * 60 * 60 * 2), // 2 hours from now
    duration: 120,
    status: "scheduled",
    participants: 8,
    type: "group",
  },
];

const mockParticipants: Participant[] = [
  {
    id: "teacher1",
    name: "Prof. Mike Chen",
    avatar: "MC",
    role: "teacher",
    isVideoOn: true,
    isAudioOn: true,
    isHandRaised: false,
    isSpeaking: false,
    isPresenting: true,
  },
  {
    id: "student1",
    name: "Alex Johnson",
    avatar: "AJ",
    role: "student",
    isVideoOn: true,
    isAudioOn: true,
    isHandRaised: false,
    isSpeaking: false,
    isPresenting: false,
  },
  {
    id: "student2",
    name: "Maria Rodriguez",
    avatar: "MR",
    role: "student",
    isVideoOn: false,
    isAudioOn: true,
    isHandRaised: true,
    isSpeaking: false,
    isPresenting: false,
  },
  {
    id: "student3",
    name: "David Kim",
    avatar: "DK",
    role: "student",
    isVideoOn: true,
    isAudioOn: false,
    isHandRaised: false,
    isSpeaking: false,
    isPresenting: false,
  },
];

export default function MeetingInterface() {
  const [currentMeeting, setCurrentMeeting] = useState<Meeting | null>(null);
  const [participants, setParticipants] =
    useState<Participant[]>(mockParticipants);
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isAudioOn, setIsAudioOn] = useState(true);
  const [isScreenSharing, setIsScreenSharing] = useState(false);
  const [isHandRaised, setIsHandRaised] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [chatMessages, setChatMessages] = useState<any[]>([]);
  const [newChatMessage, setNewChatMessage] = useState("");

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Simulate getting user media
    if (videoRef.current && isVideoOn) {
      // In a real app, you would use navigator.mediaDevices.getUserMedia()
      // videoRef.current.srcObject = stream;
    }
  }, [isVideoOn]);

  const joinMeeting = (meeting: Meeting) => {
    setCurrentMeeting(meeting);
  };

  const leaveMeeting = () => {
    setCurrentMeeting(null);
    setIsVideoOn(true);
    setIsAudioOn(true);
    setIsScreenSharing(false);
    setIsHandRaised(false);
    setIsChatOpen(false);
  };

  const toggleVideo = () => {
    setIsVideoOn(!isVideoOn);
  };

  const toggleAudio = () => {
    setIsAudioOn(!isAudioOn);
  };

  const toggleScreenShare = () => {
    setIsScreenSharing(!isScreenSharing);
  };

  const toggleHandRaise = () => {
    setIsHandRaised(!isHandRaised);
  };

  const sendChatMessage = () => {
    if (!newChatMessage.trim()) return;

    const message = {
      id: Date.now().toString(),
      sender: "Alex Johnson",
      content: newChatMessage,
      timestamp: new Date(),
    };

    setChatMessages([...chatMessages, message]);
    setNewChatMessage("");
  };

  const formatMeetingTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const formatMeetingDate = (date: Date) => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    if (date.toDateString() === today.toDateString()) {
      return "Today";
    } else if (date.toDateString() === tomorrow.toDateString()) {
      return "Tomorrow";
    } else {
      return date.toLocaleDateString();
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "scheduled":
        return "bg-blue-100 text-blue-800";
      case "ongoing":
        return "bg-green-100 text-green-800";
      case "completed":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  if (currentMeeting) {
    return (
      <div className="h-screen bg-gray-900 flex flex-col">
        {/* Meeting Header */}
        <div className="bg-gray-800 text-white p-4 flex items-center justify-between">
          <div className="flex items-center">
            <h2 className="text-lg font-semibold mr-4">
              {currentMeeting.title}
            </h2>
            <span className="px-2 py-1 bg-green-600 text-xs rounded-full">
              {currentMeeting.status === "ongoing" ? "LIVE" : "SCHEDULED"}
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-300">
              {participants.length} participant
              {participants.length !== 1 ? "s" : ""}
            </span>
            <Button
              size="sm"
              variant="outline"
              onClick={() => setIsChatOpen(!isChatOpen)}
              className="text-white border-white hover:bg-white hover:text-gray-900"
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              Chat
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-gray-900"
            >
              <Users className="w-4 h-4 mr-2" />
              Participants
            </Button>
          </div>
        </div>

        <div className="flex-1 flex">
          {/* Video Area */}
          <div className="flex-1 relative">
            {/* Main Video/Screen Share */}
            <div className="h-full bg-black relative">
              {isScreenSharing ? (
                <div className="h-full flex items-center justify-center">
                  <div className="text-center text-white">
                    <Monitor className="w-16 h-16 mx-auto mb-4" />
                    <p className="text-lg">Screen Sharing Active</p>
                    <p className="text-gray-400">
                      Prof. Mike Chen is sharing their screen
                    </p>
                  </div>
                </div>
              ) : (
                <div className="h-full flex items-center justify-center">
                  <div className="w-full max-w-2xl bg-gray-800 rounded-lg aspect-video relative">
                    {isVideoOn ? (
                      <video
                        ref={videoRef}
                        autoPlay
                        muted
                        className="w-full h-full object-cover rounded-lg"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-white">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-2">
                            <User className="w-8 h-8" />
                          </div>
                          <p>Prof. Mike Chen</p>
                        </div>
                      </div>
                    )}
                    {participants.find((p) => p.id === "teacher1")
                      ?.isSpeaking && (
                      <div className="absolute top-4 left-4 bg-green-500 text-white px-2 py-1 rounded text-xs">
                        Speaking
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Participant Thumbnails */}
              <div className="absolute bottom-4 right-4 flex space-x-2">
                {participants.slice(1).map((participant) => (
                  <div
                    key={participant.id}
                    className="w-32 h-24 bg-gray-800 rounded-lg relative overflow-hidden"
                  >
                    {participant.isVideoOn ? (
                      <div className="w-full h-full bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center text-white font-semibold">
                        {participant.avatar}
                      </div>
                    ) : (
                      <div className="w-full h-full bg-gray-700 flex items-center justify-center text-white">
                        <User className="w-6 h-6" />
                      </div>
                    )}
                    <div className="absolute bottom-1 left-1 text-white text-xs bg-black bg-opacity-50 px-1 rounded">
                      {participant.name.split(" ")[0]}
                    </div>
                    {participant.isHandRaised && (
                      <div className="absolute top-1 right-1">
                        <Hand className="w-4 h-4 text-yellow-500" />
                      </div>
                    )}
                    {!participant.isAudioOn && (
                      <div className="absolute top-1 left-1">
                        <MicOff className="w-4 h-4 text-red-500" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Meeting Controls */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
              <div className="bg-gray-800 rounded-full px-6 py-3 flex items-center space-x-4">
                <Button
                  size="sm"
                  onClick={toggleAudio}
                  className={`rounded-full w-12 h-12 ${
                    isAudioOn
                      ? "bg-gray-600 hover:bg-gray-700"
                      : "bg-red-600 hover:bg-red-700"
                  }`}
                >
                  {isAudioOn ? (
                    <Mic className="w-5 h-5" />
                  ) : (
                    <MicOff className="w-5 h-5" />
                  )}
                </Button>

                <Button
                  size="sm"
                  onClick={toggleVideo}
                  className={`rounded-full w-12 h-12 ${
                    isVideoOn
                      ? "bg-gray-600 hover:bg-gray-700"
                      : "bg-red-600 hover:bg-red-700"
                  }`}
                >
                  {isVideoOn ? (
                    <Video className="w-5 h-5" />
                  ) : (
                    <VideoOff className="w-5 h-5" />
                  )}
                </Button>

                <Button
                  size="sm"
                  onClick={toggleScreenShare}
                  className={`rounded-full w-12 h-12 ${
                    isScreenSharing
                      ? "bg-blue-600 hover:bg-blue-700"
                      : "bg-gray-600 hover:bg-gray-700"
                  }`}
                >
                  {isScreenSharing ? (
                    <MonitorOff className="w-5 h-5" />
                  ) : (
                    <Monitor className="w-5 h-5" />
                  )}
                </Button>

                <Button
                  size="sm"
                  onClick={toggleHandRaise}
                  className={`rounded-full w-12 h-12 ${
                    isHandRaised
                      ? "bg-yellow-600 hover:bg-yellow-700"
                      : "bg-gray-600 hover:bg-gray-700"
                  }`}
                >
                  <Hand className="w-5 h-5" />
                </Button>

                <Button
                  size="sm"
                  onClick={() => setIsMuted(!isMuted)}
                  className="rounded-full w-12 h-12 bg-gray-600 hover:bg-gray-700"
                >
                  {isMuted ? (
                    <VolumeX className="w-5 h-5" />
                  ) : (
                    <Volume2 className="w-5 h-5" />
                  )}
                </Button>

                <Button
                  size="sm"
                  onClick={leaveMeeting}
                  className="rounded-full w-12 h-12 bg-red-600 hover:bg-red-700"
                >
                  <PhoneOff className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Chat Sidebar */}
          {isChatOpen && (
            <div className="w-80 bg-white border-l border-gray-200 flex flex-col">
              <div className="p-4 border-b border-gray-200">
                <h3 className="font-semibold text-gray-900">Meeting Chat</h3>
              </div>

              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {chatMessages.map((message) => (
                  <div key={message.id} className="text-sm">
                    <div className="font-medium text-gray-900">
                      {message.sender}
                    </div>
                    <div className="text-gray-600">{message.content}</div>
                    <div className="text-xs text-gray-400">
                      {message.timestamp.toLocaleTimeString()}
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 border-t border-gray-200">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={newChatMessage}
                    onChange={(e) => setNewChatMessage(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && sendChatMessage()}
                    placeholder="Type a message..."
                    className="flex-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                  />
                  <Button size="sm" onClick={sendChatMessage}>
                    Send
                  </Button>
                </div>
              </div>
            </div>
          )}
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
            Video Meetings
          </h1>
          <p className="text-gray-600">Join live sessions with your teachers</p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Button className="h-20 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white">
            <Video className="w-6 h-6 mr-3" />
            Start Instant Meeting
          </Button>
          <Button variant="outline" className="h-20">
            <Calendar className="w-6 h-6 mr-3" />
            Schedule Meeting
          </Button>
          <Button variant="outline" className="h-20">
            <MessageSquare className="w-6 h-6 mr-3" />
            Join by ID
          </Button>
        </div>

        {/* Meetings List */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">
              Your Meetings
            </h2>
          </div>
          <div className="divide-y divide-gray-100">
            {mockMeetings.map((meeting) => (
              <div
                key={meeting.id}
                className="p-6 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                      {meeting.teacherAvatar}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {meeting.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <span>{meeting.teacherName}</span>
                        <span>•</span>
                        <span>{meeting.subject}</span>
                        <span>•</span>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {meeting.duration} min
                        </span>
                        <span>•</span>
                        <span className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {meeting.participants} participant
                          {meeting.participants !== 1 ? "s" : ""}
                        </span>
                      </div>
                      <div className="flex items-center mt-2 space-x-2">
                        <span className="text-sm text-gray-600">
                          {formatMeetingDate(meeting.startTime)} at{" "}
                          {formatMeetingTime(meeting.startTime)}
                        </span>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(meeting.status)}`}
                        >
                          {meeting.status}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {meeting.status === "ongoing" && (
                      <Button
                        onClick={() => joinMeeting(meeting)}
                        className="bg-green-600 hover:bg-green-700"
                      >
                        <Video className="w-4 h-4 mr-2" />
                        Join Now
                      </Button>
                    )}
                    {meeting.status === "scheduled" && (
                      <Button
                        variant="outline"
                        onClick={() => joinMeeting(meeting)}
                      >
                        <Video className="w-4 h-4 mr-2" />
                        Join
                      </Button>
                    )}
                    <Button size="sm" variant="outline">
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
