import React from 'react';
import { Globe, User } from 'lucide-react';

interface HeaderProps {
  onLoginClick: () => void;
}

export function Header({ onLoginClick }: HeaderProps) {
  return (
    <header className="absolute top-0 w-full z-50 px-6 py-4 flex items-center justify-between border-b border-gray-800 backdrop-blur-md">
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 rounded bg-gray-800 flex items-center justify-center border border-gray-700">
          <User size={18} className="text-gray-300" />
        </div>
        <span className="text-xl font-bold font-sans">Spacextoai</span>
        <span className="text-blue-500 bg-blue-500/10 rounded-full px-1.5 py-0.5 text-xs inline-flex items-center ml-2 border border-blue-500/20">
           <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
           认证
        </span>
      </div>

      <nav className="hidden md:flex items-center space-x-8 text-sm">
        <a href="#home" className="text-emerald-400 font-medium">首页</a>
        <a href="#products" className="text-gray-400 hover:text-white transition-colors">产品</a>
        <a href="#payment" className="text-gray-400 hover:text-white transition-colors">支付</a>
        <a href="#contact" className="text-gray-400 hover:text-white transition-colors">联系</a>
      </nav>

      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-1 text-sm bg-gray-800/50 rounded-full px-3 py-1.5 border border-gray-700 cursor-pointer hover:bg-gray-800 transition-colors">
          <Globe size={14} className="text-gray-400" />
          <span className="text-gray-300">CN ZH</span>
        </div>
        <button 
          onClick={onLoginClick}
          className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-1.5 rounded-full text-sm font-medium transition-colors border border-emerald-400/50 shadow-[0_0_10px_rgba(16,185,129,0.2)]"
        >
          登录
        </button>
      </div>
    </header>
  );
}
