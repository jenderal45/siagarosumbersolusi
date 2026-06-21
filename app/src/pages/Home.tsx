import HeroSection from '../sections/HeroSection';
import FeaturedProducts from '../sections/FeaturedProducts';
import ServicesSection from '../sections/ServicesSection';
import StatsBar from '../sections/StatsBar';
import ArticlesSection from '../sections/ArticlesSection';
import BrandsSection from '../sections/BrandsSection';
import NewsletterSection from '../sections/NewsletterSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedProducts />
      <ServicesSection />
      <StatsBar />
      <ArticlesSection />
      <BrandsSection />
      <NewsletterSection />
    </>
  );
}
