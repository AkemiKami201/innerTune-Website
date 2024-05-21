import FeatureSection from "./components/Features"
{/*import ActiveSlider from "./components/Carousel";*/}
import MainSection from "./components/MainSection";
import ChangeSection from "./components/ChangeSection";
import FAQSection from "./components/FAQ";
import DownloadSection from "./components/Download";
import FooterSection from "./components/FooterSection";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
    <Navbar />
    <div className="max-w-7xl mx-auto pt-20 px-6">
      <MainSection />
      <hr class="my-12 h-0.5 border-t-0 bg-neutral-100 dark:bg-gray/10" />
      {/*<ActiveSlider />
      <hr class="my-12 h-0.5 border-t-0 bg-neutral-100 dark:bg-gray/10" />*/}
      <FeatureSection />
      <hr class="my-12 h-0.5 border-t-0 bg-neutral-100 dark:bg-gray/10" />
      <ChangeSection />
      <hr class="my-12 h-0.5 border-t-0 bg-neutral-100 dark:bg-gray/10" />
      <FAQSection />
      <hr class="my-12 h-0.5 border-t-0 bg-neutral-100 dark:bg-gray/10" />
      <DownloadSection />
      <hr class="my-12 h-0.5 border-t-0 bg-neutral-100 dark:bg-gray/10" />
      <FooterSection />
    </div>
    </>
  );
};

export default App;