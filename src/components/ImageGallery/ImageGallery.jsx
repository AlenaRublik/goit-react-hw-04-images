import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import { List} from './ImageGallery.styled';
import PropTypes from 'prop-types';

const ImageGallery = ({ pictures }) => {
  return (
    <List className="gallery">
      {pictures.map(image => (
        <ImageGalleryItem image={image} key={image.id} />
      ))}
    </List>
  );
};

ImageGallery.propTypes = {
  pictures: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired })
  ).isRequired,
};

export default ImageGallery;
