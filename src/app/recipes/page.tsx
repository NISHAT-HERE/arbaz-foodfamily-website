'use client';

import { useState } from 'react';
import { FaClock, FaUser, FaStar, FaHeart, FaUtensils, FaFire } from 'react-icons/fa';

interface Recipe {
  id: number;
  title: string;
  description: string;
  image: string;
  cookingTime: string;
  servings: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  rating: number;
  category: string;
  ingredients: string[];
  instructions: string[];
  calories: number;
  isVegetarian: boolean;
  isSpicy: boolean;
}

const recipes: Recipe[] = [
  {
    id: 1,
    title: "Classic Margherita Pizza",
    description: "A traditional Italian pizza with fresh mozzarella, tomato sauce, and basil",
    image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=400&h=300&fit=crop",
    cookingTime: "45 min",
    servings: 4,
    difficulty: "Medium",
    rating: 4.7,
    category: "Italian",
    calories: 285,
    isVegetarian: true,
    isSpicy: false,
    ingredients: [
      "2 cups all-purpose flour",
      "1 cup warm water",
      "2 1/4 tsp active dry yeast",
      "1 tsp salt",
      "1 tbsp olive oil",
      "1 cup tomato sauce",
      "8 oz fresh mozzarella",
      "Fresh basil leaves",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Mix flour, yeast, and salt in a large bowl",
      "Add warm water and olive oil, knead for 10 minutes",
      "Let dough rise for 1 hour in a warm place",
      "Roll out dough and add tomato sauce",
      "Top with mozzarella and bake at 450°F for 15-20 minutes",
      "Garnish with fresh basil before serving"
    ]
  },
  {
    id: 2,
    title: "Chicken Tikka Masala",
    description: "Creamy and spicy Indian curry with tender chicken pieces",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop",
    cookingTime: "60 min",
    servings: 6,
    difficulty: "Hard",
    rating: 4.9,
    category: "Indian",
    calories: 420,
    isVegetarian: false,
    isSpicy: true,
    ingredients: [
      "1.5 lbs chicken breast, cubed",
      "1 cup yogurt",
      "2 tbsp tikka masala paste",
      "1 onion, diced",
      "3 cloves garlic, minced",
      "1 inch ginger, grated",
      "1 cup heavy cream",
      "2 tbsp tomato paste",
      "Fresh cilantro",
      "Basmati rice for serving"
    ],
    instructions: [
      "Marinate chicken in yogurt and tikka paste for 30 minutes",
      "Cook chicken in a hot pan until browned",
      "Sauté onions, garlic, and ginger until soft",
      "Add tomato paste and cook for 2 minutes",
      "Return chicken to pan and add cream",
      "Simmer for 20 minutes until sauce thickens",
      "Garnish with cilantro and serve with rice"
    ]
  },
  {
    id: 3,
    title: "Caesar Salad",
    description: "Fresh romaine lettuce with classic Caesar dressing and croutons",
    image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=300&fit=crop",
    cookingTime: "15 min",
    servings: 2,
    difficulty: "Easy",
    rating: 4.5,
    category: "Salad",
    calories: 180,
    isVegetarian: true,
    isSpicy: false,
    ingredients: [
      "2 heads romaine lettuce",
      "1/2 cup croutons",
      "1/4 cup parmesan cheese",
      "2 tbsp olive oil",
      "1 tbsp lemon juice",
      "1 clove garlic, minced",
      "1 tsp Dijon mustard",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Wash and chop romaine lettuce",
      "Make dressing by whisking olive oil, lemon juice, garlic, and mustard",
      "Toss lettuce with dressing",
      "Add croutons and parmesan cheese",
      "Season with salt and pepper",
      "Serve immediately"
    ]
  },
  {
    id: 4,
    title: "Chocolate Lava Cake",
    description: "Decadent chocolate cake with a molten center",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop",
    cookingTime: "25 min",
    servings: 4,
    difficulty: "Medium",
    rating: 4.8,
    category: "Dessert",
    calories: 350,
    isVegetarian: true,
    isSpicy: false,
    ingredients: [
      "4 oz dark chocolate",
      "1/2 cup butter",
      "2 eggs",
      "2 egg yolks",
      "1/4 cup sugar",
      "1/4 cup flour",
      "Pinch of salt",
      "Butter for ramekins"
    ],
    instructions: [
      "Preheat oven to 425°F and butter 4 ramekins",
      "Melt chocolate and butter together",
      "Whisk eggs, egg yolks, and sugar until pale",
      "Fold in melted chocolate mixture",
      "Gently fold in flour and salt",
      "Divide batter among ramekins",
      "Bake for 12-14 minutes until edges are set but center is soft",
      "Let stand for 1 minute before serving"
    ]
  }
];

const categories = ["All", "Italian", "Indian", "Salad", "Dessert", "Mexican", "Asian"];

export default function Recipes() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [vegetarianOnly, setVegetarianOnly] = useState(false);

  const filteredRecipes = recipes.filter(recipe => {
    const matchesCategory = selectedCategory === 'All' || recipe.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'All' || recipe.difficulty === selectedDifficulty;
    const matchesVegetarian = !vegetarianOnly || recipe.isVegetarian;
    
    return matchesCategory && matchesDifficulty && matchesVegetarian;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Recipes</h1>
          <p className="text-gray-600">Discover delicious recipes from around the world</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            >
              <option value="All">All Difficulties</option>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>

            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={vegetarianOnly}
                onChange={(e) => setVegetarianOnly(e.target.checked)}
                className="rounded text-orange-600 focus:ring-orange-500"
              />
              <span className="text-sm">Vegetarian Only</span>
            </label>
          </div>
        </div>

        {/* Recipes Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredRecipes.map((recipe) => (
            <div key={recipe.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative">
                <img 
                  src={recipe.image} 
                  alt={recipe.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-2 right-2 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  {recipe.category}
                </div>
                {recipe.isVegetarian && (
                  <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    Veg
                  </div>
                )}
                {recipe.isSpicy && (
                  <div className="absolute top-10 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    Spicy
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-semibold text-xl text-gray-900">{recipe.title}</h3>
                  <button className="text-orange-600 hover:text-orange-700 transition-colors">
                    <FaHeart className="w-5 h-5" />
                  </button>
                </div>
                
                <p className="text-gray-600 mb-4">{recipe.description}</p>
                
                {/* Recipe Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="flex items-center gap-2 text-sm">
                    <FaClock className="text-gray-400" />
                    <span>{recipe.cookingTime}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <FaUser className="text-gray-400" />
                    <span>{recipe.servings} servings</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <FaFire className="text-gray-400" />
                    <span>{recipe.calories} cal</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <FaStar className="text-yellow-400" />
                    <span>{recipe.rating}</span>
                  </div>
                </div>

                {/* Difficulty */}
                <div className="mb-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                    recipe.difficulty === 'Easy' ? 'bg-green-100 text-green-800' : 
                    recipe.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 
                    'bg-red-100 text-red-800'
                  }`}>
                    {recipe.difficulty}
                  </span>
                </div>

                {/* Ingredients Preview */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Ingredients ({recipe.ingredients.length})</h4>
                  <div className="text-sm text-gray-600">
                    {recipe.ingredients.slice(0, 3).join(', ')}
                    {recipe.ingredients.length > 3 && ` +${recipe.ingredients.length - 3} more`}
                  </div>
                </div>

                {/* Instructions Preview */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Instructions</h4>
                  <div className="text-sm text-gray-600">
                    {recipe.instructions[0]}
                    {recipe.instructions.length > 1 && ` +${recipe.instructions.length - 1} more steps`}
                  </div>
                </div>

                {/* View Recipe Button */}
                <button className="w-full bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 transition-colors font-semibold">
                  View Full Recipe
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredRecipes.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">👨‍🍳</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No recipes found</h3>
            <p className="text-gray-600">Try adjusting your filters</p>
          </div>
        )}
      </div>
    </div>
  );
} 