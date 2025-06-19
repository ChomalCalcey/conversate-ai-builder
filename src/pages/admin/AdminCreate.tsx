import { useState } from 'react';
import { Sidebar } from '@/components/dashboard/Sidebar';
import { Header } from '@/components/dashboard/Header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Progress } from '@/components/ui/progress';
import { Upload, FileText, Palette, Settings, Rocket, ArrowLeft, ArrowRight, Check, X } from 'lucide-react';

const AdminCreate = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    files: [] as File[],
    theme: 'professional',
    primaryColor: '#3B82F6',
    welcomeMessage: '',
    preSeededQueries: ['', '', '', '']
  });

  const steps = [
    { number: 1, title: 'Basic Info', icon: FileText },
    { number: 2, title: 'Knowledge Upload', icon: Upload },
    { number: 3, title: 'Customize Theme', icon: Palette },
    { number: 4, title: 'Configuration', icon: Settings },
    { number: 5, title: 'Review & Deploy', icon: Rocket }
  ];

  const themes = [
    { id: 'professional', name: 'Professional', preview: 'bg-slate-100', accent: 'bg-blue-600' },
    { id: 'friendly', name: 'Friendly', preview: 'bg-green-50', accent: 'bg-green-600' },
    { id: 'modern', name: 'Modern', preview: 'bg-purple-50', accent: 'bg-purple-600' },
    { id: 'casual', name: 'Casual', preview: 'bg-orange-50', accent: 'bg-orange-600' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePreSeededQueryChange = (index: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      preSeededQueries: prev.preSeededQueries.map((query, i) => i === index ? value : query)
    }));
  };

  const removePreSeededQuery = (index: number) => {
    setFormData(prev => ({
      ...prev,
      preSeededQueries: prev.preSeededQueries.map((query, i) => i === index ? '' : query)
    }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData(prev => ({ ...prev, files: Array.from(e.target.files || []) }));
    }
  };

  const nextStep = () => {
    if (currentStep < 5) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const progress = (currentStep / 5) * 100;

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <Label htmlFor="name">Chatbot Name *</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="e.g., Customer Support Bot"
                className="mt-1"
              />
            </div>
            
            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Describe what your chatbot will do..."
                className="mt-1"
                rows={3}
              />
            </div>
            
            <div>
              <Label htmlFor="category">Category</Label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select a category</option>
                <option value="customer-support">Customer Support</option>
                <option value="sales">Sales</option>
                <option value="faq">FAQ</option>
                <option value="booking">Booking & Appointments</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 hover:border-blue-400 transition-colors">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Upload Knowledge Files</h3>
                <p className="text-gray-600 mb-4">Drag and drop your files here, or click to browse</p>
                <input
                  type="file"
                  multiple
                  accept=".pdf,.txt,.doc,.docx"
                  onChange={handleFileUpload}
                  className="hidden"
                  id="file-upload"
                />
                <Button asChild>
                  <label htmlFor="file-upload" className="cursor-pointer">
                    Choose Files
                  </label>
                </Button>
                <p className="text-xs text-gray-500 mt-2">Supports PDF, TXT, DOC files up to 10MB each</p>
              </div>
            </div>
            
            {formData.files.length > 0 && (
              <div className="space-y-2">
                <h4 className="font-medium">Uploaded Files:</h4>
                {formData.files.map((file, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <FileText className="w-4 h-4 text-gray-500" />
                      <span className="text-sm">{file.name}</span>
                    </div>
                    <span className="text-xs text-gray-500">{(file.size / 1024 / 1024).toFixed(2)} MB</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div>
              <Label className="text-base font-medium mb-4 block">Choose a Theme</Label>
              <div className="grid grid-cols-2 gap-4">
                {themes.map((theme) => (
                  <button
                    key={theme.id}
                    onClick={() => setFormData(prev => ({ ...prev, theme: theme.id }))}
                    className={`p-4 border-2 rounded-lg transition-all ${
                      formData.theme === theme.id 
                        ? 'border-blue-500 bg-blue-50' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className={`w-full h-24 ${theme.preview} rounded-md mb-3 relative overflow-hidden`}>
                      <div className={`absolute bottom-2 right-2 w-6 h-6 ${theme.accent} rounded-full`}></div>
                      <div className="absolute top-2 left-2 w-8 h-1 bg-gray-300 rounded"></div>
                      <div className="absolute top-4 left-2 w-6 h-1 bg-gray-300 rounded"></div>
                    </div>
                    <h3 className="font-medium">{theme.name}</h3>
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <Label htmlFor="primaryColor">Primary Color</Label>
              <div className="flex items-center space-x-3 mt-1">
                <input
                  type="color"
                  id="primaryColor"
                  name="primaryColor"
                  value={formData.primaryColor}
                  onChange={handleInputChange}
                  className="w-12 h-12 border border-gray-300 rounded cursor-pointer"
                />
                <Input
                  value={formData.primaryColor}
                  onChange={handleInputChange}
                  name="primaryColor"
                  className="flex-1"
                />
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div>
              <Label htmlFor="welcomeMessage">Welcome Message</Label>
              <Textarea
                id="welcomeMessage"
                name="welcomeMessage"
                value={formData.welcomeMessage}
                onChange={handleInputChange}
                placeholder="Hi! How can I help you today?"
                className="mt-1"
                rows={3}
              />
            </div>
            
            <div>
              <Label className="text-base font-medium mb-4 block">Pre-seeded Queries (up to 4)</Label>
              <div className="space-y-3">
                {formData.preSeededQueries.map((query, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Input
                      value={query}
                      onChange={(e) => handlePreSeededQueryChange(index, e.target.value)}
                      placeholder={`Sample question ${index + 1}`}
                      className="flex-1"
                    />
                    {query && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removePreSeededQuery(index)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-2">These will appear as quick-start questions for users</p>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Ready to Deploy!</h3>
              <p className="text-gray-600">Review your chatbot configuration below</p>
            </div>
            
            <Card>
              <CardContent className="p-4 space-y-4">
                <div className="flex justify-between">
                  <span className="font-medium">Name:</span>
                  <span>{formData.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Theme:</span>
                  <span className="capitalize">{formData.theme}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Files uploaded:</span>
                  <span>{formData.files.length} files</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Pre-seeded queries:</span>
                  <span>{formData.preSeededQueries.filter(q => q.trim()).length} queries</span>
                </div>
              </CardContent>
            </Card>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium mb-2">Embed Code:</h4>
              <code className="text-sm bg-white p-2 rounded border block">
                {`<script src="https://chatbot.app/embed/your-bot-id.js"></script>`}
              </code>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar 
        activeSection="create"
        setActiveSection={() => {}}
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
      />
      
      <div className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-16'}`}>
        <Header onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        
        <main className="p-6">
          <div className="space-y-6">
            {/* Header */}
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Create New Chatbot</h1>
              <p className="text-gray-600 mt-1">Follow the steps below to create your AI chatbot</p>
            </div>

            {/* Progress */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-gray-600">Step {currentStep} of 5</span>
                  <span className="text-sm font-medium text-gray-600">{Math.round(progress)}% Complete</span>
                </div>
                <Progress value={progress} className="mb-6" />
                
                <div className="flex items-center justify-between">
                  {steps.map((step) => {
                    const Icon = step.icon;
                    const isActive = currentStep === step.number;
                    const isCompleted = currentStep > step.number;
                    
                    return (
                      <div key={step.number} className="flex flex-col items-center">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                          isCompleted ? 'bg-green-600 text-white' :
                          isActive ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
                        }`}>
                          {isCompleted ? <Check className="w-5 h-5" /> : <Icon className="w-5 h-5" />}
                        </div>
                        <span className={`text-xs text-center ${
                          isActive ? 'text-blue-600 font-medium' : 'text-gray-600'
                        }`}>
                          {step.title}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Step Content */}
            <Card>
              <CardHeader>
                <CardTitle>{steps[currentStep - 1].title}</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                {renderStepContent()}
                
                {/* Navigation */}
                <div className="flex items-center justify-between mt-8 pt-6 border-t">
                  <Button
                    variant="outline"
                    onClick={prevStep}
                    disabled={currentStep === 1}
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Previous
                  </Button>
                  
                  {currentStep === 5 ? (
                    <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                      <Rocket className="w-4 h-4 mr-2" />
                      Deploy Chatbot
                    </Button>
                  ) : (
                    <Button onClick={nextStep}>
                      Next
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminCreate;
