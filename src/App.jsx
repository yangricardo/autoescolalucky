import { SocialMedia } from './SocialMedia';
import { Footer } from './Footer';
import { ContactItem } from './ContactItem';

function App() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col select-none'>
      {/* Main Content */}
      <div className='flex-1 flex items-center justify-center px-4 py-8'>
        <div className='max-w-md w-full text-center space-y-8'>
          {/* Logo Section */}
          <div className='mb-8'>
            <img
              src='/logo.jpeg'
              alt='Autoescola Lucky'
              className='mx-auto w-60 h-60 object-contain rounded-full shadow-lg border-4 border-blue-900'
            />
            <h1 className='mt-4 text-2xl md:text-3xl font-bold text-gray-800'>
              Autoescola Lucky
            </h1>
            <p className='mt-2 text-gray-600'>
              Sua carteira de motorista com segurança e confiança
            </p>
          </div>

          {/* Contact Section */}
          <div className='bg-white rounded-lg shadow-md p-6 space-y-4'>
            <h2 className='text-xl font-semibold text-gray-800 mb-4'>
              Entre em Contato
            </h2>
            <div className='space-y-3'>
              <ContactItem 
                iconBgColor="bg-green-500"
                icon={
                  <svg
                    className='w-4 h-4 text-white'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path d='M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z' />
                  </svg>
                }
              >
                <p className='text-sm text-gray-600'>Telefone</p>
                <a href='https://wa.me/5521964097010' className='font-medium text-gray-800 hover:text-blue-600 transition-colors'>(21) 96409-7010</a>
              </ContactItem>

              <ContactItem 
                iconBgColor="bg-blue-500"
                icon={
                  <svg
                    className='w-4 h-4 text-white'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
                    <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
                  </svg>
                }
              >
                <p className='text-sm text-gray-600'>E-mail</p>
                <a 
                  href='mailto:contato@autoescolalucky.com.br'
                  className='font-medium text-gray-800 hover:text-blue-600 transition-colors'
                >
                  contato@autoescolalucky.com.br
                </a>
              </ContactItem>

              <ContactItem 
                iconBgColor="bg-red-500"
                icon={
                  <svg
                    className='w-4 h-4 text-white'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path
                      fillRule='evenodd'
                      d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z'
                      clipRule='evenodd'
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
                  ></iframe>
                  <p className='font-medium text-gray-800'>
                    Rua Iriguaçu, 35. Bangu - Rio de Janeiro, RJ
                  </p>                
                </div>
              </ContactItem>

              <ContactItem 
                iconBgColor="bg-purple-500"
                icon={
                  <svg
                    className='w-4 h-4 text-white'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path
                      fillRule='evenodd'
                      d='M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z'
                      clipRule='evenodd'
                    />
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
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
