import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Ayayalaw AI
          </h3>
          <p className="text-gray-400 flex items-center justify-center space-x-2">
            <span>Made with</span>
            <Heart size={16} className="text-red-500 fill-current animate-pulse" />
            <span>for a better digital experience</span>
          </p>
          <p className="text-gray-500 text-sm">
            {new Date().getFullYear()} Ayayalaw AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
