import React from 'react';
import { X } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LoginModal({ isOpen, onClose }: LoginModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>
      <div className="bg-white rounded-3xl w-full max-w-sm relative z-10 p-8 shadow-2xl">
        <button 
          onClick={onClose} 
          className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X size={20} />
        </button>

        <h2 className="text-2xl font-bold text-gray-900 mb-8 font-sans">登录账号</h2>

        <div className="space-y-5">
          <div>
            <label className="block text-sm font-bold text-gray-900 mb-2">用户名</label>
            <div className="relative">
              <input 
                type="text" 
                placeholder="请输入您的用户名" 
                autoFocus
                className="w-full border-2 border-emerald-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-0 text-gray-900 font-medium"
              />
              <div className="absolute left-4 top-3.5 w-[2px] h-5 bg-gray-900 animate-pulse"></div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-900 mb-2">邮箱</label>
            <input 
              type="email" 
              placeholder="example@gmail.com" 
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-emerald-500 transition-colors text-gray-900"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-900 mb-2">密码</label>
            <input 
              type="password" 
              placeholder="请输入您的密码" 
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-emerald-500 transition-colors text-gray-900"
            />
          </div>

          <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl py-3.5 mt-4 transition-colors">
            继续
          </button>
        </div>
      </div>
    </div>
  );
}
