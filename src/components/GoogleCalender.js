const GoogleCalender = () => {
  return (
    <div className="w-full h-20 mt-4 flex justify-center items-center">
      <a
        href="https://www.google.com/calendar/render?action=TEMPLATE&text=Sachin+%26+Yashi+Wedding&dates=20221009T133000Z/20221009T173000Z&details=Join+us+at+Sundariya+Hotel,+Jodhpur.&location=Sundariya+Hotel,+Jodhpur+M.P.&sf=true&output=xml"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Save Sachin and Yashi's Wedding Date to Google Calendar"
        className="inline-block"
      >
        <button className="mx-auto block bg-red-700 text-white font-bold py-4 px-10 rounded-full shadow-lg animate-pulse hover:animate-none hover:bg-red-600 hover:scale-110 transition-all duration-300">
          🎉 Save the Date 🎉
        </button>
      </a>
    </div>
  );
};


export default GoogleCalender;
