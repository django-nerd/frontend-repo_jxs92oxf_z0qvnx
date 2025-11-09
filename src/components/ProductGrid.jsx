import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const ProductGrid = ({ onAdd, query }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError('');
        const url = new URL(`${backend}/products`);
        if (query) url.searchParams.set('q', query);
        const res = await fetch(url.toString());
        if (!res.ok) throw new Error('Network');
        const data = await res.json();
        setProducts(Array.isArray(data) ? data : []);
      } catch (e) {
        setError('Failed to load products');
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [backend, query]);

  if (loading) return <div className="py-10 text-center text-sm text-gray-500">Loading products...</div>;
  if (error) return <div className="py-10 text-center text-sm text-red-600">{error}</div>;

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((p) => (
        <ProductCard
          key={p.id}
          product={{
            id: p.id,
            name: p.title,
            desc: p.description,
            price: p.price,
            image: p.image,
            badge: p.category,
            mrp: null,
          }}
          onAdd={onAdd}
        />
      ))}
      {products.length === 0 && (
        <p className="col-span-full py-10 text-center text-sm text-gray-500">No products found.</p>
      )}
    </div>
  );
};

export default ProductGrid;
