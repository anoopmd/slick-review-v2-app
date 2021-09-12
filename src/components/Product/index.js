import React, {useState} from 'react';
import { useQuery } from 'react-query';
import ReactStars from 'react-stars'
import ProductsApi from 'api/products';
import StyledWrapper from './StyledWrapper';
import {getAverageRating} from 'utils/product';

const Product = () => {
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
  const productAverageRating = getAverageRating(product.ratings);
  const imageUrl = `assets/images/${product.image_url}`;

  return (
    <StyledWrapper className="product">
      <div className="d-flex flex-column flex-sm-row">
        <div className="mr-4 pb-4">
          <img src={imageUrl} width="200px"/>
        </div>
        <div className="flex-fill pb-4">
          <h2 className="title">{product.name}</h2>
          <div className="text-muted">{product.description}</div>
          <h4 className="mt-4">${product.price.toFixed(2)}</h4>
          <div className="product-rating d-flex flex-row pb-1">
            <div className="mr-2 rating-average">{productAverageRating.toFixed(1)}</div>
            <div className="rating">
              <ReactStars
                count={5}
                value={productAverageRating}
                size={30}
                color2={'#ffa700'}
              />
            </div>
          </div>
          <div className="mt-4">
            <button type="button" className="btn btn-outline-dark add-review">Add Review</button>
          </div>
        </div>
      </div>
      <hr/>

      <h6 className="mt-4 fw-bold">Reviews</h6>
      <div className="product-rating-list"></div>
    </StyledWrapper>
  );
};

export default Product;
