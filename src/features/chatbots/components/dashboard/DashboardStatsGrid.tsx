import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bot, MessageSquare } from 'lucide-react';

interface Stat {
  title: string;
  value: string;
  change: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

interface DashboardStatsGridProps {
  stats?: Stat[];
}

const defaultStats: Stat[] = [
  {
    title: 'Total Chatbots',
    value: '12',
    change: '+2 this week',
    icon: Bot,
    color: 'from-blue-600 to-blue-700'
  },
  {
    title: 'Total Conversations',
    value: '1,847',
    change: '+18% this month',
    icon: MessageSquare,
    color: 'from-green-600 to-green-700'
  }
];
const DashboardStatsGrid = ({ stats = defaultStats }: DashboardStatsGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {stats.map((stat, index) => {
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
  );
};

export default DashboardStatsGrid;