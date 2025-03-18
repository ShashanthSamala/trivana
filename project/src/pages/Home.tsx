import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Heart, Users } from 'lucide-react';

const Home = () => {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/90 to-emerald-800/90 rounded-2xl" />
        <div 
          className="relative rounded-2xl overflow-hidden"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&q=80&w=2070')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="px-8 py-20 text-white">
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Building a Sustainable<br />Future Together
            </h1>
            <p className="text-xl mb-8 max-w-2xl text-emerald-50">
              Join our community-driven platform to identify, track, and resolve environmental challenges in your area. Together, we can make a difference.
            </p>
            <Link
              to="/report"
              className="inline-flex items-center px-6 py-3 bg-white text-emerald-700 rounded-lg font-semibold hover:bg-emerald-50 transition-colors group"
            >
              Report an Issue
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Why Thrivana Matters Section */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
          Why Thrivana Matters?
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="h-12 w-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
              <Globe className="h-6 w-6 text-emerald-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Environmental Impact</h3>
            <p className="text-gray-600">
              We help identify and address environmental issues before they become critical, preserving our natural resources for future generations.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="h-12 w-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-emerald-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Community Driven</h3>
            <p className="text-gray-600">
              Our platform empowers local communities to take action and collaborate on sustainability initiatives that matter most to them.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="h-12 w-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
              <Heart className="h-6 w-6 text-emerald-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Positive Change</h3>
            <p className="text-gray-600">
              By tracking and resolving environmental issues systematically, we create lasting positive impact on our planet's health.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-20 text-center">
        <p className="text-lg text-gray-600 mb-6">
          Ready to make a difference in your community?
        </p>
        <Link
          to="/report"
          className="inline-flex items-center px-8 py-4 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
        >
          Start Reporting Issues
        </Link>
      </div>
    </div>
  );
};

export default Home;