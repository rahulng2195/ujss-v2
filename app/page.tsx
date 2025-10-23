import Preloader from '@/components/Preloader';
import Navbar from '@/components/Navbar';
import Banner from '@/components/Banner';
import Services from '@/components/Services';
import About from '@/components/About';
import Counter from '@/components/Counter';
import Footer from '@/components/Footer';
import ProcessFlow from '@/components/ProcessFlow';
import Testimonial from '@/components/Testimonial';
import Brands from '@/components/Brands';

export default function Home() {
  return (
    <>
      {/* <Preloader /> */}
      <Navbar />
      <Banner />
      <About />
      <Services />
      <ProcessFlow />
      {/* <Counter /> */}
      <Testimonial />
      <Brands />
      <Footer />
    </>
  );
}
