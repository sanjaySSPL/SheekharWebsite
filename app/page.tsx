
import HomePage from './(pages)/HomePages/HomePage';
import ProductScroll from './(pages)/HomePages/ProductScroll';

export default function Home() {
  return (
    <div className="">
      <main className="w-[100dvw] overflow-x-hidden">
        <HomePage />
        <ProductScroll />
      </main>
    </div>
  );
}
