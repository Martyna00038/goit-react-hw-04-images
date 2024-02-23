import { useState, useEffect } from 'react';
import axios from 'axios';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Loader from './Loader';
import Modal from './Modal';

const API_KEY = '41314450-564ca3ff5df330e0b06201b28';
const BASE_URL = 'https://pixabay.com/api/';

const Featcher = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageUrl, setSelectedImagesUrl] = useState('');
  const [activePage, setActivePage] = useState(1);
  const [query, setQuery] = useState('');

  const fetchData = async (query, page = 1) => {
    setIsLoading(true);

    const url = `${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;

    try {
      const response = await axios.get(url);
      setImages(prevImages =>
        page === 1 ? response.data.hits : [...prevImages, ...response.data.hits]
      );
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const queryChange = newQuery => {
    setQuery(newQuery);
    setActivePage(1);
  };

  const loadMore = () => {
    setActivePage(prev => prev + 1);
  };

  const openModal = imageUrl => {
    setSelectedImagesUrl(imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImagesUrl('');
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (query) {
      fetchData(query, activePage);
    }
  }, [query, activePage]);

  return (
    <div>
      {isLoading && <Loader />}
      <Searchbar onSubmit={queryChange} />
      <ImageGallery images={images} onClick={openModal} />
      {images.length > 0 && !isLoading && (
        <Button onClick={loadMore} disabled={false} />
      )}
      <Modal
        isOpen={isModalOpen}
        imageUrl={selectedImageUrl}
        onClose={closeModal}
      />
    </div>
  );
};

export default Featcher;
