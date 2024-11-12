import { ChevronLeft, ChevronRight } from 'lucide-react';

interface VenueCard {
  name: string;
  location: string;
  image: string;
  capacity: string;
  priceRange: string;
}

const VenueShowcase = () => {
  const categories = [
    "As Featured In",
    "Kigali City",
    "Northern Province",
    "Southern Province",
    "Eastern Province",
    "Western Province"
  ];

  const venues: VenueCard[] = [
    {
      name: "Lake Kivu Serena Hotel",
      location: "Western Province, Rubavu",
      image: "https://www.telegraph.co.uk/content/dam/Travel/hotels/africa/rwanda/heaven-kigali-rwanda-l.jpg",
      capacity: "0-400 Guests",
      priceRange: "RWF 500,000 - 2,000,000"
    },
    {
      name: "Kigali Convention Centre",
      location: "Kigali, Gasabo",
      image: "https://www.ktpress.rw/wp-content/uploads/2019/11/Bisate.jpg",
      capacity: "0-1000 Guests",
      priceRange: "RWF 1,000,000 - 3,000,000"
    },
    {
      name: "Nyungwe Forest Lodge",
      location: "Southern Province, Nyamagabe",
      image: "https://etichotels.com/journal/wp-content/uploads/2023/11/10-Beautiful-Places-To-Visit-In-Rwanda-ETIC-Hotels.jpg",
      capacity: "0-200 Guests",
      priceRange: "RWF 800,000 - 1,500,000"
    },
    {
      name: "Akagera Game Lodge",
      location: "Eastern Province, Kayonza",
      image: "https://i.pinimg.com/originals/ba/39/53/ba3953007109ac9fe3fbb4fd54709fb3.jpg",
      capacity: "0-300 Guests",
      priceRange: "RWF 600,000 - 2,000,000"
    }
  ];

  return (
    <section className="w-full px-4 sm:px-6 lg:px-24 py-16 md:py-24 bg-[#FDF8F6]">
      <div className="max-w-[1800px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4">
            Find an unforgettable venue
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
            From scenic lakes and mountain views to historic sites and luxury hotels, 
            get married at one of our most extraordinary wedding venues in Rwanda.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-nowrap overflow-x-auto gap-2 mb-8 pb-4 -mx-4 px-4 
          scrollbar-hide">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`whitespace-nowrap px-6 py-2 rounded-full text-sm 
                ${index === 0 
                  ? 'bg-black text-white' 
                  : 'border border-gray-300 hover:border-gray-400 text-gray-700'
                } transition-colors duration-300`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Venues Grid */}
        <div className="relative">
          <button className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg">
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {venues.map((venue, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img
                    src={venue.image}
                    alt={venue.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-600 mb-1">{venue.location}</p>
                  <h3 className="text-xl font-medium mb-2">{venue.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {venue.capacity} • {venue.priceRange}
                  </p>
                  <button className="text-[#C17437] hover:text-pink-600 text-sm font-medium">
                    Explore venue
                  </button>
                </div>
              </div>
            ))}
          </div>

          <button className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* See More Button */}
        <div className="text-center mt-12">
          <button className="bg-pink-500 text-white px-8 py-3 rounded-full 
            hover:bg-pink-600 transition-colors duration-300">
            See more unforgettable venues
          </button>
        </div>
      </div>
    </section>
  );
};

export default VenueShowcase;