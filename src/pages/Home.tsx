import BannerCta from "../ui/BannerCta";
import BlogCards from "../ui/BlogCards";
import ProductSlide from "../features/product/ProductSlide";
import WhyUs from "../ui/WhyUs";
import AboutUs from "../ui/AboutUs";
import ContactUs from "../ui/ContactUs";
import FAQAccordion from "../ui/FAQAccordion";

function Home() {
  return (
    <>
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
