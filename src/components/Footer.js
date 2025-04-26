const Footer = ({couple_name}) => {
    return(
      <footer className="bg-red-900 text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-4">{couple_name}</p>
        <p className="text-sm text-red-200">© 2025 - With love and blessings</p>
      </div>
      
    </footer>
    )
};

export default Footer;