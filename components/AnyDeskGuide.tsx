
import React from 'react';

const AnyDeskGuide: React.FC = () => {
  return (
    <section id="guida-anydesk" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center p-3 bg-red-50 rounded-2xl mb-4">
              <svg className="w-8 h-8 text-red-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 12l10 10 10-10L12 2zm0 4.5L17.5 12 12 17.5 6.5 12 12 6.5z" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Guida rapida ad AnyDesk</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Utilizziamo AnyDesk perché è il software più sicuro e leggero al mondo per l'assistenza remota. Ecco come iniziare in pochi secondi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Immagine Mockup / Illustrazione */}
            <div className="relative">
              <div className="bg-gray-900 rounded-2xl shadow-2xl overflow-hidden border-4 border-gray-800">
                <div className="bg-gray-800 p-2 flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-gray-400 text-xs font-mono ml-4">AnyDesk - Nuova Sessione</span>
                </div>
                <div className="p-8 bg-white">
                  <div className="flex flex-col items-center justify-center py-10 border-2 border-dashed border-gray-100 rounded-xl">
                    <span className="text-gray-400 text-sm mb-2">Il tuo indirizzo AnyDesk</span>
                    <span className="text-3xl md:text-4xl font-bold text-red-600 tracking-wider">491 935 382</span>
                    <div className="mt-4 flex items-center text-green-600 text-xs font-bold bg-green-50 px-3 py-1 rounded-full">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                      Pronto per la connessione
                    </div>
                  </div>
                </div>
              </div>
              {/* Badge info sovrapposto */}
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100 hidden md:block max-w-[200px]">
                <p className="text-xs text-gray-500 italic">
                  "Dovrai solo comunicarmi questo numero di 9 cifre per permettermi di aiutarti."
                </p>
              </div>
            </div>

            {/* Testo istruzioni */}
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-red-600 text-white rounded-lg flex items-center justify-center font-bold">1</div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-1">Scarica AnyDesk</h4>
                  <p className="text-gray-600">
                    Clicca su <a href="https://anydesk.com/it/downloads/thank-you?dv=win_exe" target="_blank" rel="noopener noreferrer" className="text-red-600 font-bold underline">questo link</a> per scaricare il file. È un eseguibile leggero che non richiede installazione invasiva.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-red-600 text-white rounded-lg flex items-center justify-center font-bold">2</div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-1">Trova il tuo ID</h4>
                  <p className="text-gray-600">
                    Apri il programma. Vedrai un codice di 9 o 10 cifre sotto la voce <span className="font-bold text-gray-900">"Questo dispositivo"</span> o <span className="font-bold text-gray-900">"Il tuo indirizzo"</span>.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-red-600 text-white rounded-lg flex items-center justify-center font-bold">3</div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-1">Accetta la connessione</h4>
                  <p className="text-gray-600">
                    Quando avvierò la connessione, apparirà una finestra sul tuo schermo. Clicca su <span className="text-green-600 font-bold">"Accetta"</span>. Potrai interrompere la sessione in qualsiasi momento.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-xl">
                <p className="text-sm text-yellow-800">
                  <span className="font-bold">Nota sulla sicurezza:</span> Solo tu puoi autorizzare l'accesso. Senza il tuo "OK" esplicito sul computer, nessuno può connettersi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnyDeskGuide;
