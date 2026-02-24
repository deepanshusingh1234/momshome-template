
import Slideshow from "@/components/Slideshow";
import BrandSlider from "@/components/BrandSlider";
import HospitalBags from "@/components/HospitalBags";
import SpotlightOffers from "@/components/SpotlightOffers";
import WinterBanner from "@/components/WinterBanner";
import NewArrivals from "@/components/NewArrivals";
import TrendingProducts from "@/components/TrendingProducts";
import TrustBadges from "@/components/TrustBadges";
import FeaturedProducts from "@/components/FeaturedProducts";
import MoreFeaturedProducts from "@/components/MoreFeaturedProducts";
import InstagramFeed from "@/components/InstagramFeed";

export default function Home() {
  return (
    <>

      <main>

        <Slideshow />
        <BrandSlider />
        <HospitalBags />
        <SpotlightOffers />
        <WinterBanner />
        <NewArrivals />
        <TrendingProducts />
        <TrustBadges />
        <FeaturedProducts />
        <MoreFeaturedProducts />
        <InstagramFeed />
      </main>
    </>
  );
}