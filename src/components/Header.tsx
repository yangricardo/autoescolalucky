export function Header() {
  return (
    <header className='mb-6 flex-col space-y-4'>
      <img
        src='/logo.webp'
        alt='Autoescola Lucky - Logo da autoescola em Bangu, Rio de Janeiro'
        className='mx-auto w-60 h-60 object-contain rounded-full shadow-lg shadow-amber-100 border-4 border-blue-900'
        width='240'
        height='240'
        loading='eager'
      />
      <h1 className='mt-2 font-bold text-gray-600 text-lg'>
        Sua carteira de motorista com segurança e confiança
      </h1>
    </header>
  );
}
