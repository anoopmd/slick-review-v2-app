import { get } from './base';

const Products = {
  getById: (id) =>get(`/v1/products/${id}`)
}

export default Products;
