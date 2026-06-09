import React from 'react';
import { motion } from 'motion/react';
import { products } from '../data';
import { IconWrapper } from './IconWrapper';
import bgVideo from '../../foto bahan/Background1asli.mp4';

interface HeroProps {
  onScrollToProducts: () => void;
}

export function Hero({ onScrollToProducts }: HeroProps) {
  return (
    <section id="home" className="relative w-full min-h-[90vh] flex items-center z-10 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover opacity-40 mix-blend-screen"
        >
          <source src={bgVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1C] via-[#0A0F1C]/40 to-transparent"></div>
      </div>

      <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto w-full relative z-10 flex flex-col-reverse md:flex-row items-center justify-between">
        
        {/* Left side: Zig-zag AI List */}
        <div className="w-full md:w-1/2 mt-16 md:mt-0 flex flex-col justify-center space-y-4">
          {products.map((product, index) => {
            // Create a zig-zag effect
            const isEven = index % 2 === 0;
            const xOffset = isEven ? 'md:translate-x-0' : 'md:translate-x-12';
            
            return (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ 
                  delay: index * 0.1, 
                  duration: 0.5,
                  scale: { delay: 0, type: "spring", stiffness: 300, damping: 15 }
                }}
                key={product.id}
                onClick={() => {
                  const element = document.getElementById(`product-${product.id}`);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className={`flex items-center space-x-4 bg-gray-900/40 border border-gray-800 backdrop-blur-sm p-3 rounded-xl hover-glow-green cursor-pointer transition-all duration-300 w-full sm:w-[85%] ${xOffset}`}
              >
                <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center overflow-hidden">
                  {product.image ? (
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                  ) : (
                    <IconWrapper iconName={product.iconName} size={20} className="text-gray-300" />
                  )}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-200">{product.name}</h4>
                  <p className="text-emerald-400 text-xs font-medium">¥{product.price}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Right side: Texts & CTA */}
        <div className="w-full md:w-1/2 text-left md:text-right pl-0 md:pl-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center space-x-2 bg-gray-800/50 border border-gray-700 rounded-full px-3 py-1 mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="text-xs text-gray-300 font-medium">可信赖的高级 AI 平台</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 tracking-tight text-white"
          >
            <span className="glow-yellow-green-slow">更实惠的价格，</span> <br />
            <span className="glow-yellow-green-slow">畅享</span> <span className="relative inline-block text-emerald-400 glow-green-shimmer">高级 AI 工具<span className="absolute left-0 -bottom-1.5 w-full glowing-beam-line"></span></span>。
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-400 text-lg sm:text-xl max-w-lg ml-auto mb-10 leading-relaxed"
          >
            购买 Gemini Ultra、Claude 5x/20x 和 Cursor Ultra 的访问权限，价格实惠。即时激活，全天候支持。
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap items-center justify-start md:justify-end gap-4"
          >
            <button 
              onClick={onScrollToProducts}
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-lg font-medium transition-colors shadow-[0_0_15px_rgba(16,185,129,0.3)] border border-emerald-400/50"
            >
              查看客栈
            </button>
            <a 
              href="#payment"
              className="bg-gray-800 hover:bg-gray-700 text-white border border-gray-600 px-8 py-3 rounded-lg font-medium transition-colors"
            >
              支付方式
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
