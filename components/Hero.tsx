
import React from 'react';

const Hero: React.FC = () => {
  const scrollToServices = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('servizi');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-32 pb-20 md:pt-48 md:pb-32 bg-gradient-to-br from-white to-blue-50">
      <div className="container mx-auto px-4 text-center">
        <span className="inline-block py-1 px-3 mb-4 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full uppercase tracking-wider">
          Supporto Informatico Professionale
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
          ASSISTENZA REMOTA PC
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto">
          Il tuo PC sistemato da casa tua, <span className="font-semibold text-blue-600">in tutta Italia</span>. Rapido, sicuro ed economico.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="https://wa.me/393330000000"
            className="inline-flex items-center justify-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg shadow-lg transition-transform hover:scale-105"
          >
            CONTATTAMI SU WHATSAPP
          </a>
          <a
            href="#servizi"
            onClick={scrollToServices}
            className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-bold rounded-lg shadow-md transition-all cursor-pointer"
          >
            SCOPRI I SERVIZI
          </a>
        </div>
        <div className="mt-16 flex items-center justify-center space-x-12 text-gray-500">
          <div className="flex flex-col items-center">
             <svg className="w-8 h-8 mb-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round"/>
             </svg>
             <span className="text-xs font-bold uppercase tracking-widest">Sicuro</span>
          </div>
          <div className="flex flex-col items-center">
             <svg className="w-8 h-8 mb-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round"/>
             </svg>
             <span className="text-xs font-bold uppercase tracking-widest">Veloce</span>
          </div>
          <div className="flex flex-col items-center">
             <span className="w-8 h-8 mb-2 flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                   <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" strokeLinecap="round" strokeLinejoin="round"/>
                   <polyline points="9 22 9 12 15 12 15 22" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
             </span>
             <span className="text-xs font-bold uppercase tracking-widest">Comodo</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
