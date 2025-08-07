// import HomePage from './(pages)/HomePages/HomePage';
import ProductScroll from './(pages)/HomePages/ProductScroll';
// import ChooseSheekharIngredient from './(pages)/HomePages/ChooseSheekharIngredient';
import SolveIndustryStandard from './(pages)/HomePages/SolveIndustryStandard';
import ContactUsPage from './(pages)/ContactUsPage';
import Footer from './(pages)/Footer';
import Certificate from './(ui)/Certificate';
import HomePage1 from './(pages)/HomePages/HomePage1';
import AboutUsSection from './(pages)/AboutUs/AboutUsSection';
import DiamondInteractive from './(components)/DiamondInteractive';
// import Footer2 from './(pages)/Footer2';

export default function Home() {
  return (
    <div className="">
      {/* add max width */}
      <main className="w-[100dvw] overflow-x-hidden">
        <HomePage1 />
        <ProductScroll />
        <SolveIndustryStandard />
        <AboutUsSection />
        {/* <ChooseSheekharIngredient /> */}
        <DiamondInteractive />
        {/* <Test /> */}
        <ContactUsPage />
        <Certificate />
        <Footer />
        {/* <Footer2 /> */}
      </main>
    </div>
  );
}
