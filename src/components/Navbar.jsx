import React from 'react';
import { ShoppingCart, Store, Search } from 'lucide-react';

const Navbar = ({ onCartOpen, cartCount, query, setQuery }) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="rounded-lg bg-indigo-600 p-2 text-white">
            <Store size={18} />
          </div>
          <span className="font-semibold text-gray-900">Campus Cart</span>
        </div>

        <div className="hidden flex-1 items-center justify-center px-6 sm:flex">
          <div className="relative w-full max-w-md">
            <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search snacks, books, merch..."
              className="w-full rounded-full border border-gray-200 bg-white py-2 pl-9 pr-4 text-sm outline-none ring-indigo-500/20 focus:ring-4"
            />
          </div>
        </div>

        <button
          onClick={onCartOpen}
          className="group relative flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm transition hover:border-indigo-300 hover:shadow-md"
        >
          <ShoppingCart size={18} className="text-indigo-600" />
          <span>Cart</span>
          {cartCount > 0 && (
            <span className="absolute -right-2 -top-2 rounded-full bg-indigo-600 px-2 py-0.5 text-xs font-semibold text-white">
              {cartCount}
            </span>
          )}
        </button>
      </div>

      <div className="px-4 pb-3 sm:hidden">
        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search snacks, books, merch..."
            className="w-full rounded-full border border-gray-200 bg-white py-2 pl-9 pr-4 text-sm outline-none ring-indigo-500/20 focus:ring-4"
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
