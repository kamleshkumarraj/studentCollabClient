import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Alex Chen",
    role: "Computer Science Student",
    university: "MIT",
    content:
      "This platform completely transformed how I learn programming. The instant doubt resolution and screen sharing features helped me understand complex algorithms in minutes rather than hours.",
    rating: 5,
    avatar: "AC",
  },
  {
    name: "Dr. Sarah Williams",
    role: "Programming Instructor",
    university: "Stanford University",
    content:
      "As an educator, I love how this platform enables me to provide personalized guidance to students globally. The collaborative coding environment is exceptional for teaching.",
    rating: 5,
    avatar: "SW",
  },
  {
    name: "Maria Rodriguez",
    role: "Web Development Student",
    university: "UC Berkeley",
    content:
      "The group learning sessions are amazing! I've learned so much from both teachers and fellow students. The progress tracking keeps me motivated every day.",
    rating: 5,
    avatar: "MR",
  },
  {
    name: "Prof. James Kumar",
    role: "Data Science Teacher",
    university: "Carnegie Mellon",
    content:
      "This platform provides the perfect blend of modern technology and traditional teaching methods. My students are more engaged and learn faster than ever before.",
    rating: 5,
    avatar: "JK",
  },
  {
    name: "Emily Park",
    role: "Mobile App Developer",
    university: "Georgia Tech",
    content:
      "The 24/7 availability of expert teachers is a game-changer. I can get help whenever I'm stuck, whether it's midnight or early morning. Absolutely recommend!",
    rating: 5,
    avatar: "EP",
  },
  {
    name: "David Thompson",
    role: "AI/ML Instructor",
    university: "Harvard University",
    content:
      "The analytics and progress tracking features help me understand each student's learning pattern. I can provide more targeted assistance and see real improvement.",
    rating: 5,
    avatar: "DT",
  },
];

const stats = [
  { number: "50,000+", label: "Success Stories" },
  { number: "4.9/5", label: "Average Rating" },
  { number: "98%", label: "Would Recommend" },
  { number: "24/7", label: "Support Available" },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white shadow-sm text-gray-700 text-sm font-medium mb-6">
              <Quote className="w-4 h-4 mr-2" />
              What People Say
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Loved by{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">
                students & teachers
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Don't just take our word for it. Here's what our community of
              learners and educators have to say about their experience.
            </p>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-1"
              >
                {/* Quote icon */}
                <div className="mb-6">
                  <Quote className="w-8 h-8 text-indigo-200" />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.role}
                    </div>
                    <div className="text-sm text-indigo-600">
                      {testimonial.university}
                    </div>
                  </div>
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-cyan-50 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Join our community today
              </h3>
              <p className="text-gray-600 mb-6">
                Start your learning journey and become part of our success
                story.
              </p>
              <button className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-cyan-600 text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                Get Started Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
