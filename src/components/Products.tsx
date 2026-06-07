import React from 'react';
import { Check, Info, ShieldCheck } from 'lucide-react';
import { products } from '../data';
import { IconWrapper } from './IconWrapper';
import { Product } from '../types';

interface ProductsProps {
  onBuyClick: (product: Product) => void;
}

export function Products({ onBuyClick }: ProductsProps) {
  return (
    <section id="products" className="py-24 px-6 max-w-7xl mx-auto w-full relative z-10">
      <div className="text-center mb-16">
        <div className="inline-block bg-gray-800/50 border border-gray-700 rounded-full px-3 py-1 mb-4">
          <span className="text-xs text-gray-300">产品目录</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          选择你的 <span className="text-emerald-400 glow-green">常用 AI 工具</span>
        </h2>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          以实惠价格完整访问高级 AI 工具。所有套餐包含支持和更新。
        </p>
        <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full px-4 py-2 text-sm font-medium">
          <ShieldCheck size={16} />
          <span>所有产品 30 天退款保证</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div 
            key={product.id} 
            className="bg-gray-900 border border-gray-800 rounded-2xl p-6 relative overflow-hidden flex flex-col group hover:border-emerald-500/50 transition-colors"
          >
            {/* Background elements */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/20 transition-colors duration-500"></div>
            
            {product.tag && (
              <div className="absolute top-0 right-0 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-xl z-20">
                {product.tag}
              </div>
            )}

            <div className="flex flex-col flex-grow relative z-10">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-black border border-gray-800 flex items-center justify-center overflow-hidden">
                  {product.image ? (
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                  ) : (
                    <IconWrapper iconName={product.iconName} size={24} className="text-gray-200" />
                  )}
                </div>
                <div>
                  <h3 className="text-xl font-bold">{product.name}</h3>
                  <p className="text-xs text-gray-400 truncate max-w-[200px]">{product.description}</p>
                </div>
              </div>

              <div className="mb-6">
                <div className="text-3xl font-bold text-white flex items-end">
                  ¥{product.price} <span className="text-sm font-normal text-gray-400 ml-1 mb-1">/月</span>
                </div>
              </div>

              <div className="bg-gray-800/50 rounded-lg p-3 flex items-center mb-6 border border-gray-700/50">
                <Info size={14} className="text-gray-400 mr-2" />
                <span className="text-xs text-gray-300">已售 {product.sales}件</span>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check size={16} className="text-emerald-400 mt-0.5 mr-2 shrink-0" />
                    <span className="text-sm text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto relative z-10 pt-4 border-t border-gray-800 flex items-center justify-between">
              <div className="flex items-center space-x-1 text-xs text-emerald-400 font-medium">
                <ShieldCheck size={14} />
                <span>30 天退款保证</span>
              </div>
              
              <button 
                onClick={() => onBuyClick(product)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium text-sm transition-colors"
              >
                立即购买
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
