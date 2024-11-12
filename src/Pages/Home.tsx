import BookingForm from '../components/Contact';
import ContactInfo from '../components/ContactInfo';
import GiftGallery from '../components/GiftGallery';
import HeroSlider from '../components/HeroSlider';
import VendorShowcase from '../components/VendorShowcase';
import VenueShowcase from '../components/VenueShowcase';
import AboutSection from '../components/aboutSection';

const Home = () => {
  return (
    <main>
      <HeroSlider />
      <VendorShowcase/>
      <VenueShowcase/>
      <AboutSection />
      <GiftGallery/>
      <BookingForm/>
      <ContactInfo/>
    </main>
  );
};

export default Home;