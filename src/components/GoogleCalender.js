
const GoogleCalender = () => {
    return(
        <div className="w-full h-15 m-4 rounded-lg overflow-hidden">
        <a
          href="https://www.google.com/calendar/render?action=TEMPLATE&text=Sachin+%26+Yashi+Wedding&dates=20221009T133000Z/20221009T173000Z&details=Join+us+at+Sundariya+Hotel,+Jodhpur.&location=Sundariya+Hotel,+Jodhpur+M.P.&sf=true&output=xml"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-red-700 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition hover:scale-105">
            Save the Date
          </button>
        </a>
      </div>
    );
};

export default GoogleCalender;