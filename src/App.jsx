import { SocialMedia } from './SocialMedia';
import { Footer } from './Footer';
import { ContactItem } from './ContactItem';
import { SEOHead } from './SEOHead';
import { trackWhatsAppClick } from './analytics';

function App() {
  const handleWhatsAppClick = (phoneNumber) => {
    trackWhatsAppClick(phoneNumber);
  };
  return (
    <>
      <SEOHead />
      <div className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col select-none'>
        {/* Main Content */}
        <main className='flex-1 flex items-center justify-center px-4 py-4'>
          <div className='max-w-md w-full text-center space-y-4'>
            {/* Logo Section */}
            <header className='mb-6 flex-col space-y-4'>
              <img
                src='/logo.webp'
                alt='Autoescola Lucky - Logo da autoescola em Bangu, Rio de Janeiro'
                className='mx-auto w-60 h-60 object-contain rounded-full shadow-lg shadow-amber-100 border-4 border-blue-900'
                width="240"
                height="240"
                loading="eager"
              />
              <h1 className='mt-2 font-bold text-gray-600 text-lg'>
                Sua carteira de motorista com segurança e confiança
              </h1>
            </header>

            {/* Contact Section */}
            <section className='bg-white rounded-lg shadow-md shadow-amber-50 p-6 space-y-4'>
            <h2 className='text-xl font-semibold text-gray-800 mb-4'>
              Entre em Contato
            </h2>
            <div className='space-y-3'>
              <ContactItem 
                iconBgColor="bg-transparent text-green-600"
                icon={
                  <svg className='w-8 h-8' fill='currentColor' viewBox='0 0 24 24'>
                    <path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488' />
                  </svg>
                }
              >
                <p className='text-sm text-gray-600'>Telefone</p>
                <div className='mt-2 flex flex-row space-x-4 justify-between w-full'>
                  <div>
                    <a 
                      href='https://wa.me/5521964097010' 
                      className='font-medium text-gray-800 hover:text-blue-600 transition-colors'
                      onClick={() => handleWhatsAppClick('5521964097010')}
                      aria-label='WhatsApp (21) 96409-7010'
                    >
                      (21) 96409-7010
                    </a>
                  </div>
                  <div>
                      <a 
                        href='https://wa.me/5521964694925' 
                        className='font-medium text-gray-800 hover:text-blue-600 transition-colors'
                        onClick={() => handleWhatsAppClick('5521964694925')}
                        aria-label='WhatsApp (21) 96469-4925'
                      >
                        (21) 96469-4925
                      </a>
                  </div>
                </div>
              </ContactItem>

              <ContactItem 
                iconBgColor="bg-transparent text-blue-500"
                icon={
                  <svg
                    className='w-8 h-8'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    viewBox='0 0 24 24'
                  >
                    <path strokeLinecap='round' strokeLinejoin='round' d='M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                  </svg>
                }
              >
                <p className='text-sm text-gray-600'>E-mail</p>
                <a 
                  href='mailto:contato@autoescolalucky.com.br'
                  className='font-medium text-gray-800 hover:text-blue-600 transition-colors'
                  aria-label='Enviar email para contato@autoescolalucky.com.br'
                >
                  contato@autoescolalucky.com.br
                </a>
              </ContactItem>

              <ContactItem 
                iconBgColor="bg-transparent text-red-500"
                icon={
                  <svg
                    className='w-10 h-10'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                    />
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                    />
                  </svg>
                }
              >
                <p className='text-sm text-gray-600'>Endereço</p>
                <div className='mt-2 flex flex-col space-y-2'>                  
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3676.0904757766475!2d-43.46839203804269!3d-22.873115936584185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bdf92c7152b55%3A0xbc908783ba0548e2!2sAUTO%20ESCOLA%20LUCKY!5e0!3m2!1spt-BR!2sbr!4v1752721467121!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className='rounded-md mt-2'
                    title="Localização da Autoescola Lucky no Google Maps"
                  ></iframe>
                  <a href='https://maps.google.com/maps?ll=-22.873093,-43.465822&z=15&t=m&hl=pt-BR&gl=BR&mapclient=embed&cid=13587509075608160482' className='font-medium text-gray-800 hover:text-blue-600 transition-colors' aria-label='Ver endereço no Google Maps: Rua Iriguaçu, 35. Bangu - Rio de Janeiro, RJ'>
                    Rua Iriguaçu, 35. Bangu - Rio de Janeiro, RJ
                  </a>                
                </div>
              </ContactItem>

              <ContactItem 
                iconBgColor="bg-transparent text-purple-500"
                icon={
                  <svg
                    className='w-8 h-8'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    viewBox='0 0 24 24'
                  >
                    <circle cx='12' cy='12' r='10' />
                    <polyline points='12,6 12,12 16,14' />
                  </svg>
                }
              >
                <p className='text-sm text-gray-600'>Horário</p>
                <div className='font-medium text-gray-800 space-y-1'>
                  <div>Segunda a Sexta: 8h às 21h</div>
                  <div>Sábado: 8h às 13h</div>
                </div>
              </ContactItem>
            </div>

            <div className='mt-6 pt-4 border-t border-gray-200'>
              <SocialMedia />
            </div>
            </section>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
