
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contatti" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contatti</h2>
          <p className="text-gray-600">Hai una domanda? Scrivimi pure senza impegno!</p>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Info Side */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex items-start">
              <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center text-green-600 mr-6 shrink-0">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 448 512">
                   <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.7 17.8 69.4 27.2 106.2 27.2 122.4 0 222-99.6 222-222 0-59.3-23-115.1-65-157.1zM223.9 446.3c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 365.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.5-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.4-8.6-44.5-27.4-16.4-14.6-27.5-32.8-30.7-38.4-3.2-5.6-.3-8.6 2.5-11.4 2.5-2.5 5.5-6.5 8.3-9.7 2.8-3.2 3.7-5.5 5.5-9.3 1.9-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.7 23.5 9.2 31.6 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">WhatsApp</h4>
                <p className="text-gray-600 mb-2">+39 333 0000000</p>
                <a href="https://wa.me/393330000000" className="text-blue-600 font-semibold hover:underline">Chatta ora</a>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex items-start">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mr-6 shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                   <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeLinecap="round" strokeLinejoin="round"></path>
                   <polyline points="22,6 12,13 2,6" strokeLinecap="round" strokeLinejoin="round"></polyline>
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Email</h4>
                <p className="text-gray-600 mb-2">info@assistenzaremota.it</p>
                <a href="mailto:info@assistenzaremota.it" className="text-blue-600 font-semibold hover:underline">Invia una mail</a>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex items-start">
              <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center text-gray-600 mr-6 shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                   <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round"></circle>
                   <line x1="2" y1="12" x2="22" y2="12" strokeLinecap="round" strokeLinejoin="round"></line>
                   <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Sede e Operatività</h4>
                <p className="text-gray-600">Marrubiu (OR), Sardegna</p>
                <p className="text-gray-500 font-medium">Servizio attivo in tutta Italia via remoto</p>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
            <h3 className="text-xl font-bold mb-6">Invia un messaggio</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Nome Completo</label>
                <input type="text" className="w-full p-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" placeholder="Esempio: Mario Rossi" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Telefono / WhatsApp</label>
                <input type="tel" className="w-full p-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" placeholder="+39 3XX XXXXXXX" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Il tuo problema</label>
                <textarea className="w-full p-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all h-32" placeholder="Descrivi brevemente cosa non va nel tuo PC..."></textarea>
              </div>
              <button className="w-full bg-blue-600 text-white font-bold py-4 rounded-lg hover:bg-blue-700 transition-colors shadow-lg">
                INVIA MESSAGGIO
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
