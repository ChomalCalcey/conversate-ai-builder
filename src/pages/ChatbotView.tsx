
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Edit, Bot, MessageSquare, Clock, Calendar, Palette, Globe } from 'lucide-react';

const ChatbotView = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock data - in real app, this would come from API
  const chatbot = {
    id: parseInt(id || '1'),
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
    embedCode: `<script src="https://chatbot.example.com/embed/${id}"></script>`
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
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => navigate('/dashboard')}
                className="flex items-center"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Dashboard
              </Button>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">{chatbot.name}</h1>
                  <Badge className={getStatusColor(chatbot.status)}>
                    {chatbot.status}
                  </Badge>
                </div>
              </div>
            </div>
            <Button
              onClick={() => navigate(`/dashboard/chatbots/${id}/edit`)}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              <Edit className="w-4 h-4 mr-2" />
              Edit Chatbot
            </Button>
          </div>
        </div>

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
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-gray-900">98%</div>
                    <div className="text-sm text-gray-500">Satisfaction Rate</div>
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
                <div className="bg-gray-50 p-3 rounded-md">
                  <code className="text-sm text-gray-700 break-all">{chatbot.embedCode}</code>
                </div>
                <Button className="w-full mt-3" variant="outline" size="sm">
                  Copy to Clipboard
                </Button>
              </CardContent>
            </Card>

            {/* Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button className="w-full" variant="outline">
                  Test Chatbot
                </Button>
                <Button className="w-full" variant="outline">
                  View Analytics
                </Button>
                <Button className="w-full" variant="outline">
                  Download Conversations
                </Button>
                <Button className="w-full" variant="destructive">
                  Delete Chatbot
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatbotView;
