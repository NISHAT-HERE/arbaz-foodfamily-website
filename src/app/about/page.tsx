import { FaHeart, FaUsers, FaGlobe } from 'react-icons/fa';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About Food Family
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              We&apos;re passionate about bringing the world&apos;s best recipes and food experiences to your kitchen
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                At Delicious Eats, we believe that great food has the power to bring people together, 
                create memories, and inspire creativity in the kitchen. Our mission is to make cooking 
                accessible, enjoyable, and rewarding for everyone.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Whether you&apos;re a seasoned chef or just starting your culinary journey, we provide 
                carefully curated recipes, detailed instructions, and helpful tips to ensure your 
                cooking experience is both successful and enjoyable.
              </p>
              <div className="flex items-center gap-2 text-orange-600">
                <FaHeart className="w-5 h-5" />
                <span className="font-semibold">Made with love for food lovers</span>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange-600 mb-2">192+</div>
                  <div className="text-gray-600">Recipes</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange-600 mb-2">13+</div>
                  <div className="text-gray-600">Cuisines</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange-600 mb-2">2K+</div>
                  <div className="text-gray-600">Happy Users</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange-600 mb-2">3.8</div>
                  <div className="text-gray-600">Average Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do at Food Family
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHeart className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Passion for Food</h3>
              <p className="text-gray-600">
                We&apos;re driven by our love for great food and the joy it brings to people&apos;s lives.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUsers className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Community First</h3>
              <p className="text-gray-600">
                We believe in building a community of food lovers who share recipes, tips, and experiences.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaGlobe className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Global Cuisine</h3>
              <p className="text-gray-600">
                We celebrate diversity by featuring recipes from cultures around the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The passionate food enthusiasts behind Food Family
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-24 h-24 bg-orange-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-orange-600">👨‍🍳</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Chef Arbaz</h3>
              <p className="text-orange-600 mb-3">Head Chef & Founder</p>
              <p className="text-gray-600 text-sm">
                Chef Arbaz brings his passion for authentic flavors 
                and innovative cooking techniques to every recipe.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-24 h-24 bg-orange-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-orange-600">👩‍💻</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Arbaz</h3>
              <p className="text-orange-600 mb-3">Content Director</p>
              <p className="text-gray-600 text-sm">
                Arbaz ensures every recipe is tested, photographed, and presented beautifully to make 
                cooking accessible to everyone.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-24 h-24 bg-orange-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-orange-600">👨‍💼</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Arbaz</h3>
              <p className="text-orange-600 mb-3">Community Manager</p>
              <p className="text-gray-600 text-sm">
                Arbaz builds and nurtures our community of food lovers, ensuring everyone feels welcome 
                and supported in their culinary journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Have a question, suggestion, or just want to share your cooking experience? We&apos;d love to hear from you!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">📧</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600">OVAISRAIS53@gmail.com</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">📱</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Social Media</h3>
                <p className="text-gray-600">@foodfamily</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">💬</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Support</h3>
                <p className="text-gray-600">support@foodfamily.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 