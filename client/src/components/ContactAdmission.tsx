import React from 'react';
import { motion } from 'framer-motion';
import {
  MapPin, Phone, MessageCircle, Clock,
  Navigation, ArrowRight, ShieldCheck, Sparkles,
} from 'lucide-react';

interface ContactAdmissionProps {
  onOpenContact: () => void;
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] },
});

const slideLeft = (delay = 0) => ({
  initial: { opacity: 0, x: -44 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] },
});

const slideRight = (delay = 0) => ({
  initial: { opacity: 0, x: 44 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] },
});

export const ContactAdmission: React.FC<ContactAdmissionProps> = ({ onOpenContact }) => {
  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0a0f1e 0%, #0d1b3e 40%, #0f2460 70%, #111827 100%)',
      }}
    >
      {/* ── Decorative glowing blobs ── */}
      <div
        aria-hidden="true"
        className="absolute top-[-120px] left-[-100px] w-[520px] h-[520px] rounded-full opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #3B82F6 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
      <div
        aria-hidden="true"
        className="absolute bottom-[-80px] right-[-80px] w-[420px] h-[420px] rounded-full opacity-25 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #F6C945 0%, transparent 70%)',
          filter: 'blur(90px)',
        }}
      />
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full opacity-10 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #A855F7 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* ── Subtle grid overlay ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative z-10">

        {/* ── Section badge ── */}
        <motion.div {...fadeUp(0)} className="flex justify-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#F6C945]/30 bg-[#F6C945]/10 text-[#F6C945] text-xs font-bold uppercase tracking-widest backdrop-blur-sm">
            <Sparkles size={13} />
            <span>Admissions Open — Join the Next Batch</span>
          </div>
        </motion.div>

        {/* ── Headline ── */}
        <motion.div {...fadeUp(0.08)} className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-[58px] font-extrabold text-white tracking-tight leading-[1.15]">
            Ready to Master&nbsp;
            <span className="relative inline-block">
              <span className="relative z-10 text-[#F6C945]">Computers?</span>
              <span
                className="absolute inset-x-0 bottom-1 h-[10px] rounded-full -z-0 opacity-40"
                style={{ background: '#F6C945', filter: 'blur(6px)' }}
              />
            </span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-[1.8]">
            Visit our centre, speak with Sir personally, and enroll in a batch that fits your schedule.
            No pressure — just clarity.
          </p>
        </motion.div>

        {/* ── Main grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">

          {/* ── LEFT: CTA Card ── */}
          <motion.div
            {...slideLeft(0.1)}
            className="relative rounded-3xl overflow-hidden flex flex-col justify-between p-8 sm:p-10"
            style={{
              background: 'linear-gradient(135deg, rgba(246,201,69,0.12) 0%, rgba(59,130,246,0.08) 100%)',
              border: '1px solid rgba(246,201,69,0.2)',
              backdropFilter: 'blur(16px)',
            }}
          >
            {/* Inner glow top-left */}
            <div
              aria-hidden="true"
              className="absolute top-0 left-0 w-40 h-40 rounded-full opacity-20 pointer-events-none"
              style={{ background: 'radial-gradient(circle, #F6C945, transparent)', filter: 'blur(40px)' }}
            />

            <div className="relative z-10 flex flex-col gap-7">
              {/* Location pill */}
              <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-semibold">
                <MapPin size={12} className="text-[#F6C945]" />
                Nirmani Dutta Lane, Kolkata
              </div>

              {/* CTA headline */}
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#F6C945]/80 mb-3">
                  Start Today
                </p>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-[1.3]">
                  One Visit Can Change Your<br />
                  <span className="text-[#F6C945]">Entire Career Path.</span>
                </h3>
                <p className="mt-4 text-sm text-slate-400 leading-[1.8] max-w-md">
                  For batch admissions, course details, fee structure, and timing — walk in or
                  reach out. Sir is available to guide you personally, at no obligation.
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-1">
                <button
                  onClick={onOpenContact}
                  className="flex-1 flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl font-extrabold text-sm text-[#0F172A] transition-all hover:scale-[1.02] active:scale-95 shadow-lg"
                  style={{
                    background: 'linear-gradient(135deg, #F6C945 0%, #FDE68A 100%)',
                    boxShadow: '0 8px 30px rgba(246,201,69,0.35)',
                  }}
                >
                  <span>Enquire &amp; Enroll Now</span>
                  <ArrowRight size={17} />
                </button>

                <a
                  href="https://wa.me/919876543210?text=Hello%20Sir%2C%20I%20would%20like%20to%20know%20more%20about%20admissions%20and%20courses%20at%20Achieve%20Computer%20Centre."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl font-bold text-sm text-white border border-[#15803D]/60 hover:bg-[#15803D]/20 transition-all hover:scale-[1.02] active:scale-95"
                  style={{ background: 'rgba(21,128,61,0.15)' }}
                >
                  <MessageCircle size={17} className="text-[#4ADE80]" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              {/* Trust line */}
              <div className="flex items-center gap-2 text-xs text-slate-500 pt-1">
                <ShieldCheck size={15} className="text-[#F6C945] shrink-0" />
                <span>Visit our lab before you enroll — no commitment needed.</span>
              </div>
            </div>
          </motion.div>

          {/* ── RIGHT: Contact Details ── */}
          <motion.div {...slideRight(0.15)} className="flex flex-col gap-4">

            {/* Address */}
            <motion.div
              {...fadeUp(0.18)}
              className="flex items-start gap-4 p-5 sm:p-6 rounded-2xl border border-white/10 hover:border-[#F6C945]/30 transition-all group"
              style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(12px)' }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform" style={{ background: 'linear-gradient(135deg,#F6C945,#FDE68A)' }}>
                <MapPin size={22} className="text-[#0F172A]" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#F6C945] mb-0.5">Centre Address</p>
                <p className="text-base font-bold text-white">Achieve Computer Centre</p>
                <p className="text-sm text-slate-400 mt-0.5">Nirmani Dutta Lane, Kolkata, West Bengal</p>
              </div>
            </motion.div>

            {/* Phone */}
            <motion.div
              {...fadeUp(0.24)}
              className="flex items-start gap-4 p-5 sm:p-6 rounded-2xl border border-white/10 hover:border-blue-500/30 transition-all group"
              style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(12px)' }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-blue-500/20 group-hover:scale-105 transition-transform">
                <Phone size={20} className="text-blue-400" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-blue-400 mb-0.5">Phone</p>
                <a href="tel:+919876543210" className="text-base font-bold text-white hover:text-[#F6C945] transition-colors">
                  +91 98765 43210
                </a>
                <p className="text-xs text-slate-500 mt-0.5">Call anytime during centre hours</p>
              </div>
            </motion.div>

            {/* Timings */}
            <motion.div
              {...fadeUp(0.30)}
              className="flex items-start gap-4 p-5 sm:p-6 rounded-2xl border border-white/10 hover:border-purple-500/30 transition-all group"
              style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(12px)' }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-purple-500/20 group-hover:scale-105 transition-transform">
                <Clock size={20} className="text-purple-400" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-purple-400 mb-0.5">Centre Timings</p>
                <p className="text-sm font-bold text-white">Mon – Sat &nbsp;·&nbsp; 9:00 AM – 8:00 PM</p>
                <p className="text-xs text-slate-400 mt-0.5">Sunday: 9:00 AM – 1:00 PM</p>
              </div>
            </motion.div>

            {/* Map Link */}
            <motion.div
              {...fadeUp(0.36)}
              className="flex items-center justify-between gap-4 p-5 sm:p-6 rounded-2xl border border-[#F6C945]/20 hover:border-[#F6C945]/50 transition-all group cursor-pointer"
              style={{ background: 'rgba(246,201,69,0.06)', backdropFilter: 'blur(12px)' }}
            >
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-[#F6C945]/15 group-hover:scale-105 transition-transform">
                  <Navigation size={18} className="text-[#F6C945]" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Find Us on Google Maps</p>
                  <p className="text-xs text-slate-400">Nirmani Dutta Lane, Kolkata</p>
                </div>
              </div>
              <a
                href="https://maps.app.goo.gl/MaVsBf7Y3AchEgcb8"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-[#0F172A] transition-all hover:scale-105 active:scale-95 whitespace-nowrap"
                style={{ background: 'linear-gradient(135deg,#F6C945,#FDE68A)' }}
              >
                Open Map <span className="text-base leading-none">↗</span>
              </a>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};
