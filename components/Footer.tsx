
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-800 pb-8 mb-8">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold text-blue-400 mb-2">Assistenza Remota</h3>
            <p className="text-gray-400 text-sm">Risolviamo i tuoi problemi informatici ovunque tu sia.</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Facebook</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
        <div className="text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Assistenza Remota PC di [Tuo Nome]. P.IVA 12345678901. Tutti i diritti riservati.</p>
          <p className="mt-2">Marrubiu (OR), Sardegna - Italia</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
