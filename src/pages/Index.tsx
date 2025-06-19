
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MessageSquare, Upload, Palette, Code, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const features = [
    {
      icon: Upload,
      title: "Upload Knowledge",
      description: "Simply upload your documents, PDFs, or text files to train your chatbot"
    },
    {
      icon: Palette,
      title: "Customize Design",
      description: "Choose themes, colors, and styles to match your brand perfectly"
    },
    {
      icon: Code,
      title: "Easy Embed",
      description: "Get a simple embed code to add your chatbot to any website"
    }
  ];

  const stats = [
    { number: "25,000+", label: "Active Chatbots" },
    { number: "1.2M+", label: "Conversations" },
    { number: "500+", label: "Companies" },
    { number: "99.9%", label: "Uptime" }
  ];

  return (
    <div className="min-h-screen relative">
      {/* Starry Night Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3880&q=80')`
        }}
      />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-blue-900/80 to-indigo-900/90" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />

      {/* Navigation */}
      <nav className="relative bg-white/10 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                ChatBot Creator
              </span>
            </div>
            <div className="flex items-center space-x-4">
              {!isLoggedIn ? (
                <>
                  <Button variant="ghost" onClick={() => navigate('/login')} className="text-white hover:bg-white/10">
                    Sign In
                  </Button>
                  <Button onClick={() => navigate('/signup')} className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white">
                    Get Started
                  </Button>
                </>
              ) : (
                <Button onClick={() => navigate('/dashboard')} className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white">
                  Dashboard
                </Button>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Full Screen Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 text-center">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
            <span className="text-sm font-medium text-white">#1 AI Agent Platform</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
            Create AI Chatbots
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              in Minutes
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Build intelligent chatbots for your website without coding. Upload your knowledge, customize the design, and deploy instantly.
          </p>
          
          <div className="flex items-center justify-center space-x-8 text-sm text-gray-400 mb-16">
            <div className="flex items-center">
              <Check className="w-4 h-4 text-green-400 mr-2" />
              No credit card required
            </div>
            <div className="flex items-center">
              <Check className="w-4 h-4 text-green-400 mr-2" />
              Free forever plan
            </div>
            <div className="flex items-center">
              <Check className="w-4 h-4 text-green-400 mr-2" />
              Deploy in seconds
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Everything you need to build amazing chatbots
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Powerful features that make chatbot creation simple and effective
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-8 text-center bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-black/20 backdrop-blur-sm text-white py-12 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg flex items-center justify-center">
              <MessageSquare className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">ChatBot Creator</span>
          </div>
          <p className="text-gray-400">
            © 2024 ChatBot Creator. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
