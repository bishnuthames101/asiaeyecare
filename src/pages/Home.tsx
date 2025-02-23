import React from 'react';
import { ArrowRight, Shield, Star, Truck, Eye, Glasses, Sparkles, Clock } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <main>
      {/* Hero Section */}
      <section className="pt-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">See the World in Style</h1>
              <p className="text-xl mb-8">Discover our premium collection of eyewear that combines fashion with functionality. Find your perfect pair today.</p>
              <Link to="/eyeglasses" className="inline-flex bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition duration-300 items-center">
                Shop Now <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&w=1000" 
                alt="Stylish Glasses" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: "Quality Guarantee", desc: "Premium materials and craftsmanship" },
              { icon: Star, title: "Expert Service", desc: "Professional eye care advice" },
              { icon: Truck, title: "Fast Shipping", desc: "Free delivery on all orders" },
              { icon: Eye, title: "Eye Testing", desc: "Comprehensive vision checks" }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <feature.icon className="w-12 h-12 mx-auto text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Sunglasses",
                image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600",
                desc: "Protect your eyes in style",
                path: "/sunglasses"
              },
              {
                title: "Eyeglasses",
                image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=600",
                desc: "Clear vision with modern designs",
                path: "/eyeglasses"
              },
              {
                title: "Contact Lenses",
                image: "https://images.unsplash.com/photo-1587400988341-0263a5d37a6f?auto=format&fit=crop&w=600",
                desc: "Comfortable daily wear",
                path: "/lenses"
              }
            ].map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={category.image} alt={category.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                  <p className="text-gray-600 mb-4">{category.desc}</p>
                  <Link to={category.path} className="text-blue-600 font-semibold hover:text-blue-800 transition duration-300 flex items-center">
                    View Collection <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose Asia Eye Care?</h2>
              <div className="space-y-6">
                {[
                  { icon: Glasses, title: "Wide Selection", desc: "Over 1000+ frames to choose from" },
                  { icon: Sparkles, title: "Premium Quality", desc: "Top-grade materials and craftsmanship" },
                  { icon: Clock, title: "Quick Service", desc: "Same-day service available" }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <feature.icon className="w-6 h-6 text-blue-600 mt-1" />
                    <div className="ml-4">
                      <h3 className="font-semibold mb-1">{feature.title}</h3>
                      <p className="text-gray-600">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1509695507497-903c140c43b0?auto=format&fit=crop&w=800" 
                alt="Eye Examination" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-gray-600 mb-8">Subscribe to our newsletter for the latest trends and exclusive offers</p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}