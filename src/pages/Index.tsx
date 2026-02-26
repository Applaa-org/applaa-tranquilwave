import * as React from 'react';
import Header from '@/components/Header';
import WaveAnimation from '@/components/WaveAnimation';
import AudioControls from '@/components/AudioControls';
import { MadeWithApplaa } from '@/components/made-with-applaa';

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-teal-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
            Find Your Peace
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Let gentle waves and soft sounds guide you to tranquility
          </p>
        </div>

        {/* Wave Animation */}
        <div className="mb-8 rounded-3xl overflow-hidden shadow-2xl border border-blue-100">
          <WaveAnimation />
        </div>

        {/* Audio Controls */}
        <div className="flex justify-center mb-8">
          <AudioControls />
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Calming Visuals</h3>
            <p className="text-gray-600 text-sm">Gentle wave animations to soothe your mind</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-teal-100 text-center">
            <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Soft Audio</h3>
            <p className="text-gray-600 text-sm">Ambient tones for relaxation and focus</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Anytime</h3>
            <p className="text-gray-600 text-sm">Use whenever you need a moment of calm</p>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="bg-blue-50/80 backdrop-blur-sm border border-blue-200 rounded-xl p-4 text-center mb-8">
          <p className="text-sm text-blue-800">
            <strong>Disclaimer:</strong> This application is for educational purposes only and is not intended to replace professional mental health services.
          </p>
        </div>
      </main>

      <MadeWithApplaa />
    </div>
  );
}