import React from 'react';
import { X, Trash2 } from 'lucide-react';

const CartDrawer = ({ open, onClose, items, onRemove, onClear }) => {
  const total = items.reduce((sum, it) => sum + it.price * it.qty, 0);

  return (
    <div className={`fixed inset-0 z-50 ${open ? '' : 'pointer-events-none'}`}>
      <div
        className={`absolute inset-0 bg-black/40 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />
      <aside
        className={`absolute right-0 top-0 h-full w-full max-w-md transform bg-white shadow-xl transition-transform ${open ? 'translate-x-0' : 'translate-x-full'}`}
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between border-b p-4">
          <h2 className="text-lg font-semibold text-gray-900">Your Cart</h2>
          <button onClick={onClose} aria-label="Close" className="rounded-full p-2 hover:bg-gray-100">
            <X size={20} />
          </button>
        </div>

        <div className="flex h-[calc(100%-8rem)] flex-col overflow-y-auto p-4">
          {items.length === 0 ? (
            <p className="py-10 text-center text-sm text-gray-500">Your cart is empty</p>
          ) : (
            <ul className="space-y-4">
              {items.map((item) => (
                <li key={item.id} className="flex items-center gap-3">
                  <img src={item.image} alt={item.name} className="h-16 w-16 rounded-md object-cover" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{item.name}</p>
                    <p className="text-xs text-gray-500">Qty: {item.qty}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-gray-900">₹{item.price * item.qty}</p>
                    <button
                      onClick={() => onRemove(item.id)}
                      className="text-xs text-gray-500 hover:text-red-600"
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="sticky bottom-0 border-t bg-white p-4">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-sm text-gray-600">Subtotal</span>
            <span className="text-lg font-bold text-gray-900">₹{total}</span>
          </div>
          <div className="flex gap-3">
            <button
              onClick={onClear}
              className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 hover:border-red-300 hover:text-red-700"
            >
              <Trash2 size={16} /> Clear
            </button>
            <button className="flex-1 rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500">
              Checkout
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default CartDrawer;
