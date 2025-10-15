import { FileText, AlertCircle, Scale, UserCheck } from 'lucide-react';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white pt-16">
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16 animate-fadeIn">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl shadow-lg">
              <FileText className="text-white" size={40} />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">Terms & Conditions</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Please read these terms and conditions carefully before using Ayayalaw AI.
            </p>
            <p className="text-sm text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100">
              <div className="flex items-start space-x-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center shadow-md">
                  <UserCheck className="text-white" size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Acceptance of Terms</h2>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                By accessing and using Ayayalaw AI, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these terms, please do not use our services.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Use of Service</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Ayayalaw AI provides digital assistant tools designed to simplify everyday tasks. You agree to use our services only for lawful purposes and in accordance with these terms.
                </p>
                <p className="font-semibold">You agree not to:</p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Use the service in any way that violates applicable laws or regulations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Attempt to gain unauthorized access to any part of the service</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Interfere with or disrupt the service or servers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Use the service to transmit malicious code or harmful content</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Reverse engineer or attempt to extract source code</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property</h2>
              <p className="text-gray-700 leading-relaxed">
                All content, features, and functionality of Ayayalaw AI, including but not limited to text, graphics, logos, and software, are the exclusive property of Ayayalaw AI and are protected by international copyright, trademark, and other intellectual property laws.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">User Content</h2>
              <p className="text-gray-700 leading-relaxed">
                Any information you submit through our contact form remains your property. By submitting content, you grant us a limited license to use this information solely for the purpose of responding to your inquiry. We do not claim ownership of your content.
              </p>
            </div>

            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8 border border-yellow-200">
              <div className="flex items-start space-x-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-400 rounded-xl flex items-center justify-center shadow-md">
                  <AlertCircle className="text-white" size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Disclaimer of Warranties</h2>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Ayayalaw AI is provided "as is" and "as available" without any warranties of any kind, either express or implied. We do not warrant that the service will be uninterrupted, secure, or error-free. Use of the service is at your own risk.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed">
                In no event shall Ayayalaw AI, its directors, employees, or agents be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of the service.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Links</h2>
              <p className="text-gray-700 leading-relaxed">
                Our service may contain links to third-party websites or services that are not owned or controlled by Ayayalaw AI. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to modify or replace these terms at any time. If a revision is material, we will provide notice prior to any new terms taking effect. Your continued use of the service after any changes constitutes acceptance of those changes.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Termination</h2>
              <p className="text-gray-700 leading-relaxed">
                We may terminate or suspend your access to the service immediately, without prior notice or liability, for any reason, including if you breach these terms. Upon termination, your right to use the service will immediately cease.
              </p>
            </div>

            <div className="bg-gradient-to-r from-gray-600 to-gray-800 rounded-2xl p-8 border border-gray-300">
              <div className="flex items-start space-x-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md">
                  <Scale className="text-gray-800" size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">Governing Law</h2>
                </div>
              </div>
              <p className="text-gray-100 leading-relaxed">
                These terms shall be governed and construed in accordance with applicable laws, without regard to its conflict of law provisions. Any disputes arising from these terms or your use of the service shall be resolved in accordance with these governing laws.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
              <p className="text-gray-700 leading-relaxed">
                If you have any questions about these Terms & Conditions, please contact us through our contact form. We will respond to your inquiry as soon as possible.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-8 sm:p-12 text-white shadow-2xl text-center mt-12">
            <h2 className="text-3xl font-bold mb-4">Thank You</h2>
            <p className="text-lg sm:text-xl leading-relaxed opacity-95">
              Thank you for taking the time to read our Terms & Conditions. We're committed to providing you with a safe and transparent service.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
