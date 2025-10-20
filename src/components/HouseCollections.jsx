export const HouseCollections = () => {
  const houses = [
    {
      id: 1,
      image: "/images/hero-bg.jpg",
      category: "Family Home",
      title: "Ijen Nebraska",
      desc: "3 Bedrooms, 2 Bathrooms, Kitchen, Garden, Garage",
      price: "IDR 450.000.000",
      developer: "PT Bumimoro Agung",
      dp: true,
    },
    {
      id: 2,
      image: "/images/hero-bg.jpg",
      category: "Modern Minimalist",
      title: "Ijen Delima",
      desc: "2 Bedrooms, 1 Bathroom, Living Room, Kitchen, Carport",
      price: "IDR 520.000.000",
      developer: "PT Bumi Bangun Persada",
      dp: false,
    },
    {
      id: 3,
      image: "/images/hero-bg.jpg",
      category: "Minimalist House",
      title: "Ijen Gold 3",
      desc: "3 Bedrooms, 2 Bathrooms, Living & Dining Room, Garage",
      price: "IDR 690.000.000",
      developer: "PT Property Bintang Mandiri",
      dp: true,
    },
    {
      id: 4,
      image: "/images/hero-bg.jpg",
      category: "Family Home",
      title: "Ijen Raya",
      desc: "4 Bedrooms, 3 Bathrooms, Kitchen, Living Room, Garage",
      price: "IDR 720.000.000",
      developer: "PT Bumimoro Agung",
      dp: false,
    },
  ];

  return (
    <section className="py-20 bg-background text-foreground transition-colors duration-300 font-[var(--font-body)]">
      <div className="container mx-auto px-6 text-center">
        {/* Subheading */}
        <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-2 font-[var(--font-subheader)]">
          Find the home that fits your lifestyle and future
        </p>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground font-[var(--font-headline)]">
          House Collections
        </h2>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {houses.map((house) => (
            <a
              key={house.id}
              href="#"
              className="group bg-card border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-lg dark:hover:shadow-blue-500/10 transition-all duration-300 text-left block font-[var(--font-body)]"
            >
              {/* Gambar */}
              <div className="relative">
                <img
                  src={house.image}
                  alt={house.title}
                  className="w-full h-48 object-cover group-hover:scale-[1.03] transition-transform duration-300"
                />
                {house.dp && (
                  <span className="absolute top-2 right-2 bg-primary text-white text-xs font-bold px-2 py-1 rounded font-[var(--font-subheader)]">
                    DP
                  </span>
                )}
              </div>

              {/* Konten */}
              <div className="p-5 space-y-2">
                <p className="text-sm text-primary font-medium font-[var(--font-subheader)]">
                  {house.category}
                </p>
                <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors font-[var(--font-headline)]">
                  {house.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-snug font-[var(--font-body)]">
                  {house.desc}
                </p>

                <div className="pt-3 border-t border-border">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 text-muted-foreground"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5.121 17.804A4 4 0 0112 16a4 4 0 016.879 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground font-[var(--font-subheader)]">
                        {house.price}
                      </p>
                      <p className="text-xs text-muted-foreground font-[var(--font-body)]">
                        {house.developer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Tombol */}
        <div className="mt-12">
          <button className="px-8 py-3 rounded-md font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition font-[var(--font-subheader)]">
            Explore More
          </button>
        </div>
      </div>
    </section>
  );
};
