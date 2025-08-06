import { Footer } from "./components/Footer";
import { SEOHead } from "./components/SEOHead";
import { Header } from "./components/Header";
import { Contact } from "./components/Contact";
import { Hero } from "./components/Hero";
import { Promotions } from "./components/Promotions";
import { Services } from "./components/Services";
import { Training } from "./components/Training";

function App ()
{
  return (
    <>
      <SEOHead />
      <Header />
      <main>
        <Hero />
        <Services />
        <Promotions />
        <Training />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
