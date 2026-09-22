import React from 'react';
import { motion } from 'framer-motion';
import {
  Flame,
  MapPin,
  Phone,
  MessageCircle,
  Heart,
  ArrowRight,
  GraduationCap,
  CheckCircle2,

} from 'lucide-react';
import { HandwrittenText } from './Handwritten';

interface FooterProps {
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);

    if (el) {
      el.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const quickLinks = [
    {
      label: 'Home',
      href: '#hero',
    },
    {
      label: 'Courses',
      href: '#courses',
    },
    {
      label: 'About Sir',
      href: '#about-sir',
    },
    {
      label: 'Why Choose Us',
      href: '#why-us',
    },
    {
      label: 'Learning Process',
      href: '#learning-process',
    },
    {
      label: 'Lab Facility',
      href: '#lab-environment',
    },
  ];

  const courses = [
    'Basic Computer & MS Office',
    'Advanced Excel & MIS Reporting',
    'TallyPrime & GST Accounting',
    'DITA / ADCA (Diploma)',
    'Graphic Design & DTP',
    'Photoshop & CorelDRAW',
  ];

  const benefits = [
    {
      icon: GraduationCap,
      label: 'Practical Learning',
    },
    {
      icon: CheckCircle2,
      label: 'Personal Guidance',
    },
    {
      icon: Flame,
      label: 'Career Focused',
    },
  ];

  return (
    <footer className="bg-[#F8FAFC] text-[#17233C]">

      {/* =====================================================
          CTA SECTION
      ===================================================== */}

      <div className="mx-auto max-w-[1240px] px-4 pb-16 pt-14 sm:px-6 lg:px-8">

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: '-80px',
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className=" relative overflow-hidden rounded-[28px] border border-[#F6C945]/70 bg-[#FFF8DC] px-6 py-12 sm:px-10 sm:py-14 lg:px-16"
        >

          {/* Decorative shapes */}

          <div
            className="
              pointer-events-none
              absolute
              -left-24
              -top-28
              h-72
              w-72
              rounded-full
              bg-[#F6C945]/25
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -right-24
              -top-24
              h-64
              w-64
              rounded-full
              bg-[#BFDBFE]/70
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -bottom-32
              left-1/2
              h-64
              w-64
              -translate-x-1/2
              rounded-full
              bg-[#FDE68A]/40
            "
          />

          {/* Dot pattern */}

          <div
            className="
              pointer-events-none
              absolute
              right-10
              top-16
              hidden
              opacity-30
              sm:block
            "
          >
            <div className="grid grid-cols-5 gap-2">
              {Array.from({ length: 25 }).map((_, index) => (
                <span
                  key={index}
                  className="
                    h-1
                    w-1
                    rounded-full
                    bg-[#1D4ED8]
                  "
                />
              ))}
            </div>
          </div>

          {/* CTA Content */}

          <div className="relative z-10 mx-auto max-w-3xl text-center">
            {/* Left handwritten message */}

            <HandwrittenText
              lines={[
                'Skills Today',
                'Brighter Tomorrow',
              ]}
              delay={0.3}
              className="
    bottom-12
    left-10
    rotate-[-5deg]
    lg:left-12
  "
            />

            {/* Right handwritten message */}

            <HandwrittenText
              lines={[
                'Your Future Starts',
                'Here',
              ]}
              delay={0.7}
              className="
    right-8
    top-28
    rotate-[4deg]
    text-[#17233C]
    lg:right-12
  "
            />
            <p
              className="
                mb-2
                text-[11px]
                font-bold
                uppercase
                tracking-[0.3em]
                text-[#1E3A8A]
                sm:text-xs
              "
            >
              Learn Today • Build Tomorrow
            </p>

            <div className="mx-auto mb-5 h-1 w-10 rounded-full bg-[#F6C945]" />

            <h2
              className="
                text-3xl
                font-extrabold
                tracking-tight
                text-[#17233C]
                sm:text-4xl
                lg:text-[46px]
                lg:leading-[1.12]
              "
            >
              Start Your{' '}
              <span className="text-[#1D4ED8]">
                Learning Journey
              </span>{' '}
              Today
            </h2>

            <p
              className="
                mx-auto
                mt-5
                max-w-2xl
                text-sm
                leading-7
                text-[#52627A]
                sm:text-base
              "
            >
              Learn practical computer skills with hands-on
              training, personal guidance and flexible batches
              designed for your goals.
            </p>

            {/* CTA */}

            <motion.button
              type="button"
              onClick={onOpenContact}
              whileHover={{
                y: -3,
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.97,
              }}
              transition={{
                type: 'spring',
                stiffness: 400,
                damping: 22,
              }}
              className="
                mx-auto
                mt-8
                flex
                items-center
                gap-3
                rounded-full
                bg-[#17233C]
                px-6
                py-3.5
                text-sm
                font-bold
                text-white
                shadow-[0_10px_25px_rgba(23,35,60,0.18)]
                transition-shadow
                hover:shadow-[0_14px_30px_rgba(23,35,60,0.24)]
              "
            >
              Enquire & Enroll Now

              <span
                className="
                  flex
                  h-7
                  w-7
                  items-center
                  justify-center
                  rounded-full
                  bg-[#F6C945]
                  text-[#17233C]
                "
              >
                <ArrowRight size={15} strokeWidth={2.5} />
              </span>
            </motion.button>

            {/* Benefits */}

            <div
              className="
                mt-9
                flex
                flex-wrap
                items-center
                justify-center
                gap-x-8
                gap-y-4
              "
            >
              {benefits.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.label}
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: 0.25 + index * 0.08,
                      duration: 0.4,
                    }}
                    className="
                      flex
                      items-center
                      gap-2
                      text-sm
                      font-medium
                      text-[#475569]
                    "
                  >
                    <Icon
                      size={17}
                      strokeWidth={1.8}
                      className="text-[#1D4ED8]"
                    />

                    {item.label}
                  </motion.div>
                );
              })}
            </div>

          </div>
        </motion.div>
      </div>

      {/* =====================================================
          MAIN FOOTER
      ===================================================== */}

      <div className="border-t border-[#E2E8F0] bg-white">

        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">

          <div
            className="
              grid
              grid-cols-1
              gap-12
              py-14
              md:grid-cols-2
              lg:grid-cols-12
              lg:gap-8
            "
          >

            {/* =================================================
                BRAND
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
              }}
              className="lg:col-span-3"
            >

              {/* Logo */}

              <div className="flex items-center gap-3">

                <div
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-xl
                    bg-[#FFF4C2]
                    text-[#17233C]
                  "
                >
                  <Flame
                    size={23}
                    className="fill-[#F6C945] text-[#F6C945]"
                  />
                </div>

                <div
                  className="
                    text-xl
                    font-extrabold
                    tracking-tight
                    text-[#17233C]
                  "
                >
                  Achieve{' '}
                  <span className="text-[#1D4ED8]">
                    Computer
                  </span>
                </div>

              </div>

              {/* Description */}

              <p
                className="
                  mt-6
                  max-w-sm
                  text-sm
                  leading-7
                  text-[#64748B]
                "
              >
                “Learn computers easily, practice hands-on,
                and build your future with confidence.”
              </p>

              <p
                className="
                  mt-4
                  max-w-sm
                  text-sm
                  leading-6
                  text-[#64748B]
                "
              >
                A trusted local computer training centre for
                school, college students and career aspirants.
              </p>

              {/* Social links */}

              <div className="mt-6 flex items-center gap-3">

                {/* <SocialButton
                //   icon={Facebook}
                  label="Facebook"
                />

                <SocialButton
                //   icon={Instagram}
                  label="Instagram"
                />

                <SocialButton
                //   icon={Youtube}
                  label="YouTube"
                /> */}

              </div>

            </motion.div>

            {/* =================================================
                QUICK LINKS
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: 0.1,
              }}
              className="lg:col-span-2"
            >

              <FooterHeading>
                Quick Links
              </FooterHeading>

              <nav className="flex flex-col gap-3">

                {quickLinks.map((link) => (
                  <button
                    key={link.label}
                    type="button"
                    onClick={() => scrollTo(link.href)}
                    className="
                      w-fit
                      cursor-pointer
                      text-left
                      text-sm
                      text-[#64748B]
                      transition-all
                      duration-200
                      hover:translate-x-1
                      hover:text-[#1D4ED8]
                    "
                  >
                    {link.label}
                  </button>
                ))}

              </nav>

            </motion.div>

            {/* =================================================
                COURSES
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: 0.15,
              }}
              className="lg:col-span-3"
            >

              <FooterHeading>
                Popular Courses
              </FooterHeading>

              <nav className="flex flex-col gap-3">

                {courses.map((course) => (
                  <button
                    key={course}
                    type="button"
                    onClick={() => scrollTo('#courses')}
                    className="
                      w-fit
                      cursor-pointer
                      text-left
                      text-sm
                      leading-5
                      text-[#64748B]
                      transition-all
                      duration-200
                      hover:translate-x-1
                      hover:text-[#1D4ED8]
                    "
                  >
                    {course}
                  </button>
                ))}

              </nav>

            </motion.div>

            {/* =================================================
                CONTACT
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: 0.2,
              }}
              className="lg:col-span-4"
            >

              <FooterHeading>
                Contact & Address
              </FooterHeading>

              <div className="space-y-5">

                {/* Address */}

                <ContactItem
                  icon={MapPin}
                  iconClass="bg-[#EFF6FF] text-[#1D4ED8]"
                >
                  <span>
                    Nirmani Dutta Lane,

                    Kolkata, West Bengal
                  </span>
                </ContactItem>

                {/* Phone */}

                <ContactItem
                  icon={Phone}
                  iconClass="bg-[#FFF8DC] text-[#B77900]"
                >
                  <a
                    href="tel:+919876543210"
                    className="
                      transition-colors
                      hover:text-[#1D4ED8]
                    "
                  >
                    +91 98765 43210
                  </a>
                </ContactItem>

                {/* WhatsApp */}

                <ContactItem
                  icon={MessageCircle}
                  iconClass="bg-[#ECFDF5] text-[#15803D]"
                >
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      transition-colors
                      hover:text-[#1D4ED8]
                    "
                  >
                    WhatsApp: +91 98765 43210
                  </a>
                </ContactItem>

              </div>

            </motion.div>

          </div>

          {/* =================================================
              BOTTOM BAR
          ================================================= */}

          <div
            className="
              flex
              flex-col
              gap-4
              border-t
              border-[#E2E8F0]
              py-6
              text-xs
              text-[#64748B]
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >

            <div>
              © {new Date().getFullYear()} Achieve Computer
              Centre. All rights reserved.
            </div>

            <div
              className="
                flex
                flex-wrap
                items-center
                gap-2
              "
            >
              <span>Kolkata, West Bengal</span>

              <span className="text-[#CBD5E1]">
                •
              </span>

              <span className="flex items-center gap-1.5">
                Quality Education

                <Heart
                  size={12}
                  className="
                    fill-[#F6C945]
                    text-[#F6C945]
                  "
                />
              </span>
            </div>

          </div>

        </div>
      </div>
    </footer>
  );
};


/* ============================================================
   REUSABLE COMPONENTS
============================================================ */

interface FooterHeadingProps {
  children: React.ReactNode;
}

const FooterHeading: React.FC<FooterHeadingProps> = ({
  children,
}) => {
  return (
    <div className="mb-5">

      <h4
        className="
          text-sm
          font-bold
          tracking-tight
          text-[#17233C]
        "
      >
        {children}
      </h4>

      <div className="mt-2 h-1 w-7 rounded-full bg-[#F6C945]" />

    </div>
  );
};


interface ContactItemProps {
  icon: React.ElementType;
  iconClass: string;
  children: React.ReactNode;
}

const ContactItem: React.FC<ContactItemProps> = ({
  icon: Icon,
  iconClass,
  children,
}) => {
  return (
    <div className="flex items-start gap-3">

      <div
        className={`
          flex
          h-10
          w-10
          shrink-0
          items-center
          justify-center
          rounded-xl
          ${iconClass}
        `}
      >
        <Icon size={17} />
      </div>

      <div
        className="
          pt-1
          text-sm
          leading-6
          text-[#64748B]
        "
      >
        {children}
      </div>

    </div>
  );
};


interface SocialButtonProps {
  icon: React.ElementType;
  label: string;
}

const SocialButton: React.FC<SocialButtonProps> = ({
  icon: Icon,
  label,
}) => {
  return (
    <motion.a
      href="#"
      aria-label={label}
      whileHover={{
        y: -3,
      }}
      whileTap={{
        scale: 0.95,
      }}
      className="
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-full
        border
        border-[#E2E8F0]
        bg-[#F8FAFC]
        text-[#64748B]
        transition-colors
        duration-200
        hover:border-[#BFDBFE]
        hover:bg-[#EFF6FF]
        hover:text-[#1D4ED8]
      "
    >
      <Icon size={17} />
    </motion.a>
  );
};