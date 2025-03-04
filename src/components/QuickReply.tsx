
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface QuickReplyProps {
  text: string;
  onClick: () => void;
  darkMode?: boolean;
}

export const QuickReply: React.FC<QuickReplyProps> = ({ text, onClick, darkMode = false }) => {
  return (
    <motion.button
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={cn(
        "text-sm py-1.5 px-3 rounded-full transition-colors duration-200",
        darkMode 
          ? "bg-slate-700 text-white hover:bg-slate-600 border border-slate-600" 
          : "bg-white text-woldreamz-blue hover:bg-woldreamz-50 border border-woldreamz-blue/20"
      )}
    >
      {text}
    </motion.button>
  );
};
