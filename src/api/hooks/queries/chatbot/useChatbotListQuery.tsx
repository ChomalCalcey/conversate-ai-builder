import { useQuery } from "@tanstack/react-query";
import { QUERY_CLIENT_KEYS } from "../../query-client-key.constants";
import { chatbotService } from "@/api/services/chatbot.service";

const useChatbotListQuery = () => {

  return useQuery({
    queryKey: [QUERY_CLIENT_KEYS.CHATBOT.LIST],
    queryFn: () => chatbotService.getChatbotList(),
    placeholderData: (previousData) => previousData,
  });
}

export default useChatbotListQuery;