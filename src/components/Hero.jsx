import React from 'react';
import { Rocket, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-pink-50" />
      <div className="relative mx-auto max-w-6xl px-4 py-14">
        <div className="flex flex-col items-center gap-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white px-3 py-1 text-xs font-medium text-indigo-700 shadow-sm">
            <Rocket size={14} />
            Launching student-run stores
          </span>
          <h1 className="text-balance font-['Inter'] text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl">
            Your campus marketplace
          </h1>
          <p className="max-w-2xl text-balance text-base text-gray-600">
            Buy and sell snacks, books, notes, event tickets and college merch right around you. Fast, safe, and built for small communities.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a href="#products" className="rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-indigo-500">
              Browse products
            </a>
            <a href="#sell" className="rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 shadow-sm transition hover:border-indigo-300">
              List an item
            </a>
          </div>
          <div className="mt-4 flex items-center gap-1 text-xs text-gray-500">
            <Star size={14} className="text-yellow-500" />
            Trusted by 500+ students across clubs and hostels
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
