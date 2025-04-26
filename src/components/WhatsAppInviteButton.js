import React from 'react';

const WhatsAppInviteButton = ({ phoneNumber }) => {
  const sendWhatsAppInvite = () => {
    const message = encodeURIComponent(
      "You're invited to Sachin & Yashi's Wedding! 🎉🎊 Join us on *10th October, 2022* at Sundariya Hotel, Jodhpur. See you there! 🥰 http://192.168.0.107:3000/sachin-yashi"
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="w-full h-20 flex justify-center items-center">
      

        <button
      onClick={sendWhatsAppInvite}
      className="bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-6 rounded-full shadow-md transition-all hover:scale-105"
    >
      Send WhatsApp Invite
    </button>
    {/* mx-auto block bg-red-700 text-white font-bold py-4 px-10 rounded-full shadow-lg animate-bounce hover:animate-none hover:bg-red-600 hover:scale-110 transition-all duration-300 */}
    </div>
    
  );
};

export default WhatsAppInviteButton;
