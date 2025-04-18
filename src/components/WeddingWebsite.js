import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from './Footer';
import Gallery from './Gallary';
import GoogleCalender from './GoogleCalender';
import LoadingSpinner from './LoadingSpinner';

function WeddingWebsite() {

  const { slug } = useParams();
  const [data, setData] = useState(null);

  
  // useEffect(() => {
  //   fetch(`https://invitations.free.beeceptor.com/invitations/${slug}`)
  //     .then((res) => res.json())
  //     .then((json) => {
  //       console.log("Fetched JSON:", json);
  //       setData(json);
  //     })
  //     .catch((err) => console.error('Failed to load invitation data', err));
  // }, [slug]);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/data/${slug}.json`)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch JSON');
        return res.json();
      })
      .then((json) => {
        console.log("Fetched JSON:", json);
        setData(json);
      })
      .catch((err) => console.error("Fetch error:", err));
  }, [slug]);
  
  if (!data) {
    return <LoadingSpinner />;
  }

  console.log("Data1:",data);

  return (
    <div className="font-serif">
      {/* Centered Logo/Image at top */}


      <section
        id="home"
        className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-yellow-800 to-yellow-900 relative overflow-hidden font-serif"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{
            backgroundImage: `url(${data.backgroundImage})`,
          }}
        ></div>

        {/* Logo at Top */}
        <div className="absolute top-3 z-10">
          <img
            src={data.logoImage}
            alt="Ganpati Logo"
            className="h-24 md:h-30 object-contain transition-all duration-300"
          />
        </div>

        {/* Text Content */}
        <div className="flex flex-col justify-center items-center text-center relative z-10 h-full transform translate-y-20">
          <h1 className="floral-text text-3xl md:text-4xl font-bold text-white mb-4">
            {data.coupleName}
          </h1>
        </div>

      </section>


      {/* Couple Information Section */}
      <section className="py-10 bg-red-50">
        <div className="container mx-auto px-4">
          {/* <h2 className="text-3xl md:text-4xl font-bold text-center text-red-800 mb-12">About The Couple</h2> */}
          <div className="text-center mb-8">
            {/* <img
              src="https://i.postimg.cc/7ZWY8BdR/Chat-GPT-Image-Apr-18-2025-03-13-52-PM.png"
              alt="Wedding Rings"
              className="w-16 h-16 mx-auto mb-4"

              --------We request your gracious presence with the family on the auspicious occasion of the Wedding of 
            /> */}
            <h1 className="text-2xl tracking-wide uppercase text-gray-800 mb-1">BE OUR GUEST</h1>    
            <h3 className="text-xl tracking-wide uppercase text-gray-800 mb-0">WE EXPECT YOUR PRESENCE AT</h3>
            <h3 className="text-xl tracking-wide uppercase text-gray-800">OUR WEDDING</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Groom Information */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-center mb-6">
                <img
                  src={data.groomImg}
                  alt="Sachin"
                  className="w-40 h-40 object-cover rounded-full mx-auto mb-4 border-4 border-red-700"
                />
                <p className="text-gray-600 italic">Chi.</p>
                <h3 className="text-2xl font-bold text-red-800">{data.groomName}</h3>
              </div>

              <div className="text-center mb-6 space-y-3 mb-6">
                <p className="text-gray-700"> Mr. & Mrs. Sharma</p>
                {/* <p className="text-gray-700"><span className="font-semibold">Education:</span> MBA from Delhi University</p>
                <p className="text-gray-700"><span className="font-semibold">Profession:</span> Software Engineer</p> */}
              </div>

              <div className="flex justify-center space-x-4">
                <a href="mailto:sachin@example.com" className="text-red-800 hover:text-red-600">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </a>
                <a href="https://instagram.com/sachin" target="_blank" rel="noopener noreferrer" className="text-red-800 hover:text-red-600">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
                <a href="https://facebook.com/sachin" target="_blank" rel="noopener noreferrer" className="text-red-800 hover:text-red-600">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Bride Information */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-center mb-6">
                <img
                  src={data.brideImg}
                  alt="Yashi"
                  className="w-40 h-40 object-cover rounded-full mx-auto mb-4 border-4 border-red-700"
                />
                <p className="text-gray-600 italic">Chi. soi. ka.</p>
                <h3 className="text-2xl font-bold text-red-800">{data.brideName}</h3>
              </div>

              <div className="text-center mb-6 space-y-3 mb-6">
                <p className="text-gray-700"> Mr. & Mrs. Gupta</p>
                {/* <p className="text-gray-700"><span className="font-semibold">Education:</span> MSc in Computer Science</p>
                <p className="text-gray-700"><span className="font-semibold">Profession:</span> UX Designer</p> */}
              </div>

              <div className="flex justify-center space-x-4">
                <a href="mailto:yashi@example.com" className="text-red-800 hover:text-red-600">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </a>
                <a href="https://instagram.com/yashi" target="_blank" rel="noopener noreferrer" className="text-red-800 hover:text-red-600">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
                <a href="https://facebook.com/yashi" target="_blank" rel="noopener noreferrer" className="text-red-800 hover:text-red-600">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="story" className="py-16 bg-red-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-red-800 mb-12">Our Story</h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img src={data.coupleImg} alt="Couple" className="w-full" />
              </div>
            </div>
            <div className="md:w-1/2 md:pl-10">
              <h3 className="text-2xl font-semibold text-red-700 mb-4">How We Met</h3>
              <p className="text-gray-700 mb-6">
                Our journey began with a chance encounter that blossomed into love.
                Through every moment spent together, our bond grew stronger and deeper.
              </p>
              <h3 className="text-2xl font-semibold text-red-700 mb-4">The Proposal</h3>
              <p className="text-gray-700">
                Under a canopy of stars, with hearts full of dreams for our future,
                we promised to walk through life hand in hand, forever.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-16 bg-red-800 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Wedding Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-red-900 p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-red-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Mehndi Ceremony</h3>
              <p className="text-red-200 mb-3">8th October, 2022</p>
              <p className="text-red-200">5:00 PM</p>
            </div>
            <div className="bg-red-900 p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-red-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Wedding Ceremony</h3>
              <p className="text-red-200 mb-3">9th October, 2022</p>
              <p className="text-red-200">7:00 PM</p>
            </div>
            <div className="bg-red-900 p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-red-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Reception</h3>
              <p className="text-red-200 mb-3">10th October, 2022</p>
              <p className="text-red-200">6:00 PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* <Rsvp/> */}

      {data?.gallary && <Gallery gallary={data.gallary} />}

      {/* Countdown Section */}
      <section className="py-16 bg-red-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-red-800 mb-8">Join Us On Our Special Day</h2>
          <p className="text-xl text-gray-700 mb-6">Sundariya Hotel, Jodhpur M.P.</p>
          <p className="text-lg text-gray-600 mb-10">9th October, 2022 • 07:00 PM</p>

          <GoogleCalender/>

          {/* Embedded Google Map */}
          <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Sundariya Hotel Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.063820804651!2d74.77953347385547!3d20.990078689108767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bded191554ca973%3A0x8358b972ac62f891!2sPatil&#39;s%20Farm!5e0!3m2!1sen!2sin!4v1744972369752!5m2!1sen!2sin"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>


      </section>

      <Footer couple_name = {data.coupleName}/>

    </div>
  );
}

export default WeddingWebsite;