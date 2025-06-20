import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

interface ChatbotFiltersProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  viewMode: 'grid' | 'list';
  onViewModeChange: (mode: 'grid' | 'list') => void;
}
export const ChatbotFilters = ({
  searchTerm,
  onSearchChange,
  viewMode,
  onViewModeChange
}: ChatbotFiltersProps) => {
  return <Card>
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input placeholder="Search chatbots..." value={searchTerm} onChange={e => onSearchChange(e.target.value)} className="pl-10 w-64" />
            </div>
            
          </div>
          <div className="flex items-center space-x-2">
            <Button variant={viewMode === 'grid' ? 'default' : 'outline'} size="sm" onClick={() => onViewModeChange('grid')}>
              Grid
            </Button>
            <Button variant={viewMode === 'list' ? 'default' : 'outline'} size="sm" onClick={() => onViewModeChange('list')}>
              List
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>;
};