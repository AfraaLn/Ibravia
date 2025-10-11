import { motion } from "framer-motion";

const partners = [
  { id: 1, name: "PT Bumimoro Agung", logo: null },
  { id: 2, name: "PT Bumi Bangun Persada", logo: null },
  { id: 3, name: "PT Property Bintang Mandiri", logo: null },
];

export const TrustedCollaboration = () => {
  return (
    <section className="pt-12 pb-20 px-6 md:px-12 bg-background dark:bg-card">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-16">
          Our Trusted Collaboration
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {partners.map((partner, i) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              {partner.logo ? (
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-14 w-full max-w-xs object-contain grayscale hover:grayscale-0 transition-all duration-300 hover:scale-105"
                />
              ) : (
                <div
                  className="w-full max-w-xs h-28 flex items-center justify-center 
                  px-6 py-4 rounded-lg shadow-md text-white font-semibold 
                  bg-primary hover:brightness-110 transition transform hover:scale-105"
                >
                  {partner.name}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
