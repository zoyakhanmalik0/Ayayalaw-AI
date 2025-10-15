import { Mail, Send, User } from 'lucide-react';
import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([
          {
            name: formData.name || 'Anonymous',
            email: formData.email,
            message: formData.message,
            submitted_at: new Date().toISOString(),
          },
        ]);

      if (error) throw error;

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-12 animate-fadeIn">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">Contact Us</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            We'd love to connect with you! Whether you have questions, feedback, or support requests, feel free to reach out.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="flex items-center text-gray-700 font-medium mb-2">
                <User size={20} className="mr-2 text-blue-600" />
                Name <span className="text-gray-400 text-sm ml-2">(optional)</span>
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="flex items-center text-gray-700 font-medium mb-2">
                <Mail size={20} className="mr-2 text-blue-600" />
                Email <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label className="flex items-center text-gray-700 font-medium mb-2">
                <Send size={20} className="mr-2 text-blue-600" />
                Message <span className="text-red-500 ml-1">*</span>
              </label>
              <textarea
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none resize-none"
                placeholder="Tell us what's on your mind..."
              />
            </div>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
            >
              <Send size={20} />
              <span>{status === 'submitting' ? 'Sending...' : 'Submit'}</span>
            </button>

            {status === 'success' && (
              <div className="bg-green-50 border border-green-200 text-green-800 px-6 py-4 rounded-xl animate-fadeIn">
                Thank you for reaching out! We'll get back to you soon.
              </div>
            )}

            {status === 'error' && (
              <div className="bg-red-50 border border-red-200 text-red-800 px-6 py-4 rounded-xl animate-fadeIn">
                Something went wrong. Please try again later.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
