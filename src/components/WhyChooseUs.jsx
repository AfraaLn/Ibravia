export const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-[#003B73] text-white">
      <div className="container mx-auto px-6 grid md:grid-cols-2 items-center gap-12">
        
        {/* Kiri: Daftar Keunggulan */}
        <div className="space-y-8 text-left leading-loose">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Why Choose Us
          </h2>

          <ul className="space-y-8">
            {[
              "Trusted Collaboration",
              "Wide Property Selection",
              "Secure & Transparent Process",
              "Personalized Assistance",
            ].map((item, i) => (
              <li key={i} className="flex items-center space-x-5">
                {/* Kotak centang besar dengan ikon */}
                <div className="w-9 h-9 bg-white rounded-md flex items-center justify-center flex-shrink-0 shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-[#003B73]"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414L8.707 14.707a1 1 0 01-1.414 0L3.293 10.707a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-lg font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Kanan: Gambar */}
        <div className="relative border border-white rounded-lg overflow-hidden shadow-xl">
          <div className="bg-white p-3 flex justify-between items-center">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-blue-900" />
              <div className="w-3 h-3 rounded-full bg-blue-900" />
              <div className="w-3 h-3 rounded-full bg-blue-900" />
            </div>
            <div className="text-xs text-gray-500">•••</div>
          </div>
          <img
            src="/images/hero-bg.jpg" // ganti sesuai aset kamu
            alt="Modern Kitchen"
            className="w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};
