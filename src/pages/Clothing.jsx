import products from '../data/products';
import ProductCard from '../components/ProductCard';

export default function Clothing() {
  const clothingProducts = products.filter(
    (product) => product.category === 'clothing'
  );

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Clothing</h1>

      {clothingProducts.length === 0 ? (
        <p className="text-center text-gray-500 py-12">
          No clothing items available at the moment.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {clothingProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}