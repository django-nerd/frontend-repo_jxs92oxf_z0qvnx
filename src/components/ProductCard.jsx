import React from 'react';
import { Plus, BadgeCheck } from 'lucide-react';

const ProductCard = ({ product, onAdd }) => {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
        {product.badge && (
          <span className="absolute left-2 top-2 inline-flex items-center gap-1 rounded-full bg-white/90 px-2 py-1 text-[10px] font-semibold text-indigo-700 shadow-sm">
            <BadgeCheck size={12} /> {product.badge}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="line-clamp-1 font-medium text-gray-900">{product.name}</h3>
        <p className="mt-1 line-clamp-2 text-sm text-gray-500">{product.desc}</p>
        <div className="mt-auto flex items-center justify-between pt-3">
          <div className="flex items-baseline gap-1">
            <span className="text-lg font-bold text-gray-900">₹{product.price}</span>
            {product.mrp && (
              <span className="text-xs text-gray-400 line-through">₹{product.mrp}</span>
            )}
          </div>
          <button
            onClick={() => onAdd(product)}
            className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500"
          >
            <Plus size={16} /> Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
