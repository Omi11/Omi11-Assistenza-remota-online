
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="chi-sono" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
          <div className="w-full md:w-1/3">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80" 
                alt="Il nostro team tecnico" 
                className="rounded-3xl shadow-2xl object-cover aspect-square grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600 rounded-full -z-10"></div>
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Chi Siamo</h2>
            
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                <span className="font-bold text-blue-600">Siamo un’azienda</span> specializzata in assistenza informatica da remoto in tutta Italia.
              </p>
              
              <p>
                La nostra missione è semplice: semplificare la tua vita nel mondo della tecnologia e aiutarti a risolvere in modo rapido ed efficace i problemi informatici di ogni giorno.
              </p>
              
              <p>
                Interveniamo esclusivamente da remoto, così possiamo offrirti un supporto veloce, prezzi competitivi e un servizio professionale di alta qualità, senza farti perdere tempo.
              </p>
              
              <p>
                Ci occupiamo di tutto ciò che può creare difficoltà nell’uso quotidiano di computer, software e dispositivi digitali, con un approccio chiaro, pratico e orientato alla soluzione.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                <p className="text-2xl font-bold text-blue-600 mb-1">Affidabili</p>
                <p className="text-sm text-gray-500 font-semibold uppercase">Supporto Certificato</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                <p className="text-2xl font-bold text-blue-600 mb-1">Rapidi</p>
                <p className="text-sm text-gray-500 font-semibold uppercase">Interventi in Giornata</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
