import { Link } from 'react-router-dom';
import products from '../data/products';

export default function Home() {
  const featured = products.slice(0, 6);
  
  return (
    <div className="min-h-screen">
      {/* Hero Section - Improved */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container relative mx-auto px-4 py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Welcome to <span className="text-yellow-300">Free Fire</span> Store
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
              Get exclusive diamonds, powerful weapons, and premium clothing to dominate the battlefield
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/diamonds" 
                className="bg-white text-purple-600 px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transform transition-all duration-300 shadow-2xl hover:shadow-purple-500/30"
              >
                ⚡ Shop Diamonds
              </Link>
              <Link 
                to="/evo-guns" 
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300 hover:scale-105"
              >
                🔫 View Weapons
              </Link>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Featured Products - Improved */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            🔥 Featured Products
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Top picks for Free Fire players. Get the best items at competitive prices.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((product) => (
            <Link 
              key={product.id} 
              to={`/products/${product.id}`}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden h-60 bg-gradient-to-br from-gray-100 to-gray-200">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Discount Badge */}
                {product.discount > 0 && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-gradient-to-r from-red-500 to-pink-600 text-white font-bold px-4 py-2 rounded-lg shadow-lg">
                      -{product.discount}% OFF
                    </span>
                  </div>
                )}
              </div>
              
              {/* Product Info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-lg text-gray-900 line-clamp-1 group-hover:text-purple-600 transition-colors">
                    {product.name}
                  </h3>
                  <span className="text-sm text-gray-500">{product.category}</span>
                </div>
                
                {/* Price */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold text-gray-900">
                      ${product.price}
                    </span>
                    {product.discount > 0 && (
                      <span className="text-sm text-gray-400 line-through">
                        ${(product.price / (1 - product.discount/100)).toFixed(2)}
                      </span>
                    )}
                  </div>
                  
                  {/* Quick Action */}
                  <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-200 opacity-0 group-hover:opacity-100">
                    View Details
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16">
          <Link 
            to="/diamonds"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-300"
          >
            <span>🎮 Browse All Products</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Categories Section - Added for better UX */}
      <section className="bg-gradient-to-r from-gray-50 to-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-gray-900 mb-10 text-center">
            Browse Categories
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Link 
              to="/diamonds"
              className="bg-white p-8 rounded-2xl text-center shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <div className="text-4xl mb-4">💎</div>
              <h4 className="font-bold text-lg text-gray-900">Diamonds</h4>
              <p className="text-gray-600 text-sm mt-2">In-game currency</p>
            </Link>
            
            <Link 
              to="/evo-guns"
              className="bg-white p-8 rounded-2xl text-center shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <div className="text-4xl mb-4">🔫</div>
              <h4 className="font-bold text-lg text-gray-900">Evo Guns</h4>
              <p className="text-gray-600 text-sm mt-2">Powerful weapons</p>
            </Link>
            
            <Link 
              to="/clothing"
              className="bg-white p-8 rounded-2xl text-center shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <div className="text-4xl mb-4">👕</div>
              <h4 className="font-bold text-lg text-gray-900">Clothing</h4>
              <p className="text-gray-600 text-sm mt-2">Character skins</p>
            </Link>
            
            <Link 
              to="/cart"
              className="bg-white p-8 rounded-2xl text-center shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <div className="text-4xl mb-4">🛒</div>
              <h4 className="font-bold text-lg text-gray-900">Cart</h4>
              <p className="text-gray-600 text-sm mt-2">Your items</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}