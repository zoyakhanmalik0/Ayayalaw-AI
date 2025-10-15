import { Heart, Target, TrendingUp } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white pt-16">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16 animate-fadeIn">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">About Us</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              At Ayayalaw AI, we believe technology should be:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Heart,
                title: 'Simple',
                description: 'Tools that anyone can use without complexity',
                color: 'from-red-500 to-pink-500',
              },
              {
                icon: Target,
                title: 'Safe',
                description: 'Built with privacy-first design, no hidden tracking',
                color: 'from-blue-500 to-cyan-500',
              },
              {
                icon: TrendingUp,
                title: 'Smart',
                description: 'Constantly improving for a better experience',
                color: 'from-green-500 to-emerald-500',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl mb-6 shadow-lg`}>
                  <item.icon className="text-white" size={32} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h2>
                <p className="text-gray-600 text-lg leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-8 sm:p-12 text-white shadow-2xl">
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg sm:text-xl leading-relaxed opacity-95">
              To provide transparent, reliable, and safe AI-powered tools that make digital life easier — without compromising your trust.
            </p>
          </div>

          <div className="mt-16 bg-gray-50 rounded-3xl p-8 sm:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Are</h2>
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>
                Ayayalaw AI is a team of passionate developers and designers committed to creating AI-powered tools that respect your privacy and simplify your digital life.
              </p>
              <p>
                We understand that technology can be overwhelming, which is why we focus on building intuitive, user-friendly solutions that anyone can use — regardless of their technical expertise.
              </p>
              <p>
                Our commitment to privacy means we never collect unnecessary data, never track your activities, and never share your information with third parties. Your trust is our top priority.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
