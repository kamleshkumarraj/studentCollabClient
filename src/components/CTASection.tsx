import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Users, Code2 } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-indigo-900 via-indigo-800 to-cyan-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute top-20 left-20 w-32 h-32 bg-cyan-400 rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-indigo-400 rounded-full opacity-10 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-purple-400 rounded-full opacity-10 animate-pulse delay-500"></div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            {/* Main CTA Content */}
            <div className="max-w-4xl mx-auto mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium mb-8">
                <Sparkles className="w-4 h-4 mr-2" />
                Ready to Transform Your Learning?
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                Start your{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  coding journey
                </span>{" "}
                today
              </h2>

              <p className="text-xl text-indigo-100 leading-relaxed mb-12 max-w-3xl mx-auto">
                Join thousands of students and teachers who are already
                experiencing the future of collaborative learning. Get instant
                access to expert guidance, live coding sessions, and a
                supportive community.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <Button
                  size="lg"
                  className="bg-white text-indigo-900 hover:bg-gray-100 px-10 py-4 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  Start Learning Now
                  <ArrowRight className="ml-2 w-6 h-6" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white/30 text-white hover:bg-white/10 px-10 py-4 text-lg rounded-xl backdrop-blur-sm transition-all duration-300"
                >
                  Become a Teacher
                  <Users className="ml-2 w-6 h-6" />
                </Button>
              </div>
            </div>

            {/* Feature highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Free to Start
                </h3>
                <p className="text-indigo-200 text-sm">
                  No credit card required. Start learning immediately with our
                  free tier.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Expert Teachers
                </h3>
                <p className="text-indigo-200 text-sm">
                  Learn from industry professionals and experienced educators.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-400 to-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  24/7 Support
                </h3>
                <p className="text-indigo-200 text-sm">
                  Get help whenever you need it with our round-the-clock
                  support.
                </p>
              </div>
            </div>

            {/* Trust indicators */}
            <div className="mt-16 pt-8 border-t border-white/20">
              <p className="text-indigo-200 text-sm mb-4">
                Trusted by students from top universities
              </p>
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                <div className="text-white font-semibold">MIT</div>
                <div className="text-white font-semibold">Stanford</div>
                <div className="text-white font-semibold">Harvard</div>
                <div className="text-white font-semibold">UC Berkeley</div>
                <div className="text-white font-semibold">Carnegie Mellon</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
