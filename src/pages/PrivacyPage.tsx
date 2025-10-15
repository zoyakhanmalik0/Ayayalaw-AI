import { Shield, CheckCircle, XCircle, Mail, Users, Lock } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white pt-16">
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16 animate-fadeIn">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-400 rounded-2xl shadow-lg">
              <Shield className="text-white" size={40} />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">Privacy Policy</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Your trust matters most to us. That's why Ayayalaw AI follows strict privacy principles.
            </p>
            <p className="text-sm text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          <div className="space-y-6 mb-12">
            {[
              { icon: XCircle, text: 'We do not collect or store personal data.', color: 'from-red-500 to-pink-500' },
              { icon: XCircle, text: 'We do not track your browsing activity.', color: 'from-orange-500 to-red-500' },
              { icon: Mail, text: 'Any contact form details (like email) are only used to reply to your inquiry.', color: 'from-blue-500 to-cyan-500' },
              { icon: Users, text: 'We never share information with third parties.', color: 'from-purple-500 to-pink-500' },
              { icon: CheckCircle, text: 'You can fully use our tool without giving personal details.', color: 'from-green-500 to-emerald-500' },
              { icon: Lock, text: 'All data is stored securely with industry-standard encryption.', color: 'from-gray-600 to-gray-800' },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 bg-gradient-to-r from-gray-50 to-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center shadow-md`}>
                  <item.icon className="text-white" size={24} />
                </div>
                <p className="text-gray-700 text-lg leading-relaxed pt-2">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="space-y-8 mb-12">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
              <p className="text-gray-700 leading-relaxed">
                When you use our contact form, we collect only the information you voluntarily provide: your email address and message content. Your name is optional. This information is used solely to respond to your inquiry.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
              <p className="text-gray-700 leading-relaxed">
                Any information you provide through our contact form is used exclusively to communicate with you regarding your inquiry. We do not use this information for marketing purposes, nor do we share it with any third parties.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
              <p className="text-gray-700 leading-relaxed">
                We implement industry-standard security measures to protect your information. All data is stored securely using encryption and access controls. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span>Request deletion of any data we have collected from you</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span>Access any personal information we have stored</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span>Opt-out of any communications from us</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-700 leading-relaxed">
                If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us through our contact form.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-600 to-emerald-500 rounded-3xl p-8 sm:p-12 text-white shadow-2xl text-center">
            <h2 className="text-3xl font-bold mb-4">Our Commitment</h2>
            <p className="text-lg sm:text-xl leading-relaxed opacity-95">
              A safe, private, and secure experience — always.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
