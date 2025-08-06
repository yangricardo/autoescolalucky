import { Footer } from "./components/Footer";
import { SEOHead } from "./components/SEOHead";
import { Header } from "./components/Header";
import { ContactSection } from "./components/ContactSection";

function App() {
  return (
    <>
      <SEOHead />
      <div className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col select-none'>
        {/* Main Content */}
        <main className='flex-1 flex items-center justify-center px-4 py-4'>
          <div className='max-w-md w-full text-center space-y-4'>
            <Header />
            <ContactSection />
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
