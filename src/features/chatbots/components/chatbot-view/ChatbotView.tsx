import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MessageSquare, Clock, Palette, Globe } from 'lucide-react';
import { ChatbotViewHeader } from './ChatbotViewHeader';

interface ChatbotProps {
  id: string;
}

const ChatbotView = (props: ChatbotProps) => {
  // Mock data - in real app, this would come from API
  const chatbot = {
    id: parseInt(props.id || '1'),
    name: 'Customer Support Bot',
    description: 'Handles customer inquiries and support tickets with advanced AI capabilities',
    status: 'Active',
    conversations: 1245,
    lastUpdated: '2 hours ago',
    created: '2 weeks ago',
    theme: 'Professional',
    welcomeMessage: 'Hello! I\'m here to help you with any questions or concerns you may have.',
    language: 'English',
    responseTime: '2.3s average',
    knowledgeFiles: [
      { name: 'FAQ.pdf', size: '2.4 MB', uploaded: '2 weeks ago' },
      { name: 'Product Guide.txt', size: '856 KB', uploaded: '1 week ago' },
      { name: 'Support Manual.pdf', size: '5.2 MB', uploaded: '3 days ago' }
    ],
    embedCode: `<script src="https://chatbot.example.com/embed/${props.id}"></script>`
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800';
      case 'Draft':
        return 'bg-yellow-100 text-yellow-800';
      case 'Inactive':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ChatbotViewHeader chatbot={chatbot} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{chatbot.description}</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-gray-900">{chatbot.conversations.toLocaleString()}</div>
                    <div className="text-sm text-gray-500">Total Conversations</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-gray-900">{chatbot.responseTime}</div>
                    <div className="text-sm text-gray-500">Avg Response Time</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-gray-900">{chatbot.knowledgeFiles.length}</div>
                    <div className="text-sm text-gray-500">Knowledge Files</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Configuration */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Palette className="w-5 h-5 mr-2" />
                  Configuration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700">Welcome Message</label>
                    <p className="mt-1 text-gray-600 bg-gray-50 p-3 rounded-md">{chatbot.welcomeMessage}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-700">Theme</label>
                      <p className="mt-1 text-gray-600">{chatbot.theme}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700">Language</label>
                      <p className="mt-1 text-gray-600">{chatbot.language}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Knowledge Base */}
            <Card>
              <CardHeader>
                <CardTitle>Knowledge Base</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {chatbot.knowledgeFiles.map((file, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <div className="font-medium text-gray-900">{file.name}</div>
                        <div className="text-sm text-gray-500">{file.size} • Uploaded {file.uploaded}</div>
                      </div>
                      <Button variant="outline" size="sm">
                        Download
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  Quick Info
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Created:</span>
                  <span className="font-medium">{chatbot.created}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Last Updated:</span>
                  <span className="font-medium">{chatbot.lastUpdated}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Status:</span>
                  <Badge className={getStatusColor(chatbot.status)}>
                    {chatbot.status}
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Embed Code */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Globe className="w-5 h-5 mr-2" />
                  Embed Code
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-sm text-gray-600">
                    Copy this code to embed the chatbot on your website:
                  </p>
                  <div className="bg-gray-900 text-green-400 p-3 rounded-md text-sm font-mono overflow-x-auto">
                    {chatbot.embedCode}
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    Copy Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatbotView;
