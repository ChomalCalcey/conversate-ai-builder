
import { Card, CardContent } from '@/components/ui/card';
import { ChatbotTableRow } from './ChatbotTableRow';

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

interface ChatbotTableProps {
  chatbots: Chatbot[];
  onView: (id: number) => void;
  onEdit: (id: number) => void;
}

export const ChatbotTable = ({ chatbots, onView, onEdit }: ChatbotTableProps) => {
  return (
    <Card>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Chatbot
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Conversations
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Updated
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {chatbots.map((chatbot) => (
                <ChatbotTableRow
                  key={chatbot.id}
                  chatbot={chatbot}
                  onView={onView}
                  onEdit={onEdit}
                />
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};
