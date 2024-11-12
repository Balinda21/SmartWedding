import BookingForm from "../components/Contact";
import ContactInfo from "../components/ContactInfo";
import GiftGallery from "../components/GiftGallery";
import HeroSlider from "../components/HeroSlider";
import VendorShowcase from "../components/VendorShowcase";
import VenueShowcase from "../components/VenueShowcase";
import AboutSection from "../components/aboutSection";

const Home = () => {
  return (
    <main>
      <section id="home">
        <HeroSlider />
      </section>
      <section id="vendors">
        <VendorShowcase />
      </section>

      <section id="venues">
        <VenueShowcase />
      </section>

      <section id="services">
        <AboutSection />
      </section>

      <section id="gallery">{/* Your gallery component */}</section>

      <section id="gifts">
        <GiftGallery />
      </section>

      <section id="contact">
        <BookingForm />
      </section>
      <section id="">
        <ContactInfo />
      </section>
    </main>
  );
};
export default Home;
