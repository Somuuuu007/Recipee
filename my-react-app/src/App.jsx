import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import RecipeHighlight from "./components/RecipeHighlight";

export default function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <HeroSection />
      <RecipeHighlight />
    </div>
  );
}
