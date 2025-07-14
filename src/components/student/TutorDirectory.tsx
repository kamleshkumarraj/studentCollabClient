import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Search,
  Filter,
  Star,
  MapPin,
  Clock,
  DollarSign,
  Video,
  MessageSquare,
  Heart,
  Award,
  Users,
  BookOpen,
} from "lucide-react";

const tutors = [
  {
    id: 1,
    name: "Dr. Sarah Williams",
    avatar: "SW",
    specialty: "Full-Stack Development",
    experience: "8 years",
    rating: 4.9,
    totalReviews: 245,
    location: "San Francisco, CA",
    hourlyRate: 45,
    isOnline: true,
    responseTime: "< 5 min",
    languages: ["JavaScript", "React", "Node.js", "Python"],
    bio: "Expert in modern web development with a passion for teaching. Specialized in React ecosystem and backend technologies.",
    totalStudents: 120,
    completedSessions: 1200,
    badges: ["Top Rated", "Quick Responder", "Expert"],
    availableSlots: ["2:00 PM", "4:00 PM", "6:00 PM"],
  },
  {
    id: 2,
    name: "Mike Chen",
    avatar: "MC",
    specialty: "Mobile Development",
    experience: "6 years",
    rating: 4.8,
    totalReviews: 189,
    location: "Austin, TX",
    hourlyRate: 42,
    isOnline: true,
    responseTime: "< 10 min",
    languages: ["React Native", "Swift", "Kotlin", "Flutter"],
    bio: "Mobile app development expert with experience in both native and cross-platform solutions.",
    totalStudents: 95,
    completedSessions: 890,
    badges: ["Mobile Expert", "Patient Teacher"],
    availableSlots: ["1:00 PM", "3:00 PM", "7:00 PM"],
  },
  {
    id: 3,
    name: "Emma Davis",
    avatar: "ED",
    specialty: "Data Science & AI",
    experience: "10 years",
    rating: 4.9,
    totalReviews: 312,
    location: "Seattle, WA",
    hourlyRate: 55,
    isOnline: false,
    responseTime: "< 15 min",
    languages: ["Python", "R", "TensorFlow", "PyTorch"],
    bio: "Data scientist and AI researcher with extensive experience in machine learning and deep learning.",
    totalStudents: 150,
    completedSessions: 1500,
    badges: ["AI Expert", "Top Rated", "Research Pro"],
    availableSlots: ["10:00 AM", "2:00 PM", "5:00 PM"],
  },
  {
    id: 4,
    name: "James Rodriguez",
    avatar: "JR",
    specialty: "DevOps & Cloud",
    experience: "7 years",
    rating: 4.7,
    totalReviews: 156,
    location: "Denver, CO",
    hourlyRate: 48,
    isOnline: true,
    responseTime: "< 8 min",
    languages: ["Docker", "Kubernetes", "AWS", "Azure"],
    bio: "DevOps engineer specializing in cloud infrastructure and automation. Passionate about teaching modern deployment practices.",
    totalStudents: 80,
    completedSessions: 720,
    badges: ["Cloud Expert", "Practical Teacher"],
    availableSlots: ["9:00 AM", "1:00 PM", "4:00 PM"],
  },
];

const specialties = [
  "All Specialties",
  "Full-Stack Development",
  "Mobile Development",
  "Data Science & AI",
  "DevOps & Cloud",
  "Game Development",
  "Cybersecurity",
];

export default function TutorDirectory() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("All Specialties");
  const [showOnlineOnly, setShowOnlineOnly] = useState(false);
  const [favorites, setFavorites] = useState<number[]>([]);

  const filteredTutors = tutors.filter((tutor) => {
    const matchesSearch =
      tutor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tutor.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tutor.languages.some((lang) =>
        lang.toLowerCase().includes(searchTerm.toLowerCase()),
      );

    const matchesSpecialty =
      selectedSpecialty === "All Specialties" ||
      tutor.specialty === selectedSpecialty;

    const matchesOnlineFilter = !showOnlineOnly || tutor.isOnline;

    return matchesSearch && matchesSpecialty && matchesOnlineFilter;
  });

  const toggleFavorite = (tutorId: number) => {
    setFavorites((prev) =>
      prev.includes(tutorId)
        ? prev.filter((id) => id !== tutorId)
        : [...prev, tutorId],
    );
  };

  const handleBookSession = (tutor: (typeof tutors)[0]) => {
    // Navigate to meeting tab with tutor information
    navigate("/student-dashboard?tab=meeting", {
      state: {
        action: "schedule",
        tutor: {
          id: tutor.id,
          name: tutor.name,
          specialty: tutor.specialty,
          hourlyRate: tutor.hourlyRate,
          availableSlots: tutor.availableSlots,
        },
      },
    });
  };

  const handleStartChat = (tutor: (typeof tutors)[0]) => {
    // Navigate to chat tab with tutor pre-selected
    navigate("/student-dashboard?tab=chat", {
      state: {
        chatWith: {
          id: tutor.id,
          name: tutor.name,
          specialty: tutor.specialty,
          avatar: tutor.avatar,
          isOnline: tutor.isOnline,
        },
      },
    });
  };

  return (
    <div className="container mx-auto px-6 lg:px-8 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Find Your Perfect Tutor
          </h1>
          <p className="text-gray-600">
            Connect with expert tutors and accelerate your learning journey
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search tutors by name, specialty, or skills..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>

            {/* Specialty Filter */}
            <select
              value={selectedSpecialty}
              onChange={(e) => setSelectedSpecialty(e.target.value)}
              className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            >
              {specialties.map((specialty) => (
                <option key={specialty} value={specialty}>
                  {specialty}
                </option>
              ))}
            </select>

            {/* Online Filter */}
            <label className="flex items-center space-x-2 px-4 py-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
              <input
                type="checkbox"
                checked={showOnlineOnly}
                onChange={(e) => setShowOnlineOnly(e.target.checked)}
                className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
              <span className="text-sm font-medium text-gray-700">
                Online Now
              </span>
            </label>

            {/* Filter Button */}
            <Button variant="outline" className="px-6">
              <Filter className="w-4 h-4 mr-2" />
              More Filters
            </Button>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredTutors.length} tutor
            {filteredTutors.length !== 1 ? "s" : ""}
          </p>
        </div>

        {/* Tutors Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredTutors.map((tutor) => (
            <div
              key={tutor.id}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-lg font-semibold mr-4">
                      {tutor.avatar}
                    </div>
                    {tutor.isOnline && (
                      <div className="absolute bottom-0 right-3 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                    )}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {tutor.name}
                    </h3>
                    <p className="text-indigo-600 font-medium">
                      {tutor.specialty}
                    </p>
                    <div className="flex items-center mt-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                      <span className="text-sm font-medium">
                        {tutor.rating}
                      </span>
                      <span className="text-sm text-gray-500 ml-1">
                        ({tutor.totalReviews} reviews)
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => toggleFavorite(tutor.id)}
                  className={`p-2 rounded-lg transition-colors ${
                    favorites.includes(tutor.id)
                      ? "text-red-500 bg-red-50"
                      : "text-gray-400 hover:text-red-500 hover:bg-red-50"
                  }`}
                >
                  <Heart
                    className={`w-5 h-5 ${
                      favorites.includes(tutor.id) ? "fill-current" : ""
                    }`}
                  />
                </button>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                {tutor.badges.map((badge, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-indigo-100 text-indigo-700 text-xs font-medium rounded-full"
                  >
                    {badge}
                  </span>
                ))}
              </div>

              {/* Bio */}
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {tutor.bio}
              </p>

              {/* Skills */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-1">
                  {tutor.languages.slice(0, 3).map((language, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
                    >
                      {language}
                    </span>
                  ))}
                  {tutor.languages.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">
                      +{tutor.languages.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-4 py-3 border-t border-gray-100">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-1">
                    <Users className="w-4 h-4 text-gray-400 mr-1" />
                  </div>
                  <div className="text-lg font-semibold text-gray-900">
                    {tutor.totalStudents}
                  </div>
                  <div className="text-xs text-gray-500">Students</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-1">
                    <BookOpen className="w-4 h-4 text-gray-400 mr-1" />
                  </div>
                  <div className="text-lg font-semibold text-gray-900">
                    {tutor.completedSessions}
                  </div>
                  <div className="text-xs text-gray-500">Sessions</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-1">
                    <Clock className="w-4 h-4 text-gray-400 mr-1" />
                  </div>
                  <div className="text-lg font-semibold text-gray-900">
                    {tutor.responseTime}
                  </div>
                  <div className="text-xs text-gray-500">Response</div>
                </div>
              </div>

              {/* Pricing and Location */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm">{tutor.location}</span>
                </div>
                <div className="flex items-center">
                  <DollarSign className="w-4 h-4 text-green-600" />
                  <span className="text-lg font-semibold text-gray-900">
                    {tutor.hourlyRate}
                  </span>
                  <span className="text-gray-500 text-sm">/hour</span>
                </div>
              </div>

              {/* Available Times */}
              <div className="mb-4">
                <p className="text-sm font-medium text-gray-700 mb-2">
                  Available Today:
                </p>
                <div className="flex flex-wrap gap-2">
                  {tutor.availableSlots.map((slot, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-md"
                    >
                      {slot}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2">
                <Button
                  onClick={() => handleBookSession(tutor)}
                  className="flex-1 bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-700 hover:to-cyan-700"
                >
                  <Video className="w-4 h-4 mr-2" />
                  Book Session
                </Button>
                <Button
                  onClick={() => handleStartChat(tutor)}
                  variant="outline"
                  className="px-4"
                  title={`Chat with ${tutor.name}`}
                >
                  <MessageSquare className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        {filteredTutors.length > 0 && (
          <div className="text-center mt-8">
            <Button variant="outline" className="px-8">
              Load More Tutors
            </Button>
          </div>
        )}

        {/* No Results */}
        {filteredTutors.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              No tutors found
            </h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your search criteria or filters
            </p>
            <Button
              onClick={() => {
                setSearchTerm("");
                setSelectedSpecialty("All Specialties");
                setShowOnlineOnly(false);
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
