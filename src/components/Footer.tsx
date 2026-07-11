import React from 'react';
import { Mail, Send, Sparkles } from 'lucide-react';

export function Footer() {
  return (
    <>
      <section id="contact" className="py-24 px-6 max-w-7xl mx-auto w-full relative z-10 bg-white">
        <div className="max-w-2xl">
          <div className="inline-block bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full text-xs font-semibold mb-4 border border-emerald-100">
            联系我们
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            有问题？<br />
            <span className="text-emerald-500">联系我们</span>
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            我们的客服团队全天候就绪。可通过右侧表单或以下联系方式直接联系我们。
          </p>

          <div className="bg-orange-50 border border-orange-100 rounded-xl p-4 flex items-start space-x-3 mb-8">
             <div className="text-orange-500 mt-0.5"><Sparkles size={18} /></div>
             <div>
               <h4 className="font-bold text-orange-800 text-sm">批发优惠</h4>
               <p className="text-xs text-orange-600 mt-1">大量购买可享批发价，请联系客服商议。</p>
             </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                <Send size={18} />
              </div>
              <div>
                <p className="font-bold text-gray-900 text-sm">电报</p>
                <a href="https://t.me/Jurjianto" target="_blank" rel="noopener noreferrer" className="text-emerald-600 text-xs hover:underline cursor-pointer">
                  @Jurjianto
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center text-purple-600">
                <Mail size={18} />
              </div>
              <div>
                <p className="font-bold text-gray-900 text-sm">Email</p>
                <p className="text-purple-600 text-xs">support@spacextoai.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#0A0F1C] border-t border-gray-800 pt-20 pb-10 px-6 relative z-10 w-full mt-24">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
            
          <h2 className="text-3xl font-bold text-white mb-2">现在就开始使用</h2>
          <h2 className="text-3xl font-bold text-emerald-400 glow-green mb-6">高级 AI 工具</h2>
          <p className="text-gray-400 text-sm mb-10 text-center">不要错过提升生产力的机会。价格实惠，即时激活。</p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 mb-20">
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-8 rounded-lg transition-colors border border-emerald-400/50 shadow-[0_0_15px_rgba(16,185,129,0.3)] flex items-center">
              选择套餐 <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
            <button className="bg-gray-800 hover:bg-gray-700 text-white font-medium py-3 px-8 rounded-lg transition-colors border border-gray-700">
              免费注册
            </button>
          </div>

          <div className="w-full border-t border-gray-800 pt-10 flex flex-col md:flex-row justify-between w-full">
            <div className="mb-8 md:mb-0 max-w-xs">
              <div className="flex items-center space-x-2 text-white font-bold text-lg mb-4">
                 <span>Spacextoai</span>
                 <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
              </div>
              <p className="text-gray-500 text-xs leading-relaxed">
                可信赖的高级 AI 工具访问平台，价格实惠，即时激活，全天候支持。
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
              <div>
                <h4 className="text-white font-bold text-sm mb-4">产品</h4>
                <ul className="space-y-3">
                  <li><a href="#" className="text-gray-500 hover:text-white transition-colors text-xs">Gemini Ultra</a></li>
                  <li><a href="#" className="text-gray-500 hover:text-white transition-colors text-xs">Claude 5x</a></li>
                  <li><a href="#" className="text-gray-500 hover:text-white transition-colors text-xs">Claude 20x</a></li>
                  <li><a href="#" className="text-gray-500 hover:text-white transition-colors text-xs">Cursor Ultra</a></li>
                  <li><a href="#" className="text-gray-500 hover:text-white transition-colors text-xs">Gpt Pro</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-bold text-sm mb-4">支付方式</h4>
                <ul className="space-y-3">
                  <li><span className="text-gray-500 text-xs">Alipay</span></li>
                  <li><span className="text-gray-500 text-xs">WeChat Pay</span></li>
                  <li><span className="text-gray-500 text-xs">Crypto (USDT)</span></li>
                  <li><span className="text-gray-500 text-xs">Transfer Bank</span></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-bold text-sm mb-4">帮助</h4>
                <ul className="space-y-3">
                  <li><a href="#" className="text-gray-500 hover:text-white transition-colors text-xs">FAQ</a></li>
                  <li><a href="#" className="text-gray-500 hover:text-white transition-colors text-xs">教程</a></li>
                  <li><a href="#contact" className="text-gray-500 hover:text-white transition-colors text-xs">联系我们</a></li>
                  <li><a href="#" className="text-gray-500 hover:text-white transition-colors text-xs">服务条款</a></li>
                  <li><a href="#" className="text-gray-500 hover:text-white transition-colors text-xs">隐私政策</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="w-full mt-16 flex flex-col md:flex-row items-center justify-between text-gray-600 text-[10px]">
             <span>{'{}'}</span>
             <span>© 2026 Spacextoai. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </>
  );
}
