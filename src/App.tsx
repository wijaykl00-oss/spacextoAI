import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Products } from './components/Products';
import { Payment } from './components/Payment';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { LoginModal } from './components/LoginModal';
import { CheckoutModal } from './components/CheckoutModal';
import { Product } from './types';

export default function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [checkoutProduct, setCheckoutProduct] = useState<Product | null>(null);

  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative font-sans antialiased text-white selection:bg-emerald-500/30">
      <Header onLoginClick={() => setIsLoginOpen(true)} />
      
      <main>
        <Hero onScrollToProducts={scrollToProducts} />
        <Products onBuyClick={(product) => setCheckoutProduct(product)} />
        <Payment />
        <Testimonials />
      </main>

      <Footer />

      <LoginModal 
        isOpen={isLoginOpen} 
        onClose={() => setIsLoginOpen(false)} 
      />
      
      <CheckoutModal 
        isOpen={checkoutProduct !== null} 
        onClose={() => setCheckoutProduct(null)} 
        product={checkoutProduct}
      />
    </div>
  );
}

