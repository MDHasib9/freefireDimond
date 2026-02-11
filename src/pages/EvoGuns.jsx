import products from '../data/products';
import ProductCard from '../components/ProductCard';

export default function EvoGuns() {
  const evoGunProducts = products.filter(
    (product) => product.category === 'evo-guns'
  );

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Evo Guns</h1>

      {evoGunProducts.length === 0 ? (
        <p className="text-center text-gray-500 py-12">
          No Evo Guns available at the moment.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {evoGunProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}