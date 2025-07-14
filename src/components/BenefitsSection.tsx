import {
  Clock,
  Target,
  TrendingUp,
  Heart,
  Sparkles,
  Globe,
} from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Save Time",
    description:
      "Get instant help when you're stuck instead of waiting hours for responses",
    stat: "75% faster",
    statLabel: "problem resolution",
  },
  {
    icon: Target,
    title: "Personalized Learning",
    description:
      "Receive customized guidance tailored to your learning style and pace",
    stat: "90% better",
    statLabel: "learning outcomes",
  },
  {
    icon: TrendingUp,
    title: "Track Progress",
    description:
      "Monitor your improvement with detailed analytics and milestone tracking",
    stat: "3x faster",
    statLabel: "skill development",
  },
];

const studentBenefits = [
  "Access to expert teachers 24/7",
  "Interactive coding practice",
  "Personalized doubt resolution",
  "Group study sessions",
  "Progress tracking & certificates",
  "Career guidance & mentorship",
];

const teacherBenefits = [
  "Flexible teaching schedule",
  "Global student community",
  "Modern teaching tools",
  "Performance analytics",
  "Competitive compensation",
  "Professional development",
];

export default function BenefitsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-50 to-cyan-50 text-indigo-700 text-sm font-medium mb-6">
              <Heart className="w-4 h-4 mr-2" />
              Why Choose Us
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Transform your{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">
                learning journey
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experience the difference with our innovative approach to
              education that puts both students and teachers at the center of
              the learning process.
            </p>
          </div>

          {/* Main Benefits */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 border border-gray-100 hover:border-indigo-200 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                >
                  {/* Background decoration */}
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-cyan-50 rounded-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {benefit.description}
                    </p>

                    {/* Stat */}
                    <div className="border-t border-gray-200 pt-6">
                      <div className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">
                        {benefit.stat}
                      </div>
                      <div className="text-sm text-gray-500 uppercase tracking-wide">
                        {benefit.statLabel}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Student vs Teacher Benefits */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Students */}
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute top-4 right-4 w-20 h-20 bg-indigo-200 rounded-full opacity-30"></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-indigo-300 rounded-full opacity-20"></div>

              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center mr-4">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">
                    For Students
                  </h3>
                </div>

                <div className="space-y-4">
                  {studentBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-5 h-5 bg-indigo-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <span className="text-gray-700 font-medium">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Teachers */}
            <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute top-4 right-4 w-20 h-20 bg-cyan-200 rounded-full opacity-30"></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-cyan-300 rounded-full opacity-20"></div>

              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-cyan-600 rounded-xl flex items-center justify-center mr-4">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">
                    For Teachers
                  </h3>
                </div>

                <div className="space-y-4">
                  {teacherBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-5 h-5 bg-cyan-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <span className="text-gray-700 font-medium">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
