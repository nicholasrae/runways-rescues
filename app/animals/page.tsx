import Image from "next/image";
import DonateStrip from "@/components/DonateStrip";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Animals | Runways and Rescues",
  description:
    "Every animal has a story. Meet the rescue animals that Runways and Rescues volunteer pilots have flown to safety.",
};

const photoGrid = [
  {
    src: "/images/cockpit-puppy.jpg",
    alt: "Chocolate lab puppy looking over the pilot's shoulder in the cockpit",
    caption: "Every co-pilot earns their wings",
  },
  {
    src: "/images/three-pilots-puppies.jpg",
    alt: "Three volunteer pilots each holding a puppy in front of Cessna N1318Q",
    caption: "Three pilots. Three lives changed.",
  },
  {
    src: "/images/golden-hour-pilots.jpg",
    alt: "Two pilots holding puppies at golden hour sunset",
    caption: "Golden hour on the ramp",
  },
  {
    src: "/images/hangar-family.jpg",
    alt: "Four people holding puppies in front of a plane at Barrett Aviation hangar",
    caption: "The ground crew at Barrett Aviation",
  },
  {
    src: "/images/tarmac-handoff.jpg",
    alt: "Animal rescue handoff on the tarmac with pet crates",
    caption: "The handoff — every leg matters",
  },
  {
    src: "/images/group-ramp.jpg",
    alt: "Seven volunteers and three dogs in front of a white and blue Cessna",
    caption: "The full crew at EnvySky",
  },
];

export default function AnimalsPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/group-ramp.jpg"
            alt="Volunteers and rescue dogs gathered in front of a plane on the ramp"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20" />
        </div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-24">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white [text-shadow:_0_4px_16px_rgb(0_0_0_/_70%)]">
            Every Animal Has a Story
          </h1>
          <p className="mt-3 text-white/80 text-lg [text-shadow:_0_2px_8px_rgb(0_0_0_/_60%)]">
            Real missions. Real animals. Real second chances.
          </p>
        </div>
      </section>

      {/* FEATURED STORY — LUCY (FULL) */}
      <section className="py-16 md:py-24 bg-[#F5F0E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-[#8B1A1A]/10 text-[#8B1A1A] text-xs font-semibold px-3 py-1 rounded-full mb-4 tracking-wider uppercase">
                Featured Rescue
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1B2A4A] mb-6 leading-tight">
                Lucy&apos;s Life-Saving Journey
              </h2>
              <div className="space-y-4 text-[#1B2A4A]/80 leading-relaxed">
                <p>
                  Lucy was found on the streets of Nassau, Bahamas. A Potcake
                  pup — the beloved mixed-breed dogs of the Caribbean — with no
                  home, no resources, and a diagnosis that was a death sentence
                  in most places.
                </p>
                <p>
                  Veterinarians discovered she had a Grade 6 heart murmur and a
                  life-threatening Patent Ductus Arteriosus (PDA) — an abnormal
                  blood vessel connection that, left untreated, causes heart
                  failure. Without surgery, Lucy wouldn&apos;t survive.
                </p>
                <p>
                  The surgery wasn&apos;t available in the Bahamas. But our pilots were.
                </p>
                <p>
                  Working with our partner network — including BAARK Bahamas and
                  Potcake Pals Rescue — our volunteer pilots coordinated a
                  multi-leg international rescue mission. Lucy was flown from
                  Nassau, Bahamas to Florida. From Florida, she was flown north to
                  Toronto, Canada, where a specialist veterinary team was ready
                  to perform her life-saving surgery.
                </p>
                <p>
                  Three countries. Multiple flights. One tiny dog who deserved a
                  chance.
                </p>
                <p className="font-bold text-[#1B2A4A] text-lg">
                  Today, Lucy is thriving — living proof that when pilots have
                  purpose, nothing is out of range.
                </p>
              </div>
            </div>
            <div className="relative h-80 sm:h-[450px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/tarmac-handoff.jpg"
                alt="Tarmac handoff — black Piper N1519T with pet crates and three volunteers"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-5">
                <p className="text-white text-sm font-medium">
                  One of Lucy&apos;s mission legs — handoff on the tarmac
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PHOTO GRID */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B2A4A] mb-4">
              Missions in the Field
            </h2>
            <p className="text-[#1B2A4A]/60 text-lg max-w-xl mx-auto">
              From cockpit to forever home — glimpses of the work behind the wings.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {photoGrid.map((photo) => (
              <div
                key={photo.src}
                className="relative h-64 sm:h-72 rounded-xl overflow-hidden shadow-md group"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-sm font-medium">{photo.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL CTA */}
      <section className="py-16 bg-[#1B2A4A]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Follow the Missions
          </h2>
          <p className="text-[#F5F0E8]/70 mb-8 text-lg">
            Every animal has a story. Follow us on social media to see the latest
            rescues, flights, and happy landings.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://www.facebook.com/share/p/1DvX7nYse3/"
              target="_blank" rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-6 py-3 rounded-md transition-colors duration-200 w-full sm:w-auto"
            >
              📺 Watch on Facebook
            </a>
            <a
              href="https://www.instagram.com/runwaysandrescuesinc"
              target="_blank" rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-6 py-3 rounded-md transition-colors duration-200 w-full sm:w-auto"
            >
              @runwaysandrescuesinc on Instagram
            </a>
            <a
              href="https://youtu.be/Mv_wIHyNMyI"
              target="_blank" rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-6 py-3 rounded-md transition-colors duration-200 w-full sm:w-auto"
            >
              📺 Watch Our News Feature
            </a>
          </div>
        </div>
      </section>

      <DonateStrip />
    </>
  );
}
