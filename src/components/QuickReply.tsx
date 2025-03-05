
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface QuickReplyProps {
  text: string;
  onClick: () => void;
  darkMode?: boolean;
  disabled?: boolean;
}

export const QuickReply: React.FC<QuickReplyProps> = ({ 
  text, 
  onClick, 
  darkMode = false,
  disabled = false 
}) => {
  return (
    <motion.button
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "text-sm py-1.5 px-3 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-woldreamz-blue focus:ring-offset-2 dark:focus:ring-offset-slate-900",
        darkMode 
          ? "bg-slate-700 text-slate-100 hover:bg-slate-600 border border-slate-600 disabled:bg-slate-800 disabled:text-slate-500" 
          : "bg-white text-woldreamz-blue hover:bg-woldreamz-50 border border-woldreamz-blue/20 disabled:bg-slate-100 disabled:text-slate-400 disabled:border-slate-200",
        disabled && "cursor-not-allowed opacity-70"
      )}
      aria-disabled={disabled}
    >
      {text}
    </motion.button>
  );
};
