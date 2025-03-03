
import React, { useState, useEffect, useRef } from 'react';
import { X, Send, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

const AIChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ sender: 'user' | 'ai'; text: string }>>([
    { sender: 'ai', text: 'Hi there! I\'m your AI assistant from Woldreamz Inc. How can I help you today?' }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  // Add event listener for the custom event
  useEffect(() => {
    const handleCustomEvent = () => {
      setIsOpen(true);
    };
    
    window.addEventListener('toggleAIChat', handleCustomEvent);
    
    return () => {
      window.removeEventListener('toggleAIChat', handleCustomEvent);
    };
  }, []);

  // Scroll to bottom of messages when new messages are added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;
    
    // Add user message
    setMessages(prev => [...prev, { sender: 'user', text: newMessage }]);
    setNewMessage('');
    
    // Simulate AI thinking
    setIsTyping(true);
    
    // Get response based on user message
    const userInput = newMessage.toLowerCase();
    let aiResponse = `Thanks for your message. This is a simulated response in our demo. In a production environment, this would connect to an AI service to provide real answers.`;
    
    // Simple response matching
    if (userInput.includes('pricing') || userInput.includes('cost') || userInput.includes('how much')) {
      aiResponse = "Our pricing varies based on project scope and requirements. We offer customized quotes after an initial consultation. Would you like to schedule a call with our team to discuss your specific needs?";
    } else if (userInput.includes('hello') || userInput.includes('hi') || userInput.includes('hey')) {
      aiResponse = "Hello! Thanks for reaching out. How can I assist you with your project today?";
    } else if (userInput.includes('service') || userInput.includes('offer')) {
      aiResponse = "We offer a range of services including web development, mobile app development, AI integration, UI/UX design, and digital marketing solutions. Is there a specific service you're interested in learning more about?";
    } else if (userInput.includes('contact') || userInput.includes('talk to human')) {
      aiResponse = "You can reach our team at contact@woldreamzinc.com or call us at +1 (555) 123-4567. Alternatively, you can fill out the contact form on our website. Would you like me to direct you to our contact page?";
    } else if (userInput.includes('thank')) {
      aiResponse = "You're very welcome! Is there anything else I can help you with today?";
    }
    
    // Simulate AI response after a short delay
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [
        ...prev, 
        { sender: 'ai', text: aiResponse }
      ]);
      
      // Show toast notification
      if (userInput.includes('contact') || userInput.includes('talk to human')) {
        toast({
          title: "Contact information",
          description: "Our team is available Monday-Friday, 9AM-6PM EST.",
          variant: "default",
        });
      }
    }, 1500);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Icon Button */}
      <Button
        onClick={toggleChat}
        className="fixed right-6 bottom-6 w-14 h-14 rounded-full bg-woldreamz-blue text-white shadow-lg hover:bg-woldreamz-darkBlue z-50 flex items-center justify-center"
        aria-label="Chat with AI"
      >
        <Bot size={24} />
      </Button>
      
      {/* Chat Panel */}
      <div 
        className={cn(
          "fixed right-6 bottom-24 w-80 md:w-96 bg-white rounded-2xl shadow-xl z-50 overflow-hidden transition-all duration-300 flex flex-col",
          isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        )}
        style={{ height: '500px', maxHeight: 'calc(100vh - 120px)' }}
      >
        {/* Header */}
        <div className="bg-woldreamz-blue text-white p-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Bot size={20} />
            <h3 className="font-medium">AI Assistant</h3>
          </div>
          <button 
            onClick={toggleChat}
            className="text-white hover:text-white/80 focus:outline-none"
            aria-label="Close chat"
          >
            <X size={20} />
          </button>
        </div>
        
        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 bg-slate-50">
          {messages.map((message, index) => (
            <div 
              key={index}
              className={cn(
                "mb-4 max-w-[85%] rounded-xl p-3 animate-fade-in",
                message.sender === 'user' 
                  ? "bg-woldreamz-blue text-white ml-auto rounded-tr-none" 
                  : "bg-white text-slate-800 mr-auto rounded-tl-none shadow-sm border border-slate-100"
              )}
            >
              {message.text}
            </div>
          ))}
          
          {isTyping && (
            <div className="bg-white text-slate-800 max-w-[85%] rounded-xl rounded-tl-none p-3 shadow-sm border border-slate-100 mr-auto animate-pulse">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
        
        {/* Input */}
        <div className="p-3 border-t border-slate-100 bg-white">
          <div className="flex">
            <input
              type="text"
              placeholder="Type your message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 py-2 px-4 border border-slate-200 rounded-l-full focus:outline-none focus:ring-2 focus:ring-woldreamz-blue/20 focus:border-woldreamz-blue"
            />
            <button
              onClick={handleSendMessage}
              disabled={newMessage.trim() === ''}
              className={cn(
                "bg-woldreamz-blue text-white p-2 rounded-r-full",
                newMessage.trim() === '' ? "opacity-50 cursor-not-allowed" : "hover:bg-woldreamz-darkBlue"
              )}
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIChatAssistant;
