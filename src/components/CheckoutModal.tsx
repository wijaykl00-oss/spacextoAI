import React, { useState } from 'react';
import { X, Upload, ShoppingCart, Minus, Plus, Check } from 'lucide-react';
import { Product } from '../types';
import qrisImg from '../../foto bahan/qriss.jpeg';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
}

export function CheckoutModal({ isOpen, onClose, product }: CheckoutModalProps) {
  if (!isOpen || !product) return null;

  const [quantity, setQuantity] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState<'qris' | 'bep20'>('qris');
  const [proofImage, setProofImage] = useState<string | null>(null);
  const [proofFileName, setProofFileName] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleMinus = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handlePlus = () => {
    setQuantity(quantity + 1);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setProofFileName(file.name);
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          setProofImage(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const totalPrice = product.price * quantity;
  const totalPriceIdr = totalPrice * 2200;

  const handleContinue = () => {
    if (!proofImage) return;

    setIsSuccess(true);

    setTimeout(() => {
      const message = `Halo Kak @Jurjianto, saya sudah melakukan pembayaran untuk pembelian:\n\n` +
                      `📦 Produk: ${product.name}\n` +
                      `🔢 Jumlah: ${quantity}\n` +
                      `💰 Total Harga: ¥${totalPrice} (≈ IDR ${totalPriceIdr.toLocaleString()})\n\n` +
                      `Saya telah mengunggah bukti pembayaran di website. Mohon segera diproses ya Kak, terima kasih!`;
      
      const telegramUrl = `https://t.me/Jurjianto?text=${encodeURIComponent(message)}`;
      window.open(telegramUrl, '_blank');
      
      // Reset state and close modal
      setIsSuccess(false);
      setProofImage(null);
      setProofFileName(null);
      setQuantity(1);
      onClose();
    }, 5000);
  };

  if (isSuccess) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-[#0A0F1C]/80 backdrop-blur-md"></div>
        <div className="bg-[#0f0a1c] border border-[#a855f7]/30 rounded-3xl w-full max-w-md p-8 relative overflow-hidden flex flex-col items-center justify-center text-center shadow-[0_0_50px_rgba(168,85,247,0.2)]">
          
          {/* Burst / Shattered Light Effect */}
          <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
            {/* Pulsing purple/yellow radial gradient bg */}
            <div className="absolute w-80 h-80 rounded-full bg-gradient-to-r from-purple-600/15 to-yellow-600/15 blur-3xl animate-pulse"></div>
            
            {/* Exploding circles */}
            <div className="success-burst-circle w-32 h-32"></div>
            <div className="success-burst-circle-delayed w-32 h-32"></div>
            
            {/* Rotating shattered rays */}
            <div className="shattered-rays-container absolute w-full h-full flex items-center justify-center">
              {[...Array(12)].map((_, i) => (
                <div 
                  key={i} 
                  className="shattered-ray" 
                  style={{ transform: `rotate(${i * 30}deg) translateY(-40px)` }}
                />
              ))}
            </div>
          </div>

          <div className="relative z-10 flex flex-col items-center">
            {/* The main checkmark icon box */}
            <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-purple-600 to-yellow-500 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(168,85,247,0.6)] border-4 border-yellow-400 animate-bounce">
              <Check className="w-12 h-12 text-white" strokeWidth={4} />
            </div>

            <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent mb-3">
              支付凭证上传成功！
            </h2>
            <p className="text-gray-300 text-sm mb-6 max-w-xs leading-relaxed">
              Bukti pembayaran berhasil diunggah! Sedang mengarahkan Anda ke Telegram <strong>@Jurjianto</strong> untuk verifikasi...
            </p>
            
            {/* Progress / Countdown indicator */}
            <div className="w-full bg-gray-800 h-1.5 rounded-full overflow-hidden max-w-[200px] mb-2 border border-purple-500/20">
              <div className="bg-gradient-to-r from-purple-500 to-yellow-400 h-full animate-success-progress"></div>
            </div>
            <span className="text-[10px] text-gray-500">Membuka Telegram dalam 5 detik...</span>
          </div>

        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>
      <div className="bg-white rounded-3xl w-full max-w-md relative overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Purple/Yellow Header area */}
        <div className="bg-gradient-to-br from-[#2e1065] via-[#4c1d95] to-[#1e1b4b] pt-6 pb-20 px-6 text-center text-white relative border-b-2 border-yellow-400">
          <button onClick={onClose} className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 rounded-full p-1 transition-colors">
            <X size={20} />
          </button>
          
          <div className="w-16 h-16 bg-white rounded-2xl mx-auto flex items-center justify-center mb-4 shadow-lg border-2 border-yellow-400">
            <ShoppingCart size={32} className="text-[#4c1d95]" />
          </div>
          <h2 className="text-2xl font-bold">确认订单</h2>
          <p className="text-yellow-300/90 text-sm mt-1 font-medium">核对信息后前往 Telegram 付款</p>
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
              <button 
                onClick={handleMinus}
                className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-purple-50 active:bg-purple-100 transition-colors"
              >
                <Minus size={14} />
              </button>
              <span className="font-bold text-gray-900 w-4 text-center">{quantity}</span>
              <button 
                onClick={handlePlus}
                className="w-6 h-6 rounded-full bg-purple-600 text-white flex items-center justify-center hover:bg-purple-700 active:bg-purple-800 transition-colors"
              >
                <Plus size={14} />
              </button>
            </div>
          </div>

          <div className="flex justify-between items-end mb-6">
            <p className="text-gray-600 font-medium text-sm">总金额</p>
            <div className="text-right">
              <h2 className="text-purple-700 font-extrabold text-2xl">¥{totalPrice}</h2>
              <p className="text-yellow-600 text-[10px] font-bold">≈ IDR {totalPriceIdr.toLocaleString()}</p>
            </div>
          </div>

          {/* Payment Method Tabs */}
          <div className="flex space-x-2 mb-6">
            <div 
              onClick={() => setPaymentMethod('qris')}
              className={`flex-1 border-2 rounded-lg p-3 flex items-center cursor-pointer transition-all ${
                paymentMethod === 'qris' 
                  ? 'border-purple-600 bg-purple-50/50 text-purple-700' 
                  : 'border-gray-200 text-gray-500 hover:border-gray-300'
              }`}
            >
              <div className={`w-4 h-4 rounded-full border-2 mr-2 flex items-center justify-center ${
                paymentMethod === 'qris' ? 'border-purple-600' : 'border-gray-300'
              }`}>
                {paymentMethod === 'qris' && <div className="w-2 h-2 rounded-full bg-purple-600"></div>}
              </div>
              <span className={`text-sm ${paymentMethod === 'qris' ? 'font-bold' : 'font-medium'}`}>QRIS / Alipay</span>
            </div>
            
            <div 
              onClick={() => setPaymentMethod('bep20')}
              className={`flex-1 border-2 rounded-lg p-3 flex items-center cursor-pointer transition-all ${
                paymentMethod === 'bep20' 
                  ? 'border-purple-600 bg-purple-50/50 text-purple-600' 
                  : 'border-gray-200 text-gray-500 hover:border-gray-300'
              }`}
            >
              <div className={`w-4 h-4 rounded-full border-2 mr-2 flex items-center justify-center ${
                paymentMethod === 'bep20' ? 'border-purple-600' : 'border-gray-300'
              }`}>
                {paymentMethod === 'bep20' && <div className="w-2 h-2 rounded-full bg-purple-600"></div>}
              </div>
              <span className={`text-sm ${paymentMethod === 'bep20' ? 'font-bold' : 'font-medium'}`}>BEP20 (USDT)</span>
            </div>
          </div>

          {/* QR Code / Payment detail Container */}
          <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 flex flex-col items-center mb-6">
            <div className="bg-white p-2 rounded-xl mb-6 shadow-sm border border-gray-100 relative flex items-center justify-center overflow-hidden w-44 h-44">
              <div className={`absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 rounded-tl-lg z-10 transition-colors duration-300 ${paymentMethod === 'bep20' ? 'border-purple-500' : 'border-red-500'}`}></div>
              <div className={`absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 rounded-tr-lg z-10 transition-colors duration-300 ${paymentMethod === 'bep20' ? 'border-purple-500' : 'border-red-500'}`}></div>
              <div className={`absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4 rounded-bl-lg z-10 transition-colors duration-300 ${paymentMethod === 'bep20' ? 'border-purple-500' : 'border-red-500'}`}></div>
              <div className={`absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 rounded-br-lg z-10 transition-colors duration-300 ${paymentMethod === 'bep20' ? 'border-purple-500' : 'border-red-500'}`}></div>
              
              {paymentMethod === 'qris' ? (
                <img src={qrisImg} alt="QRIS Payment" className="w-full h-full object-contain" />
              ) : (
                <div className="w-full h-full bg-gray-50 flex flex-col items-center justify-center text-gray-400 p-2 text-center">
                  <span className="font-bold text-purple-800 text-xs mb-1">BEP20 USDT Address</span>
                  <span className="break-all font-mono text-[9px] text-purple-600 leading-tight select-all">
                    0x43c6ba1c6f82a2e8d8bafe985b19c3364a80b77d
                  </span>
                  <span className="text-[8px] text-gray-400 mt-2">双击复制地址</span>
                </div>
              )}
            </div>

            {/* Hidden Input File */}
            <input 
              type="file" 
              id="proof-upload-input" 
              accept="image/*" 
              className="hidden" 
              onChange={handleFileChange}
            />

            {proofImage ? (
              <div className="w-full border-2 border-purple-500 bg-purple-50/10 rounded-xl p-3 flex items-center justify-between">
                <div className="flex items-center space-x-3 min-w-0">
                  <img src={proofImage} alt="Proof" className="w-12 h-12 object-cover rounded-lg border border-purple-500/30" />
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-purple-700 truncate">凭证上传成功</p>
                    <p className="text-[10px] text-gray-500 truncate">{proofFileName}</p>
                  </div>
                </div>
                <button 
                  onClick={() => document.getElementById('proof-upload-input')?.click()}
                  className="text-xs text-purple-700 font-semibold hover:text-purple-800 px-3 py-1.5 border border-purple-200 rounded-lg bg-white shadow-sm"
                >
                  更换
                </button>
              </div>
            ) : (
              <button 
                onClick={() => document.getElementById('proof-upload-input')?.click()}
                className="w-full border-2 border-dashed border-purple-400 rounded-xl py-4 flex flex-col items-center justify-center text-purple-700 bg-purple-50/30 hover:bg-purple-50/50 transition-colors"
              >
                <Upload size={20} className="mb-2 text-purple-600" />
                <span className="font-semibold text-sm">上传付款凭证</span>
                <span className="text-[10px] text-gray-500 mt-1">支持 JPG, PNG (<span className="text-yellow-600 font-bold">必填</span>)</span>
              </button>
            )}
          </div>

          <button 
            disabled={!proofImage}
            onClick={handleContinue}
            className={`w-full rounded-xl py-4 font-bold flex items-center justify-center shadow-lg transition-all ${
              proofImage 
                ? 'bg-gradient-to-r from-purple-700 to-indigo-800 hover:from-purple-800 hover:to-indigo-900 text-white shadow-purple-500/30 border border-yellow-400/30 cursor-pointer' 
                : 'bg-gray-200 text-gray-500 shadow-none cursor-not-allowed'
            }`}
          >
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
            </svg>
            {proofImage ? '确认并发送到 Telegram' : '请先上传付款凭证'}
          </button>

        </div>
        <div className="h-6"></div> {/* Bottom padding inside modal */}
      </div>
    </div>
  );
}
