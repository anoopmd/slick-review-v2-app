import { post } from './base';

const ProductRatings = {
  add: (productId, rating, review) => post(`/v1/products/${productId}/rating`, {
    rating: rating,
    review: review
  })
}

export default ProductRatings;
