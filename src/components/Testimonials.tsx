import React from 'react';
import { Users, LayoutGrid } from 'lucide-react';
import client1 from '../../foto bahan/client1.jpeg';
import client2 from '../../foto bahan/client2.jpeg';
import client3 from '../../foto bahan/client3.jpeg';

export function Testimonials() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto w-full relative z-10 bg-white rounded-3xl mb-24 overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-12 items-center mb-24">
        {/* Replace image with descriptive box or placeholder */}
        <div className="w-full lg:w-1/2">
           <div className="w-full h-64 md:h-80 bg-gray-900 rounded-2xl p-4 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at center, #10b981 10%, transparent 10%), radial-gradient(circle at center, #3b82f6 10%, transparent 10%)', backgroundSize: '20px 20px', backgroundPosition: '0 0, 10px 10px' }}></div>
              <div className="bg-gray-800/80 p-6 rounded-lg border border-gray-700 w-3/4 shadow-2xl relative z-10">
                <div className="flex space-x-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="space-y-2">
                  <div className="h-2 bg-gray-600 rounded w-full"></div>
                  <div className="h-2 bg-gray-600 rounded w-5/6"></div>
                  <div className="h-2 bg-gray-600 rounded w-4/6"></div>
                </div>
              </div>
           </div>
        </div>

        <div className="w-full lg:w-1/2">
          <div className="inline-block bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full text-xs font-semibold mb-4 border border-emerald-100">
            关于我们
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            可信赖的平台 <br />
            提供 <span className="text-emerald-500">高级 AI</span>
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            由于超过2年的行业经验，我们能服务数千名来自不同背景的用户 —— 开发者、内容创作者、研究人员及各行业专业人士。
          </p>

          <div className="flex space-x-4">
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 flex-1">
               <Users className="text-emerald-500 mb-3" size={24} />
               <div className="text-2xl font-bold text-gray-900 mb-1">2,500+</div>
               <div className="text-gray-500 text-xs text-sm">活跃用户</div>
            </div>
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 flex-1">
               <LayoutGrid className="text-emerald-500 mb-3" size={24} />
               <div className="text-2xl font-bold text-gray-900 mb-1">6</div>
               <div className="text-gray-500 text-sm">AI 工具可选</div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mb-12">
        <div className="inline-block bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold mb-4 border border-blue-100">
          用户评价
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          深受 <span className="text-blue-600">数千用户信赖</span>
        </h2>
        <p className="text-gray-500">看看已使用我们服务的用户怎么说。</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { name: "李建国", role: "软件开发工程师", text: "“在这里购买了 Cursor Ultra，价格比官方便宜很多。即时激活，马上就能写代码！”", image: client1 },
          { name: "王晓燕", role: "内容创作者", text: "“Gemini Ultra 真的很棒！多模态功能帮我同时制作图文内容。强烈推荐！”", image: client2 },
          { name: "陈志远", role: "数据分析师", text: "“Claude 20x 适合企业级使用，非常稳定。上下文窗口大，轻松处理大数据集。”", image: client3 }
        ].map((review, i) => (
          <div key={i} className="bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] rounded-2xl p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center bg-gray-100 border border-gray-200">
                <img src={review.image} alt={review.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm">{review.name}</h4>
                <p className="text-gray-500 text-xs">{review.role}</p>
              </div>
            </div>
            <div className="flex text-yellow-400 mb-3">
              {[1,2,3,4,5].map(star => <span key={star}>★</span>)}
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">{review.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
