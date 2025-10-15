import Ratting from "./Rating";
import { Download, Zap, Shield, Sparkles, CheckCircle, Brain, Lock, Rocket, Star, Users, TrendingUp, Globe, Clock, Award } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-cyan-50 pt-16 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="text-center space-y-8 animate-fadeIn">
            <div className="inline-block animate-float">
              <div className="flex items-center justify-center w-24 h-24 mx-auto bg-gradient-to-br from-blue-500 to-cyan-400 rounded-3xl shadow-2xl transform hover:scale-110 transition-transform duration-300">
                <Sparkles className="text-white" size={48} />
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Welcome to{' '}
                <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent animate-gradient">
                  Ayayalaw AI
                </span>
              </h1>
              <div className="flex items-center justify-center space-x-2">
                <Star className="text-yellow-400 fill-yellow-400" size={20} />
                <Star className="text-yellow-400 fill-yellow-400" size={20} />
                <Star className="text-yellow-400 fill-yellow-400" size={20} />
                <Star className="text-yellow-400 fill-yellow-400" size={20} />
                <Star className="text-yellow-400 fill-yellow-400" size={20} />
                <span className="text-gray-600 ml-2 font-semibold">Trusted by thousands</span>
              </div>
            </div>

            

            <div className="pt-8 space-y-4">
  <a
    href="https://your-download-link.com"   
    target="_blank"                        
    rel="noopener noreferrer"               
  >
    <button className="group bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-10 py-5 rounded-full font-bold text-xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-300 flex items-center mx-auto space-x-3">
      <Download size={28} className="group-hover:animate-bounce" />
      <span>Download Ayayalaw AI</span>
    </button>
  </a>

            
            








              <div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-500" size={16} />
                  <span>Free Forever</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-500" size={16} />
                  <span>No Credit Card</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-500" size={16} />
                  <span>Instant Access</span>
                </div>
              </div>
            </div>

            <div className="pt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                {
                  icon: Brain,
                  title: 'Easy to Use',
                  text: 'Beginner-friendly interface designed for everyone',
                  color: 'from-green-500 to-emerald-400'
                },
                {
                  icon: Zap,
                  title: 'Lightning Fast',
                  text: 'Optimized for peak performance and speed',
                  color: 'from-yellow-500 to-orange-400'
                },
                {
                  icon: Shield,
                  title: 'Privacy First',
                  text: 'No sign-up or personal data required',
                  color: 'from-blue-500 to-cyan-500'
                },
                {
                  icon: Lock,
                  title: '100% Safe',
                  text: 'Privacy-focused and ad-policy compliant',
                  color: 'from-cyan-500 to-blue-400'
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-300 border border-gray-100 hover:border-blue-200"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Why Choose <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Ayayalaw AI</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the perfect blend of power, simplicity, and security in one intelligent assistant.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Rocket,
                title: 'Instant Setup',
                description: 'Get started in seconds with our streamlined setup process. No complicated configurations or technical knowledge required.',
                color: 'from-red-500 to-pink-500'
              },
              {
                icon: Brain,
                title: 'Smart Intelligence',
                description: 'Powered by advanced AI technology that learns and adapts to provide you with the most relevant and accurate assistance.',
                color: 'from-purple-500 to-pink-500'
              },
              {
                icon: Shield,
                title: 'Bank-Level Security',
                description: 'Your data is protected with military-grade encryption and security protocols. We never compromise on your safety.',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                icon: Clock,
                title: 'Save Time Daily',
                description: 'Automate repetitive tasks and get instant answers. Save hours every week and focus on what truly matters.',
                color: 'from-green-500 to-emerald-500'
              },
              {
                icon: Globe,
                title: 'Works Everywhere',
                description: 'Access your assistant from any device, anywhere in the world. Seamless synchronization across all platforms.',
                color: 'from-cyan-500 to-blue-500'
              },
              {
                icon: Award,
                title: 'Award-Winning Support',
                description: 'Our dedicated support team is here to help you 24/7. Get assistance whenever you need it, no questions asked.',
                color: 'from-yellow-500 to-orange-500'
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2"
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${feature.color} rounded-2xl mb-6 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="text-white" size={26} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Ratting/>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Trusted by Professionals Worldwide
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From students to business owners, Ayayalaw AI empowers users across all industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-yellow-400" size={20} />
                ))}
              </div>
              <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                "Ayayalaw AI has transformed the way I work. It's incredibly intuitive and has saved me countless hours every week. I can't imagine my workflow without it!"
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full"></div>
                <div>
                  <div className="font-bold text-gray-900">Sarah Johnson</div>
                  <div className="text-gray-600 text-sm">Product Manager</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-yellow-400" size={20} />
                ))}
              </div>
              <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                "The privacy-first approach is what sold me. Finally, an AI assistant I can trust with my data. Plus, it's completely free with no hidden costs!"
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-400 rounded-full"></div>
                <div>
                  <div className="font-bold text-gray-900">Michael Chen</div>
                  <div className="text-gray-600 text-sm">Software Developer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-12 sm:p-16 shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Download Ayayalaw AI today and experience the future of digital assistance. It's free, secure, and takes less than a minute to set up.
            </p>
            <button className="bg-white text-blue-600 hover:bg-gray-50 px-10 py-5 rounded-full font-bold text-xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-300 flex items-center mx-auto space-x-3">
              <Download size={28} />
              <span>Download Now</span>
            </button>
            <p className="text-white/80 mt-6">Join 50,000+ satisfied users today</p>
          </div>
        </div>
      </section>
    </div>
  );
}
