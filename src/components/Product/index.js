import React, {useState} from 'react';
import { useQuery } from 'react-query';
import ReactStars from 'react-stars';
import ProductsApi from 'api/products';
import StyledWrapper from './StyledWrapper';
import ProductRating from '../ProductRating';
import AddProductRating from '../AddProductRating';
import {getAverageRating} from 'utils/product';

const Product = () => {
  const [isAddReviewModalOpen, setIsAddReviewModalOpen] = useState(false);
  const [productId, setProductId] = useState(1);
  const {
    isLoading,
    data
  } = useQuery(
    ['get-product-by-id', productId],
    () => ProductsApi.getById(productId)
  );

  if(isLoading) {
    return (
      <StyledWrapper></StyledWrapper>
    );
  }
  
  const product = data.data;
  const productRatings = product.ratings;
  const productAverageRating = getAverageRating(productRatings);
  const imageUrl = `assets/images/${product.image_url}`;

  return (
    <StyledWrapper className="product">
      <AddProductRating isOpen={isAddReviewModalOpen} onClose={() => setIsAddReviewModalOpen(false)}/>
      <div className="d-flex flex-column flex-sm-row">
        <div className="mr-4 pb-4">
          <img src={imageUrl} width="200px"/>
        </div>
        <div className="flex-fill pb-4">
          <h2 className="title">{product.name}</h2>
          <div className="text-muted">{product.description}</div>
          <h4 className="mt-4">${product.price.toFixed(2)}</h4>
          <div className="product-average-rating d-flex flex-row pb-1">
            <div className="mr-2 rating">{productAverageRating.toFixed(1)}</div>
            <div>
              <ReactStars
                count={5}
                value={productAverageRating}
                size={30}
                color1={'#D3D3D3'}
                color2={'#ffa700'}
                edit={false}
              />
            </div>
          </div>
          <div className="mt-4">
            <button
              type="button"
              className="btn btn-outline-dark add-review"
              onClick={() => setIsAddReviewModalOpen(true)}
            >
              Add Review
            </button>
          </div>
        </div>
      </div>
      <hr/>

      <h6 className="mt-4 font-weight-bold">Reviews</h6>
      <div className="product-rating-list">
        {productRatings && productRatings.length && productRatings.map((rating) => {
          return (
            <ProductRating key={rating.id} rating={rating.rating} review={rating.review}></ProductRating>
          )
        })}
      </div>
    </StyledWrapper>
  );
};

export default Product;
