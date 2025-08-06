export const Footer = () => {
  return (
    <footer className="bg-blue-600 border-t border-blue-700 py-4 select-none">
      <div className="text-center text-sm text-yellow-400 font-bold">
        © {new Date().getFullYear()} Autoescola Lucky. Todos os direitos reservados.
      </div>
      <div className="text-center text-xs text-yellow-400 font-bold">
        Desenvolvido por <a href="https://yang.dev.br" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition-colors" aria-label="Desenvolvido por yang.dev.br">yang.dev.br</a>
      </div>
    </footer>
  );
}