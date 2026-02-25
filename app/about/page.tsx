import Image from "next/image";
import DonateStrip from "@/components/DonateStrip";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story | Runways and Rescues",
  description:
    "Two pilots. One mission. Learn how Joe Orr and Nick Rae founded Runways and Rescues — a 501(c)3 nonprofit coordinating volunteer pilots to fly rescue animals to safety.",
};

const partners = [
  { name: "Ruff Rescue Transport", desc: "Domestic rescue transport network" },
  { name: "BAARK Bahamas", desc: "Bahamas Alliance for Animal Rights & Kindness" },
  { name: "Potcake Pals Rescue", desc: "Caribbean rescue & rehoming" },
];

const differentiators = [
  {
    title: "We fly where others can't",
    desc: "General aviation opens doors commercial transport can't. We reach rural shelters, island communities, and remote regions that ground transport simply can't serve.",
  },
  {
    title: "Domestic & international",
    desc: "From shelter-to-rescue transfers across state lines to international medical rescue missions — our network spans the US, Bahamas, and Canada.",
  },
  {
    title: "Multi-leg coordination",
    desc: "Complex rescues often need multiple pilots, multiple legs, and tight coordination. We've built the network to make it happen.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/rainbow-plane.jpg"
            alt="Red and white twin-engine plane on a rain-soaked ramp with a rainbow behind it"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20" />
        </div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-24">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white [text-shadow:_0_4px_16px_rgb(0_0_0_/_70%)]">
            Our Story
          </h1>
        </div>
      </section>

      {/* ORIGIN STORY */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B2A4A] mb-6">
              Two Pilots. One Mission.
            </h2>
            <div className="space-y-5 text-[#1B2A4A]/80 text-lg leading-relaxed text-left">
              <p>
                Joe Orr and Nick Rae met in flight school. They had their
                licenses, their planes, and a question that kept coming up between
                them: <em>what if we used this for something bigger?</em>
              </p>
              <p>
                They knew what a general aviation aircraft could do. The range.
                The access. The speed. And they knew how many animals were dying
                in overcrowded shelters — how many medical emergencies went
                unmet simply because getting an animal from point A to point B
                was impossible by ground.
              </p>
              <p>
                Runways and Rescues was born from that question. What started as
                two pilots with a shared purpose has grown into a 501(c)3
                nonprofit coordinating volunteer pilots across an international
                rescue network — flying domestic shelter transfers, international
                medical rescues, and multi-leg missions that cross borders to save
                lives.
              </p>
              <p className="font-semibold text-[#1B2A4A]">
                Every flight is a mission. Every landing is a miracle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDERS */}
      <section className="py-12 md:py-16 bg-[#F5F0E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1B2A4A] text-center mb-12">
            The Founders
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/founders.jpg"
                alt="Joe Orr and Nick Rae, founders of Runways and Rescues, holding two puppies"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white font-semibold text-sm">
                  Joe Orr &amp; Nick Rae — Co-founders
                </p>
              </div>
            </div>
            <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/golden-hour-pilots.jpg"
                alt="Two volunteer pilots holding puppies at golden hour sunset"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white font-semibold text-sm">
                  On the ramp. Ready for takeoff.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT MAKES US DIFFERENT */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B2A4A] mb-4">
              What Makes Us Different
            </h2>
            <p className="text-[#1B2A4A]/60 text-lg max-w-2xl mx-auto">
              We fly where others can&apos;t. That&apos;s the point.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {differentiators.map((item) => (
              <div
                key={item.title}
                className="bg-[#F5F0E8] rounded-2xl p-8 hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-10 h-0.5 bg-[#8B1A1A] mb-5" />
                <h3 className="text-xl font-bold text-[#1B2A4A] mb-3">
                  {item.title}
                </h3>
                <p className="text-[#1B2A4A]/70 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 501C3 + PARTNERS */}
      <section className="py-16 md:py-20 bg-[#1B2A4A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Legal &amp; Tax Status
            </h2>
            <p className="text-[#F5F0E8]/80 leading-relaxed">
              Runways and Rescues is a registered 501(c)3 nonprofit organization.
              All donations are tax-deductible to the fullest extent permitted by law.
            </p>
          </div>

          <div className="border-t border-white/10 pt-12">
            <h3 className="text-center text-white font-semibold text-sm uppercase tracking-widest mb-8">
              Our Partners
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {partners.map((p) => (
                <div
                  key={p.name}
                  className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-colors duration-200"
                >
                  <div className="text-white font-semibold mb-1">{p.name}</div>
                  <div className="text-[#F5F0E8]/50 text-xs">{p.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <DonateStrip />
    </>
  );
}
