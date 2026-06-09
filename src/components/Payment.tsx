import React, { useState } from 'react';
import { Clock, ShieldCheck, Zap } from 'lucide-react';
import qrisImg from '../../foto bahan/qriss.jpeg';

export function Payment() {
  const [paymentMethod, setPaymentMethod] = useState<'alipay' | 'bep20'>('alipay');

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
            我们支持支付宝付款和加密货币支付，处理快速、安全可靠。
          </p>

          <div className="space-y-4 mb-10">
            {/* Alipay Option */}
            <div 
              onClick={() => setPaymentMethod('alipay')}
              className={`border rounded-xl p-4 flex items-center space-x-4 cursor-pointer transition-all ${
                paymentMethod === 'alipay' 
                  ? 'bg-blue-600/15 border-blue-500/60 shadow-[0_0_20px_rgba(59,130,246,0.15)]' 
                  : 'bg-gray-800/40 border-gray-700/50 hover:bg-gray-800/80'
              }`}
            >
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-xl shrink-0">
                支
              </div>
              <div className="flex-grow min-w-0">
                <h4 className="text-white font-medium flex items-center">
                  Alipay / QRIS <ShieldCheck size={14} className="ml-1 text-blue-400" />
                </h4>
                <p className="text-gray-400 text-xs truncate">扫描二维码，安全快速完成支付</p>
              </div>
              <div className="flex space-x-2 text-xs text-blue-400 font-medium shrink-0">
                <span className="flex items-center"><ShieldCheck size={12} className="mr-0.5" /> 安全认证</span>
                <span className="flex items-center"><Zap size={12} className="mr-0.5" /> 即时</span>
              </div>
            </div>

            {/* Crypto Option */}
            <div 
              onClick={() => setPaymentMethod('bep20')}
              className={`border rounded-xl p-4 flex items-center space-x-4 cursor-pointer transition-all ${
                paymentMethod === 'bep20' 
                  ? 'bg-purple-600/15 border-purple-500/60 shadow-[0_0_20px_rgba(168,85,247,0.15)]' 
                  : 'bg-gray-800/40 border-gray-700/50 hover:bg-gray-800/80'
              }`}
            >
              <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold shrink-0">
                ₮
              </div>
              <div className="flex-grow min-w-0">
                <h4 className="text-white font-medium flex items-center">
                  BEP20 (USDT) <ShieldCheck size={14} className="ml-1 text-purple-400" />
                </h4>
                <p className="text-gray-400 text-xs font-mono truncate">0x43c6ba1c6f82a2e8d8bafe985b19c3364a80b77d</p>
              </div>
              <div className="flex space-x-2 text-xs text-purple-400 font-medium shrink-0">
                <span className="flex items-center"><ShieldCheck size={12} className="mr-0.5" /> 智能链</span>
                <span className="flex items-center"><Zap size={12} className="mr-0.5" /> 低手续费</span>
              </div>
            </div>
            
            {/* Warning Option */}
            <div className="bg-orange-900/20 border border-orange-500/30 rounded-xl p-4 flex items-center space-x-3">
              <svg className="w-5 h-5 text-orange-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <p className="text-sm text-orange-400">如果您无法完成付款，请直接联系 Telegram 客服获取帮助。</p>
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
              <button 
                onClick={() => setPaymentMethod('alipay')}
                className={`flex-1 rounded-md py-2 text-sm font-medium transition-colors ${
                  paymentMethod === 'alipay' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                Alipay / QRIS
              </button>
              <button 
                onClick={() => setPaymentMethod('bep20')}
                className={`flex-1 rounded-md py-2 text-sm font-medium transition-colors ${
                  paymentMethod === 'bep20' ? 'bg-purple-600 text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                BEP20 (USDT)
              </button>
            </div>

            <div className="text-center mb-6">
              {paymentMethod === 'alipay' ? (
                <>
                  <div className="inline-block bg-blue-600/10 text-blue-400 border border-blue-500/20 rounded-full px-3 py-1 text-xs font-medium mb-4">
                    支付到支付宝 / QRIS
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">扫码付款</h3>
                  <p className="text-gray-400 text-sm">使用支付宝/各行银行APP 扫码付款</p>
                </>
              ) : (
                <>
                  <div className="inline-block bg-purple-600/10 text-purple-400 border border-purple-500/20 rounded-full px-3 py-1 text-xs font-medium mb-4">
                    支付到 BEP20 (USDT)
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">USDT 充值</h3>
                  <p className="text-gray-400 text-sm">复制下方地址转账 USDT 资产</p>
                </>
              )}
            </div>

            {/* QR Code / Address box with dynamically colored corner markers */}
            <div className="bg-white p-4 rounded-xl aspect-square mb-6 flex items-center justify-center relative overflow-hidden">
              <div className={`absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 rounded-tl-lg transition-colors duration-300 ${paymentMethod === 'bep20' ? 'border-purple-500' : 'border-red-500'}`}></div>
              <div className={`absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 rounded-tr-lg transition-colors duration-300 ${paymentMethod === 'bep20' ? 'border-purple-500' : 'border-red-500'}`}></div>
              <div className={`absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 rounded-bl-lg transition-colors duration-300 ${paymentMethod === 'bep20' ? 'border-purple-500' : 'border-red-500'}`}></div>
              <div className={`absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 rounded-br-lg transition-colors duration-300 ${paymentMethod === 'bep20' ? 'border-purple-500' : 'border-red-500'}`}></div>
              
              {paymentMethod === 'alipay' ? (
                <img src={qrisImg} alt="QRIS Payment" className="w-full h-full object-contain rounded" />
              ) : (
                <div className="w-full h-full bg-gray-50 flex flex-col items-center justify-center p-4 text-center rounded border border-gray-100">
                  <span className="font-bold text-purple-800 text-sm mb-2">USDT BEP20 地址</span>
                  <span className="break-all font-mono text-xs text-purple-600 leading-normal select-all bg-purple-50 p-3 rounded-lg border border-purple-100">
                    0x43c6ba1c6f82a2e8d8bafe985b19c3364a80b77d
                  </span>
                  <span className="text-[10px] text-gray-400 mt-3">双击/长按以复制地址</span>
                </div>
              )}
            </div>

            <div className={`rounded-lg p-3 flex items-start space-x-2 border transition-colors ${
              paymentMethod === 'bep20' 
                ? 'bg-purple-500/10 border-purple-500/20 text-purple-400' 
                : 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
            }`}>
              <ShieldCheck size={16} className="shrink-0 mt-0.5" />
              <p className="text-xs leading-tight">
                {paymentMethod === 'bep20' 
                  ? '请务必充值 USDT (BEP20 链)，充值其它资产或其它链将无法找回。'
                  : '如有漏单与描述不符，损坏或丢失，请联系客服处理。'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
