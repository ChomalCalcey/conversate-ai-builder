import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { MessageSquare, Zap, Upload, Palette, Code } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();
  const [isLoggedIn] = useState(false);

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-[#AD1AAC] to-[#8B1690] rounded-lg flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-[#AD1AAC] to-[#8B1690] bg-clip-text text-transparent">
                ChatBot Creator
              </span>
            </div>
            <div className="flex items-center space-x-4">
              {!isLoggedIn ? (
                <>
                  <Button variant="ghost" onClick={() => navigate('/login')}>
                    Sign In
                  </Button>
                </>
              ) : (
                <Button onClick={() => navigate('/admin/dashboard')} className="bg-gradient-to-r from-[#AD1AAC] to-[#8B1690] hover:from-[#9B1899] hover:to-[#7A1380]">
                  Dashboard
                </Button>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Starry Background */}
      <section className="relative py-20 px-4 text-center overflow-hidden bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?q=80&w=3880&auto=format&fit=crop&ixlib=rb-4.0.3')`
      }}>
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900/40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#AD1AAC]/20 via-purple-900/20 to-indigo-900/20"></div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
            <Zap className="w-4 h-4 text-[#AD1AAC] mr-2" />
            <span className="text-sm font-medium text-white/90">AI-Powered Chatbot Builder</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Create AI Chatbots
            <span className="block bg-gradient-to-r from-[#AD1AAC] to-purple-400 bg-clip-text text-transparent">
              in Minutes
            </span>
          </h1>
          
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Build intelligent chatbots for your website without coding. Upload your knowledge, customize the design, and deploy instantly.
          </p>
          
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything you need to build amazing chatbots
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful features that make chatbot creation simple and effective
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-8 text-center bg-white/60 backdrop-blur-sm border-white/20 hover:bg-white/80 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#AD1AAC] to-[#8B1690] rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-8 h-8 bg-gradient-to-r from-[#AD1AAC] to-[#8B1690] rounded-lg flex items-center justify-center">
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
