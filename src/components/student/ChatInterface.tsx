import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Send,
  Paperclip,
  Smile,
  Phone,
  Video,
  MoreVertical,
  Search,
  Star,
  Info,
  Code2,
  File,
  Image as ImageIcon,
  X,
  CheckCheck,
  Check,
} from "lucide-react";

interface Message {
  id: string;
  senderId: string;
  senderName: string;
  senderType: "student" | "teacher";
  content: string;
  type: "text" | "code" | "file" | "image";
  timestamp: Date;
  status: "sent" | "delivered" | "read";
  codeLanguage?: string;
}

interface Chat {
  id: string;
  teacherId: string;
  teacherName: string;
  teacherAvatar: string;
  teacherStatus: "online" | "away" | "offline";
  lastMessage: string;
  lastMessageTime: Date;
  unreadCount: number;
  isStarred: boolean;
  subject: string;
}

const mockChats: Chat[] = [
  {
    id: "1",
    teacherId: "t1",
    teacherName: "Dr. Sarah Williams",
    teacherAvatar: "SW",
    teacherStatus: "online",
    lastMessage: "Great! Let me help you debug that function...",
    lastMessageTime: new Date(Date.now() - 1000 * 60 * 5),
    unreadCount: 2,
    isStarred: true,
    subject: "JavaScript Debugging",
  },
  {
    id: "2",
    teacherId: "t2",
    teacherName: "Prof. Mike Chen",
    teacherAvatar: "MC",
    teacherStatus: "away",
    lastMessage: "Sure, we can schedule a meeting tomorrow.",
    lastMessageTime: new Date(Date.now() - 1000 * 60 * 30),
    unreadCount: 0,
    isStarred: false,
    subject: "React Components",
  },
  {
    id: "3",
    teacherId: "t3",
    teacherName: "Dr. Emma Davis",
    teacherAvatar: "ED",
    teacherStatus: "offline",
    lastMessage: "Your algorithm approach looks good!",
    lastMessageTime: new Date(Date.now() - 1000 * 60 * 60 * 2),
    unreadCount: 1,
    isStarred: false,
    subject: "Data Structures",
  },
];

const mockMessages: Message[] = [
  {
    id: "1",
    senderId: "student1",
    senderName: "Alex",
    senderType: "student",
    content:
      "Hi Dr. Williams! I'm having trouble with this JavaScript function. Could you help me debug it?",
    type: "text",
    timestamp: new Date(Date.now() - 1000 * 60 * 10),
    status: "read",
  },
  {
    id: "2",
    senderId: "student1",
    senderName: "Alex",
    senderType: "student",
    content: `function calculateSum(arr) {
  let sum = 0;
  for (let i = 0; i <= arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}`,
    type: "code",
    codeLanguage: "javascript",
    timestamp: new Date(Date.now() - 1000 * 60 * 9),
    status: "read",
  },
  {
    id: "3",
    senderId: "t1",
    senderName: "Dr. Sarah Williams",
    senderType: "teacher",
    content:
      "I can see the issue! You have an off-by-one error in your loop condition.",
    type: "text",
    timestamp: new Date(Date.now() - 1000 * 60 * 7),
    status: "read",
  },
  {
    id: "4",
    senderId: "t1",
    senderName: "Dr. Sarah Williams",
    senderType: "teacher",
    content: `function calculateSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) { // Changed <= to <
    sum += arr[i];
  }
  return sum;
}`,
    type: "code",
    codeLanguage: "javascript",
    timestamp: new Date(Date.now() - 1000 * 60 * 6),
    status: "read",
  },
  {
    id: "5",
    senderId: "t1",
    senderName: "Dr. Sarah Williams",
    senderType: "teacher",
    content:
      "The issue was that you were using `<=` instead of `<` in your loop condition, which caused the loop to try accessing `arr[arr.length]` which is undefined.",
    type: "text",
    timestamp: new Date(Date.now() - 1000 * 60 * 5),
    status: "delivered",
  },
];

export default function ChatInterface() {
  const [selectedChat, setSelectedChat] = useState<Chat | null>(mockChats[0]);
  const [messages, setMessages] = useState<Message[]>(mockMessages);
  const [newMessage, setNewMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = () => {
    if (!newMessage.trim() || !selectedChat) return;

    const message: Message = {
      id: Date.now().toString(),
      senderId: "student1",
      senderName: "Alex",
      senderType: "student",
      content: newMessage.trim(),
      type: "text",
      timestamp: new Date(),
      status: "sent",
    };

    setMessages([...messages, message]);
    setNewMessage("");

    // Simulate teacher typing
    setTimeout(() => setIsTyping(true), 1000);
    setTimeout(() => setIsTyping(false), 3000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const formatChatTime = (date: Date) => {
    const now = new Date();
    const diffInMinutes = Math.floor(
      (now.getTime() - date.getTime()) / (1000 * 60),
    );

    if (diffInMinutes < 1) return "now";
    if (diffInMinutes < 60) return `${diffInMinutes}m`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h`;
    return date.toLocaleDateString();
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "sent":
        return <Check className="w-3 h-3 text-gray-400" />;
      case "delivered":
        return <CheckCheck className="w-3 h-3 text-gray-400" />;
      case "read":
        return <CheckCheck className="w-3 h-3 text-blue-500" />;
      default:
        return null;
    }
  };

  const filteredChats = mockChats.filter(
    (chat) =>
      chat.teacherName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      chat.subject.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="container mx-auto px-6 lg:px-8 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Teacher Chat
          </h1>
          <p className="text-gray-600">Get instant help from your teachers</p>
        </div>

        {/* Chat Interface */}
        <div
          className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden"
          style={{ height: "700px" }}
        >
          <div className="flex h-full">
            {/* Chat List Sidebar */}
            <div className="w-80 bg-gray-50 border-r border-gray-200 flex flex-col">
              {/* Search */}
              <div className="p-4 border-b border-gray-200">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search teachers..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                  />
                </div>
              </div>

              {/* Chat List */}
              <div className="flex-1 overflow-y-auto">
                {filteredChats.map((chat) => (
                  <div
                    key={chat.id}
                    onClick={() => setSelectedChat(chat)}
                    className={`p-4 border-b border-gray-200 cursor-pointer hover:bg-gray-100 transition-colors ${
                      selectedChat?.id === chat.id
                        ? "bg-indigo-50 border-r-2 border-indigo-500"
                        : ""
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <div className="relative">
                          <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                            {chat.teacherAvatar}
                          </div>
                          <div
                            className={`absolute bottom-0 right-2 w-3 h-3 border-2 border-white rounded-full ${
                              chat.teacherStatus === "online"
                                ? "bg-green-500"
                                : chat.teacherStatus === "away"
                                  ? "bg-yellow-500"
                                  : "bg-gray-400"
                            }`}
                          ></div>
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between">
                            <h3 className="font-semibold text-gray-900 text-sm truncate">
                              {chat.teacherName}
                            </h3>
                            {chat.isStarred && (
                              <Star className="w-4 h-4 text-yellow-500 fill-current" />
                            )}
                          </div>
                          <p className="text-xs text-indigo-600 mb-1">
                            {chat.subject}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="text-xs text-gray-500 mb-1">
                          {formatChatTime(chat.lastMessageTime)}
                        </span>
                        {chat.unreadCount > 0 && (
                          <span className="bg-indigo-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                            {chat.unreadCount}
                          </span>
                        )}
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 truncate">
                      {chat.lastMessage}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Chat Messages Area */}
            {selectedChat ? (
              <div className="flex-1 flex flex-col">
                {/* Chat Header */}
                <div className="bg-white border-b border-gray-200 p-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="relative">
                      <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                        {selectedChat.teacherAvatar}
                      </div>
                      <div
                        className={`absolute bottom-0 right-2 w-3 h-3 border-2 border-white rounded-full ${
                          selectedChat.teacherStatus === "online"
                            ? "bg-green-500"
                            : selectedChat.teacherStatus === "away"
                              ? "bg-yellow-500"
                              : "bg-gray-400"
                        }`}
                      ></div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {selectedChat.teacherName}
                      </h3>
                      <p className="text-sm text-gray-500 capitalize">
                        {selectedChat.teacherStatus} • {selectedChat.subject}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button size="sm" variant="outline">
                      <Phone className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="outline">
                      <Video className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="outline">
                      <Info className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="outline">
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.senderType === "student" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-xs lg:max-w-md ${message.senderType === "student" ? "order-2" : "order-1"}`}
                      >
                        <div
                          className={`rounded-2xl p-3 ${
                            message.senderType === "student"
                              ? "bg-indigo-600 text-white"
                              : "bg-gray-100 text-gray-900"
                          }`}
                        >
                          {message.type === "code" ? (
                            <div>
                              <div className="flex items-center mb-2">
                                <Code2 className="w-4 h-4 mr-2" />
                                <span className="text-xs font-medium opacity-75">
                                  {message.codeLanguage?.toUpperCase()}
                                </span>
                              </div>
                              <pre
                                className={`text-sm font-mono p-2 rounded overflow-x-auto ${
                                  message.senderType === "student"
                                    ? "bg-indigo-700 text-indigo-100"
                                    : "bg-gray-200 text-gray-800"
                                }`}
                              >
                                <code>{message.content}</code>
                              </pre>
                            </div>
                          ) : (
                            <p className="text-sm leading-relaxed">
                              {message.content}
                            </p>
                          )}
                        </div>
                        <div
                          className={`flex items-center mt-1 space-x-1 ${
                            message.senderType === "student"
                              ? "justify-end"
                              : "justify-start"
                          }`}
                        >
                          <span className="text-xs text-gray-500">
                            {formatTime(message.timestamp)}
                          </span>
                          {message.senderType === "student" &&
                            getStatusIcon(message.status)}
                        </div>
                      </div>
                      {message.senderType === "teacher" && (
                        <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-xs font-semibold mr-2 order-1 flex-shrink-0">
                          {selectedChat.teacherAvatar}
                        </div>
                      )}
                    </div>
                  ))}

                  {/* Typing Indicator */}
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-xs font-semibold mr-2 flex-shrink-0">
                        {selectedChat.teacherAvatar}
                      </div>
                      <div className="bg-gray-100 rounded-2xl p-3">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div
                            className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                            style={{ animationDelay: "0.1s" }}
                          ></div>
                          <div
                            className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                            style={{ animationDelay: "0.2s" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Message Input */}
                <div className="bg-gray-50 border-t border-gray-200 p-4">
                  <div className="flex items-end space-x-2">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => fileInputRef.current?.click()}
                        >
                          <Paperclip className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Code2 className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <ImageIcon className="w-4 h-4" />
                        </Button>
                      </div>
                      <div className="relative">
                        <textarea
                          value={newMessage}
                          onChange={(e) => setNewMessage(e.target.value)}
                          onKeyPress={handleKeyPress}
                          placeholder="Type your message..."
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
                          rows={3}
                        />
                        <button
                          onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                          className="absolute bottom-3 right-12 text-gray-400 hover:text-gray-600"
                        >
                          <Smile className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                    <Button
                      onClick={sendMessage}
                      disabled={!newMessage.trim()}
                      className="bg-indigo-600 hover:bg-indigo-700 px-6"
                    >
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Hidden file input */}
                <input
                  ref={fileInputRef}
                  type="file"
                  className="hidden"
                  multiple
                  accept="image/*,.pdf,.doc,.docx,.txt"
                />
              </div>
            ) : (
              <div className="flex-1 flex items-center justify-center text-gray-500">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-gray-400" />
                  </div>
                  <p className="text-lg font-medium">
                    Select a teacher to start chatting
                  </p>
                  <p className="text-sm">
                    Choose from your available teachers on the left
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
