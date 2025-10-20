export const HeroSection = () => {
  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] flex items-center">
      {/* Background image full */}
      <img
        src="/images/hero-bg.jpg"
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay gradient transparan */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

      {/* Text content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 lg:px-20 text-left text-white">
        <h1 className="text-2xl md:text-4xl font-semibold leading-snug mb-4">
          Welcome to Your Future Home,{" "}
          <span className="text-primary">Ibravia</span>
        </h1>
        <p className="text-sm md:text-base text-gray-200 max-w-md mb-6">
          Discover a selection of modern homes designed for comfort, quality,
          and your future lifestyle.
        </p>
        <button className="ibravia-button text-sm px-5 py-2"
          onClick={() => window.location.href = '/Properties'}>
          Find Your Home
        </button>
      </div>
    </section>
  );
};
