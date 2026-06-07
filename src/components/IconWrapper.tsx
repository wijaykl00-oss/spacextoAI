import React from 'react';
import { Bot, BrainCircuit, Code2, MessageSquare, Sparkles, Zap } from 'lucide-react';
import { Product } from '../types';

interface IconWrapperProps {
  iconName: string;
  className?: string;
  size?: number;
}

export function IconWrapper({ iconName, className, size = 24 }: IconWrapperProps) {
  switch (iconName) {
    case 'Sparkles': return <Sparkles size={size} className={className} />;
    case 'BrainCircuit': return <BrainCircuit size={size} className={className} />;
    case 'Zap': return <Zap size={size} className={className} />;
    case 'Code2': return <Code2 size={size} className={className} />;
    case 'MessageSquare': return <MessageSquare size={size} className={className} />;
    case 'Bot': return <Bot size={size} className={className} />;
    default: return <Sparkles size={size} className={className} />;
  }
}
