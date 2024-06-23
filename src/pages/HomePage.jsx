import { Box,} from "@mui/material";
import AdBanner from "../components/homepage/AdBanner";
import PracticeSection from "../components/homepage/PracticeSection";

function HomePage() {
  const bannerImages = [
    'https://dcdn.51ddedu.com/materials/banner/banner02_pc.png',
    'https://dcdn.51ddedu.com/materials/banner/banner01_pc.png',
  ];
    
  return (
      <Box>
      <AdBanner images={bannerImages} />
      <PracticeSection />
      </Box>
  );
}

export default HomePage;
