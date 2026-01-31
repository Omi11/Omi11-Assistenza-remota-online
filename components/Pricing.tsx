
import React from 'react';

const Pricing: React.FC = () => {
  const items = [
    { label: 'Prima analisi rapida (5 min)', price: 'GRATIS', color: 'text-green-500' },
    { label: 'Assistenza base (fino a 45 min)', price: '25€', color: 'text-gray-900' },
    { label: 'Problemi complessi (fino a 60 min)', price: '35-40€', color: 'text-gray-900' },
  ];

  return (
    <section id="prezzi" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Listino Prezzi</h2>
          <p className="text-gray-600">Trasparenza totale, nessun costo nascosto</p>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded"></div>
        </div>
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="divide-y divide-gray-100">
            {items.map((item, index) => (
              <div key={index} className="flex justify-between items-center p-6 md:p-8 hover:bg-gray-50 transition-colors">
                <span className="font-medium text-gray-700">{item.label}</span>
                <span className={`text-xl font-bold ${item.color}`}>{item.price}</span>
              </div>
            ))}
          </div>
          <div className="bg-blue-50 p-6 text-center">
            <p className="text-sm text-blue-600 font-medium">
              * Per interventi multipli o configurazioni aziendali richiedi un preventivo personalizzato.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
