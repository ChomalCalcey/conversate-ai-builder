
import { MessageSquare, LayoutDashboard, Bot, Plus, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate, useLocation } from 'react-router-dom';

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export const Sidebar = ({ activeSection, setActiveSection, isOpen, setIsOpen }: SidebarProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { id: 'overview', label: 'Dashboard', icon: LayoutDashboard, path: '/admin/dashboard' },
    { id: 'chatbots', label: 'My Chatbots', icon: Bot, path: '/admin/my-chatbots' },
    { id: 'create', label: 'Create New', icon: Plus, path: '/admin/create' },
  ];

  const handleMenuClick = (item: typeof menuItems[0]) => {
    setActiveSection(item.id);
    navigate(item.path);
  };

  const getActiveSection = () => {
    if (location.pathname === '/admin/dashboard') return 'overview';
    if (location.pathname === '/admin/my-chatbots') return 'chatbots';
    if (location.pathname === '/admin/create') return 'create';
    return activeSection;
  };

  return (
    <div className={`fixed left-0 top-0 h-full bg-white border-r border-gray-200 shadow-lg transition-all duration-300 z-40 ${isOpen ? 'w-64' : 'w-16'}`}>
      {/* Logo */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-r from-[#AD1AAC] to-[#8B1690] rounded-lg flex items-center justify-center">
            <MessageSquare className="w-5 h-5 text-white" />
          </div>
          {isOpen && (
            <span className="text-lg font-bold bg-gradient-to-r from-[#AD1AAC] to-[#8B1690] bg-clip-text text-transparent">
              ChatBot Creator
            </span>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = getActiveSection() === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => handleMenuClick(item)}
              className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-all duration-200 ${
                isActive 
                  ? 'bg-gradient-to-r from-[#AD1AAC] to-[#8B1690] text-white shadow-md' 
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
              }`}
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
              {isOpen && <span className="font-medium">{item.label}</span>}
            </button>
          );
        })}
      </nav>

      {/* Toggle Button */}
      <div className="absolute -right-3 top-20">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsOpen(!isOpen)}
          className="w-6 h-6 p-0 bg-white border-gray-200 shadow-md hover:shadow-lg rounded-full"
        >
          <Menu className="w-3 h-3" />
        </Button>
      </div>
    </div>
  );
};
