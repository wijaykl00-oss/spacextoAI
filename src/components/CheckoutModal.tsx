import React from 'react';
import { X, Upload, ShoppingCart, Minus, Plus } from 'lucide-react';
import { Product } from '../types';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
}

export function CheckoutModal({ isOpen, onClose, product }: CheckoutModalProps) {
  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>
      <div className="bg-white rounded-3xl w-full max-w-md relative overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Blue Header area */}
        <div className="bg-[#1DA1F2] pt-6 pb-20 px-6 text-center text-white relative">
          <button onClick={onClose} className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 rounded-full p-1 transition-colors">
            <X size={20} />
          </button>
          
          <div className="w-16 h-16 bg-white rounded-2xl mx-auto flex items-center justify-center mb-4 shadow-lg">
            <ShoppingCart size={32} className="text-[#1DA1F2]" />
          </div>
          <h2 className="text-2xl font-bold">确认订单</h2>
          <p className="text-white/80 text-sm mt-1">核对信息后前往 Telegram 付款</p>
        </div>

        {/* Content Box (overlapping header) */}
        <div className="bg-white rounded-2xl mx-6 -mt-12 p-5 shadow-[0_10px_30px_rgba(0,0,0,0.1)] relative z-10 flex-grow overflow-y-auto">
          
          <div className="flex justify-between items-start border-b border-gray-100 pb-4 mb-4">
            <div>
              <p className="text-gray-500 text-xs mb-1">购买产品</p>
              <h3 className="text-gray-900 font-bold text-lg">{product.name}</h3>
            </div>
            <div className="text-right">
              <p className="text-gray-500 text-xs mb-1">单价</p>
              <h3 className="text-gray-900 font-bold text-lg">¥{product.price}</h3>
              <p className="text-gray-400 text-[10px]">≈ IDR {(product.price * 2200).toLocaleString()}</p>
            </div>
          </div>

          <div className="flex justify-between items-center border-b border-gray-100 pb-4 mb-4">
            <p className="text-gray-600 font-medium text-sm">购买数量</p>
            <div className="flex items-center space-x-4">
              <button className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center text-gray-500">
                <Minus size={14} />
              </button>
              <span className="font-bold text-gray-900">1</span>
              <button className="w-6 h-6 rounded-full bg-[#1DA1F2] text-white flex items-center justify-center">
                <Plus size={14} />
              </button>
            </div>
          </div>

          <div className="flex justify-between items-end mb-6">
            <p className="text-gray-600 font-medium text-sm">总金额</p>
            <div className="text-right">
              <h2 className="text-[#1DA1F2] font-bold text-2xl">¥{product.price}</h2>
              <p className="text-orange-400 text-[10px] font-medium">≈ IDR {(product.price * 2200).toLocaleString()}</p>
            </div>
          </div>

          {/* Payment Method Tabs */}
          <div className="flex space-x-2 mb-6">
            <div className="flex-1 border-2 border-[#1DA1F2] rounded-lg p-3 flex items-center bg-blue-50/50 cursor-pointer">
              <div className="w-4 h-4 rounded-full border-[5px] border-[#1DA1F2] bg-white mr-2 shadow-sm"></div>
              <span className="text-sm font-bold text-[#1DA1F2]">QRIS / Alipay</span>
            </div>
            <div className="flex-1 border border-gray-200 rounded-lg p-3 flex items-center cursor-pointer text-gray-500">
              <div className="w-4 h-4 rounded-full border-2 border-gray-300 mr-2"></div>
              <span className="text-sm font-medium">BEP20 (USDT)</span>
            </div>
          </div>

          {/* QR Code Container */}
          <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 flex flex-col items-center mb-6">
            <div className="bg-white p-2 rounded-xl mb-6 shadow-sm border border-gray-100 relative">
               <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-red-500 rounded-tl-lg"></div>
              <div className="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 border-red-500 rounded-tr-lg"></div>
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4 border-red-500 rounded-bl-lg"></div>
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-red-500 rounded-br-lg"></div>
              <div className="w-40 h-40 bg-gray-100 rounded flex items-center justify-center text-gray-400 border-2 border-dashed border-gray-300 text-sm">
                暂无二维码
              </div>
            </div>

            <button className="w-full border-2 border-dashed border-[#1DA1F2] rounded-xl py-4 flex flex-col items-center justify-center text-[#1DA1F2] bg-blue-50/30 hover:bg-blue-50/50 transition-colors">
              <Upload size={20} className="mb-2" />
              <span className="font-medium text-sm">上传付款凭证</span>
              <span className="text-[10px] text-gray-400 mt-1">支持 JPG, PNG</span>
            </button>
          </div>

          <button className="w-full bg-[#1DA1F2] hover:bg-blue-500 text-white rounded-xl py-4 font-bold flex items-center justify-center shadow-lg shadow-blue-500/30 transition-colors">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg>
            如果您已付款，请继续
          </button>

        </div>
        <div className="h-6"></div> {/* Bottom padding inside modal */}
      </div>
    </div>
  );
}
