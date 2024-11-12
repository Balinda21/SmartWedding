import { useState } from "react";
import { Search, Heart, Filter } from "lucide-react";

interface GiftItem {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  brand: string;
  isPopular?: boolean;
}

// Helper function to format RWF
const formatRWF = (amount: number) => {
  return new Intl.NumberFormat("rw-RW", {
    style: "currency",
    currency: "RWF",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

const GiftGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [priceRange, setPriceRange] = useState<string>("all");

  const categories = [
    "All",
    "Kitchen & Dining",
    "Home Decor",
    "Appliances",
    "Bedding",
    "Electronics",
    "Experience Gifts",
  ];

  const priceRanges = [
    { label: "All Prices", value: "all" },
    { label: `Under ${formatRWF(100000)}`, value: "under100k" },
    {
      label: `${formatRWF(100000)} - ${formatRWF(300000)}`,
      value: "100k-300k",
    },
    { label: `${formatRWF(300000)}+`, value: "over300k" },
  ];

  const gifts: GiftItem[] = [
    {
      id: 1,
      name: "Professional Stand Mixer",
      price: 350000,
      category: "Kitchen & Dining",
      image:
        "https://www.ikea.com/images/white-dish-set-piled-on-top-of-a-white-table-with-a-thin-blu-bae2b81501242cb468f585d4346b6283.jpg?f=s",
      brand: "KitchenAid",
      isPopular: true,
    },
    {
      id: 2,
      name: "Luxury Bedding Set",
      price: 225000,
      category: "Bedding",
      image:
        "https://teacupsandtales.co.uk/wp-content/uploads/2018/07/SOPHIE_CONRAN_COLOUR_POP_CELADON_2018.jpg",
      brand: "Royal Comfort",
    },
    {
      id: 3,
      name: "Professional Stand Mixer",
      price: 450000,
      category: "Kitchen & Dining",
      image:
        "https://t3.ftcdn.net/jpg/05/08/17/24/360_F_508172448_thxAxPDEAjBZA2fM5vl50AeslWKPzh3A.jpg",
      brand: "KitchenAid",
      isPopular: true,
    },
    {
      id: 4,
      name: "Luxury Bedding Set",
      price: 275000,
      category: "Bedding",
      image:
        "https://magnanni.com/media/wysiwyg/24wa/home-men/desktop/featured_product_naxos.jpg",
      brand: "Royal Comfort",
    },
  ];

  const filteredGifts = gifts.filter((gift) => {
    const matchesCategory =
      selectedCategory === "All" || gift.category === selectedCategory;
    const matchesSearch =
      gift.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      gift.brand.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPriceRange = () => {
      switch (priceRange) {
        case "under100k":
          return gift.price < 100000;
        case "100k-300k":
          return gift.price >= 100000 && gift.price <= 300000;
        case "over300k":
          return gift.price > 300000;
        default:
          return true;
      }
    };

    return matchesCategory && matchesSearch && matchesPriceRange();
  });

  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-light mb-4">Wedding Gift Gallery</h2>
          <p className="text-gray-600">
            Choose the perfect gift to celebrate their special day
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          {/* Search Bar */}
          <div className="relative flex-grow">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search gifts..."
              className="w-full pl-12 pr-4 py-3 rounded-full border focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Filter Button - Mobile */}
          <button className="md:hidden flex items-center justify-center gap-2 px-6 py-3 rounded-full border hover:bg-gray-50">
            <Filter size={20} />
            Filter
          </button>
        </div>

        {/* Filters Desktop */}
        <div className="hidden md:flex flex-col gap-4 mb-8">
          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm transition-colors duration-300 ${
                  selectedCategory === category
                    ? "bg-black text-white"
                    : "bg-white border hover:border-gray-400"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Price Ranges */}
          <div className="flex flex-wrap gap-2">
            {priceRanges.map((range) => (
              <button
                key={range.value}
                onClick={() => setPriceRange(range.value)}
                className={`px-6 py-2 rounded-full text-sm transition-colors duration-300 ${
                  priceRange === range.value
                    ? "bg-pink-500 text-white"
                    : "bg-white border hover:border-pink-400"
                }`}
              >
                {range.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gift Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredGifts.map((gift) => (
            <div
              key={gift.id}
              className="group relative rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-all duration-300"
              onMouseEnter={() => setHoveredItem(gift.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* Image Container */}
              <div className="aspect-square overflow-hidden relative">
                <img
                  src={gift.image}
                  alt={gift.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />

                {/* Hover Overlay */}
                <div
                  className={`absolute inset-0 bg-black/40 flex items-center justify-center gap-4 transition-opacity duration-300 ${
                    hoveredItem === gift.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <button className="bg-white text-black p-3 rounded-full hover:bg-gray-100 transition-colors">
                    <Heart size={20} />
                  </button>
                  <button className="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition-colors">
                    Add to Registry
                  </button>
                </div>

                {gift.isPopular && (
                  <span className="absolute top-2 left-2 bg-pink-500 text-white text-xs px-3 py-1 rounded-full">
                    Popular
                  </span>
                )}

                {/* Price Tag */}
                <div className="absolute bottom-2 right-2 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-md">
                  <span className="font-semibold text-sm">
                    {formatRWF(gift.price)}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-medium text-lg mb-1">{gift.name}</h3>
                <p className="text-gray-500 text-sm mb-2">{gift.brand}</p>
                <p className="font-semibold text-lg text-pink-600">
                  {formatRWF(gift.price)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-white border-2 border-black text-black px-8 py-3 rounded-full hover:bg-black hover:text-white transition-colors duration-300">
            Load more gifts
          </button>
        </div>
      </div>
    </section>
  );
};

export default GiftGallery;
