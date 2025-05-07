import CalculatorSection from "./components/CalculatorSection";
import FeaturesSection from "./components/FeaturesSection";
import FooterSection from "./components/FooterSection";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import HowItWorksSection from "./components/HowItWorksSection";
import ProductListPage from "./components/ProductListPage";

function App() {
  return (
    <div>
      <Header/>
       <HeroSection/>
       <CalculatorSection/>
      <ProductListPage/>
      <FeaturesSection/>
      <HowItWorksSection/>
      <FooterSection/>
      
    </div>
  );
}

export default App;
