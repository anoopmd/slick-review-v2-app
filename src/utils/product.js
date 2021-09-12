import sum from 'lodash/sum';
import map from 'lodash/map';

export const getAverageRating = (ratings) => {
  const productRatings = map(ratings, (r) => r.rating);

  return sum(productRatings) / productRatings.length;
}