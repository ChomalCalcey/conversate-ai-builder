import ChatbotView from "@/features/chatbots/components/chatbot-view/ChatbotView";
import { useParams } from "react-router-dom";

const ChatbotViewPage = () => {
  const { id } = useParams();

  return (<ChatbotView id={id || ''} />);
};

export default ChatbotViewPage;
