import React, { useEffect, useRef, useState } from 'react';
import '../styles/ImageContainer.css';

const ImageContainer = ({ images }) => {
  const containerRef = useRef(null);
  const touchStartYRef = useRef(0); // Запоминаем начальную позицию Y при касании
  const [scrollRatio, setScrollRatio] = useState(0); // Отношение положения скроллбара к максимальной прокрутке

  useEffect(() => {
    const handleScroll = (event) => {
      event.preventDefault();
      const container = containerRef.current;
      if (container) {
        let direction;
        // Если это событие колесика мыши или тачпада
        if (event.deltaY || event.wheelDelta || event.detail) {
          direction = event.deltaY || -event.wheelDelta || event.detail;
        } else if (event.touches && event.touches.length === 1) { // Если это сенсорное событие и есть только одно касание
          const touchY = event.touches[0].clientY;
          // Определяем направление движения скроллбара на основе изменения координаты Y касания
          direction = touchY > touchStartYRef.current ? -1 : 1;
          touchStartYRef.current = touchY; // Обновляем начальную позицию Y при каждом событии touchmove
        }

        const scrollAmount = 512 * Math.sign(direction); // Фиксированное значение прокрутки
        const newPosition = container.scrollTop + scrollAmount;
        const maxScroll = container.scrollHeight - container.clientHeight;
        if (newPosition <= maxScroll && newPosition >= 0) {
          container.scrollTo({
            top: newPosition,
            behavior: 'auto',
          });
          // Обновляем отношение положения скроллбара к максимальной прокрутке
          setScrollRatio(container.scrollTop / maxScroll);
        }
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleScroll); // Для колесика мыши
      container.addEventListener('touchmove', handleScroll); // Для сенсорного скролла на мобильных устройствах
      container.addEventListener('scroll', handleScroll); // Для скроллбара
    }

    return () => {
      const container = containerRef.current;
      if (container) {
        container.removeEventListener('wheel', handleScroll);
        container.removeEventListener('touchmove', handleScroll);
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, [containerRef]);

  // Вычисляем шаг прокрутки в зависимости от положения скроллбара
  const scrollStep = 512 * scrollRatio;

  return (
    <div ref={containerRef} className='imageContainer'>
      {images.map((image, index) => (
        <img key={index} src={image.default} alt={`Image ${index}`} />
      ))}
      {/* Добавляем стилизованный скроллбар с шагом прокрутки */}
      <div className="customScrollbar" style={{ top: `${scrollRatio * 100}%` }} onClick={() => console.log(scrollStep)}></div>
    </div>
  );
};

export default ImageContainer;
