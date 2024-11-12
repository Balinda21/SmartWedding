
const BookingForm = () => {
  return (
    <section className="relative min-h-screen bg-white">
      <div className="flex flex-col lg:flex-row">
        {/* Image Section */}
        <div className="lg:w-3/5 h-[300px] lg:h-screen relative">
          <img
            src="https://www.safarisrwandasafari.com/wp-content/uploads/2023/08/poivre-noir-kigali.jpg"
            alt="Beachfront Wedding Setup"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Form Section */}
        <div className="lg:w-2/5 bg-[#B17C3F] p-8 lg:p-12 flex items-center">
          <div className="w-full max-w-md mx-auto">
            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl text-white font-light mb-4">
                BOOK NOW!
              </h2>

              <p className="text-white/80">
                Reserve your dream beachfront wedding venue. Our exclusive
                packages include personalized planning services and stunning
                sunset views.
              </p>
            </div>

            <form className="space-y-6">
              {/* Personal Details */}
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white transition-colors"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white transition-colors"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white transition-colors"
                />
              </div>

              {/* Event Details */}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#E6B325] text-white py-4 rounded-md hover:bg-[#D4A520] transition-colors duration-300 font-medium "
              >
                CHECK AVAILABILITY
              </button>
            </form>

            {/* Contact Info */}
            {/* <div className="mt-8 text-white/80 text-sm">
              <p>Or contact us directly:</p>
              <p className="mt-2">📞 +250 788 123 456</p>
              <p>📧 weddings@venue.com</p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
