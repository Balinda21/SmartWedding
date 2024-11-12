interface VendorCard {
  title: string;
  category?: string;
  description: string;
  image: string;
  actionText: string;
  size?: "normal" | "large";
}

const VendorShowcase = () => {
  const vendors: VendorCard[] = [
    {
      title: "Photographers",
      description: "Browse galleries to find your look.",
      image:
        "https://www.doola.com/wp-content/uploads/2023/06/side-hustles-for-photographers.jpg",
      actionText: "See photographers",
      size: "normal",
    },
    {
      title: "Outdoor Spaces",
      category: "RECEPTION VENUES",
      description: "Find your perfect outdoor venue.",
      image:
        "https://dropinblog.net/34246798/files/featured/Outdoor_Living_Space__Unique_and_Vast_Living_Space.png",
      actionText: "See outdoor spaces",
      size: "large",
    },
    {
      title: "Cakes",
      description: "Meet bakers and set up tastings.",
      image:
        "https://www.theknot.com/tk-media/images/a2c1798d-5502-407e-b9ca-0c3460414a7c~rs_278.h",
      actionText: "Browse cakes",
      size: "normal",
    },
    {
      title: "Barns",
      category: "RECEPTION VENUES",
      description: "Discover rustic charm.",
      image:
        "https://cdn.caratsandcake.com/_images/pages/wedding-venue-the-hunt.JPG",
      actionText: "See barns",
      size: "normal",
    },
    {
      title: "DJs",
      description: "Keep your dance floor moving.",
      image:
        "https://www.insurancecanopy.com/u/2023/10/25142356/DJ-Make-Feature.webp",
      actionText: "Discover DJs",
      size: "normal",
    },
  ];

  return (
    <section className="w-full  sm:px-6 lg:px-24 py-16 md:py-24 bg-[#FDF8F6]">
      <div className="max-w-[1800px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4">
            Find vendors for every vibe
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg">
            Discover top-rated pros for any budget, background and style.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-fr">
          {vendors.map((vendor, index) => (
            <div
              key={index}
              className={`relative rounded-3xl overflow-hidden group 
                ${index === 1 ? "lg:col-span-1 lg:row-span-2" : ""}
                ${index === 4 ? "sm:col-span-1" : ""}
                ${index === 5 ? "sm:col-span-1" : ""}`}
            >
              {/* Background Image */}
              <div className="absolute inset-0 w-full h-full">
                <img
                  src={vendor.image}
                  alt={vendor.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
              </div>

              {/* Content */}
              <div className="relative h-full p-6 md:p-8 flex flex-col justify-between">
                <div>
                  {vendor.category && (
                    <span className="inline-block text-white text-xs tracking-wider uppercase mb-2 bg-black/20 px-3 py-1 rounded-full">
                      {vendor.category}
                    </span>
                  )}
                  <h3 className="text-2xl md:text-3xl font-light text-white mb-2">
                    {vendor.title}
                  </h3>
                  <p className="text-white/90 text-sm md:text-base">
                    {vendor.description}
                  </p>
                </div>

                <button
                  className="mt-4 bg-black/20 hover:bg-black/30 text-white rounded-full 
                  px-6 py-2.5 text-sm transition-colors duration-300 w-fit
                  backdrop-blur-sm"
                >
                  {vendor.actionText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VendorShowcase;
