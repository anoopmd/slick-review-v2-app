import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactStars from 'react-stars';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ProductRatings from 'api/product-ratings';
import GlobalStyle from './GlobalStyle';

const AddProductRating = ({
  productId,
  isOpen,
  onSuccess,
  onClose
}) => {
  const closeModal = () => {
    setRating(0);
    setReview('');
    onClose();
  }

  const [isSubmittingReview, setIsSubmittingReview] = useState(false);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');

  const handleSubmitReview = () => {
    setIsSubmittingReview(true);
    ProductRatings
      .add(productId, rating, review)
      .then(() => {
        setIsSubmittingReview(false);
        setRating(0);
        setReview('');
        onSuccess();
      })
      .catch((error) => {
        setIsSubmittingReview(false);
      });
  };

  return (
    <div>
      <GlobalStyle />
      <Modal isOpen={isOpen} toggle={closeModal} className="add-product-modal">
        <ModalHeader toggle={closeModal}>
          <strong>What's your rating ?</strong>
        </ModalHeader>
        <ModalBody>
          <div className="mt-1 font-weight-bold">Rating</div>
          <div>
            <ReactStars
              count={5}
              size={30}
              value={rating}
              onChange={(newRating) => setRating(newRating)}
              color1={'#D3D3D3'}
              color2={'#ffa700'}
            />
          </div>

          <div className="mt-4 mb-2 font-weight-bold">Review</div>
          <textarea
            rows="5"
            placeholder="Start typing..."
            value={review}
            onChange={(e) => setReview(e.target.value)}
          >
          </textarea>
        </ModalBody>
        <ModalFooter>
          <button
            type="button"
            className="btn btn-outline-dark add-review"
            onClick={() => handleSubmitReview()}
            disabled={!isSubmittingReview && rating > 0 && review.length && review.trim().length > 0 ? false : true}
          >
            Submit Review
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

AddProductRating.propTypes = {
  isOpen: PropTypes.bool,
  productId: PropTypes.number,
  onSuccess: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

AddProductRating.defaultProps = {
  isOpen: false
};

export default AddProductRating;
