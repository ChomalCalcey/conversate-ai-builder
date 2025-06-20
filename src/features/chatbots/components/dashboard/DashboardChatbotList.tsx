import useChatbotListQuery from "@/api/hooks/queries/chatbot/useChatbotListQuery";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Edit, Eye, Trash2 } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const ChatbotListView = () => {
  const navigate = useNavigate();
  
  const { data: chatbots, isLoading } = useChatbotListQuery(); 
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Calculate pagination
  const totalPages = Math.ceil(chatbots.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentChatbots = chatbots.slice(startIndex, endIndex);

  const handleViewChatbot = (chatbotId: number) => {
    navigate(`/admin/dashboard/chatbots/${chatbotId}/view`);
  };

  const handleEditChatbot = (chatbotId: number) => {
    navigate(`/admin/dashboard/chatbots/${chatbotId}/edit`);
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
    <div>
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
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${chatbot.status === 'Active'
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
  );
}

      export default ChatbotListView;
