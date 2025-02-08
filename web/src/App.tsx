import React from 'react';
import { RocketIcon, ArrowRight } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-12 text-center">
          {/* Hero Section */}
          <div className="space-y-8">
            <div className="inline-flex items-center rounded-full bg-blue-50 px-4 py-2">
              <RocketIcon className="mr-2 h-5 w-5 text-blue-500" />
              <span className="text-sm font-medium text-blue-600">Get Started Quickly</span>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Welcome to the App Starter
            </h1>
            
            <p className="mx-auto max-w-xl text-lg text-gray-600">
              A modern foundation for your next web application. Built with React, TypeScript, and Tailwind CSS.
            </p>
            
            <div className="flex justify-center gap-4">
              <button className="inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
              
              <button className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Learn More
              </button>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'React + TypeScript',
                description: 'Type-safe development with modern React features'
              },
              {
                title: 'Tailwind CSS',
                description: 'Utility-first CSS framework for rapid UI development'
              },
              {
                title: 'Vite',
                description: 'Lightning fast build tool for modern web projects'
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;