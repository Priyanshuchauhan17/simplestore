import React from "react";

export default function CartPage({ cart = [], changeQty, removeFromCart }) {
  const total = cart.reduce((s, i) => s + (i.qty * (i.price || 0)), 0) * 83;

  const handleImageError = (e) => {
    e.target.src = "/placeholder.png"; // Fallback image
  };

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-xl font-semibold mb-6">Your Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-500">Cart is empty</p>
      ) : (
        <div className="space-y-3">
          {cart.map((c) => (
            <div key={c.id} className="flex items-center gap-3 bg-purple-100 p-3 rounded-lg">
              <img
                src={c.image}
                alt={c.title}
                className="w-12 h-12 object-contain"
                onError={handleImageError}
              />
              <div className="flex-1">
                <div className="text-sm font-medium line-clamp-1">{c.title}</div>
                <div className="text-xs text-gray-500">₹{(c.price * 83).toFixed(0)}</div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  className="px-2 py-1 border rounded cursor-pointer"
                  onClick={() => changeQty(c.id, -1)}
                  disabled={c.qty <= 1}
                >
                  -
                </button>
                <div>{c.qty}</div>
                <button
                  className="px-2 py-1 border rounded cursor-pointer"
                  onClick={() => changeQty(c.id, 1)}
                >
                  +
                </button>
              </div>
              <button
                className="ml-4 text-red-500 cursor-pointer"
                onClick={() => removeFromCart(c.id)}
              >
                Remove
              </button>
            </div>
          ))}
          <div className="flex items-center justify-between pt-4 border-t">
            <div className="font-semibold">Total</div>
            <div className="font-semibold">₹{total.toFixed(0)}</div>
          </div>
          <button className="w-full mt-4 px-4 py-2 bg-purple-400 text-white rounded-md cursor-pointer hover:bg-purple-500">
            Checkout
          </button>
        </div>
      )}
    </main>
  );
}
