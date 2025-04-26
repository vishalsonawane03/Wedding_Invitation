const Location = () => {
    return (
      <div className="w-full max-w-3xl mx-auto my-8 p-4 bg-white rounded-3xl shadow-2xl border border-red-300">
        <h2 className="text-2xl font-extrabold text-red-700 text-center mb-4">
          📍 Wedding Venue
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Sundariya Hotel, Jodhpur M.P. <br />
          9th October, 2022 • 07:00 PM
        </p>
        <div className="w-full h-96 rounded-2xl overflow-hidden shadow-md">
          <iframe
            title="Sundariya Hotel Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.063820804651!2d74.77953347385547!3d20.990078689108767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bded191554ca973%3A0x8358b972ac62f891!2sPatil&#39;s%20Farm!5e0!3m2!1sen!2sin!4v1744972369752!5m2!1sen!2sin"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0"
          ></iframe>
        </div>
      </div>
    );
  };
  
  export default Location;
  