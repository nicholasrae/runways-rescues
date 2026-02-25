import Image from "next/image";
import Link from "next/link";
import DonateStrip from "@/components/DonateStrip";

const stats = [
  { number: "25+", label: "Animals Flown to Safety" },
  { number: "9", label: "Rescue Flights Completed" },
  { number: "3+", label: "Partner Organizations" },
];

const steps = [
  {
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
    step: "01",
    title: "An Animal in Need is Identified",
    desc: "A shelter or rescue partner reaches out. The animal is assessed, a flight plan is formed, and the mission begins.",
  },
  {
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
        />
      </svg>
    ),
    step: "02",
    title: "Volunteer Pilots Take Flight",
    desc: "Our network of certified volunteer pilots coordinates a mission — sometimes a single leg, sometimes multi-state relays across our partner network.",
  },
  {
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
    step: "03",
    title: "A New Life Begins",
    desc: "The animal arrives safely — delivered to a rescue partner, a foster, or a forever home. Every landing is a second chance.",
  },
];

const photoStrip = [
  {
    src: "/images/three-pilots-puppies.jpg",
    alt: "Three volunteer pilots each holding a puppy in front of a Cessna",
  },
  {
    src: "/images/golden-hour-pilots.jpg",
    alt: "Two pilots holding puppies at golden hour sunset",
  },
  {
    src: "/images/hangar-family.jpg",
    alt: "Volunteer team holding puppies in front of a plane at Barrett Aviation hangar",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/cockpit-puppy.jpg"
            alt="Chocolate lab puppy looking over a pilot's shoulder in the cockpit"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <div className="inline-block bg-[#8B1A1A]/90 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase">
            501(c)3 Nonprofit &mdash; Volunteer Pilots
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight [text-shadow:_0_4px_16px_rgb(0_0_0_/_70%)]">
            Every Animal Deserves
            <br />a Second Chance
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed [text-shadow:_0_2px_8px_rgb(0_0_0_/_60%)]">
            Volunteer pilots flying rescue animals from danger to forever homes
            &mdash; across the country and beyond.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://ko-fi.com/runwaysandrescues"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#8B1A1A] hover:bg-[#a82020] text-white font-bold text-lg px-8 py-4 rounded-md transition-colors duration-200 shadow-xl w-full sm:w-auto text-center"
            >
              Donate Now
            </a>
            <a
              href="#mission"
              className="bg-white/10 hover:bg-white/20 border border-white/40 text-white font-semibold text-lg px-8 py-4 rounded-md transition-colors duration-200 w-full sm:w-auto text-center backdrop-blur-sm"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <svg
            className="w-6 h-6 text-white/60"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </section>

      {/* STATS STRIP */}
      <section id="mission" className="bg-[#1B2A4A] py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label} className="group">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-[#F5F0E8]/70 text-sm uppercase tracking-wider font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED STORY — LUCY */}
      <section className="py-16 md:py-24 bg-[#F5F0E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-72 sm:h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/tarmac-handoff.jpg"
                alt="Animal rescue handoff on the tarmac — black Piper N1519T with pet crates and volunteers"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <div className="inline-block bg-[#8B1A1A]/10 text-[#8B1A1A] text-xs font-semibold px-3 py-1 rounded-full mb-4 tracking-wider uppercase">
                Featured Story
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1B2A4A] mb-6 leading-tight">
                Lucy&apos;s Life-Saving Journey
              </h2>
              <div className="space-y-4 text-[#1B2A4A]/80 leading-relaxed">
                <p>
                  Lucy was found on the streets of Nassau, Bahamas — a Potcake
                  pup with nowhere to go and a diagnosis that would have ended her
                  life. A Grade 6 heart murmur. A life-threatening Patent Ductus
                  Arteriosus. Without surgery, Lucy wouldn&apos;t survive.
                </p>
                <p>
                  But Lucy had something most dogs don&apos;t: a network of pilots
                  who refused to give up.
                </p>
                <p>
                  Our volunteer pilots flew Lucy from the Bahamas to Florida to
                  Toronto, Canada — a multi-leg international rescue mission
                  coordinated across three countries. In Toronto, Lucy received
                  the life-saving surgery she needed.
                </p>
                <p className="font-semibold text-[#1B2A4A]">
                  Today, Lucy is thriving. She&apos;s proof that when pilots have
                  purpose, anything is possible.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  href="/animals"
                  className="inline-block bg-[#1B2A4A] hover:bg-[#243761] text-white font-semibold px-6 py-3 rounded-md transition-colors duration-200"
                >
                  Read More Stories
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B2A4A] mb-4">
              How It Works
            </h2>
            <p className="text-[#1B2A4A]/60 text-lg max-w-2xl mx-auto">
              From the call for help to the safe landing — here&apos;s how a rescue
              mission comes together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div
                key={step.step}
                className="relative bg-[#F5F0E8] rounded-2xl p-8 text-center group hover:shadow-lg transition-shadow duration-300"
              >
                <div className="absolute top-4 right-4 text-6xl font-bold text-[#1B2A4A]/5 leading-none select-none">
                  {step.step}
                </div>
                <div className="flex justify-center mb-5 text-[#8B1A1A]">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-[#1B2A4A] mb-3">
                  {step.title}
                </h3>
                <p className="text-[#1B2A4A]/70 leading-relaxed text-sm">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHOTO STRIP */}
      <section className="py-4 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {photoStrip.map((photo) => (
              <div
                key={photo.src}
                className="relative h-64 sm:h-72 rounded-xl overflow-hidden shadow-md group"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DONATE CTA */}
      <div className="mt-8">
        {/* IN THE NEWS */}
        <section className="py-14 bg-[#F5F0E8]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-[#1B2A4A]/50 text-xs font-semibold uppercase tracking-widest mb-6">As Seen In</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="https://youtu.be/Mv_wIHyNMyI"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white rounded-xl px-6 py-4 shadow-sm hover:shadow-md transition-shadow duration-200 group w-full sm:w-auto"
              >
                <span className="text-2xl">📺</span>
                <div className="text-left">
                  <div className="text-sm font-bold text-[#1B2A4A] group-hover:text-[#8B1A1A] transition-colors">Local News Feature</div>
                  <div className="text-xs text-[#1B2A4A]/60">Puppy Rescue Flight: NC to Baltimore</div>
                </div>
              </a>
              <a
                href="https://www.facebook.com/share/p/1DvX7nYse3/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white rounded-xl px-6 py-4 shadow-sm hover:shadow-md transition-shadow duration-200 group w-full sm:w-auto"
              >
                <span className="text-2xl">📱</span>
                <div className="text-left">
                  <div className="text-sm font-bold text-[#1B2A4A] group-hover:text-[#8B1A1A] transition-colors">Featured on Facebook</div>
                  <div className="text-xs text-[#1B2A4A]/60">Watch the mission on social</div>
                </div>
              </a>
              <a
                href="https://www.instagram.com/runwaysandrescuesinc"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white rounded-xl px-6 py-4 shadow-sm hover:shadow-md transition-shadow duration-200 group w-full sm:w-auto"
              >
                <span className="text-2xl">📸</span>
                <div className="text-left">
                  <div className="text-sm font-bold text-[#1B2A4A] group-hover:text-[#8B1A1A] transition-colors">@runwaysandrescuesinc</div>
                  <div className="text-xs text-[#1B2A4A]/60">Follow on Instagram</div>
                </div>
              </a>
            </div>
          </div>
        </section>

        <DonateStrip />
      </div>
    </>
  );
}
