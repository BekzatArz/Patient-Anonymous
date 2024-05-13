import React, { useEffect, useRef } from 'react';
import '../styles/ImageContainer.css';

const ImageContainer = ({ images }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = (event) => {
        console.log(event.detail)
      event.preventDefault();
      const container = containerRef.current;
      if (container) {
        const delta = event.deltaY || -event.wheelDelta || event.detail || event.touches[0].clientY - event.touches[1].clientY;;
        const step = 5.12; // Фиксированное значение прокрутки
        const newPosition = container.scrollTop + delta * step;
        const maxScroll = container.scrollHeight - container.clientHeight;
        if (newPosition <= maxScroll && newPosition >= 0) {
          container.scrollTo({
            top: newPosition,
            behavior: 'auto',
          });
        }
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleScroll);
      container.addEventListener('touchmove', handleScroll);
    }

    return () => {
      const container = containerRef.current;
      if (container) {
        container.removeEventListener('wheel', handleScroll);
        container.removeEventListener('touchmove', handleScroll);

      }
    };
  }, []);

  return (
    <div ref={containerRef} className='imageContainer'>
      {images.map((image, index) => (
        <img key={index} src={image.default} alt={`Image ${index}`} />
      ))}
    </div>
  );
};

export default ImageContainer;