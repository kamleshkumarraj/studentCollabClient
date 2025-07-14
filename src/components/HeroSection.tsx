import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Play,
  Users,
  Code2,
  MessageSquare,
  Sparkles,
  Star,
  TrendingUp,
} from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-cyan-50 overflow-hidden">
      {/* Enhanced background with floating shapes */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full opacity-30 blur-lg animate-float"></div>
      <div
        className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-30 blur-lg animate-float"
        style={{ animationDelay: "-3s" }}
      ></div>
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-25 blur-md animate-bounce-slow"></div>
      <div className="absolute top-1/3 left-1/3 w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-20 blur-xl animate-pulse-slow"></div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center lg:text-left lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-slide-in-left">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 rounded-full glass text-indigo-700 text-sm font-medium mb-6 hover-glow animate-bounce-slow">
                  <Sparkles className="w-4 h-4 mr-2 text-yellow-500" />
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2 animate-pulse"></span>
                  Live Collaboration Platform
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight animate-fade-in">
                  Student Teacher{" "}
                  <span className="bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent animate-pulse">
                    Collaboration
                  </span>
                </h1>
                <p
                  className="text-xl text-gray-600 max-w-2xl leading-relaxed animate-slide-up"
                  style={{ animationDelay: "0.2s" }}
                >
                  A modern platform where students and teachers connect
                  seamlessly. Code together, solve doubts instantly, and learn
                  through interactive collaboration with screen sharing and
                  real-time assistance.
                </p>
              </div>

              {/* Feature highlights */}
              <div
                className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8 animate-scale-in"
                style={{ animationDelay: "0.4s" }}
              >
                <div className="flex items-center space-x-2 glass-card p-3 rounded-lg hover-glow interactive-card">
                  <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center animate-float">
                    <Code2 className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">Live Coding</span>
                </div>
                <div className="flex items-center space-x-2 glass-card p-3 rounded-lg hover-glow interactive-card">
                  <div
                    className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center animate-float"
                    style={{ animationDelay: "-2s" }}
                  >
                    <MessageSquare className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">
                    Instant Doubts
                  </span>
                </div>
                <div className="flex items-center space-x-2 glass-card p-3 rounded-lg hover-glow interactive-card">
                  <div
                    className="w-8 h-8 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center animate-float"
                    style={{ animationDelay: "-4s" }}
                  >
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">
                    Group Learning
                  </span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div
                className="flex flex-col sm:flex-row gap-4 animate-slide-up"
                style={{ animationDelay: "0.6s" }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-700 hover:to-cyan-700 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover-glow group"
                  onClick={() => (window.location.href = "/get-started")}
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="glass border-2 border-white/30 hover:border-indigo-300 px-8 py-4 rounded-xl transition-all duration-300 interactive-card"
                >
                  <Play className="mr-2 w-5 h-5" />
                  Watch Demo
                </Button>
              </div>

              {/* Stats */}
              <div
                className="grid grid-cols-3 gap-4 pt-8 border-t border-white/20 animate-scale-in"
                style={{ animationDelay: "0.8s" }}
              >
                <div className="text-center lg:text-left glass-card p-4 rounded-lg hover-glow">
                  <div className="text-2xl font-bold text-gray-900 flex items-center justify-center lg:justify-start">
                    5K+
                    <Users className="w-5 h-5 ml-2 text-indigo-600" />
                  </div>
                  <div className="text-gray-600 text-sm">Active Students</div>
                </div>
                <div className="text-center lg:text-left glass-card p-4 rounded-lg hover-glow">
                  <div className="text-2xl font-bold text-gray-900 flex items-center justify-center lg:justify-start">
                    500+
                    <Code2 className="w-5 h-5 ml-2 text-cyan-600" />
                  </div>
                  <div className="text-gray-600 text-sm">Expert Teachers</div>
                </div>
                <div className="text-center lg:text-left glass-card p-4 rounded-lg hover-glow">
                  <div className="text-2xl font-bold text-gray-900 flex items-center justify-center lg:justify-start">
                    98%
                    <Star className="w-5 h-5 ml-2 text-yellow-500 fill-current" />
                  </div>
                  <div className="text-gray-600 text-sm">Success Rate</div>
                </div>
              </div>
            </div>

            {/* Right Content - Visual */}
            <div className="mt-12 lg:mt-0 relative animate-slide-in-right">
              {/* Real Hero Image */}
              <div className="relative mx-auto w-full max-w-lg mb-8">
                <div className="relative glass-card rounded-3xl overflow-hidden shadow-2xl border border-white/30 interactive-card">
                  <img
                    src="https://images.pexels.com/photos/7869041/pexels-photo-7869041.jpeg"
                    alt="Students collaborating on programming projects"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h4 className="font-semibold text-lg">
                      Collaborative Learning
                    </h4>
                    <p className="text-sm opacity-90">
                      Real students, real projects, real success
                    </p>
                  </div>
                </div>
              </div>

              {/* Interactive Dashboard Mockup */}
              <div className="relative mx-auto w-full max-w-lg">
                {/* Main illustration background */}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/30 to-cyan-500/30 rounded-3xl transform rotate-3 scale-105 blur-lg animate-float"></div>
                <div className="relative glass-card rounded-3xl shadow-2xl p-6 border border-white/40 interactive-card">
                  {/* Mock interface */}
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex items-center justify-between pb-4 border-b border-white/20 animate-fade-in">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
                        <div
                          className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                        <div
                          className="w-3 h-3 bg-green-400 rounded-full animate-pulse"
                          style={{ animationDelay: "0.4s" }}
                        ></div>
                      </div>
                      <div className="text-sm text-gray-500 glass px-3 py-1 rounded-full">
                        <span className="w-2 h-2 bg-green-500 rounded-full inline-block mr-2 animate-pulse"></span>
                        Live Session
                      </div>
                    </div>

                    {/* Code editor mockup */}
                    <div
                      className="bg-gray-900 rounded-lg p-4 shadow-xl border border-gray-700 animate-scale-in"
                      style={{ animationDelay: "0.6s" }}
                    >
                      {/* Code editor header */}
                      <div className="flex items-center justify-between mb-3 pb-2 border-b border-gray-700">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        </div>
                        <span className="text-gray-400 text-xs">main.js</span>
                      </div>

                      {/* Code content */}
                      <div className="space-y-2 font-mono text-sm">
                        <div className="text-purple-400 animate-fade-in">
                          <span className="text-blue-400">function</span>{" "}
                          <span className="text-yellow-300">solveDoubt</span>
                          <span className="text-white">()</span>{" "}
                          <span className="text-white">&#123;</span>
                        </div>
                        <div
                          className="ml-4 text-gray-500 animate-fade-in"
                          style={{ animationDelay: "0.8s" }}
                        >
                          // Teacher explaining step by step...
                        </div>
                        <div
                          className="ml-4 animate-fade-in"
                          style={{ animationDelay: "1s" }}
                        >
                          <span className="text-blue-400">console</span>
                          <span className="text-white">.</span>
                          <span className="text-yellow-300">log</span>
                          <span className="text-white">(</span>
                          <span className="text-green-400">
                            &quot;Now I understand!&quot;
                          </span>
                          <span className="text-white">);</span>
                        </div>
                        <div
                          className="text-white animate-fade-in"
                          style={{ animationDelay: "1.2s" }}
                        >
                          &#125;
                        </div>
                      </div>

                      {/* Blinking cursor */}
                      <div className="flex items-center mt-2">
                        <div className="w-2 h-4 bg-green-400 animate-pulse"></div>
                      </div>
                    </div>

                    {/* Chat interface */}
                    <div
                      className="space-y-2 animate-slide-up"
                      style={{ animationDelay: "1.4s" }}
                    >
                      <div className="glass rounded-lg p-3 border border-indigo-200/50 bg-gradient-to-r from-indigo-50/80 to-purple-50/80">
                        <div className="text-sm font-medium text-indigo-900 flex items-center">
                          <div className="w-2 h-2 bg-indigo-500 rounded-full mr-2 animate-pulse"></div>
                          Teacher: Sarah
                        </div>
                        <div className="text-sm text-gray-700">
                          Let me help you debug this function...
                        </div>
                      </div>
                      <div className="glass rounded-lg p-3 ml-8 border border-gray-200/50">
                        <div className="text-sm font-medium text-gray-900 flex items-center">
                          <div className="w-2 h-2 bg-cyan-500 rounded-full mr-2 animate-pulse"></div>
                          Student: Alex
                        </div>
                        <div className="text-sm text-gray-700">
                          Thank you! That makes sense now.
                        </div>
                      </div>
                    </div>

                    {/* Online indicators */}
                    <div
                      className="flex items-center space-x-2 pt-2 animate-scale-in"
                      style={{ animationDelay: "1.6s" }}
                    >
                      <div className="flex -space-x-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full border-2 border-white hover-glow"></div>
                        <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full border-2 border-white hover-glow"></div>
                        <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full border-2 border-white hover-glow"></div>
                      </div>
                      <span className="text-sm text-gray-600 glass px-2 py-1 rounded-full">
                        <span className="w-2 h-2 bg-green-500 rounded-full inline-block mr-1 animate-pulse"></span>
                        +3 others online
                      </span>
                    </div>
                  </div>
                </div>

                {/* Enhanced floating elements with better colors */}
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-xl animate-float hover-glow">
                  <Code2 className="w-8 h-8 text-white" />
                </div>
                <div
                  className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full flex items-center justify-center shadow-xl animate-float hover-glow"
                  style={{ animationDelay: "-2s" }}
                >
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <div className="absolute top-1/2 -right-8 w-10 h-10 bg-gradient-to-r from-purple-400 to-violet-500 rounded-full flex items-center justify-center shadow-xl animate-bounce-slow">
                  <Star className="w-5 h-5 text-white" />
                </div>

                {/* Additional floating tech icons */}
                <div className="absolute top-8 -left-8 w-8 h-8 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-lg flex items-center justify-center shadow-lg animate-pulse opacity-60">
                  <span className="text-white text-xs font-bold">{"{}"}</span>
                </div>
                <div className="absolute bottom-8 right-8 w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-ping opacity-40"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
