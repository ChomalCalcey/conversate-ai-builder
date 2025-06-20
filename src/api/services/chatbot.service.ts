import { Chatbot } from "@/types/chatbot.types";

const getChatbotList = (): Promise<Chatbot[]> => {
  
  // TODO: Remove this after API is implemented
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
  }]

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(allChatbots);
    }, 1000);
  });
}


export const chatbotService = {
  getChatbotList
}