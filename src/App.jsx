import React, { useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import CartDrawer from './components/CartDrawer';

const demoProducts = [
  {
    id: 'snack-1',
    name: 'Maggi Bowl (Hot & Fresh)',
    desc: 'Cooked to order at the canteen. Pickup in 10 mins.',
    price: 45,
    mrp: 55,
    image:
      'https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1200&auto=format&fit=crop',
    badge: 'Canteen',
    category: 'Food',
  },
  {
    id: 'book-1',
    name: 'Data Structures Notes (PDF)',
    desc: 'Second-year topper notes. Clean and concise.',
    price: 79,
    image:
      'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1200&auto=format&fit=crop',
    badge: 'Digital',
    category: 'Notes',
  },
  {
    id: 'merch-1',
    name: 'College Hoodie (Navy)',
    desc: 'Official club merchandise. Sizes S-XL.',
    price: 999,
    mrp: 1299,
    image:
      'https://images.unsplash.com/photo-1548883354-7622d03aca27?q=80&w=1200&auto=format&fit=crop',
    badge: 'Merch',
    category: 'Merch',
  },
  {
    id: 'service-1',
    name: 'Event Pass - Battle of Bands',
    desc: 'Entry ticket for Saturday 7 PM, Auditorium.',
    price: 199,
    image:
      'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=1200&auto=format&fit=crop',
    badge: 'Event',
    category: 'Events',
  },
  {
    id: 'stationery-1',
    name: 'Exam Kit (Pens + Highlighter)',
    desc: 'Everything you need for finals week.',
    price: 129,
    image:
      'https://images.unsplash.com/photo-1481070555726-e2fe8357725c?q=80&w=1200&auto=format&fit=crop',
    badge: 'Stationery',
    category: 'Stationery',
  },
];

export default function App() {
  const [query, setQuery] = useState('');
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState([]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return demoProducts;
    return demoProducts.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.desc.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
    );
  }, [query]);

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
          <div className="text-sm text-gray-500">{filtered.length} items</div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} onAdd={addToCart} />
          ))}
        </div>

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
      />

      <footer className="border-t py-8 text-center text-sm text-gray-500">
        Made for college and small communities. Secure meetups, cash or UPI accepted.
      </footer>
    </div>
  );
}
