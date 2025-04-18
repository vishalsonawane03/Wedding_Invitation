// components/LoadingSpinner.js
import React from 'react';

const Rsvp = () => {
  return (
    <section id="rsvp" className="py-16 bg-gradient-to-b from-red-800 to-red-900 text-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">RSVP</h2>
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Full Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="attending">
              Will you attend?
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="attending"
            >
              <option>Yes, I will attend</option>
              <option>Sorry, I cannot attend</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="guests">
              Number of Guests
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="guests"
              type="number"
              min="0"
              placeholder="0"
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-red-700 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="button"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
  );
};

export default Rsvp;
