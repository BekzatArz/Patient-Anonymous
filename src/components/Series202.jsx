import React, { useEffect, useState} from 'react';

import Info from './Info';
import ImageContainer from './ImageContainer';
import AddImage from './AddImage';

import '../App.css';

const IMAGES_PER_PAGE = 411; // Количество изображений на одной странице

const Series202 = ({hyppo}) => {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  

  useEffect(() => {
    const importImages = async () => {
      const images = {};
      const imageModules = import.meta.glob('../assets/Series-202/*.jpg');
      for (const path in imageModules) {
        const key = path.replace('./images/', '');
        images[key] = await imageModules[path]();
      }
      return Object.values(images);
    };

    importImages().then(images => setImages(images));
  }, []);

  // Функция для вычисления индекса первого и последнего изображения на текущей странице
  const firstIndex = (currentPage - 1) * IMAGES_PER_PAGE;
  const lastIndex = currentPage * IMAGES_PER_PAGE;

  // Функция для получения изображений текущей страницы
  const getCurrentPageImages = () => {
    return images.slice(firstIndex, lastIndex);
  };

  // Функция для установки номера текущей страницы
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className='app'>
      <Info />
      <div className="container">
        <ImageContainer images={getCurrentPageImages()} />

      </div>
      <AddImage />
      {/* Добавьте кнопки для перехода на предыдущую и следующую страницы */}
      <div className="pagination">
        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
        <span>{currentPage}</span>
        <button onClick={() => handlePageChange(currentPage + 1)} disabled={lastIndex >= images.length}>Next</button>
      </div>
    </div>
  );
};

export default Series202;