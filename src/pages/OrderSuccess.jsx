import { useCart } from '../context/CartContext';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function OrderSuccess() {
  const { clearCart } = useCart();

  // Clear cart when success page loads
  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-50">
      <div className="container mx-auto px-4 py-16 text-center max-w-lg">
        {/* Success Icon */}
        <div className="mx-auto w-28 h-28 bg-green-100 rounded-full flex items-center justify-center mb-10">
          <span className="text-7xl">🎉</span>
        </div>

        {/* Title */}
        <h1 className="text-5xl font-bold text-green-700 mb-4">
          Order Successful!
        </h1>

        {/* Message */}
        <p className="text-xl text-gray-700 mb-10 leading-relaxed">
          Thank you for shopping at <span className="font-semibold">Free Fire Store</span>.<br />
          Your diamonds, Evo Guns, and clothing have been successfully processed.
        </p>

        {/* Info Box */}
        <div className="bg-white border border-green-200 rounded-3xl p-8 mb-12">
          <p className="text-green-600 font-medium mb-2">What's next?</p>
          <p className="text-gray-600 text-sm">
            Your items will be credited to your Free Fire account within a few minutes.
          </p>
        </div>

        {/* Back to Home Button */}
        <Link
          to="/"
          className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-14 py-4 rounded-2xl transition-all active:scale-95"
        >
          Back to Home
        </Link>

        <p className="text-xs text-gray-400 mt-10">
          Order confirmation sent to your registered email
        </p>
      </div>
    </div>
  );
}