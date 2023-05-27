import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Overlay, ModalWindow } from './Modal.styled';

export function Modal ({onClose, largeImageURL, tags }) {

  
  useEffect(() => {

    const handleKeyDown = e => {
    if (e.key === 'Escape') {
      onClose();
    }
  };
    document.addEventListener('keydown', handleKeyDown);
  
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    }
  }, [onClose])
  

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

    const modalPortal = document.querySelector('#modal-root');

    return createPortal(
      <Overlay onClick={handleBackdropClick}>
        <ModalWindow>
          <img src={largeImageURL} alt={tags} />
        </ModalWindow>
      </Overlay>,
      modalPortal
    );
  
}

  Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
}


// export class Modal extends Component {
//   static propTypes = {
//     largeImageURL: PropTypes.string.isRequired,
//     tags: PropTypes.string.isRequired,
//     onClose: PropTypes.func.isRequired,
//   };

//   componentDidMount() {
//     document.addEventListener('keydown', this.handleKeyDown);
//   }

//   componentWillUnmount() {
//     document.removeEventListener('keydown', this.handleKeyDown);
//   }

//   handleKeyDown = e => {
//     if (e.key === 'Escape') {
//       this.props.onClose();
//     }
//   };

//   handleBackdropClick = e => {
//     if (e.target === e.currentTarget) {
//       this.props.onClose();
//     }
//   };

//   render() {
//     const { largeImageURL, tags } = this.props;
//     const modalPortal = document.querySelector('#modal-root');

//     return createPortal(
//       <Overlay onClick={this.handleBackdropClick}>
//         <ModalWindow>
//           <img src={largeImageURL} alt={tags} />
//         </ModalWindow>
//       </Overlay>,
//       modalPortal
//     );
//   }
// }
