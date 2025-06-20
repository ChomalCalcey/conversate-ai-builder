import { useState } from 'react';
import { Sidebar } from '@/components/admin-portal/Sidebar';
import { Header } from '@/components/admin-portal/Header';
import DashboardStatsGrid from '@/features/chatbots/components/dashboard/DashboardStatsGrid';
import ChatbotListView from '@/features/chatbots/components/dashboard/DashboardChatbotList';

const AdminDashboardPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar
        activeSection="overview"
        setActiveSection={() => { }}
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
      />

      <div className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-16'}`}>
        <Header />

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
            <DashboardStatsGrid />

            <ChatbotListView />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
