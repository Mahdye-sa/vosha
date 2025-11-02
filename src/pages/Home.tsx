import BannerCta from "../ui/BannerCta";
import ProductSlide from "../features/product/ProductSlide";
import WhyUs from "../ui/WhyUs";
import AboutUs from "../ui/AboutUs";
import ContactUs from "../ui/ContactUs";
import FAQAccordion from "../ui/FAQAccordion";
import BlogPreview from "../ui/BlogCards";

function Home() {
  return (
    <>
      <BannerCta />
      <WhyUs />
      <ProductSlide />
      <AboutUs />
      <BlogPreview />
      <ContactUs />
      <FAQAccordion />
    </>
  );
}

export default Home;
