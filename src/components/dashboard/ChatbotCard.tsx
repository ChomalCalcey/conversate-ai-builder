
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bot, Eye, Edit, Copy, MoreVertical } from 'lucide-react';

interface Chatbot {
  id: number;
  name: string;
  description: string;
  status: string;
  conversations: number;
  lastUpdated: string;
  created: string;
  theme: string;
}

interface ChatbotCardProps {
  chatbot: Chatbot;
  onView: (id: number) => void;
  onEdit: (id: number) => void;
}

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

export const ChatbotCard = ({ chatbot, onView, onEdit }: ChatbotCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <div>
              <CardTitle className="text-lg">{chatbot.name}</CardTitle>
              <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(chatbot.status)}`}>
                {chatbot.status}
              </span>
            </div>
          </div>
          <Button variant="ghost" size="sm">
            <MoreVertical className="w-4 h-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-4">{chatbot.description}</p>
        <div className="space-y-2 text-sm text-gray-500 mb-4">
          <div className="flex justify-between">
            <span>Conversations:</span>
            <span className="font-medium">{chatbot.conversations.toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span>Theme:</span>
            <span className="font-medium">{chatbot.theme}</span>
          </div>
          <div className="flex justify-between">
            <span>Last updated:</span>
            <span className="font-medium">{chatbot.lastUpdated}</span>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="flex-1"
            onClick={() => onView(chatbot.id)}
          >
            <Eye className="w-4 h-4 mr-1" />
            View
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            className="flex-1"
            onClick={() => onEdit(chatbot.id)}
          >
            <Edit className="w-4 h-4 mr-1" />
            Edit
          </Button>
          <Button variant="outline" size="sm">
            <Copy className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
