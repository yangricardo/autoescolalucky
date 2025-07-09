export const Footer = () => {
  return (
    <footer className="bg-blue-600 border-t border-blue-700 py-4">
      <div className="text-center text-sm text-yellow-400 font-bold">
        © {new Date().getFullYear()} Autoescola Lucky. Todos os direitos reservados.
      </div>
    </footer>
  );
}