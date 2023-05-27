import React from 'react';
import { useState } from 'react';

import {
  GalleryImg,
  LiItem,
} from './ImageGalleryItem.styled';
import { Modal } from 'components/Modal/Modal';
import PropTypes from 'prop-types';

export function ImageGalleryItem ({image}) {
  const [isShowModal, setIsShowModal] = useState(false);
  
 

  const handleModalOpen = () => {
   setIsShowModal(true );
  };

  const handleModalClose = () => {
    setIsShowModal(false);
  };

    return (
      <>
        <LiItem className="list-group-item">
            <GalleryImg
              src={image.webformatURL}
              alt={image.tags}
              loading="lazy"
              onClick={handleModalOpen}
            />
        </LiItem>
        {isShowModal && (
          <Modal
            largeImageURL={image.largeImageURL}
            tags={image.tags}
            onClose={handleModalClose}
          />
        )}
      </>
    );
  }


 ImageGalleryItem.propTypes = {
    image: PropTypes.shape({
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    }).isRequired,
  };

export default ImageGalleryItem;


// export class ImageGalleryItem extends Component {
//   state = {
//     isShowModal: false,
//   };
//   static propTypes = {
//     image: PropTypes.shape({
//       webformatURL: PropTypes.string.isRequired,
//       largeImageURL: PropTypes.string.isRequired,
//     }).isRequired,
//   };

//   handleModalOpen = () => {
//     this.setState({ isShowModal: true });
//   };

//   handleModalClose = () => {
//     this.setState({ isShowModal: false });
//   };
//   render() {
//     const image = this.props.image;

//     return (
//       <>
//         <LiItem className="list-group-item">
//             <GalleryImg
//               src={image.webformatURL}
//               alt={image.tags}
//               loading="lazy"
//               onClick={this.handleModalOpen}
//             />
//         </LiItem>
//         {this.state.isShowModal && (
//           <Modal
//             largeImageURL={image.largeImageURL}
//             tags={image.tags}
//             onClose={this.handleModalClose}
//           />
//         )}
//       </>
//     );
//   }
// }