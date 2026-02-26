import * as React from 'react';
import Header from '@/components/Header';
import { MadeWithApplaa } from '@/components/made-with-applaa';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-teal-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
            About TranquilWave
          </h1>
          
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-blue-100 mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-4">
              TranquilWave was created to provide a simple, accessible tool for finding moments of peace in our busy lives. 
              Through gentle visual animations and soft ambient sounds, we aim to help you relax, focus, and find tranquility.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-teal-100 mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">How It Works</h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  <span className="text-blue-600 font-semibold text-sm">1</span>
                </span>
                <span>Watch the gentle wave animations to calm your visual senses</span>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  <span className="text-teal-600 font-semibold text-sm">2</span>
                </span>
                <span>Enable the soft ambient audio for auditory relaxation</span>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  <span className="text-blue-600 font-semibold text-sm">3</span>
                </span>
                <span>Adjust the volume to your comfort level</span>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  <span className="text-teal-600 font-semibold text-sm">4</span>
                </span>
                <span>Breathe deeply and let go of stress</span>
              </li>
            </ul>
          </div>

          <div className="bg-blue-50/80 backdrop-blur-sm border border-blue-200 rounded-xl p-4 text-center mb-6">
            <p className="text-sm text-blue-800">
              <strong>Disclaimer:</strong> This application is for educational purposes only and is not intended to replace professional mental health services.
            </p>
          </div>
        </div>
      </main>

      <MadeWithApplaa />
    </div>
  );
}