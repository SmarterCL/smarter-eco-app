/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { Screen, Product } from './types';
import Home from './screens/Home';
import Scanner from './screens/Scanner';
import Store from './screens/Store';
import Checkout from './screens/Checkout';
import Profile from './screens/Profile';
import BottomNav from './components/BottomNav';
import TopBar from './components/TopBar';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');
  const [cart, setCart] = useState<{ product: Product, quantity: number }[]>([]);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.product.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = cart.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
  const discount = Math.round(subtotal * 0.15); // Fixed 15% discount for the demo
  const total = subtotal - discount;

  const renderScreen = () => {
    switch (currentScreen) {
      case 'home': return <Home onNavigate={setCurrentScreen} />;
      case 'scanner': return <Scanner onNavigate={setCurrentScreen} />;
      case 'store': return (
        <Store 
          onNavigate={setCurrentScreen} 
          onAddToCart={addToCart} 
          cartCount={cartCount}
          total={subtotal}
        />
      );
      case 'checkout': return (
        <Checkout 
          onNavigate={setCurrentScreen} 
          cart={cart}
          subtotal={subtotal}
          discount={discount}
          total={total}
        />
      );
      case 'profile': return <Profile />;
      default: return <Home onNavigate={setCurrentScreen} />;
    }
  };

  return (
    <div className="min-h-screen bg-white text-on-surface font-body overflow-x-hidden">
      {/* Conditionally render bars based on screen */}
      {currentScreen !== 'scanner' && currentScreen !== 'checkout' && <TopBar />}
      
      <main>
        <AnimatePresence mode="wait">
          {renderScreen()}
        </AnimatePresence>
      </main>

      {currentScreen !== 'scanner' && currentScreen !== 'checkout' && (
        <BottomNav 
          currentScreen={currentScreen} 
          onNavigate={setCurrentScreen} 
        />
      )}
    </div>
  );
}
