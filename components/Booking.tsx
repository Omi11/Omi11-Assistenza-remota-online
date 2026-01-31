
import React, { useState } from 'react';

const Booking: React.FC = () => {
  const [selectedSlot, setSelectedSlot] = useState<string>('');
  const [selectedDay, setSelectedDay] = useState<string>('Oggi');

  const slots = [
    '9:00 - 11:00',
    '11:00 - 13:00',
    '15:00 - 17:00',
    '17:00 - 19:00'
  ];

  const handleBooking = () => {
    if (!selectedSlot) {
      alert('Per favore, seleziona una fascia oraria prima di continuare.');
      return;
    }
    const message = encodeURIComponent(`Ciao, voglio prenotare per ${selectedDay} alle ore ${selectedSlot}`);
    window.open(`https://wa.me/393330000000?text=${message}`, '_blank');
  };

  return (
    <section id="prenota" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-blue-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-blue-500 rounded-full opacity-20"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-6 text-center">Prenota il tuo appuntamento</h2>
            <p className="text-blue-100 text-center mb-10">Scegli la fascia oraria che preferisci:</p>
            
            <div className="mb-8">
              <label className="block text-sm font-semibold mb-3">Seleziona il giorno:</label>
              <select 
                className="w-full p-4 rounded-xl bg-blue-700 text-white border border-blue-500 focus:outline-none focus:ring-2 focus:ring-white"
                value={selectedDay}
                onChange={(e) => setSelectedDay(e.target.value)}
              >
                <option value="Lunedì">Lunedì</option>
                <option value="Martedì">Martedì</option>
                <option value="Mercoledì">Mercoledì</option>
                <option value="Giovedì">Giovedì</option>
                <option value="Venerdì">Venerdì</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {slots.map((slot) => (
                <button
                  key={slot}
                  onClick={() => setSelectedSlot(slot)}
                  className={`p-4 rounded-xl font-bold transition-all ${
                    selectedSlot === slot 
                    ? 'bg-white text-blue-600 shadow-lg scale-105' 
                    : 'bg-blue-700 text-white hover:bg-blue-500 border border-blue-500'
                  }`}
                >
                  {slot}
                </button>
              ))}
            </div>

            <button
              onClick={handleBooking}
              className="w-full bg-white text-blue-600 py-5 rounded-2xl font-extrabold text-xl shadow-xl hover:bg-gray-100 transition-colors transform active:scale-95 flex items-center justify-center"
            >
              PRENOTA ORA
              <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </button>
            
            <p className="mt-6 text-sm text-center text-blue-100 italic">
              "Dopo aver prenotato, ti confermo subito su WhatsApp!"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
