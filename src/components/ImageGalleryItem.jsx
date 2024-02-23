import React from 'react';
import css from './gallery.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ image, onClick }) => {
  return (
    <li
      className={css['gallery-item']}
      onClick={() => onClick(image.largeImageURL)}
    >
      <img src={image.webformatURL} alt="" />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
