export default function DonateStrip() {
  return (
    <section className="bg-[#8B1A1A] py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Your donation fuels the mission.
        </h2>
        <p className="text-white/85 text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
          Every dollar goes toward saving lives — one flight at a time.
        </p>
        <a
          href="https://ko-fi.com/runwaysandrescues"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-[#8B1A1A] font-bold text-lg px-10 py-4 rounded-md hover:bg-[#F5F0E8] transition-colors duration-200 shadow-lg"
        >
          Donate on Ko-fi ✈️
        </a>
      </div>
    </section>
  );
}
