import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Globe,
  Edit3,
  Save,
  X,
  Star,
  Award,
  Calendar,
  DollarSign,
  Clock,
  Users,
  BookOpen,
  TrendingUp,
  Camera,
  Plus,
  Trash2,
} from "lucide-react";

const specialties = [
  "Full-Stack Development",
  "Frontend Development",
  "Backend Development",
  "Mobile Development",
  "Data Science",
  "Machine Learning",
  "DevOps",
  "Cloud Computing",
];

const languages = [
  "JavaScript",
  "TypeScript",
  "Python",
  "Java",
  "C++",
  "C#",
  "Go",
  "Rust",
  "Swift",
  "Kotlin",
];

export default function TeacherProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: "Dr. Sarah",
    lastName: "Williams",
    email: "sarah.williams@edu.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    timezone: "PST (UTC-8)",
    bio: "Passionate educator with 8+ years of experience in full-stack development. I specialize in modern web technologies and have helped over 500 students achieve their coding goals. My teaching philosophy focuses on practical, hands-on learning combined with solid theoretical foundations.",
    specialties: [
      "Full-Stack Development",
      "Frontend Development",
      "Backend Development",
    ],
    languages: ["JavaScript", "TypeScript", "Python", "React", "Node.js"],
    hourlyRate: 45,
    experience: "8 years",
    education: "PhD in Computer Science, Stanford University",
    website: "www.sarahwilliams.dev",
    linkedin: "linkedin.com/in/sarah-williams-dev",
    github: "github.com/sarah-williams",
  });

  const stats = [
    {
      label: "Total Students",
      value: "124",
      icon: Users,
      color: "text-blue-600",
    },
    {
      label: "Sessions Taught",
      value: "1,250",
      icon: Calendar,
      color: "text-green-600",
    },
    {
      label: "Average Rating",
      value: "4.9",
      icon: Star,
      color: "text-yellow-600",
    },
    {
      label: "Response Time",
      value: "< 5 min",
      icon: Clock,
      color: "text-purple-600",
    },
    {
      label: "Success Rate",
      value: "98%",
      icon: TrendingUp,
      color: "text-indigo-600",
    },
    {
      label: "Total Earnings",
      value: "$45,600",
      icon: DollarSign,
      color: "text-green-600",
    },
  ];

  const achievements = [
    {
      title: "Top Rated Teacher",
      description: "Maintained 4.9+ rating for 6 months",
      icon: Star,
    },
    {
      title: "500+ Students Taught",
      description: "Reached milestone of 500 students",
      icon: Users,
    },
    {
      title: "Quick Responder",
      description: "Average response time under 5 minutes",
      icon: Clock,
    },
    {
      title: "Expert Educator",
      description: "Completed advanced teaching certification",
      icon: Award,
    },
  ];

  const handleSave = () => {
    // Here you would save the profile data to your backend
    setIsEditing(false);
  };

  const handleCancel = () => {
    // Reset any changes
    setIsEditing(false);
  };

  const addSpecialty = (specialty: string) => {
    if (!profileData.specialties.includes(specialty)) {
      setProfileData({
        ...profileData,
        specialties: [...profileData.specialties, specialty],
      });
    }
  };

  const removeSpecialty = (specialty: string) => {
    setProfileData({
      ...profileData,
      specialties: profileData.specialties.filter((s) => s !== specialty),
    });
  };

  const addLanguage = (language: string) => {
    if (!profileData.languages.includes(language)) {
      setProfileData({
        ...profileData,
        languages: [...profileData.languages, language],
      });
    }
  };

  const removeLanguage = (language: string) => {
    setProfileData({
      ...profileData,
      languages: profileData.languages.filter((l) => l !== language),
    });
  };

  return (
    <div className="container mx-auto px-6 lg:px-8 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Teacher Profile
            </h1>
            <p className="text-gray-600">
              Manage your professional information and teaching credentials
            </p>
          </div>
          {!isEditing ? (
            <Button
              onClick={() => setIsEditing(true)}
              className="bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-700 hover:to-cyan-700"
            >
              <Edit3 className="w-4 h-4 mr-2" />
              Edit Profile
            </Button>
          ) : (
            <div className="flex gap-2">
              <Button onClick={handleSave}>
                <Save className="w-4 h-4 mr-2" />
                Save Changes
              </Button>
              <Button variant="outline" onClick={handleCancel}>
                <X className="w-4 h-4 mr-2" />
                Cancel
              </Button>
            </div>
          )}
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center"
              >
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Information */}
          <div className="lg:col-span-2 space-y-8">
            {/* Basic Information */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Basic Information
              </h3>

              {/* Profile Picture */}
              <div className="flex items-center mb-6">
                <div className="relative">
                  <div className="w-24 h-24 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-2xl font-semibold">
                    {profileData.firstName[0]}
                    {profileData.lastName[0]}
                  </div>
                  {isEditing && (
                    <button className="absolute bottom-0 right-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center hover:bg-indigo-700">
                      <Camera className="w-4 h-4" />
                    </button>
                  )}
                </div>
                <div className="ml-6">
                  <div className="text-2xl font-semibold text-gray-900">
                    {profileData.firstName} {profileData.lastName}
                  </div>
                  <div className="text-gray-600">Professional Educator</div>
                  <div className="flex items-center mt-2">
                    <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                    <span className="text-sm font-medium">4.9</span>
                    <span className="text-sm text-gray-500 ml-1">
                      (245 reviews)
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={profileData.firstName}
                      onChange={(e) =>
                        setProfileData({
                          ...profileData,
                          firstName: e.target.value,
                        })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  ) : (
                    <div className="flex items-center py-2">
                      <User className="w-4 h-4 text-gray-400 mr-2" />
                      <span>{profileData.firstName}</span>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={profileData.lastName}
                      onChange={(e) =>
                        setProfileData({
                          ...profileData,
                          lastName: e.target.value,
                        })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  ) : (
                    <div className="flex items-center py-2">
                      <User className="w-4 h-4 text-gray-400 mr-2" />
                      <span>{profileData.lastName}</span>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  {isEditing ? (
                    <input
                      type="email"
                      value={profileData.email}
                      onChange={(e) =>
                        setProfileData({
                          ...profileData,
                          email: e.target.value,
                        })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  ) : (
                    <div className="flex items-center py-2">
                      <Mail className="w-4 h-4 text-gray-400 mr-2" />
                      <span>{profileData.email}</span>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  {isEditing ? (
                    <input
                      type="tel"
                      value={profileData.phone}
                      onChange={(e) =>
                        setProfileData({
                          ...profileData,
                          phone: e.target.value,
                        })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  ) : (
                    <div className="flex items-center py-2">
                      <Phone className="w-4 h-4 text-gray-400 mr-2" />
                      <span>{profileData.phone}</span>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={profileData.location}
                      onChange={(e) =>
                        setProfileData({
                          ...profileData,
                          location: e.target.value,
                        })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  ) : (
                    <div className="flex items-center py-2">
                      <MapPin className="w-4 h-4 text-gray-400 mr-2" />
                      <span>{profileData.location}</span>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Hourly Rate
                  </label>
                  {isEditing ? (
                    <input
                      type="number"
                      value={profileData.hourlyRate}
                      onChange={(e) =>
                        setProfileData({
                          ...profileData,
                          hourlyRate: parseInt(e.target.value),
                        })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  ) : (
                    <div className="flex items-center py-2">
                      <DollarSign className="w-4 h-4 text-gray-400 mr-2" />
                      <span>${profileData.hourlyRate}/hour</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Bio */}
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Professional Bio
                </label>
                {isEditing ? (
                  <textarea
                    value={profileData.bio}
                    onChange={(e) =>
                      setProfileData({ ...profileData, bio: e.target.value })
                    }
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                ) : (
                  <p className="text-gray-600 leading-relaxed">
                    {profileData.bio}
                  </p>
                )}
              </div>
            </div>

            {/* Specialties & Skills */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Specialties & Skills
              </h3>

              {/* Specialties */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Teaching Specialties
                </label>
                <div className="flex flex-wrap gap-2 mb-3">
                  {profileData.specialties.map((specialty, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-3 py-1 bg-indigo-100 text-indigo-700 text-sm font-medium rounded-full"
                    >
                      {specialty}
                      {isEditing && (
                        <button
                          onClick={() => removeSpecialty(specialty)}
                          className="ml-2 text-indigo-500 hover:text-indigo-700"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      )}
                    </span>
                  ))}
                </div>
                {isEditing && (
                  <div className="flex flex-wrap gap-2">
                    {specialties
                      .filter((s) => !profileData.specialties.includes(s))
                      .map((specialty, index) => (
                        <button
                          key={index}
                          onClick={() => addSpecialty(specialty)}
                          className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full hover:bg-gray-200"
                        >
                          <Plus className="w-3 h-3 mr-1" />
                          {specialty}
                        </button>
                      ))}
                  </div>
                )}
              </div>

              {/* Languages/Technologies */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Programming Languages & Technologies
                </label>
                <div className="flex flex-wrap gap-2 mb-3">
                  {profileData.languages.map((language, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full"
                    >
                      {language}
                      {isEditing && (
                        <button
                          onClick={() => removeLanguage(language)}
                          className="ml-2 text-green-500 hover:text-green-700"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      )}
                    </span>
                  ))}
                </div>
                {isEditing && (
                  <div className="flex flex-wrap gap-2">
                    {languages
                      .filter((l) => !profileData.languages.includes(l))
                      .map((language, index) => (
                        <button
                          key={index}
                          onClick={() => addLanguage(language)}
                          className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full hover:bg-gray-200"
                        >
                          <Plus className="w-3 h-3 mr-1" />
                          {language}
                        </button>
                      ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-8">
            {/* Achievements */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Achievements
              </h3>
              <div className="space-y-4">
                {achievements.map((achievement, index) => {
                  const Icon = achievement.icon;
                  return (
                    <div key={index} className="flex items-start">
                      <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <Icon className="w-5 h-5 text-yellow-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">
                          {achievement.title}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Professional Links */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Professional Links
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Website
                  </label>
                  {isEditing ? (
                    <input
                      type="url"
                      value={profileData.website}
                      onChange={(e) =>
                        setProfileData({
                          ...profileData,
                          website: e.target.value,
                        })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  ) : (
                    <div className="flex items-center">
                      <Globe className="w-4 h-4 text-gray-400 mr-2" />
                      <a
                        href={`https://${profileData.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600 hover:text-indigo-700"
                      >
                        {profileData.website}
                      </a>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    LinkedIn
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={profileData.linkedin}
                      onChange={(e) =>
                        setProfileData({
                          ...profileData,
                          linkedin: e.target.value,
                        })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  ) : (
                    <div className="flex items-center">
                      <Globe className="w-4 h-4 text-gray-400 mr-2" />
                      <a
                        href={`https://${profileData.linkedin}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600 hover:text-indigo-700"
                      >
                        {profileData.linkedin}
                      </a>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    GitHub
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={profileData.github}
                      onChange={(e) =>
                        setProfileData({
                          ...profileData,
                          github: e.target.value,
                        })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  ) : (
                    <div className="flex items-center">
                      <Globe className="w-4 h-4 text-gray-400 mr-2" />
                      <a
                        href={`https://${profileData.github}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600 hover:text-indigo-700"
                      >
                        {profileData.github}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Education & Experience */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Education & Experience
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Education
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={profileData.education}
                      onChange={(e) =>
                        setProfileData({
                          ...profileData,
                          education: e.target.value,
                        })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  ) : (
                    <div className="flex items-center">
                      <BookOpen className="w-4 h-4 text-gray-400 mr-2" />
                      <span className="text-gray-600">
                        {profileData.education}
                      </span>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Experience
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={profileData.experience}
                      onChange={(e) =>
                        setProfileData({
                          ...profileData,
                          experience: e.target.value,
                        })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  ) : (
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 text-gray-400 mr-2" />
                      <span className="text-gray-600">
                        {profileData.experience}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
