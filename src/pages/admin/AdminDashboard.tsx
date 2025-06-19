
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sidebar } from '@/components/dashboard/Sidebar';
import { Header } from '@/components/dashboard/Header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bot, MessageSquare, Eye, Edit, Trash2 } from 'lucide-react';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from '@/components/ui/pagination';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const stats = [{
    title: 'Total Chatbots',
    value: '12',
    change: '+2 this week',
    icon: Bot,
    color: 'from-blue-600 to-blue-700'
  }, {
    title: 'Total Conversations',
    value: '1,847',
    change: '+18% this month',
    icon: MessageSquare,
    color: 'from-green-600 to-green-700'
  }];

  const allChatbots = [{
    id: 1,
    name: 'Customer Support Bot',
    status: 'Active',
    conversations: 245,
    lastUpdated: '2 hours ago'
  }, {
    id: 2,
    name: 'FAQ Assistant',
    status: 'Active',
    conversations: 189,
    lastUpdated: '1 day ago'
  }, {
    id: 3,
    name: 'Product Guide Bot',
    status: 'Draft',
    conversations: 67,
    lastUpdated: '3 days ago'
  }, {
    id: 4,
    name: 'Booking Assistant',
    status: 'Active',
    conversations: 567,
    lastUpdated: '5 hours ago'
  }, {
    id: 5,
    name: 'Sales Bot',
    status: 'Inactive',
    conversations: 234,
    lastUpdated: '1 week ago'
  }, {
    id: 6,
    name: 'Technical Support',
    status: 'Active',
    conversations: 678,
    lastUpdated: '3 hours ago'
  }];

  // Calculate pagination
  const totalPages = Math.ceil(allChatbots.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentChatbots = allChatbots.slice(startIndex, endIndex);

  const handleViewChatbot = (chatbotId: number) => {
    navigate(`/dashboard/chatbots/${chatbotId}/view`);
  };

  const handleEditChatbot = (chatbotId: number) => {
    navigate(`/dashboard/chatbots/${chatbotId}/edit`);
  };

  const handleDeleteChatbot = (chatbotId: number) => {
    // In a real app, this would show a confirmation dialog and make an API call
    console.log(`Delete chatbot with ID: ${chatbotId}`);
    alert(`Delete functionality for chatbot ${chatbotId} would be implemented here`);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar 
        activeSection="overview"
        setActiveSection={() => {}}
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
      />
      
      <div className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-16'}`}>
        <Header onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        
        <main className="p-6">
          <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
                <p className="text-gray-600 mt-1">Overview of your chatbot analytics and performance</p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card key={index} className="relative overflow-hidden">
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-sm font-medium text-gray-600">
                          {stat.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-gray-900 mb-1">
                        {stat.value}
                      </div>
                      <p className="text-sm text-green-600">{stat.change}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* All Chatbots */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>All Chatbots</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {currentChatbots.map(chatbot => (
                    <div key={chatbot.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex items-center space-x-4">
                        <div>
                          <h3 className="font-semibold text-gray-900">{chatbot.name}</h3>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                              chatbot.status === 'Active' 
                                ? 'bg-green-100 text-green-800' 
                                : chatbot.status === 'Draft' 
                                ? 'bg-yellow-100 text-yellow-800' 
                                : 'bg-red-100 text-red-800'
                            }`}>
                              {chatbot.status}
                            </span>
                            <span>{chatbot.conversations} conversations</span>
                            <span>Updated {chatbot.lastUpdated}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => handleViewChatbot(chatbot.id)}
                        >
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => handleEditChatbot(chatbot.id)}
                        >
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="text-red-600 hover:text-red-700"
                          onClick={() => handleDeleteChatbot(chatbot.id)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="mt-6 flex justify-center">
                    <Pagination>
                      <PaginationContent>
                        <PaginationItem>
                          <PaginationPrevious 
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              if (currentPage > 1) handlePageChange(currentPage - 1);
                            }}
                            className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
                          />
                        </PaginationItem>
                        
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                          <PaginationItem key={page}>
                            <PaginationLink
                              href="#"
                              onClick={(e) => {
                                e.preventDefault();
                                handlePageChange(page);
                              }}
                              isActive={currentPage === page}
                            >
                              {page}
                            </PaginationLink>
                          </PaginationItem>
                        ))}
                        
                        <PaginationItem>
                          <PaginationNext 
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              if (currentPage < totalPages) handlePageChange(currentPage + 1);
                            }}
                            className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}
                          />
                        </PaginationItem>
                      </PaginationContent>
                    </Pagination>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
