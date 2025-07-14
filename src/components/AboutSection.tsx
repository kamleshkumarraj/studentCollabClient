import {
  Globe,
  Users,
  Award,
  Shield,
  Heart,
  Zap,
  BookOpen,
  Target,
} from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Student-Centric",
    description:
      "Everything we do is focused on helping students succeed and reach their full potential.",
  },
  {
    icon: Globe,
    title: "Global Community",
    description:
      "Connecting learners and educators from around the world in one unified platform.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description:
      "Leveraging cutting-edge technology to create the most effective learning experiences.",
  },
  {
    icon: Shield,
    title: "Safe Environment",
    description:
      "Maintaining a secure, respectful, and inclusive space for all participants.",
  },
];

const stats = [
  {
    icon: Users,
    number: "50,000+",
    label: "Active Users",
    description: "Students and teachers worldwide",
  },
  {
    icon: BookOpen,
    number: "1M+",
    label: "Sessions Completed",
    description: "Successful learning interactions",
  },
  {
    icon: Award,
    number: "95%",
    label: "Success Rate",
    description: "Students achieve their goals",
  },
  {
    icon: Target,
    number: "24/7",
    label: "Availability",
    description: "Round-the-clock support",
  },
];

export default function AboutSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-50 to-cyan-50 text-indigo-700 text-sm font-medium mb-6">
              <Heart className="w-4 h-4 mr-2" />
              About Our Platform
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Empowering the{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">
                future of education
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We believe that quality education should be accessible to
              everyone, everywhere. Our platform bridges the gap between
              students and expert teachers through innovative technology and
              collaborative learning.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            {/* Story Section */}
            <div className="space-y-6">
              <h3 className="text-3xl font-semibold text-gray-900">
                Our Story
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded by educators and technologists who experienced
                  firsthand the challenges of traditional learning environments,
                  Student Teacher Collaboration was born from a simple yet
                  powerful vision: to create a world where every student has
                  access to personalized, expert guidance whenever they need it.
                </p>
                <p>
                  We recognized that the best learning happens through
                  interaction, collaboration, and real-time feedback. Our
                  platform combines the intimacy of one-on-one tutoring with the
                  power of group learning, all enhanced by modern technology
                  that makes coding education more accessible than ever before.
                </p>
                <p>
                  Today, we're proud to serve a global community of learners and
                  educators who share our passion for knowledge sharing and
                  collaborative growth.
                </p>
              </div>
            </div>

            {/* Mission & Vision */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl p-8">
                <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  Our Mission
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  To democratize access to high-quality programming education by
                  connecting students with expert teachers through innovative,
                  collaborative learning experiences that adapt to every
                  learner's unique needs and pace.
                </p>
              </div>

              <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-2xl p-8">
                <div className="w-12 h-12 bg-cyan-600 rounded-xl flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  Our Vision
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  A world where geographical boundaries don't limit educational
                  opportunities, where every aspiring programmer can connect
                  with mentors who inspire them to achieve their full potential
                  and build the technology of tomorrow.
                </p>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-20">
            <h3 className="text-3xl font-semibold text-gray-900 text-center mb-12">
              Our Core Values
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div
                    key={index}
                    className="text-center group hover:transform hover:scale-105 transition-all duration-300"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-shadow duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {value.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Stats Section */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-12">
            <h3 className="text-3xl font-semibold text-gray-900 text-center mb-12">
              Our Impact in Numbers
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Icon className="w-8 h-8 text-indigo-600" />
                    </div>
                    <div className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                      {stat.number}
                    </div>
                    <div className="text-lg font-semibold text-gray-900 mb-1">
                      {stat.label}
                    </div>
                    <div className="text-sm text-gray-600">
                      {stat.description}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Team CTA */}
          <div className="text-center mt-16">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Join Our Growing Community
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Whether you're a student eager to learn or an expert ready to
              teach, you'll find your place in our supportive community of
              passionate learners and educators.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                Start Learning
              </button>
              <button className="px-8 py-3 border-2 border-indigo-200 text-indigo-700 rounded-xl font-medium hover:border-indigo-300 hover:bg-indigo-50 transition-all duration-300">
                Become a Teacher
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
