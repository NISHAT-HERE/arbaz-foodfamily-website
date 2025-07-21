import Link from 'next/link';
import { FaUtensils, FaHeart, FaStar, FaArrowRight } from 'react-icons/fa';

const featuredFoods = [
  {
    id: 1,
    name: "Grilled Salmon",
    description: "Fresh Atlantic salmon with herbs and lemon",
    price: "Rs.224",
    image: "/Grilled Salmon.jpeg",
    rating: 4.8,
    category: "Seafood"
  },
  {
    id: 2,
    name: "Beef Burger",
    description: "Juicy beef patty with fresh vegetables",
    price: "Rs.180",
    image: "Beef Burger.jpeg",
    rating: 4.6,
    category: "Fast Food"
  },
  {
    id: 3,
    name: "Pasta Carbonara",
    description: "Classic Italian pasta with creamy sauce",
    price: "Rs.160",
    image: "Pasta Carbonara.jpeg",
    rating: 4.7,
    category: "Italian"
  },
  {
    id: 4,
    name: "Caesar Salad",
    description: "Fresh greens with parmesan and croutons",
    price: "Rs.120",
    image: "Caesar Salad.jpeg",
    rating: 4.5,
    category: "Salad"
  }
];

const categories = [
  { name: "Italian", icon: "🍝", count: 45 },
  { name: "Asian", icon: "🍜", count: 38 },
  { name: "Mexican", icon: "🌮", count: 32 },
  { name: "Mediterranean", icon: "🥙", count: 28 },
  { name: "American", icon: "🍔", count: 52 },
  { name: "Desserts", icon: "🍰", count: 25 }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Discover Amazing
              <span className="block text-yellow-300">Food Experiences</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Explore our curated collection of delicious recipes, food lists, and culinary adventures
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/food-list"
                className="bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
              >
                Browse Food List
                <FaArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                href="/recipes"
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-orange-600 transition-colors"
              >
                View Recipes
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Food Categories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore different cuisines and find your next favorite dish
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-1">{category.name}</h3>
                <p className="text-sm text-gray-500">{category.count} items</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Foods Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Dishes</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Handpicked favorites from our culinary experts
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredFoods.map((food) => (
              <div key={food.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img 
                    src={food.image} 
                    alt={food.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    {food.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-lg text-gray-900">{food.name}</h3>
                    <span className="text-orange-600 font-bold">{food.price}</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">{food.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <FaStar className="text-yellow-400 w-4 h-4" />
                      <span className="text-sm font-medium">{food.rating}</span>
                    </div>
                    <button className="text-orange-600 hover:text-orange-700 transition-colors">
                      <FaHeart className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Explore More?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of food lovers discovering new recipes and culinary experiences
          </p>
          <Link 
            href="/food-list"
            className="bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
          >
            Start Exploring
            <FaArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
