
import HomePage from './(pages)/HomePages/HomePage';
import ProductScroll from './(pages)/HomePages/ProductScroll';
import ChooseSheekharIngredient from './(pages)/HomePages/ChooseSheekharIngredient';
import SolveIndustryStandard from './(pages)/HomePages/SolveIndustryStandard';
import ContactUsPage from './(pages)/ContactUsPage';
import Footer from './(pages)/Footer';
import Certificate from './(ui)/Certificate';

export default function Home() {
  return (
    <div className="">
      {/* add max width */}
      <main className="w-[100dvw] overflow-x-hidden ">
        <HomePage />
        <ProductScroll />
        <SolveIndustryStandard />
        <ChooseSheekharIngredient />
        <ContactUsPage />
        <Certificate />
        <Footer />
      </main>
    </div>
  );
}
