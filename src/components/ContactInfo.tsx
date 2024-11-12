import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactInfo = () => {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Address */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-pink-50 flex items-center justify-center mb-4">
              <MapPin className="w-8 h-8 text-[#B17C3F]" />
            </div>
            <h3 className="text-lg font-medium mb-2">Contact Address</h3>
            <p className="text-gray-600">
              KG 123 St, Nyarugenge
              <br />
              Kigali City, Rwanda
            </p>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-pink-50 flex items-center justify-center mb-4">
              <Phone className="w-8 h-8 text-[#B17C3F]" />
            </div>
            <h3 className="text-lg font-medium mb-2">Call Us Today!</h3>
            <p className="text-gray-600">
              (M) +250 788 123 456
              <br />
              (O) +250 788 789 012
            </p>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-pink-50 flex items-center justify-center mb-4">
              <Mail className="w-8 h-8 text-[#B17C3F]" />
            </div>
            <h3 className="text-lg font-medium mb-2">Email</h3>
            <p className="text-gray-600">
              info@smartwedding.rw
              <br />
              support@smartwedding.rw
            </p>
          </div>

          {/* Working Hours */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-pink-50 flex items-center justify-center mb-4">
              <Clock className="w-8 h-8 text-[#B17C3F]" />
            </div>
            <h3 className="text-lg font-medium mb-2">Working Hours</h3>
            <p className="text-gray-600">
              Mon to Sat - 8 AM to 6 PM
              <br />
              Sunday - 10 AM to 4 PM
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;