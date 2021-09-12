import React, {useState} from 'react';
import PropTypes from 'prop-types';
import ReactStars from 'react-stars';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import GlobalStyle from './GlobalStyle';

const AddProductRating = ({
  isOpen,
  onClose
}) => {
  const toggle = () => onClose();

  return (
    <div>
      <GlobalStyle />
      <Modal isOpen={isOpen} toggle={toggle} className="add-product-modal">
        <ModalHeader toggle={toggle}>
          <strong>What's your rating ?</strong>
        </ModalHeader>
        <ModalBody>
          <div className="mt-1 font-weight-bold">Rating</div>
          <div>
            <ReactStars
              count={5}
              size={30}
              color1={'#D3D3D3'}
              color2={'#ffa700'}
            />
          </div>

          <div className="mt-4 mb-2 font-weight-bold">Review</div>
          <textarea rows="5" placeholder="Start typing..."></textarea>
        </ModalBody>
        <ModalFooter>
          <Button outline color="secondary">Submit Review</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

AddProductRating.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
};

AddProductRating.defaultProps = {
  isOpen: false
};

export default AddProductRating;
