import React from 'react';
import ReactStars from 'react-stars'

const ProductRating = ({
  rating,
  review
}) => {

  return (
    <div className="product-rating d-flex flex-row pt-1 pb-1 align-items-center">
      <div className="mr-4">
        <ReactStars
          count={5}
          value={rating}
          size={24}
          color2={'#ffa700'}
          edit={false}
        />
      </div>
      <div className="font-weight-bold mr-2">{rating}</div>
      <div className="text-secondary">
        {review}
      </div>
    </div>
  );
};

export default ProductRating;
