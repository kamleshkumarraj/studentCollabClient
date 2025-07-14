import {
  Code2,
  Users,
  MessageSquare,
  Share2,
  Video,
  BookOpen,
  Zap,
  Shield,
} from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Live Coding Environment",
    description:
      "Real-time collaborative coding with syntax highlighting, auto-completion, and instant execution.",
    color: "indigo",
  },
  {
    icon: MessageSquare,
    title: "Instant Doubt Resolution",
    description:
      "One-on-one sessions with expert teachers for immediate clarification and personalized guidance.",
    color: "cyan",
  },
  {
    icon: Share2,
    title: "Screen Sharing",
    description:
      "Share your screen seamlessly for better understanding and collaborative problem-solving.",
    color: "purple",
  },
  {
    icon: Users,
    title: "Group Learning",
    description:
      "Join study groups, participate in coding challenges, and learn together with peers.",
    color: "green",
  },
  {
    icon: Video,
    title: "HD Video Calls",
    description:
      "Crystal clear video communication with teachers and fellow students during sessions.",
    color: "blue",
  },
  {
    icon: BookOpen,
    title: "Resource Library",
    description:
      "Access curated learning materials, tutorials, and practice problems organized by topics.",
    color: "orange",
  },
  {
    icon: Zap,
    title: "Instant Notifications",
    description:
      "Get notified immediately when teachers are available or when someone needs help.",
    color: "yellow",
  },
  {
    icon: Shield,
    title: "Safe Learning Space",
    description:
      "Secure, moderated environment ensuring a respectful and productive learning atmosphere.",
    color: "red",
  },
];

const colorClasses = {
  indigo: "from-indigo-500 to-indigo-600",
  cyan: "from-cyan-500 to-teal-600",
  purple: "from-purple-500 to-violet-600",
  green: "from-emerald-500 to-green-600",
  blue: "from-blue-500 to-sky-600",
  orange: "from-orange-500 to-amber-600",
  yellow: "from-yellow-500 to-orange-500",
  red: "from-red-500 to-rose-600",
};

export default function FeaturesSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decorative elements with improved colors */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-violet-300/40 to-purple-300/40 rounded-full blur-3xl animate-float"></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-300/40 to-sky-300/40 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "-4s" }}
      ></div>

      {/* Hero Image for Features */}
      <div className="absolute top-10 right-10 opacity-10">
        <img
          src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg"
          alt="Programming and coding"
          className="w-64 h-48 object-cover rounded-2xl"
        />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 rounded-full glass text-indigo-700 text-sm font-medium mb-6 hover-glow animate-bounce-slow">
              <Zap className="w-4 h-4 mr-2 text-yellow-500" />
              Platform Features
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-slide-up">
              Everything you need for{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent animate-pulse">
                effective learning
              </span>
            </h2>
            <p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              Our comprehensive platform combines modern technology with proven
              teaching methods to create the ultimate learning experience for
              students and educators.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const colorClass =
                colorClasses[feature.color as keyof typeof colorClasses];

              return (
                <div
                  key={index}
                  className="group relative glass-card rounded-2xl p-8 border border-white/30 transition-all duration-300 hover:shadow-xl interactive-card animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${colorClasses[feature.color as keyof typeof colorClasses]} flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 animate-float shadow-lg`}
                    style={{ animationDelay: `${index * -0.5}s` }}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {feature.description}
                  </p>

                  {/* Hover effect gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-cyan-50 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>

                  {/* Floating decorative element */}
                  <div
                    className={`absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r ${colorClasses[feature.color as keyof typeof colorClasses]} rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-300 animate-pulse`}
                  ></div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div
            className="text-center mt-16 animate-slide-up"
            style={{ animationDelay: "0.8s" }}
          >
            <div className="inline-flex items-center space-x-2 text-indigo-600 font-medium glass px-6 py-3 rounded-full hover-glow cursor-pointer group">
              <span>Ready to experience these features?</span>
              <MessageSquare className="w-5 h-5 group-hover:animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
