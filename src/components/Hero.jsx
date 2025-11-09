import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative h-[70vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/10 via-white/20 to-white" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-4 text-center">
        <span className="pointer-events-auto inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/80 px-3 py-1 text-xs font-medium text-indigo-700 shadow-sm backdrop-blur">
          Built for campuses
        </span>
        <h1 className="mt-4 text-balance font-['Inter'] text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl">
          Your campus marketplace
        </h1>
        <p className="mt-3 max-w-2xl text-balance text-base text-gray-700">
          Buy and sell snacks, books, notes, event tickets and merch around you. Fast, safe and local.
        </p>
        <div className="pointer-events-auto mt-6 flex flex-wrap items-center justify-center gap-3">
          <a href="#products" className="rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-indigo-500">
            Browse products
          </a>
          <a href="#sell" className="rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 shadow-sm transition hover:border-indigo-300">
            List an item
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
