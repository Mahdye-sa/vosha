import BannerCta from "../components/BannerCta";
import BlogCards from "../components/BlogCards";
import ProductSlide from "../components/ProductSlide";
import WhyUs from "../components/WhyUs";
import AboutUs from "../components/AboutUs";
import ContactUs from "../components/ContactUs";
import FAQAccordion from "../components/FAQAccordion";
import Header from "../components/Header";

function Home() {
  return (
    <>
      <Header />
      <BannerCta />
      <WhyUs />
      <ProductSlide />
      <AboutUs />
      <BlogCards />
      <ContactUs />
      <FAQAccordion />
    </>
  );
}

export default Home;
