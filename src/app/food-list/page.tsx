'use client';

import { useState, useMemo } from 'react';
import { FaSearch, FaStar, FaHeart, FaSort } from 'react-icons/fa';

interface FoodItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  rating: number;
  category: string;
  cuisine: string;
  preparationTime: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  isVegetarian: boolean;
  isSpicy: boolean;
}

const foodData: FoodItem[] = [
  {
    id: 1,
    name: "Grilled Salmon",
    description: "Fresh Atlantic salmon with herbs and lemon",
    price: "Rs.224",
    image: "/Grilled Salmon.jpeg",
    rating: 4.8,
    category: "Seafood",
    cuisine: "Mediterranean",
    preparationTime: "25 min",
    difficulty: "Medium",
    isVegetarian: false,
    isSpicy: false
  },
  {
    id: 2,
    name: "Beef Burger",
    description: "Juicy beef patty with fresh vegetables",
    price: "Rs.180",
    image: "/Beef Burger.jpeg",
    rating: 4.6,
    category: "Fast Food",
    cuisine: "American",
    preparationTime: "15 min",
    difficulty: "Easy",
    isVegetarian: false,
    isSpicy: false
  },
  {
    id: 3,
    name: "Pasta Carbonara",
    description: "Classic Italian pasta with creamy sauce",
    price: "Rs.116",
    image: "/Pasta Carbonara.jpeg",
    rating: 4.7,
    category: "Italian",
    cuisine: "Italian",
    preparationTime: "20 min",
    difficulty: "Medium",
    isVegetarian: false,
    isSpicy: false
  },
  {
    id: 4,
    name: "Caesar Salad",
    description: "Fresh greens with parmesan and croutons",
    price: "Rs.90",
    image: "/Caesar Salad.jpeg",
    rating: 4.5,
    category: "Salad",
    cuisine: "Italian",
    preparationTime: "10 min",
    difficulty: "Easy",
    isVegetarian: true,
    isSpicy: false
  },
  {
    id: 5,
    name: "Chicken Tikka Masala",
    description: "Spicy Indian curry with tender chicken",
    price: "Rs.322",
    image: "/Chicken Tikka Masala.jpeg",
    rating: 4.9,
    category: "Curry",
    cuisine: "Indian",
    preparationTime: "35 min",
    difficulty: "Hard",
    isVegetarian: false,
    isSpicy: true
  },
  {
    id: 6,
    name: "Margherita Pizza",
    description: "Classic pizza with tomato and mozzarella",
    price: "Rs.219",
    image: "/Margherita Pizza.jpeg",
    rating: 4.4,
    category: "Pizza",
    cuisine: "Italian",
    preparationTime: "30 min",
    difficulty: "Medium",
    isVegetarian: true,
    isSpicy: false
  },
  {
    id: 7,
    name: "Sushi Roll",
    description: "Fresh salmon and avocado roll",
    price: "Rs.128",
    image: "/Sushi Roll.jpeg",
    rating: 4.8,
    category: "Sushi",
    cuisine: "Japanese",
    preparationTime: "40 min",
    difficulty: "Hard",
    isVegetarian: false,
    isSpicy: false
  },
  {
    id: 8,
    name: "Chocolate Cake",
    description: "Rich chocolate cake with ganache",
    price: "Rs.450",
    image: "/Chocolate Cake.jpeg",
    rating: 4.6,
    category: "Dessert",
    cuisine: "American",
    preparationTime: "60 min",
    difficulty: "Medium",
    isVegetarian: true,
    isSpicy: false
  }
];


const categories = ["All", "Seafood", "Fast Food", "Italian", "Salad", "Curry", "Pizza", "Sushi", "Dessert"];
const cuisines = ["All", "Mediterranean", "American", "Italian", "Indian", "Japanese"];
const difficulties = ["All", "Easy", "Medium", "Hard"];

export default function FoodList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedCuisine, setSelectedCuisine] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [vegetarianOnly, setVegetarianOnly] = useState(false);
  const [spicyOnly, setSpicyOnly] = useState(false);
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'rating'>('name');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const filteredFoods = useMemo(() => {
    const filtered = foodData.filter(food => {
      const matchesSearch = food.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           food.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || food.category === selectedCategory;
      const matchesCuisine = selectedCuisine === 'All' || food.cuisine === selectedCuisine;
      const matchesDifficulty = selectedDifficulty === 'All' || food.difficulty === selectedDifficulty;
      const matchesVegetarian = !vegetarianOnly || food.isVegetarian;
      const matchesSpicy = !spicyOnly || food.isSpicy;

      return matchesSearch && matchesCategory && matchesCuisine && matchesDifficulty && matchesVegetarian && matchesSpicy;
    });

    // Sort the filtered results
    filtered.sort((a, b) => {
      let aValue: string | number;
      let bValue: string | number;

      switch (sortBy) {
        case 'name':
          aValue = a.name;
          bValue = b.name;
          break;
        case 'price':
          aValue = parseFloat(a.price.replace('$', ''));
          bValue = parseFloat(b.price.replace('$', ''));
          break;
        case 'rating':
          aValue = a.rating;
          bValue = b.rating;
          break;
        default:
          aValue = a.name;
          bValue = b.name;
      }

      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, selectedCuisine, selectedDifficulty, vegetarianOnly, spicyOnly, sortBy, sortOrder]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Food List</h1>
          <p className="text-gray-600">Discover our complete collection of delicious dishes</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Search */}
            <div className="relative">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-500" />
              <input
                type="text"
                placeholder="Search for food..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-black bg-white shadow focus:shadow-lg transition-shadow placeholder:text-gray-500"
              />
            </div>

            {/* Sort */}
            <div className="flex gap-2">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'name' | 'price' | 'rating')}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              >
                <option value="name">Sort by Name</option>
                <option value="price">Sort by Price</option>
                <option value="rating">Sort by Rating</option>
              </select>
              <button
                onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              >
                <FaSort className={`w-4 h-4 ${sortOrder === 'desc' ? 'rotate-180' : ''}`} />
              </button>
            </div>
          </div>

          {/* Filters */}
          <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>

            <select
              value={selectedCuisine}
              onChange={(e) => setSelectedCuisine(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            >
              {cuisines.map(cuisine => (
                <option key={cuisine} value={cuisine}>{cuisine}</option>
              ))}
            </select>

            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            >
              {difficulties.map(difficulty => (
                <option key={difficulty} value={difficulty}>{difficulty}</option>
              ))}
            </select>

            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={vegetarianOnly}
                onChange={(e) => setVegetarianOnly(e.target.checked)}
                className="rounded text-orange-600 focus:ring-orange-500"
              />
              <span className="text-sm">Vegetarian</span>
            </label>

            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={spicyOnly}
                onChange={(e) => setSpicyOnly(e.target.checked)}
                className="rounded text-orange-600 focus:ring-orange-500"
              />
              <span className="text-sm">Spicy</span>
            </label>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredFoods.length} of {foodData.length} items
          </p>
        </div>

        {/* Food Grid */}
        {filteredFoods.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredFoods.map((food) => (
              <div key={food.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img 
                    src={food.image} 
                    alt={food.name}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    {food.category}
                  </div>
                  {food.isVegetarian && (
                    <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      Veg
                    </div>
                  )}
                  {food.isSpicy && (
                    <div className="absolute top-10 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      Spicy
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-lg text-gray-900">{food.name}</h3>
                    <span className="text-orange-600 font-bold">{food.price}</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">{food.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Cuisine:</span>
                      <span className="font-medium">{food.cuisine}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Time:</span>
                      <span className="font-medium">{food.preparationTime}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Difficulty:</span>
                      <span className={`font-medium ${
                        food.difficulty === 'Easy' ? 'text-green-600' : 
                        food.difficulty === 'Medium' ? 'text-yellow-600' : 'text-red-600'
                      }`}>
                        {food.difficulty}
                      </span>
                    </div>
                  </div>

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
        ) : (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🍽️</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No food found</h3>
            <p className="text-gray-600">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </div>
  );
} 