import React from 'react';
import { Clock, ShieldCheck, Zap } from 'lucide-react';

export function Payment() {
  return (
    <section id="payment" className="py-24 px-6 max-w-7xl mx-auto w-full relative z-10 border-t border-gray-800">
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="w-full lg:w-1/2">
          <div className="inline-block bg-gray-800/50 border border-gray-700 rounded-full px-3 py-1 mb-4">
            <span className="text-xs text-gray-300">支付方式</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            支付方式 <br />
            <span className="text-white">简单安全</span>
          </h2>
          <p className="text-gray-400 mb-10 max-w-md">
            我们支持支付宝付款，处理快速、安全可靠，扫码即可完成支付。
          </p>

          <div className="space-y-4 mb-10">
            {/* Alipay Option */}
            <div className="bg-blue-600/10 border border-blue-500/50 rounded-xl p-4 flex items-center space-x-4 cursor-pointer">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                支
              </div>
              <div className="flex-grow">
                <h4 className="text-white font-medium flex items-center">
                  Alipay 支付宝 <ShieldCheck size={14} className="ml-1 text-blue-400" />
                </h4>
                <p className="text-gray-400 text-xs">扫描二维码，安全快速完成支付</p>
              </div>
              <div className="flex space-x-2 text-xs text-blue-400 font-medium">
                <span className="flex items-center"><ShieldCheck size={12} className="mr-0.5" /> 安全认证</span>
                <span className="flex items-center"><Zap size={12} className="mr-0.5" /> 即时到账</span>
              </div>
            </div>

            {/* Crypto Option */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-4 flex items-center space-x-4 cursor-pointer hover:bg-gray-800 transition-colors">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold">
                ₮
              </div>
              <div>
                <h4 className="text-white font-medium">BEP20 (USDT)</h4>
                <p className="text-gray-400 text-xs font-mono">0x36152b220b1b1b3b436124d21847d8f88fba7118</p>
              </div>
            </div>
            
            {/* Warning Option */}
            <div className="bg-orange-900/20 border border-orange-500/30 rounded-xl p-4 flex items-center space-x-3">
              <svg className="w-5 h-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <p className="text-sm text-orange-400">如果您无法完成付款，请直接联系下方 Telegram 客服获取帮助。</p>
            </div>
          </div>

          {/* Stats/Badges */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-gray-800/30 border border-gray-800 rounded-xl p-4 text-center">
              <Clock size={20} className="text-emerald-400 mx-auto mb-2" />
              <div className="font-bold text-white">&lt; 5 分钟</div>
              <div className="text-xs text-gray-400">支付处理</div>
            </div>
            <div className="bg-gray-800/30 border border-gray-800 rounded-xl p-4 text-center">
              <Zap size={20} className="text-blue-400 mx-auto mb-2" />
              <div className="font-bold text-white">即时</div>
              <div className="text-xs text-gray-400">账号发送</div>
            </div>
            <div className="bg-gray-800/30 border border-gray-800 rounded-xl p-4 text-center">
              <ShieldCheck size={20} className="text-orange-400 mx-auto mb-2" />
              <div className="font-bold text-white">100%</div>
              <div className="text-xs text-gray-400">交易安全</div>
            </div>
          </div>
        </div>

        {/* Right side QR Section */}
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 w-full max-w-md">
            <div className="flex bg-gray-800 rounded-lg p-1 mb-6">
              <button className="flex-1 bg-blue-600 text-white rounded-md py-2 text-sm font-medium">Alipay</button>
              <button className="flex-1 text-gray-400 py-2 text-sm font-medium">BEP20</button>
            </div>

            <div className="text-center mb-6">
              <div className="inline-block bg-blue-600/10 text-blue-400 border border-blue-500/20 rounded-full px-3 py-1 text-xs font-medium mb-4">
                支付到支付宝
              </div>
              <h3 className="text-xl font-bold text-white mb-2">扫码付款</h3>
              <p className="text-gray-400 text-sm">使用支付宝扫码 QR码/二维码</p>
            </div>

            {/* QR Code Placeholder (Empty as requested) */}
            <div className="bg-white p-4 rounded-xl aspect-square mb-6 flex items-center justify-center relative">
              {/* Corner markers for scanner look */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-red-500 rounded-tl-lg"></div>
              <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-red-500 rounded-tr-lg"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-red-500 rounded-bl-lg"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-red-500 rounded-br-lg"></div>
              
              <div className="w-full h-full bg-gray-100 rounded flex items-center justify-center text-gray-400 border-2 border-dashed border-gray-300">
                暂无二维码
              </div>
            </div>

            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-3 flex items-start space-x-2">
              <ShieldCheck size={16} className="text-emerald-400 shrink-0 mt-0.5" />
              <p className="text-xs text-emerald-400/90 leading-tight">
                如有漏单与描述不符，损坏或丢失，请联系右侧客服处理。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
