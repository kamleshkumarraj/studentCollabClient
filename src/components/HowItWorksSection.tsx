import {
  UserPlus,
  Search,
  Code2,
  GraduationCap,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Sign Up & Create Profile",
    description:
      "Create your account as a student or teacher. Set up your profile with your skills, subjects, and learning goals.",
    color: "from-indigo-500 to-indigo-600",
  },
  {
    icon: Search,
    title: "Find & Connect",
    description:
      "Browse available teachers by subject expertise, ratings, and availability. Send connection requests instantly.",
    color: "from-cyan-500 to-cyan-600",
  },
  {
    icon: Code2,
    title: "Start Coding Together",
    description:
      "Join live coding sessions with screen sharing, real-time collaboration, and interactive problem-solving.",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: GraduationCap,
    title: "Learn & Progress",
    description:
      "Track your progress, receive personalized feedback, and advance your skills with expert guidance.",
    color: "from-green-500 to-green-600",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white shadow-sm text-gray-700 text-sm font-medium mb-6">
              <div className="w-2 h-2 bg-indigo-500 rounded-full mr-2 animate-pulse"></div>
              Simple Process
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How it{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">
                works
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Get started in minutes with our intuitive platform designed for
              seamless student-teacher collaboration and effective learning.
            </p>
          </div>

          {/* Steps */}
          <div className="relative">
            {/* Connection line for desktop */}
            <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-200 via-cyan-200 via-purple-200 to-green-200"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
              {steps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <div key={index} className="relative group">
                    {/* Mobile connection line */}
                    {index < steps.length - 1 && (
                      <div className="lg:hidden absolute left-6 top-20 w-0.5 h-16 bg-gradient-to-b from-gray-300 to-transparent"></div>
                    )}

                    {/* Card */}
                    <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                      {/* Step number */}
                      <div className="absolute -top-4 left-6 w-8 h-8 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>

                      {/* Icon */}
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>

                      {/* Arrow for desktop */}
                      {index < steps.length - 1 && (
                        <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2">
                          <ArrowRight className="w-8 h-8 text-gray-300" />
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom section */}
          <div className="mt-20 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
                <div className="text-left">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    Ready to get started?
                  </h3>
                  <p className="text-gray-600">
                    Join thousands of students and teachers already
                    collaborating on our platform.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                    Start as Student
                  </button>
                  <button className="px-6 py-3 border-2 border-indigo-200 text-indigo-700 rounded-xl font-medium hover:border-indigo-300 hover:bg-indigo-50 transition-all duration-300">
                    Join as Teacher
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
