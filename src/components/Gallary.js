import { useRef, useState } from 'react';

const Gallary = ({ gallary }) => {
  const imageUrls = gallary ? Object.values(gallary) : [];
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  if (!imageUrls.length) return null;

  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const distance = touchStartX.current - touchEndX.current;

    if (distance > 50 && currentIndex < imageUrls.length - 1) {
      setCurrentIndex(currentIndex + 1); // swipe left
    }

    if (distance < -50 && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1); // swipe right
    }

    // reset
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section id="gallery" className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-red-800 mb-8">Our Gallery</h2>

        <div
          className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-lg shadow-lg"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <img
            src={imageUrls[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="w-full h-96 object-cover transition-all duration-500"
          />
        </div>

        <div className="flex justify-center mt-4 space-x-2">
          {imageUrls.map((_, i) => (
            <button
              key={i}
              className={`w-3 h-3 rounded-full ${
                i === currentIndex ? 'bg-red-800' : 'bg-gray-300'
              }`}
              onClick={() => setCurrentIndex(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallary;
