
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./routes/Index";
import Login from "./routes/Login";
import Signup from "./routes/Signup";
import AdminDashboard from "./routes/admin-portal/AdminDashboardPage";
import AdminChatbots from "./routes/admin-portal/MyChatbotsPage";
import AdminCreate from "./routes/admin-portal/ChatbotCreatePage";
import ChatbotView from "./routes/admin-portal/ChatbotViewPage";
import ChatbotEditPage from "./routes/admin-portal/ChatbotEditPage";
import NotFound from "./routes/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/my-chatbots" element={<AdminChatbots />} />
          <Route path="/admin/create" element={<AdminCreate />} />
          <Route path="/admin/dashboard/chatbots/:id/view" element={<ChatbotView />} />
          <Route path="/admin/dashboard/chatbots/:id/edit" element={<ChatbotEditPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
