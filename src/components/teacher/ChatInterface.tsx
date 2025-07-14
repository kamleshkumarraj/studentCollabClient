import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Search,
  Send,
  Paperclip,
  MoreVertical,
  Phone,
  Video,
  Info,
  Smile,
  Code,
  FileText,
  Image,
  Archive,
  Star,
  Pin,
  Volume2,
  VolumeX,
} from "lucide-react";

const students = [
  {
    id: 1,
    name: "Alex Johnson",
    avatar: "AJ",
    isOnline: true,
    lastSeen: "Active now",
    unreadCount: 3,
    lastMessage: "Thanks for the explanation!",
    lastMessageTime: "2 min ago",
    isTyping: false,
    level: "Intermediate",
  },
  {
    id: 2,
    name: "Maria Rodriguez",
    avatar: "MR",
    isOnline: true,
    lastSeen: "Active now",
    unreadCount: 0,
    lastMessage: "Can we schedule a session for tomorrow?",
    lastMessageTime: "10 min ago",
    isTyping: true,
    level: "Beginner",
  },
  {
    id: 3,
    name: "David Kim",
    avatar: "DK",
    isOnline: false,
    lastSeen: "30 minutes ago",
    unreadCount: 1,
    lastMessage: "I'm having trouble with the API integration",
    lastMessageTime: "25 min ago",
    isTyping: false,
    level: "Advanced",
  },
  {
    id: 4,
    name: "Emily Chen",
    avatar: "EC",
    isOnline: true,
    lastSeen: "Active now",
    unreadCount: 0,
    lastMessage: "The React component is working perfectly now!",
    lastMessageTime: "1 hour ago",
    isTyping: false,
    level: "Intermediate",
  },
];

const initialMessages = [
  {
    id: 1,
    senderId: 1,
    senderName: "Alex Johnson",
    content:
      "Hi Dr. Sarah! I'm having trouble understanding closures in JavaScript.",
    timestamp: "10:30 AM",
    type: "text",
    isRead: true,
  },
  {
    id: 2,
    senderId: "teacher",
    senderName: "Dr. Sarah",
    content:
      "Hi Alex! Closures can be tricky. Let me explain with a simple example.",
    timestamp: "10:32 AM",
    type: "text",
    isRead: true,
  },
  {
    id: 3,
    senderId: "teacher",
    senderName: "Dr. Sarah",
    content: `function outerFunction(x) {
  return function innerFunction(y) {
    return x + y;
  };
}

const addFive = outerFunction(5);
console.log(addFive(10)); // 15`,
    timestamp: "10:33 AM",
    type: "code",
    language: "javascript",
    isRead: true,
  },
  {
    id: 4,
    senderId: 1,
    senderName: "Alex Johnson",
    content:
      "Oh I see! So the inner function remembers the outer function's variables?",
    timestamp: "10:35 AM",
    type: "text",
    isRead: true,
  },
  {
    id: 5,
    senderId: "teacher",
    senderName: "Dr. Sarah",
    content:
      "Exactly! The inner function has access to the outer function's scope even after the outer function returns. This is the essence of closures.",
    timestamp: "10:36 AM",
    type: "text",
    isRead: true,
  },
  {
    id: 6,
    senderId: 1,
    senderName: "Alex Johnson",
    content: "Thanks for the explanation!",
    timestamp: "10:38 AM",
    type: "text",
    isRead: false,
  },
];

export default function ChatInterface() {
  const location = useLocation();
  const [selectedStudent, setSelectedStudent] = useState(students[0]);
  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [showStudentInfo, setShowStudentInfo] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  // Handle navigation state for pre-selected chat
  useEffect(() => {
    if (location.state?.chatWith) {
      const { chatWith } = location.state;
      const student = students.find((s) => s.id === chatWith.id) || {
        id: chatWith.id,
        name: chatWith.name,
        avatar: chatWith.avatar,
        isOnline: chatWith.isOnline,
        lastSeen: chatWith.isOnline ? "Active now" : "Recently",
        unreadCount: 0,
        lastMessage: "",
        lastMessageTime: "Now",
        isTyping: false,
        level: chatWith.specialization || "Student",
      };
      setSelectedStudent(student);
    }
  }, [location.state]);

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const message = {
        id: messages.length + 1,
        senderId: "teacher",
        senderName: "Dr. Sarah",
        content: newMessage,
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        type: "text" as const,
        isRead: true,
      };
      setMessages([...messages, message]);
      setNewMessage("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleStudentSelect = (student: (typeof students)[0]) => {
    setSelectedStudent(student);
    setShowStudentInfo(false);
  };

  const formatCode = (code: string, language: string) => {
    return (
      <div className="bg-gray-900 text-gray-100 rounded-lg p-4 mt-2 overflow-x-auto">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-gray-400 uppercase">{language}</span>
          <Button variant="outline" size="sm" className="text-xs">
            Copy
          </Button>
        </div>
        <pre className="text-sm">
          <code>{code}</code>
        </pre>
      </div>
    );
  };

  return (
    <div className="container mx-auto px-6 lg:px-8 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden h-[600px] flex">
          {/* Students Sidebar */}
          <div className="w-80 border-r border-gray-200 flex flex-col">
            {/* Header */}
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900">
                  Student Messages
                </h2>
                <Button variant="outline" size="sm">
                  <Archive className="w-4 h-4" />
                </Button>
              </div>

              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search students..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                />
              </div>
            </div>

            {/* Students List */}
            <div className="flex-1 overflow-y-auto">
              {filteredStudents.map((student) => (
                <div
                  key={student.id}
                  onClick={() => handleStudentSelect(student)}
                  className={`p-4 cursor-pointer transition-colors hover:bg-gray-50 ${
                    selectedStudent.id === student.id
                      ? "bg-indigo-50 border-r-2 border-indigo-500"
                      : ""
                  }`}
                >
                  <div className="flex items-center">
                    <div className="relative">
                      <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                        {student.avatar}
                      </div>
                      {student.isOnline && (
                        <div className="absolute bottom-0 right-2 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium text-gray-900 truncate">
                          {student.name}
                        </h3>
                        {student.unreadCount > 0 && (
                          <span className="bg-indigo-600 text-white text-xs rounded-full px-2 py-1 min-w-5 h-5 flex items-center justify-center">
                            {student.unreadCount}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center justify-between mt-1">
                        <p className="text-sm text-gray-600 truncate">
                          {student.isTyping ? (
                            <span className="italic text-indigo-600">
                              Typing...
                            </span>
                          ) : (
                            student.lastMessage
                          )}
                        </p>
                        <span className="text-xs text-gray-400 ml-2">
                          {student.lastMessageTime}
                        </span>
                      </div>

                      <div className="flex items-center justify-between mt-1">
                        <span className="text-xs text-gray-500">
                          {student.lastSeen}
                        </span>
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                          {student.level}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chat Area */}
          <div className="flex-1 flex flex-col">
            {/* Chat Header */}
            <div className="p-4 border-b border-gray-200 bg-gray-50">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="relative">
                    <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                      {selectedStudent.avatar}
                    </div>
                    {selectedStudent.isOnline && (
                      <div className="absolute bottom-0 right-2 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                    )}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {selectedStudent.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {selectedStudent.isTyping ? (
                        <span className="italic text-indigo-600">
                          Typing...
                        </span>
                      ) : (
                        selectedStudent.lastSeen
                      )}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm">
                    <Phone className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Video className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShowStudentInfo(!showStudentInfo)}
                  >
                    <Info className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <MoreVertical className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.senderId === "teacher"
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[70%] ${
                      message.senderId === "teacher"
                        ? "bg-indigo-600 text-white rounded-l-lg rounded-tr-lg"
                        : "bg-gray-100 text-gray-900 rounded-r-lg rounded-tl-lg"
                    } px-4 py-2`}
                  >
                    {message.type === "text" ? (
                      <p className="text-sm">{message.content}</p>
                    ) : message.type === "code" ? (
                      <>
                        <p className="text-sm mb-2">Here's an example:</p>
                        {formatCode(
                          message.content,
                          message.language || "javascript",
                        )}
                      </>
                    ) : null}

                    <div className="flex items-center justify-between mt-2">
                      <span
                        className={`text-xs ${
                          message.senderId === "teacher"
                            ? "text-indigo-200"
                            : "text-gray-500"
                        }`}
                      >
                        {message.timestamp}
                      </span>
                      {message.senderId === "teacher" && (
                        <div className="flex items-center space-x-1">
                          {message.isRead ? (
                            <div className="w-3 h-3 text-indigo-200">✓✓</div>
                          ) : (
                            <div className="w-3 h-3 text-indigo-300">✓</div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex items-end space-x-2">
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm">
                    <Paperclip className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Code className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Smile className="w-4 h-4" />
                  </Button>
                </div>

                <div className="flex-1">
                  <textarea
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
                    rows={2}
                  />
                </div>

                <Button
                  onClick={handleSendMessage}
                  disabled={!newMessage.trim()}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Student Info Sidebar */}
          {showStudentInfo && (
            <div className="w-80 border-l border-gray-200 bg-gray-50 p-4">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-2xl font-semibold mx-auto mb-4">
                  {selectedStudent.avatar}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {selectedStudent.name}
                </h3>
                <p className="text-sm text-gray-600">{selectedStudent.level}</p>
                <p className="text-sm text-gray-500">
                  {selectedStudent.lastSeen}
                </p>
              </div>

              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">
                    Quick Actions
                  </h4>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start">
                      <Video className="w-4 h-4 mr-2" />
                      Start Video Call
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Phone className="w-4 h-4 mr-2" />
                      Schedule Session
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <FileText className="w-4 h-4 mr-2" />
                      View Progress
                    </Button>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">
                    Session Stats
                  </h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">
                        Total Sessions
                      </span>
                      <span className="text-sm font-medium">24</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">
                        Hours Studied
                      </span>
                      <span className="text-sm font-medium">48h</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">
                        Current Streak
                      </span>
                      <span className="text-sm font-medium">7 days</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">
                    Preferences
                  </h4>
                  <div className="space-y-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full justify-start"
                    >
                      <Star className="w-4 h-4 mr-2" />
                      Add to Favorites
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full justify-start"
                    >
                      <Pin className="w-4 h-4 mr-2" />
                      Pin Conversation
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full justify-start"
                    >
                      <VolumeX className="w-4 h-4 mr-2" />
                      Mute Notifications
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
