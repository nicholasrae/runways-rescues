import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Involved | Runways and Rescues",
  description:
    "Donate, volunteer as a pilot, or partner with Runways and Rescues to help fly rescue animals to safety.",
};

export default function GetInvolvedPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[50vh] min-h-[360px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/group-ramp.jpg"
            alt="Volunteer pilots and rescue team on the ramp"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20" />
        </div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-24">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white [text-shadow:_0_4px_16px_rgb(0_0_0_/_70%)]">
            Get Involved
          </h1>
          <p className="mt-3 text-white/80 text-lg [text-shadow:_0_2px_8px_rgb(0_0_0_/_60%)]">
            Two ways to change a life. Pick yours.
          </p>
        </div>
      </section>

      {/* PATHS */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* DONATE */}
            <div className="bg-[#8B1A1A] rounded-2xl p-8 md:p-10 text-white flex flex-col">
              <div className="mb-6">
                <svg className="w-12 h-12 text-white/70 mb-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <h2 className="text-3xl font-bold mb-3">Donate</h2>
                <p className="text-white/80 leading-relaxed mb-6">
                  Fuel runs out. Planes need maintenance. Missions need coordination.
                  Your donation goes directly toward making flights happen.
                </p>
              </div>

              <div className="space-y-3 mb-8 flex-1">
                <div className="bg-white/10 rounded-lg px-4 py-3 flex items-center gap-3">
                  <span className="text-2xl">✈️</span>
                  <span className="text-sm"><strong>$50</strong> covers fuel for a local rescue flight</span>
                </div>
                <div className="bg-white/10 rounded-lg px-4 py-3 flex items-center gap-3">
                  <span className="text-2xl">🐾</span>
                  <span className="text-sm"><strong>$150</strong> helps fund a multi-leg domestic mission</span>
                </div>
                <div className="bg-white/10 rounded-lg px-4 py-3 flex items-center gap-3">
                  <span className="text-2xl">🌍</span>
                  <span className="text-sm"><strong>$500</strong> supports an international rescue flight</span>
                </div>
              </div>

              <div className="space-y-3">
                <a href="https://ko-fi.com/runwaysandrescues" target="_blank" rel="noopener noreferrer"
                  className="inline-block bg-white text-[#8B1A1A] font-bold text-lg px-8 py-4 rounded-md hover:bg-[#F5F0E8] transition-colors duration-200 shadow-md w-full text-center">
                  ☕ Donate on Ko-fi
                </a>
                <a href="https://cash.app/$runwaysandrescues" target="_blank" rel="noopener noreferrer"
                  className="inline-block bg-[#00D54B] hover:bg-[#00bb42] text-white font-bold text-lg px-8 py-4 rounded-md transition-colors duration-200 shadow-md w-full text-center">
                  💸 Cash App
                </a>
                <a href="https://venmo.com/code?user_id=4524716144460854128&created=1771948345.066403&printed=1" target="_blank" rel="noopener noreferrer"
                  className="inline-block bg-[#3D95CE] hover:bg-[#2e80b5] text-white font-bold text-lg px-8 py-4 rounded-md transition-colors duration-200 shadow-md w-full text-center">
                  💙 Venmo
                </a>
                <p className="text-white/50 text-xs mt-1 text-center">
                  501(c)3 — all donations are tax-deductible
                </p>
              </div>
            </div>

            {/* VOLUNTEER AS PILOT */}
            <div className="bg-[#F5F0E8] rounded-2xl p-8 md:p-10 flex flex-col">
              <div className="mb-6">
                <svg className="w-12 h-12 text-[#1B2A4A]/40 mb-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                <h2 className="text-3xl font-bold text-[#1B2A4A] mb-1">
                  Build Hours. Save Lives.
                </h2>
                <p className="text-[#8B1A1A] font-semibold text-sm mb-3">Pilots &amp; Animal Handlers Welcome</p>
                <p className="text-[#1B2A4A]/70 leading-relaxed mb-3">
                  You need flight hours. Animals need transport. That&apos;s not a coincidence — it&apos;s the mission.
                  Volunteer pilots log meaningful time while flying rescue animals up and down the Eastern Seaboard and beyond.
                  No plane ownership required — rentals work.
                </p>
                <p className="text-[#1B2A4A]/70 leading-relaxed mb-6">
                  Not a pilot? You can still fly with us. Every mission needs a passenger to handle the animals in-flight.
                  If you love animals and can buckle a seatbelt, you qualify.
                </p>
              </div>

              <form
                action="mailto:runwaysandrescues@gmail.com"
                method="get"
                encType="text/plain"
                className="flex flex-col gap-4 flex-1"
              >
                <div>
                  <label className="block text-[#1B2A4A] text-sm font-semibold mb-1" htmlFor="pilot-name">
                    Full Name
                  </label>
                  <input
                    id="pilot-name"
                    name="name"
                    type="text"
                    required
                    placeholder="Joe Pilot"
                    className="w-full border border-[#1B2A4A]/20 rounded-lg px-4 py-2.5 text-sm text-[#1B2A4A] bg-white focus:outline-none focus:ring-2 focus:ring-[#8B1A1A]/30 focus:border-[#8B1A1A]"
                  />
                </div>
                <div>
                  <label className="block text-[#1B2A4A] text-sm font-semibold mb-1" htmlFor="pilot-email">
                    Email Address
                  </label>
                  <input
                    id="pilot-email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full border border-[#1B2A4A]/20 rounded-lg px-4 py-2.5 text-sm text-[#1B2A4A] bg-white focus:outline-none focus:ring-2 focus:ring-[#8B1A1A]/30 focus:border-[#8B1A1A]"
                  />
                </div>
                <div>
                  <label className="block text-[#1B2A4A] text-sm font-semibold mb-1" htmlFor="pilot-certs">
                    Certificates Held
                  </label>
                  <input
                    id="pilot-certs"
                    name="certificates"
                    type="text"
                    placeholder="e.g. PPL, Instrument, Commercial, ATP"
                    className="w-full border border-[#1B2A4A]/20 rounded-lg px-4 py-2.5 text-sm text-[#1B2A4A] bg-white focus:outline-none focus:ring-2 focus:ring-[#8B1A1A]/30 focus:border-[#8B1A1A]"
                  />
                </div>
                <div>
                  <label className="block text-[#1B2A4A] text-sm font-semibold mb-1" htmlFor="pilot-aircraft">
                    Aircraft Type(s)
                  </label>
                  <input
                    id="pilot-aircraft"
                    name="aircraft"
                    type="text"
                    placeholder="e.g. C172, PA-28, BE36, etc."
                    className="w-full border border-[#1B2A4A]/20 rounded-lg px-4 py-2.5 text-sm text-[#1B2A4A] bg-white focus:outline-none focus:ring-2 focus:ring-[#8B1A1A]/30 focus:border-[#8B1A1A]"
                  />
                </div>
                <div className="mt-auto pt-2">
                  <button
                    type="submit"
                    className="w-full bg-[#1B2A4A] hover:bg-[#243761] text-white font-bold text-base px-8 py-4 rounded-md transition-colors duration-200"
                  >
                    Send My Interest
                  </button>
                  <p className="text-[#1B2A4A]/40 text-xs mt-2 text-center">
                    Opens your email client with your info pre-filled
                  </p>
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* PARTNER WITH US */}
      <section className="py-16 md:py-20 bg-[#1B2A4A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Partner With Us
            </h2>
            <p className="text-[#F5F0E8]/70 text-lg">
              Are you a shelter, rescue organization, or veterinary clinic? We want
              to work with you. Our pilots are ready when you have an animal that
              needs to move.
            </p>
          </div>

          <form
            action="mailto:runwaysandrescues@gmail.com"
            method="get"
            encType="text/plain"
            className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[#F5F0E8] text-sm font-semibold mb-1" htmlFor="org-name">
                  Organization Name
                </label>
                <input
                  id="org-name"
                  name="organization"
                  type="text"
                  required
                  placeholder="City Animal Shelter"
                  className="w-full border border-white/20 rounded-lg px-4 py-2.5 text-sm text-[#1B2A4A] bg-white focus:outline-none focus:ring-2 focus:ring-[#8B1A1A]/50"
                />
              </div>
              <div>
                <label className="block text-[#F5F0E8] text-sm font-semibold mb-1" htmlFor="org-contact">
                  Contact Name
                </label>
                <input
                  id="org-contact"
                  name="contact"
                  type="text"
                  required
                  placeholder="Jane Smith"
                  className="w-full border border-white/20 rounded-lg px-4 py-2.5 text-sm text-[#1B2A4A] bg-white focus:outline-none focus:ring-2 focus:ring-[#8B1A1A]/50"
                />
              </div>
            </div>
            <div>
              <label className="block text-[#F5F0E8] text-sm font-semibold mb-1" htmlFor="org-email">
                Email Address
              </label>
              <input
                id="org-email"
                name="email"
                type="email"
                required
                placeholder="contact@shelter.org"
                className="w-full border border-white/20 rounded-lg px-4 py-2.5 text-sm text-[#1B2A4A] bg-white focus:outline-none focus:ring-2 focus:ring-[#8B1A1A]/50"
              />
            </div>
            <div>
              <label className="block text-[#F5F0E8] text-sm font-semibold mb-1" htmlFor="org-message">
                Tell us about your organization
              </label>
              <textarea
                id="org-message"
                name="message"
                rows={4}
                placeholder="What kind of animals do you rescue? Where are you located? What transport needs do you have?"
                className="w-full border border-white/20 rounded-lg px-4 py-2.5 text-sm text-[#1B2A4A] bg-white focus:outline-none focus:ring-2 focus:ring-[#8B1A1A]/50 resize-none"
              />
            </div>
            <div className="text-right">
              <button
                type="submit"
                className="bg-[#8B1A1A] hover:bg-[#a82020] text-white font-bold px-8 py-3 rounded-md transition-colors duration-200"
              >
                Get in Touch
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
