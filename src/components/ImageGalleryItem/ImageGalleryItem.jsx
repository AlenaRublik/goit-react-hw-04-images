import React from 'react';
import { Component } from 'react';

import {
  GalleryImg,
  LiItem,
} from './ImageGalleryItem.styled';
import { Modal } from 'components/Modal/Modal';
import PropTypes from 'prop-types';

export class ImageGalleryItem extends Component {
  state = {
    isShowModal: false,
  };
  static propTypes = {
    image: PropTypes.shape({
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    }).isRequired,
  };

  handleModalOpen = () => {
    this.setState({ isShowModal: true });
  };

  handleModalClose = () => {
    this.setState({ isShowModal: false });
  };
  render() {
    const image = this.props.image;

    return (
      <>
        <LiItem className="list-group-item">
            <GalleryImg
              src={image.webformatURL}
              alt={image.tags}
              loading="lazy"
              onClick={this.handleModalOpen}
            />
        </LiItem>
        {this.state.isShowModal && (
          <Modal
            largeImageURL={image.largeImageURL}
            tags={image.tags}
            onClose={this.handleModalClose}
          />
        )}
      </>
    );
  }
}

export default ImageGalleryItem;
