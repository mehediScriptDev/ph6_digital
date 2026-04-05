import React, { useEffect, useState } from 'react';
import { MdDone } from 'react-icons/md';

const ProductCard = ({ p }) => (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm relative">
        {p.badge && (
            <div className="absolute top-3 right-3 inline-block bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-medium">
                {p.badge}
            </div>
        )}

        <div className="flex items-start flex-col gap-4">
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
                <div className="text-2xl text-left font-extrabold text-slate-900">${p.price}<span className="text-sm font-medium text-slate-500">/{p.frequency}</span></div>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                    {p.features.slice(0,3).map((f, i) => (
                        <li key={i} className="flex items-start gap-3"><MdDone className="text-emerald-500 mt-1" />{f}</li>
                    ))}
                </ul>
            </div>

            <div className=" w-full shrink-0 mt-4 ">
                <button style={{background: 'linear-gradient(90deg, var(--color-primary), var(--color-another))'}} className="w-full text-white py-2 rounded-full text-sm font-medium">Buy Now</button>
            </div>
        </div>
    </div>
);

const ProductsCarts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

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

                <div className="mt-8 flex items-center justify-center gap-3">
                    <button className="px-4 py-2 rounded-full bg-linear-to-r from-purple-600 to-indigo-500 text-white">Products</button>
                    <button className="px-4 py-2 rounded-full border">Cart (2)</button>
                </div>

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {loading && <div className="col-span-full text-sm text-slate-500">Loading products...</div>}
                    {!loading && products.map((p) => <ProductCard key={p.id} p={p} />)}
                </div>
            </div>
        </section>
    );
};

export default ProductsCarts;