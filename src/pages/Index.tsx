
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, MessageSquare, Settings, Code, Check, Upload, Palette, Zap, Bot, Users, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const features = [
    {
      icon: Bot,
      title: "AI-Powered Intelligence",
      description: "Advanced natural language processing that understands context and provides human-like responses"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Work together seamlessly with shared knowledge bases and collaborative editing tools"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with end-to-end encryption and compliance-ready infrastructure"
    }
  ];

  const handleGetStarted = () => {
    if (isLoggedIn) {
      navigate('/dashboard');
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">
                ChatBot Creator
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900 font-medium">Features</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900 font-medium">Pricing</a>
              <a href="#about" className="text-gray-600 hover:text-gray-900 font-medium">About</a>
            </div>
            <div className="flex items-center space-x-4">
              {!isLoggedIn ? (
                <>
                  <Button variant="ghost" onClick={() => navigate('/login')} className="font-medium">
                    Sign In
                  </Button>
                  <Button onClick={() => navigate('/signup')} className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium px-6">
                    Get Started
                  </Button>
                </>
              ) : (
                <Button onClick={() => navigate('/dashboard')} className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium px-6">
                  Dashboard
                </Button>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-blue-900/70 to-indigo-900/80" />
        
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-8">
            <Zap className="w-4 h-4 text-white mr-2" />
            <span className="text-sm font-medium text-white">Powered by Advanced AI</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 leading-tight tracking-tight">
            The #1 AI agent
            <br />
            <span className="text-blue-200">for customer service</span>
          </h1>
          
          <div className="flex items-center justify-center space-x-8 mb-8 text-sm text-blue-200">
            <div className="text-center">
              <div className="font-bold">#1 IN PERFORMANCE BENCHMARKS</div>
            </div>
            <div className="text-center">
              <div className="font-bold">#1 IN COMPETITIVE BAKE-OFFS</div>
            </div>
            <div className="text-center">
              <div className="font-bold">#1 RANKING ON G2</div>
            </div>
          </div>
          
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Create AI-powered chatbots that understand your business, engage your customers, 
            and scale your support operations without the complexity.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              onClick={handleGetStarted}
              className="bg-white hover:bg-gray-100 text-gray-900 text-lg px-8 py-4 h-14 font-medium"
            >
              Start free trial
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 h-14 font-medium border-white/30 text-white hover:bg-white/10">
              View demo
            </Button>
          </div>
          
          {/* Trust Logos */}
          <div className="flex items-center justify-center space-x-12 opacity-60">
            <div className="text-white font-semibold">Anthropic</div>
            <div className="text-white font-semibold">Monday.com</div>
            <div className="text-white font-semibold">Amplitude</div>
            <div className="text-white font-semibold">Synthesia</div>
            <div className="text-white font-semibold">LaunchDarkly</div>
            <div className="text-white font-semibold">Coda</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Everything you need
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional-grade tools designed for teams that demand excellence
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 text-center">
            <div>
              <div className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">10k+</div>
              <div className="text-gray-600 font-medium">Active Users</div>
            </div>
            <div>
              <div className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">99.9%</div>
              <div className="text-gray-600 font-medium">Uptime</div>
            </div>
            <div>
              <div className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">50M+</div>
              <div className="text-gray-600 font-medium">Messages Processed</div>
            </div>
            <div>
              <div className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">24/7</div>
              <div className="text-gray-600 font-medium">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight">
            Ready to get started?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Join thousands of teams already using our platform to transform their customer experience
          </p>
          <Button 
            size="lg" 
            onClick={handleGetStarted}
            className="bg-white hover:bg-gray-100 text-gray-900 text-lg px-8 py-4 h-14 font-medium"
          >
            Start Your Free Trial
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">ChatBot Creator</span>
              </div>
              <p className="text-gray-600">
                Building the future of conversational AI, one chatbot at a time.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Product</h4>
              <div className="space-y-3">
                <a href="#" className="block text-gray-600 hover:text-gray-900">Features</a>
                <a href="#" className="block text-gray-600 hover:text-gray-900">Pricing</a>
                <a href="#" className="block text-gray-600 hover:text-gray-900">API</a>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Company</h4>
              <div className="space-y-3">
                <a href="#" className="block text-gray-600 hover:text-gray-900">About</a>
                <a href="#" className="block text-gray-600 hover:text-gray-900">Blog</a>
                <a href="#" className="block text-gray-600 hover:text-gray-900">Careers</a>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Support</h4>
              <div className="space-y-3">
                <a href="#" className="block text-gray-600 hover:text-gray-900">Help Center</a>
                <a href="#" className="block text-gray-600 hover:text-gray-900">Contact</a>
                <a href="#" className="block text-gray-600 hover:text-gray-900">Status</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-8 text-center text-gray-600">
            © 2024 ChatBot Creator. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
