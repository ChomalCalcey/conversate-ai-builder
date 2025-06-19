import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bot, MessageSquare, TrendingUp, Users, Plus, Eye, Edit, Trash2 } from 'lucide-react';
export const DashboardOverview = () => {
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
  }, {
    title: 'Active Users',
    value: '432',
    change: '+12% this month',
    icon: Users,
    color: 'from-purple-600 to-purple-700'
  }, {
    title: 'Response Rate',
    value: '98.2%',
    change: '+0.5% this week',
    icon: TrendingUp,
    color: 'from-orange-600 to-orange-700'
  }];
  const recentChatbots = [{
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
  }];
  return <div className="space-y-6">
      {/* Welcome Section */}
      

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
        const Icon = stat.icon;
        return <Card key={index} className="relative overflow-hidden">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium text-gray-600">
                    {stat.title}
                  </CardTitle>
                  <div className={`w-10 h-10 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </div>
                <p className="text-sm text-green-600">{stat.change}</p>
              </CardContent>
            </Card>;
      })}
      </div>

      {/* Recent Chatbots */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Recent Chatbots</CardTitle>
            <Button variant="outline" size="sm">
              View All
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentChatbots.map(chatbot => <div key={chatbot.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{chatbot.name}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${chatbot.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                        {chatbot.status}
                      </span>
                      <span>{chatbot.conversations} conversations</span>
                      <span>Updated {chatbot.lastUpdated}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm">
                    <Eye className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>)}
          </div>
        </CardContent>
      </Card>
    </div>;
};