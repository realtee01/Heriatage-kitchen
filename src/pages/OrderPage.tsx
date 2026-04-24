import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, ChevronRight, Plus, MapPin, Trash2, X, AlertCircle, CheckCircle2 } from 'lucide-react';
import { restaurantData } from '../data';
import { cn } from '../lib/utils';

export default function OrderPage() {
  const [activeCategory, setActiveCategory] = useState(restaurantData.menu.categories[0].name);
  const [cart, setCart] = useState<any[]>([]);
  const [notification, setNotification] = useState<{ id: number, message: string, type: 'added' | 'removed' } | null>(null);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const showNotification = (message: string, type: 'added' | 'removed') => {
    const id = Date.now();
    setNotification({ id, message, type });
  };

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  const handleAddToCart = (item: any) => {
    setCart(prev => [...prev, item]);
    showNotification(`Added ${item.name} to selection`, 'added');
  };

  const handleRemoveFromCart = (index: number) => {
    const item = cart[index];
    setCart(prev => prev.filter((_, i) => i !== index));
    showNotification(`Removed ${item.name} from selection`, 'removed');
  };

  const handleClearCart = () => {
    if (cart.length === 0) return;
    setCart([]);
    showNotification('Cleared all selections', 'removed');
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="pt-24 pb-16 min-h-screen bg-zinc-950 flex flex-col items-center">
      
      {/* Toast Notification */}
      <AnimatePresence>
        {notification && (
          <motion.div
            key={notification.id}
            initial={{ opacity: 0, y: 50, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, scale: 0.95, x: '-50%' }}
            className={cn(
              "fixed bottom-8 left-1/2 z-[100] flex items-center gap-3 px-6 py-4 rounded-xl border shadow-2xl backdrop-blur-md min-w-[320px]",
              notification.type === 'added' 
                ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-500" 
                : "bg-amber-500/10 border-amber-500/20 text-amber-500"
            )}
          >
            {notification.type === 'added' ? (
              <CheckCircle2 className="w-5 h-5" />
            ) : (
              <AlertCircle className="w-5 h-5" />
            )}
            <p className="text-sm font-medium">{notification.message}</p>
            <button 
              onClick={() => setNotification(null)}
              className="ml-auto p-1 hover:bg-white/10 rounded-md transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Location Banner */}
      <div className="w-full bg-amber-600/10 border-y border-amber-500/20 py-4 mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center gap-2 text-sm text-amber-500">
          <MapPin className="w-4 h-4" />
          <span>Delivering across Victoria Island, Ikoyi, and Lekki Phase 1 only.</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">Order Online</h1>
            <p className="text-xl text-zinc-400 font-light max-w-2xl mx-auto">
              Premium Nigerian cuisine delivered to your doorstep. Every dish prepared to order.
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Main Menu Area */}
          <div className="flex-1">
            {/* Category Navigation (Sticky) */}
            <div className="sticky top-20 z-40 bg-zinc-950/95 backdrop-blur-md pb-6 pt-4 border-b border-zinc-800 mb-8 overflow-x-auto no-scrollbar">
              <div className="flex space-x-2">
                {restaurantData.menu.categories.map((cat) => (
                  <button
                    key={cat.name}
                    onClick={() => setActiveCategory(cat.name)}
                    className={cn(
                      "px-6 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all",
                      activeCategory === cat.name 
                        ? "bg-amber-600 text-white" 
                        : "bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"
                    )}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Menu Items for Active Category */}
            <div className="space-y-6">
              {restaurantData.menu.categories.find(c => c.name === activeCategory)?.items.map((item, idx) => (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-2xl hover:bg-zinc-900 transition-colors flex justify-between gap-6"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-serif font-bold text-white">{item.name}</h3>
                      {item.tags?.includes('popular') && (
                        <span className="bg-amber-500/20 text-amber-500 text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider font-bold">Popular</span>
                      )}
                      {item.tags?.includes('spicy') && (
                        <span className="bg-red-500/20 text-red-500 text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider font-bold">Spicy</span>
                      )}
                    </div>
                    <p className="text-zinc-400 text-sm mb-4 leading-relaxed">{item.description}</p>
                    <div className="text-amber-500 font-medium">{formatPrice(item.price)}</div>
                  </div>
                  
                  <div className="flex flex-col justify-end items-end shrink-0">
                      <button 
                        onClick={() => handleAddToCart(item)}
                        className="w-10 h-10 rounded-full bg-zinc-800 hover:bg-amber-600 text-white flex items-center justify-center transition-colors group"
                        aria-label={`Add ${item.name} to cart`}
                      >
                        <Plus className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Cart Sidebar */}
          <div className="w-full lg:w-96 shrink-0">
            <div className="sticky top-28 bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-serif font-bold text-white flex items-center gap-3">
                  <ShoppingBag className="text-amber-500 w-6 h-6" />
                  Your Cart
                </h2>
                {cart.length > 0 && (
                  <button 
                    onClick={handleClearCart}
                    className="text-xs text-zinc-500 hover:text-red-500 transition-colors uppercase tracking-widest font-bold"
                  >
                    Clear All
                  </button>
                )}
              </div>
              
              {cart.length === 0 ? (
                <div className="text-center py-12 text-zinc-500 border-2 border-dashed border-zinc-800 rounded-xl">
                  <ShoppingBag className="w-12 h-12 mx-auto mb-3 opacity-20" />
                  <p>Your cart is empty</p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="max-h-96 overflow-y-auto space-y-4 pr-2 custom-scrollbar">
                    {cart.map((item, idx) => (
                      <div key={idx} className="flex justify-between items-start text-sm py-4 border-b border-zinc-800/50 group">
                        <div className="pr-4">
                          <span className="text-white font-medium block mb-1">{item.name}</span>
                          <div className="text-zinc-500 text-xs">Qty: 1</div>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <span className="text-amber-500 font-medium">{formatPrice(item.price)}</span>
                          <button 
                            onClick={() => handleRemoveFromCart(idx)}
                            className="p-1.5 text-zinc-600 hover:text-red-500 hover:bg-red-500/10 rounded-md transition-all opacity-0 group-hover:opacity-100"
                            aria-label={`Remove ${item.name} from cart`}
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="border-t border-zinc-800 pt-4 mt-6">
                    <div className="flex justify-between text-zinc-400 mb-2 text-sm">
                      <span>Subtotal</span>
                      <span>{formatPrice(cartTotal)}</span>
                    </div>
                    <div className="flex justify-between text-zinc-400 mb-4 text-sm">
                      <span>Delivery Fee</span>
                      <span>Calculated at checkout</span>
                    </div>
                    <div className="flex justify-between text-white text-lg font-bold mb-6">
                      <span>Total</span>
                      <span>{formatPrice(cartTotal)}</span>
                    </div>
                    
                    <button className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-lg px-4 py-4 transition-colors uppercase tracking-wider flex items-center justify-center gap-2">
                      Proceed to Checkout
                      <ChevronRight className="w-5 h-5" />
                    </button>
                    
                    <p className="text-zinc-500 text-xs text-center mt-4">
                      Minimum order value: {formatPrice(10000)}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
