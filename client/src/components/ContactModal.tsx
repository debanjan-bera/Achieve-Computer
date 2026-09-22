import React, { useState } from 'react';
import { X, Phone, MessageCircle, MapPin, Send, CheckCircle2 } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCourse?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, selectedCourse }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [course, setCourse] = useState(selectedCourse || 'Basic Computer & MS Office Suite');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Prepare WhatsApp message URL
    const text = encodeURIComponent(
      `Hello Sir, I would like to enquire about course admission at Achieve Computer Centre.\n\nName: ${name}\nPhone: ${phone}\nCourse: ${course}\nMessage: ${message || 'Please share the batch timings and fee structure.'}`
    );
    window.open(`https://wa.me/919876543210?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F172A]/70 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg bg-[#FFFFFF] rounded-2xl shadow-2xl border border-[#E2E8F0] overflow-hidden">
        {/* Header */}
        <div className="bg-[#172554] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Close"
          >
            <X size={20} />
          </button>
          <h3 className="text-2xl font-bold text-[#FFFFFF]">Course & Admission Enquiry</h3>
          <p className="text-sm text-[#E2E8F0] mt-1">
            Fill out the form below or connect directly with Sir via Phone or WhatsApp.
          </p>
        </div>

        {/* Form Body */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-6">
              <div className="w-14 h-14 bg-[#15803D]/10 text-[#15803D] rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 size={32} />
              </div>
              <h4 className="text-xl font-bold text-[#172554]">Thank You!</h4>
              <p className="text-[#64748B] text-sm mt-2">
                Your message has been received. We will get back to you shortly.
              </p>
              <button
                onClick={onClose}
                className="mt-6 px-6 py-2 bg-[#172554] text-white rounded-xl text-sm font-bold hover:bg-[#0F172A] transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#1E293B] mb-1">Your Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 bg-[#FFFFFF] border border-[#E2E8F0] rounded-xl text-sm text-[#1E293B] focus:outline-none focus:border-[#172554] focus:ring-1 focus:ring-[#172554]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1E293B] mb-1">Phone / WhatsApp Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 9876543210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-2.5 bg-[#FFFFFF] border border-[#E2E8F0] rounded-xl text-sm text-[#1E293B] focus:outline-none focus:border-[#172554] focus:ring-1 focus:ring-[#172554]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1E293B] mb-1">Select Interested Course</label>
                <select
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                  className="w-full px-4 py-2.5 bg-[#FFFFFF] border border-[#E2E8F0] rounded-xl text-sm text-[#1E293B] focus:outline-none focus:border-[#172554] focus:ring-1 focus:ring-[#172554]"
                >
                  <option value="Basic Computer & MS Office Suite">Basic Computer & MS Office Suite</option>
                  <option value="Advanced Excel & MIS Reporting">Advanced Excel & MIS Reporting</option>
                  <option value="Financial Accounting (TallyPrime & GST)">Financial Accounting (TallyPrime & GST)</option>
                  <option value="DITA / ADCA (Diploma in Computer Applications)">DITA / ADCA (Diploma in Computer Applications)</option>
                  <option value="Graphic Design & Desktop Publishing (DTP)">Graphic Design & Desktop Publishing (DTP)</option>
                  <option value="Programming Foundations (C / Python / Web)">Programming Foundations (C / Python / Web)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1E293B] mb-1">Any Questions or Queries?</label>
                <textarea
                  rows={2}
                  placeholder="Ask about batch timings, fees, or course curriculum..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-2 bg-[#FFFFFF] border border-[#E2E8F0] rounded-xl text-sm text-[#1E293B] focus:outline-none focus:border-[#172554] focus:ring-1 focus:ring-[#172554]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 bg-[#F6C945] hover:bg-[#eab308] text-[#0F172A] font-bold rounded-xl flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg active:scale-[0.99] cursor-pointer"
              >
                <span>Submit & Connect on WhatsApp</span>
                <Send size={16} />
              </button>

              <p className="text-[11px] text-center text-[#64748B] mt-2">
                🔒 Your contact info is completely private. You can also visit our centre directly to speak with Sir.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
