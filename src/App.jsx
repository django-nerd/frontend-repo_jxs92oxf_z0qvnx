import React, { useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import CartDrawer from './components/CartDrawer';

export default function App() {
  const [query, setQuery] = useState('');
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === product.id);
      if (existing) {
        return prev.map((p) => (p.id === product.id ? { ...p, qty: p.qty + 1 } : p));
      }
      return [...prev, { ...product, qty: 1 }];
    });
    setCartOpen(true);
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((p) => p.id !== id));
  };

  const clearCart = () => setCart([]);

  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);

  const handleCheckout = async () => {
    const payload = {
      buyer_name: 'Guest User',
      buyer_email: 'guest@example.com',
      payment_method: 'COD',
      items: cart.map((i) => ({
        product_id: i.id,
        title: i.name || i.title,
        price: i.price,
        quantity: i.qty,
        image: i.image,
      })),
      total_amount: total,
    };
    try {
      setLoading(true);
      const res = await fetch(`${backend}/orders`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.detail || 'Checkout failed');
      alert('Order placed! ID: ' + data.id);
      clearCart();
      setCartOpen(false);
    } catch (e) {
      alert(e.message || 'Checkout failed');
    } finally {
      setLoading(false);
    }
  };

  const [loading, setLoading] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar
        onCartOpen={() => setCartOpen(true)}
        cartCount={cart.reduce((s, i) => s + i.qty, 0)}
        query={query}
        setQuery={setQuery}
      />
      <Hero />

      <main id="products" className="mx-auto max-w-6xl px-4 py-10">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-bold">Popular near you</h2>
        </div>

        <ProductGrid onAdd={addToCart} query={query} />

        <section id="sell" className="mt-16 rounded-2xl border border-dashed border-indigo-200 bg-indigo-50/50 p-6 text-center">
          <h3 className="text-lg font-semibold text-gray-900">Want to sell something?</h3>
          <p className="mx-auto mt-1 max-w-2xl text-sm text-gray-600">
            Share your snacks, notes, or club merch with nearby students. Sign in later to create listings and manage orders.
          </p>
          <button className="mt-4 rounded-full bg-indigo-600 px-5 py-2 text-sm font-semibold text-white hover:bg-indigo-500">
            Get started
          </button>
        </section>
      </main>

      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cart}
        onRemove={removeFromCart}
        onClear={clearCart}
        onCheckout={handleCheckout}
        loading={loading}
      />

      <footer className="border-t py-8 text-center text-sm text-gray-500">
        Made for college and small communities. Secure meetups, cash or UPI accepted.
      </footer>
    </div>
  );
}
