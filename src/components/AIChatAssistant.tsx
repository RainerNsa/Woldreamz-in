
import React, { useState, useEffect, useRef } from 'react';
import { X, Send, Bot, Upload, Mic, PanelRight, Moon, Sun, Expand, Minimize, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/hooks/use-theme';
import { QuickReply } from '@/components/QuickReply';

// Define message types
type MessageType = {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: Date;
  isLoading?: boolean;
  attachment?: {
    type: 'image' | 'file';
    url: string;
    name: string;
  };
};

// Pre-defined quick replies
const quickReplies = [
  { id: '1', text: 'Book a Consultation', action: 'consultation' },
  { id: '2', text: 'Services Overview', action: 'services' },
  { id: '3', text: 'Career Opportunities', action: 'careers' },
  { id: '4', text: 'Contact Support', action: 'contact' },
];

const AIChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<MessageType[]>([
    { 
      id: '0', 
      sender: 'ai', 
      text: 'Hi there! I\'m your AI assistant from Woldreamz Inc. How can I help you today?',
      timestamp: new Date()
    }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [fileToUpload, setFileToUpload] = useState<File | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatHistoryRef = useRef<HTMLDivElement>(null);
  const recognition = useRef<SpeechRecognition | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();
  const { theme, setTheme } = useTheme();
  const idleTimerRef = useRef<NodeJS.Timeout | null>(null);

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

  // Set up idle timer for proactive engagement
  useEffect(() => {
    if (isOpen && messages.length === 1) {
      startIdleTimer();
    }
    
    return () => {
      if (idleTimerRef.current) {
        clearTimeout(idleTimerRef.current);
      }
    };
  }, [isOpen, messages]);

  // Start idle timer
  const startIdleTimer = () => {
    if (idleTimerRef.current) {
      clearTimeout(idleTimerRef.current);
    }
    
    idleTimerRef.current = setTimeout(() => {
      const proactiveMessage: MessageType = {
        id: Date.now().toString(),
        sender: 'ai',
        text: 'Looking for help with a specific service? I can recommend options based on your needs!',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, proactiveMessage]);
    }, 10000); // 10 seconds
  };

  // Initialize speech recognition
  useEffect(() => {
    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
      const SpeechRecognitionAPI = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (SpeechRecognitionAPI) {
        recognition.current = new SpeechRecognitionAPI();
        recognition.current.continuous = false;
        recognition.current.interimResults = false;
        
        recognition.current.onresult = (event) => {
          const transcript = event.results[0][0].transcript;
          setNewMessage(transcript);
          setIsListening(false);
        };
        
        recognition.current.onerror = () => {
          setIsListening(false);
          toast({
            title: "Error",
            description: "Could not recognize your voice. Please try again.",
            variant: "destructive",
          });
        };
      }
    }
  }, [toast]);

  // Scroll to bottom of messages when new messages are added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  // Add rate limiting
  const [rateLimitCounter, setRateLimitCounter] = useState(0);
  const [isRateLimited, setIsRateLimited] = useState(false);
  
  useEffect(() => {
    if (rateLimitCounter > 5) {
      setIsRateLimited(true);
      
      const timer = setTimeout(() => {
        setIsRateLimited(false);
        setRateLimitCounter(0);
      }, 60000); // 1 minute
      
      return () => clearTimeout(timer);
    }
  }, [rateLimitCounter]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const toggleVoiceInput = () => {
    if (isListening) {
      recognition.current?.stop();
      setIsListening(false);
    } else {
      if (recognition.current) {
        recognition.current.start();
        setIsListening(true);
      } else {
        toast({
          title: "Not supported",
          description: "Voice recognition is not supported in your browser.",
          variant: "destructive",
        });
      }
    }
  };

  const triggerFileUpload = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        toast({
          title: "File too large",
          description: "Please upload a file smaller than 5MB.",
          variant: "destructive",
        });
        return;
      }
      
      setFileToUpload(file);
      
      toast({
        title: "File selected",
        description: `${file.name} ready to upload.`,
        variant: "default",
      });
    }
  };

  const handleSendMessage = () => {
    if ((newMessage.trim() === '' && !fileToUpload) || isRateLimited) return;
    
    // Rate limiting
    setRateLimitCounter(prev => prev + 1);
    
    // Generate a unique ID for the message
    const messageId = Date.now().toString();
    
    // Add user message
    const userMessage: MessageType = {
      id: messageId,
      sender: 'user',
      text: newMessage,
      timestamp: new Date()
    };
    
    // Add attachment if present
    if (fileToUpload) {
      userMessage.attachment = {
        type: fileToUpload.type.startsWith('image/') ? 'image' : 'file',
        url: URL.createObjectURL(fileToUpload),
        name: fileToUpload.name
      };
    }
    
    setMessages(prev => [...prev, userMessage]);
    setNewMessage('');
    setFileToUpload(null);
    
    // Clear file input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    
    // Simulate AI thinking
    setIsTyping(true);
    
    // Get response based on user message
    const userInput = newMessage.toLowerCase();
    const userMessageWithContext = {
      id: messageId,
      text: userInput,
      attachment: userMessage.attachment
    };
    
    getAIResponse(userMessageWithContext);
  };

  const getAIResponse = async (userMessage: {id: string, text: string, attachment?: MessageType['attachment']}) => {
    // This would connect to a real API in production
    let aiResponse = `Thanks for your message. This is a simulated response in our demo. In a production environment, this would connect to ChatGPT API to provide real answers.`;
    
    // Simple response matching for demo purposes
    if (userMessage.text.includes('pricing') || userMessage.text.includes('cost') || userMessage.text.includes('how much')) {
      aiResponse = "Our pricing varies based on project scope and requirements. We offer customized quotes after an initial consultation. Would you like to schedule a call with our team to discuss your specific needs?";
    } else if (userMessage.text.includes('hello') || userMessage.text.includes('hi') || userMessage.text.includes('hey')) {
      aiResponse = "Hello! Thanks for reaching out. How can I assist you with your project today?";
    } else if (userMessage.text.includes('service') || userMessage.text.includes('offer')) {
      aiResponse = "We offer a range of services including web development, mobile app development, AI integration, UI/UX design, and digital marketing solutions. Is there a specific service you're interested in learning more about?";
    } else if (userMessage.text.includes('contact') || userMessage.text.includes('talk to human')) {
      aiResponse = "You can reach our team at woldreamzinc@gmail.com or call us at +1 (555) 123-4567. Alternatively, you can fill out the contact form on our website. Would you like me to direct you to our contact page?";
    } else if (userMessage.text.includes('thank')) {
      aiResponse = "You're very welcome! Is there anything else I can help you with today?";
    } else if (userMessage.text.includes('ed-tech') || userMessage.text.includes('education') || userMessage.text.includes('learning')) {
      aiResponse = "Our Ed-tech programs include interactive learning platforms, virtual classrooms, AI-powered tutoring systems, and educational content development. These solutions are designed to enhance both traditional and remote learning experiences. Would you like more specific information about any of these offerings?";
    } else if (userMessage.attachment) {
      if (userMessage.attachment.type === 'image') {
        aiResponse = `Thank you for sharing this image. In a production environment, we would analyze this using our AI vision models to provide relevant information. Can you tell me more about what you'd like to know about this image?`;
      } else {
        aiResponse = `I've received your file "${userMessage.attachment.name}". Our team will review this document and get back to you shortly. Is there anything specific about this file you'd like to discuss?`;
      }
    }
    
    // Simulate AI response after a short delay
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [
        ...prev, 
        { 
          id: `ai-${Date.now()}`,
          sender: 'ai', 
          text: aiResponse,
          timestamp: new Date()
        }
      ]);
      
      // Show toast notification for certain responses
      if (userMessage.text.includes('contact') || userMessage.text.includes('talk to human')) {
        toast({
          title: "Contact information",
          description: "Our team is available Monday-Friday, 9AM-6PM EST.",
          variant: "default",
        });
      }
    }, 1500);
  };

  const handleQuickReply = (action: string) => {
    let message = '';
    
    switch (action) {
      case 'consultation':
        message = "I'd like to book a consultation";
        break;
      case 'services':
        message = "Can you tell me about your services?";
        break;
      case 'careers':
        message = "I'm interested in career opportunities";
        break;
      case 'contact':
        message = "I need to contact support";
        break;
      default:
        message = action;
    }
    
    setNewMessage(message);
    // Auto-send after a short delay
    setTimeout(() => {
      handleSendMessage();
    }, 500);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Icon Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.3, type: 'spring' }}
          >
            <Button
              onClick={toggleChat}
              className="fixed right-6 bottom-6 w-14 h-14 rounded-full bg-woldreamz-blue text-white shadow-lg hover:bg-woldreamz-darkBlue z-50 flex items-center justify-center"
              aria-label="Chat with AI"
            >
              <Bot size={24} />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className={cn(
              "fixed right-6 z-50 overflow-hidden transition-all duration-300 flex flex-col",
              isExpanded 
                ? "top-6 left-6 bottom-6 w-auto h-auto" 
                : "bottom-24 w-80 md:w-96 rounded-2xl"
            )}
            style={{ 
              height: isExpanded ? 'auto' : '500px', 
              maxHeight: isExpanded ? 'calc(100vh - 48px)' : 'calc(100vh - 120px)',
              backdropFilter: 'blur(16px)',
              background: theme === 'dark' 
                ? 'rgba(23, 23, 23, 0.85)' 
                : 'rgba(255, 255, 255, 0.85)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
              border: theme === 'dark'
                ? '1px solid rgba(255, 255, 255, 0.1)'
                : '1px solid rgba(0, 0, 0, 0.1)'
            }}
          >
            {/* Header */}
            <div className={cn(
              "p-4 flex justify-between items-center",
              theme === 'dark' ? 'bg-woldreamz-blue/90' : 'bg-woldreamz-blue'
            )}>
              <div className="flex items-center gap-2">
                <Bot size={20} className="text-white" />
                <h3 className="font-medium text-white">Woldreamz AI Assistant</h3>
              </div>
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="text-white/80 hover:text-white focus:outline-none"
                  aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                >
                  {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                </button>
                <button 
                  onClick={toggleExpand}
                  className="text-white/80 hover:text-white focus:outline-none"
                  aria-label={isExpanded ? 'Minimize chat' : 'Expand chat'}
                >
                  {isExpanded ? <Minimize size={18} /> : <Expand size={18} />}
                </button>
                <button 
                  onClick={toggleChat}
                  className="text-white/80 hover:text-white focus:outline-none"
                  aria-label="Close chat"
                >
                  <X size={18} />
                </button>
              </div>
            </div>
            
            {/* Messages */}
            <div 
              ref={chatHistoryRef}
              className={cn(
                "flex-1 overflow-y-auto p-4",
                theme === 'dark' ? 'bg-slate-900/50' : 'bg-slate-50/50'
              )}
            >
              {messages.map((message, index) => (
                <motion.div 
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * (index % 3) }}
                  className={cn(
                    "mb-4 max-w-[85%] rounded-xl p-3",
                    message.sender === 'user' 
                      ? cn(
                        "ml-auto rounded-tr-none",
                        theme === 'dark' 
                          ? "bg-woldreamz-blue text-white" 
                          : "bg-woldreamz-blue text-white"
                      )
                      : cn(
                        "mr-auto rounded-tl-none",
                        theme === 'dark'
                          ? "bg-slate-800 text-slate-100 border border-slate-700"
                          : "bg-white text-slate-800 border border-slate-100 shadow-sm"
                      )
                  )}
                >
                  {message.text}
                  
                  {/* Display attachment if present */}
                  {message.attachment && (
                    <div className="mt-2">
                      {message.attachment.type === 'image' ? (
                        <img 
                          src={message.attachment.url} 
                          alt="Uploaded image" 
                          className="max-w-full rounded-md max-h-40 object-contain"
                        />
                      ) : (
                        <div className="flex items-center gap-2 text-sm p-2 rounded-md bg-black/10">
                          <PanelRight size={16} />
                          <span className="truncate">{message.attachment.name}</span>
                        </div>
                      )}
                    </div>
                  )}
                  
                  <div className={cn(
                    "text-xs mt-1",
                    message.sender === 'user'
                      ? "text-white/70"
                      : theme === 'dark' ? "text-slate-400" : "text-slate-500"
                  )}>
                    {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className={cn(
                    "max-w-[85%] rounded-xl rounded-tl-none p-3 mr-auto",
                    theme === 'dark'
                      ? "bg-slate-800 text-slate-100 border border-slate-700"
                      : "bg-white text-slate-800 border border-slate-100 shadow-sm"
                  )}
                >
                  <div className="flex space-x-1">
                    <motion.div 
                      animate={{ y: [0, -5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.2, delay: 0 }}
                      className={cn(
                        "w-2 h-2 rounded-full",
                        theme === 'dark' ? "bg-slate-400" : "bg-slate-400"
                      )}
                    />
                    <motion.div 
                      animate={{ y: [0, -5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.2, delay: 0.2 }}
                      className={cn(
                        "w-2 h-2 rounded-full",
                        theme === 'dark' ? "bg-slate-400" : "bg-slate-400"
                      )}
                    />
                    <motion.div 
                      animate={{ y: [0, -5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.2, delay: 0.4 }}
                      className={cn(
                        "w-2 h-2 rounded-full",
                        theme === 'dark' ? "bg-slate-400" : "bg-slate-400"
                      )}
                    />
                  </div>
                </motion.div>
              )}
              
              {/* Quick replies after AI message */}
              {messages.length > 0 && messages[messages.length - 1].sender === 'ai' && !isTyping && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {quickReplies.map(reply => (
                    <QuickReply 
                      key={reply.id}
                      text={reply.text}
                      onClick={() => handleQuickReply(reply.action)}
                      darkMode={theme === 'dark'}
                    />
                  ))}
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>
            
            {/* Rate limit warning */}
            {isRateLimited && (
              <div className="p-2 bg-yellow-50 text-yellow-800 text-center text-sm border-t border-yellow-100">
                Please wait a moment before sending more messages.
              </div>
            )}
            
            {/* Input */}
            <div className={cn(
              "p-3 border-t",
              theme === 'dark' 
                ? "border-slate-700 bg-slate-800/90" 
                : "border-slate-100 bg-white"
            )}>
              <div className="flex flex-col gap-2">
                {fileToUpload && (
                  <div className={cn(
                    "flex items-center gap-2 p-2 rounded text-sm",
                    theme === 'dark' ? "bg-slate-700" : "bg-slate-100"
                  )}>
                    <span className="truncate flex-1">{fileToUpload.name}</span>
                    <button
                      onClick={() => setFileToUpload(null)}
                      className={cn(
                        "text-slate-500 hover:text-slate-700",
                        theme === 'dark' ? "text-slate-400 hover:text-slate-200" : ""
                      )}
                    >
                      <X size={16} />
                    </button>
                  </div>
                )}
                
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Type your message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className={cn(
                      "flex-1 py-2 px-4 border rounded-l-full focus:outline-none focus:ring-2 focus:ring-woldreamz-blue/20 focus:border-woldreamz-blue",
                      theme === 'dark' 
                        ? "bg-slate-700 border-slate-600 text-white placeholder:text-slate-400" 
                        : "bg-white border-slate-200 text-slate-800"
                    )}
                    disabled={isRateLimited}
                  />
                  
                  <div className="flex">
                    <button
                      onClick={toggleVoiceInput}
                      disabled={isRateLimited}
                      className={cn(
                        "p-2 border-y",
                        theme === 'dark' 
                          ? "bg-slate-700 border-slate-600 text-slate-300 hover:text-white" 
                          : "bg-slate-50 border-slate-200 text-slate-500 hover:text-slate-700",
                        isListening && "text-woldreamz-blue"
                      )}
                    >
                      <Mic size={20} className={isListening ? "animate-pulse text-woldreamz-blue" : ""} />
                    </button>
                    
                    <button
                      onClick={triggerFileUpload}
                      disabled={isRateLimited}
                      className={cn(
                        "p-2 border-y border-r",
                        theme === 'dark' 
                          ? "bg-slate-700 border-slate-600 text-slate-300 hover:text-white" 
                          : "bg-slate-50 border-slate-200 text-slate-500 hover:text-slate-700"
                      )}
                    >
                      <Upload size={20} />
                    </button>
                    
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      className="hidden"
                      accept="image/*,.pdf,.doc,.docx,.txt"
                    />
                    
                    <button
                      onClick={handleSendMessage}
                      disabled={isRateLimited || (newMessage.trim() === '' && !fileToUpload)}
                      className={cn(
                        "bg-woldreamz-blue text-white p-2 rounded-r-full",
                        (isRateLimited || (newMessage.trim() === '' && !fileToUpload)) 
                          ? "opacity-50 cursor-not-allowed" 
                          : "hover:bg-woldreamz-darkBlue"
                      )}
                    >
                      <Send size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Floating Message Button (when chat is minimized but needs attention) */}
      <AnimatePresence>
        {!isOpen && messages.length > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
            className="fixed right-6 bottom-24 z-50"
          >
            <button
              onClick={toggleChat}
              className="bg-white dark:bg-slate-800 p-3 rounded-full shadow-lg flex items-center space-x-2 max-w-xs group"
            >
              <MessageSquare size={18} className="text-woldreamz-blue flex-shrink-0" />
              <span className="text-sm text-left truncate pr-1 text-slate-700 dark:text-slate-200">
                New message from Woldreamz AI
              </span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChatAssistant;
