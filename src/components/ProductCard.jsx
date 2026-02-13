import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const { name, price, discount, image } = product;

  const discountedPrice = discount > 0
    ? (price * (1 - discount / 100)).toFixed(2)
    : null;

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleBuyNow = () => {
    addToCart(product);
    navigate('/cart');
  };

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md">
      {/* Image container */}
      <div className="relative aspect-square w-full overflow-hidden bg-gray-100">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover object-center transition-transform group-hover:scale-105"
        />

        {discount > 0 && (
          <div className="absolute left-2 top-2 rounded bg-red-600 px-2 py-1 text-xs font-bold text-white">
            -{discount}%
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4">
        <h3 className="mb-2 line-clamp-2 text-sm font-medium text-gray-900 group-hover:text-primary">
          {name}
        </h3>

        {/* Price area */}
        <div className="mt-auto flex items-end gap-2">
          {discountedPrice ? (
            <>
              <span className="text-lg font-bold text-red-600">
                ৳{discountedPrice}
              </span>
              <span className="text-sm text-gray-500 line-through">
                ৳{price.toFixed(2)}
              </span>
            </>
          ) : (
            <span className="text-lg font-bold text-gray-900">
              ৳{price.toFixed(2)}
            </span>
          )}
        </div>

        {/* Buttons */}
        <div className="mt-4 grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={handleAddToCart}
            className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Add to Cart
          </button>

          <button
            type="button"
            onClick={handleBuyNow}
            className="inline-flex items-center justify-center rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}