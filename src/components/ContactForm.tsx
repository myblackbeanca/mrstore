import React, { useState } from 'react';
import { Loader2, CheckCircle } from 'lucide-react';

interface FormData {
  storeName: string;
  phone: string;
  email: string;
}

export default function ContactForm({ onClose }: { onClose: () => void }) {
  const [formData, setFormData] = useState<FormData>({
    storeName: '',
    phone: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const formattedData = new FormData();
      formattedData.append('Store Name', formData.storeName);
      formattedData.append('Phone', formData.phone);
      formattedData.append('Email', formData.email);
      formattedData.append('Timestamp', new Date().toISOString());

      const response = await fetch('https://script.google.com/macros/s/AKfycbxY414eJLmaj9cFlo55JMqVlk29TOqfWFfcV8pp-ML633rS0sk7iDbU17pMR9kuscNHxA/exec', {
        method: 'POST',
        mode: 'no-cors',
        body: formattedData
      });

      // Since no-cors doesn't return response status, we'll assume success
      setIsSubmitted(true);
    } catch (err) {
      console.error('Submission error:', err);
      setError('Something went wrong. Please try calling us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900 rounded-lg p-6 w-full max-w-md relative border border-indigo-500/20">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
        >
          ×
        </button>
        
        {!isSubmitted ? (
          <>
            <h2 className="text-2xl font-bold mb-4">Bring MINY to Your Store</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Store Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-3 py-2 bg-white/10 rounded-lg focus:ring-2 focus:ring-indigo-500 text-white"
                  value={formData.storeName}
                  onChange={(e) => setFormData({ ...formData, storeName: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  className="w-full px-3 py-2 bg-white/10 rounded-lg focus:ring-2 focus:ring-indigo-500 text-white"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-3 py-2 bg-white/10 rounded-lg focus:ring-2 focus:ring-indigo-500 text-white"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              {error && (
                <div className="text-red-400 text-sm p-2 bg-red-500/10 rounded">
                  {error}
                </div>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg transition flex items-center justify-center"
              >
                {isSubmitting ? (
                  <><Loader2 className="animate-spin mr-2" /> Submitting...</>
                ) : (
                  'Transform My Store with MINY'
                )}
              </button>
              <div className="text-center mt-4 text-gray-400">
                <p>Or text us directly:</p>
                <a href="tel:+14159367377" className="text-indigo-400 hover:text-indigo-300 font-medium">
                  +1 (415) 936-7377
                </a>
              </div>
            </form>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="flex justify-center mb-4">
              <CheckCircle className="w-16 h-16 text-green-400" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
            <p className="text-gray-300 mb-4">
              We're excited to help transform your store! A MINY representative will contact you within 24 hours to discuss your needs.
            </p>
            <p className="text-sm text-gray-400">
              For immediate assistance, call us at{' '}
              <a href="tel:+14159367377" className="text-indigo-400 hover:text-indigo-300 font-medium">
                +1 (415) 936-7377
              </a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}