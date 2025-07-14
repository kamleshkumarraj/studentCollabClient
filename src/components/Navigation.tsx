import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Code2, Menu, X } from "lucide-react";

const navLinks = [
  { name: "Features", href: "#features" },
  { name: "How it Works", href: "#how-it-works" },
  { name: "Benefits", href: "#benefits" },
  { name: "About", href: "#about" },
  { name: "Testimonials", href: "#testimonials" },
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/20 shadow-lg animate-slide-up">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center animate-fade-in">
              <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-lg flex items-center justify-center mr-3 hover-glow animate-float">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold text-gray-900 bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">
                STC Platform
              </span>
            </div>

            {/* Desktop Navigation */}
            <div
              className="hidden md:flex items-center space-x-8 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-600 hover:text-indigo-600 font-medium transition-all duration-300 hover:scale-105 relative group"
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-cyan-600 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>

            {/* Desktop CTA Buttons */}
            <div
              className="hidden md:flex items-center space-x-4 animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              <Button
                variant="ghost"
                className="text-gray-600 hover:text-indigo-600 hover-glow"
                onClick={() => (window.location.href = "/student-portal")}
              >
                Student Portal
              </Button>
              <Button
                variant="ghost"
                className="text-gray-600 hover:text-indigo-600 hover-glow"
                onClick={() => (window.location.href = "/teacher-portal")}
              >
                Teacher Portal
              </Button>
              <Button
                variant="ghost"
                className="text-gray-600 hover:text-indigo-600 hover-glow"
                onClick={() => (window.location.href = "/sign-in")}
              >
                Sign In
              </Button>
              <Button
                className="bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-700 hover:to-cyan-700 text-white rounded-lg hover-glow group"
                onClick={() => (window.location.href = "/get-started")}
              >
                Get Started
                <span className="ml-2 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-gray-900 p-2"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-white/20 glass-card animate-slide-up">
              <div className="space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block text-gray-600 hover:text-indigo-600 font-medium py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <div className="pt-4 space-y-2">
                  <Button
                    variant="ghost"
                    className="w-full text-gray-600 hover:text-indigo-600"
                    onClick={() => (window.location.href = "/student-portal")}
                  >
                    Student Portal
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full text-gray-600 hover:text-indigo-600"
                    onClick={() => (window.location.href = "/teacher-portal")}
                  >
                    Teacher Portal
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full text-gray-600 hover:text-indigo-600"
                    onClick={() => (window.location.href = "/sign-in")}
                  >
                    Sign In
                  </Button>
                  <Button
                    className="w-full bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white rounded-lg"
                    onClick={() => (window.location.href = "/get-started")}
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
