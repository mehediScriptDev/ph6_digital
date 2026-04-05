import React, { useEffect, useState } from 'react';
import { MdDone } from 'react-icons/md';

const ProductCard = ({ p, isAdded, onAdd }) => (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm relative">
        {p.badge && (
            <div className="absolute top-3 right-3 inline-block bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-medium">
                {p.badge}
            </div>
        )}

        <div className="flex flex-col items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                <img src={p.image} alt={p.title} className="w-8 h-8" />
            </div>
            <div className="flex-1 text-left">
                <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
                <p className="text-sm text-slate-500 mt-1">{p.short}</p>
            </div>
        </div>

        <div className="mt-6 flex flex-col items-start justify-between">
            <div>
                <div className="text-2xl text-left font-extrabold text-slate-900">${p.price}
                    <span className="text-sm font-medium text-slate-500">/{p.frequency}</span>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                    {p.features.slice(0, 3).map((f, i) => (
                        <li key={i} className="flex items-start gap-3"><MdDone className="text-emerald-500 mt-1" />{f}</li>
                    ))}
                </ul>
            </div>

            <div className="mt-4 shrink-0 w-full">
                {!isAdded ? (
                    <button
                        onClick={() => onAdd(p)}
                        style={{ background: 'linear-gradient(90deg, var(--color-primary), var(--color-another))' }}
                        className="w-full text-white py-2 rounded-full text-sm font-medium"
                    >
                        Buy Now
                    </button>
                ) : (
                    <button className="w-full bg-emerald-500 text-white py-2 rounded-full text-sm font-medium" disabled>
                        Added
                    </button>
                )}
            </div>
        </div>
    </div>
);

const ProductsCarts = ({ cart = [], onAddToCart }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState('products');

    useEffect(() => {
        let mounted = true;
        fetch('/data/products.json')
            .then((res) => res.json())
            .then((data) => {
                if (mounted) setProducts(data);
            })
            .catch((err) => console.error('Failed to load products', err))
            .finally(() => mounted && setLoading(false));

        return () => (mounted = false);
    }, []);

    return (
        <section className="py-20 bg-white">
            <div className="w-11/12 mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Premium Digital Tools</h2>
                <p className="mt-2 text-sm text-slate-500">Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>

                <div className="mt-8 flex items-center justify-center">
                    <div className="tabs rounded-full bg-white p-1 inline-flex shadow-sm">
                        <button
                            onClick={() => setActiveTab('products')}
                            className={`tab px-6 py-2 rounded-full ${activeTab === 'products' ? 'bg-linear-to-r from-primary to-another text-white shadow-lg' : 'bg-white'}`}
                            role="tab"
                            aria-selected={activeTab === 'products'}
                        >
                            Products
                        </button>
                        <button
                            onClick={() => setActiveTab('cart')}
                            className={`tab px-6 py-2 rounded-full ${activeTab === 'cart' ? 'bg-linear-to-r from-primary to-another text-white shadow-lg' : 'bg-white border'}`}
                            role="tab"
                            aria-selected={activeTab === 'cart'}
                        >
                            Cart ({cart.length})
                        </button>
                    </div>
                </div>

                <div className="mt-8">
                    {activeTab === 'products' && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {loading && <div className="col-span-full text-sm text-slate-500">Loading products...</div>}
                            {!loading && products.map((p) => (
                                <ProductCard key={p.id} p={p} isAdded={!!cart.find(c => c.id === p.id)} onAdd={onAddToCart} />
                            ))}
                        </div>
                    )}

                    {activeTab === 'cart' && (
                        <div className="max-w-4xl mx-auto">
                            {cart.length === 0 ? (
                                <div className="py-12 text-center text-slate-500">No items in cart.</div>
                            ) : (
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {cart.map((p) => (
                                        <div key={p.id} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                                                    <img src={p.image} alt={p.title} className="w-8 h-8" />
                                                </div>
                                                <div className="flex-1 text-left">
                                                    <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
                                                    <div className="text-sm text-slate-500">${p.price}/{p.frequency}</div>
                                                </div>
                                                <div className="ml-4 shrink-0 w-24">
                                                    <button className="w-full bg-emerald-500 text-white py-2 rounded-full text-sm font-medium" disabled>Added</button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ProductsCarts;