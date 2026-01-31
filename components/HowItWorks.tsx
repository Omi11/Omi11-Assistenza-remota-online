
import React from 'react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '1',
      text: 'Mi scrivi su WhatsApp e mi spieghi il problema che riscontri sul tuo PC.',
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
      )
    },
    {
      number: '2',
      text: (
        <span>
          Installi <a href="https://anydesk.com/it/downloads/thank-you?dv=win_exe" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-bold underline hover:text-blue-800">AnyDesk</a> (un software sicuro e gratuito, ci mettiamo 2 minuti).
        </span>
      ),
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" strokeLinecap="round" strokeLinejoin="round"></path>
          <polyline points="7 10 12 15 17 10" strokeLinecap="round" strokeLinejoin="round"></polyline>
          <line x1="12" y1="15" x2="12" y2="3" strokeLinecap="round" strokeLinejoin="round"></line>
        </svg>
      )
    },
    {
      number: '3',
      text: 'Intervengo sul tuo PC da remoto mentre tu vedi tutto in tempo reale sul tuo schermo.',
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round"></circle>
          <circle cx="12" cy="12" r="3" strokeLinecap="round" strokeLinejoin="round"></circle>
        </svg>
      )
    }
  ];

  return (
    <section id="funzionamento" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Come Funziona</h2>
          <p className="text-gray-600">Assistenza rapida in tre semplici passaggi</p>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded"></div>
        </div>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-8 shadow-md border-4 border-white transition-transform group-hover:scale-110">
                {step.number}
              </div>
              <div className="mb-6 flex justify-center">{step.icon}</div>
              <div className="text-gray-700 font-medium leading-relaxed px-4">
                {step.text}
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-7 left-[70%] w-full h-0.5 bg-blue-100 -z-10"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
