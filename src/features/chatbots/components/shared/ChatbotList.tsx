import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { ChatbotCard } from './ChatbotCard';
import { ChatbotTable } from './ChatbotTable';
import { ChatbotFilters } from './ChatbotFilters';

export const ChatbotList = () => {
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');

  const chatbots = [
    {
      id: 1,
      name: 'Customer Support Bot',
      description: 'Handles customer inquiries and support tickets',
      status: 'Active',
      conversations: 1245,
      lastUpdated: '2 hours ago',
      created: '2 weeks ago',
      theme: 'Professional'
    },
    {
      id: 2,
      name: 'FAQ Assistant',
      description: 'Answers frequently asked questions',
      status: 'Active',
      conversations: 892,
      lastUpdated: '1 day ago',
      created: '1 month ago',
      theme: 'Friendly'
    },
    {
      id: 3,
      name: 'Product Guide Bot',
      description: 'Helps users navigate product features',
      status: 'Draft',
      conversations: 156,
      lastUpdated: '3 days ago',
      created: '5 days ago',
      theme: 'Modern'
    },
    {
      id: 4,
      name: 'Booking Assistant',
      description: 'Manages appointment scheduling',
      status: 'Active',
      conversations: 567,
      lastUpdated: '5 hours ago',
      created: '3 weeks ago',
      theme: 'Professional'
    },
    {
      id: 5,
      name: 'Sales Bot',
      description: 'Assists with sales inquiries and lead generation',
      status: 'Inactive',
      conversations: 234,
      lastUpdated: '1 week ago',
      created: '2 months ago',
      theme: 'Casual'
    },
    {
      id: 6,
      name: 'Technical Support',
      description: 'Provides technical assistance and troubleshooting',
      status: 'Active',
      conversations: 678,
      lastUpdated: '3 hours ago',
      created: '1 month ago',
      theme: 'Professional'
    }
  ];

  const filteredChatbots = chatbots.filter(chatbot =>
    chatbot.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    chatbot.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleViewChatbot = (chatbotId: number) => {
    navigate(`/admin/dashboard/chatbots/${chatbotId}/view`);
  };

  const handleEditChatbot = (chatbotId: number) => {
    navigate(`/admin/dashboard/chatbots/${chatbotId}/edit`);
  };

  const handleCreateChatbot = () => {
    navigate('/admin/create');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">My Chatbots</h1>
          <p className="text-gray-600 mt-1">Manage and monitor your AI chatbots</p>
        </div>
        <Button 
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
          onClick={handleCreateChatbot}
        >
          <Plus className="w-4 h-4 mr-2" />
          Create New Chatbot
        </Button>
      </div>

      {/* Filters and Search */}
      <ChatbotFilters
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
      />

      {/* Chatbots Grid/List */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredChatbots.map((chatbot) => (
            <ChatbotCard
              key={chatbot.id}
              chatbot={chatbot}
              onView={handleViewChatbot}
              onEdit={handleEditChatbot}
            />
          ))}
        </div>
      ) : (
        <ChatbotTable
          chatbots={filteredChatbots}
          onView={handleViewChatbot}
          onEdit={handleEditChatbot}
        />
      )}
    </div>
  );
};
