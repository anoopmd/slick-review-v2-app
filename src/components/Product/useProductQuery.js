import { useState, useEffect } from 'react';
import ProductsApi from 'api/products';
import io from 'socket.io-client';
import useProductState from './useProductState';

const useProductQuery = (productId) => {
  const [state, dispatch] = useProductState();

  useEffect(() => {
    const newSocket = io(`http://${window.location.hostname}:9000`);

    newSocket.on('product-rating:added', (payload) => {
      if(payload.product_id == productId && payload.rating.id) {
        dispatch({
          type: 'product-rating:added',
          payload: payload.rating
        });
      }
    });

    return () => newSocket.close();
  }, [productId]);

  useEffect(() => {
    ProductsApi
      .getById(productId)
      .then((response) => {
        dispatch({
          type: 'product:loaded',
          payload: response.data
        });
      })
      .catch((err) => {
        dispatch({
          type: 'product:load-error',
          payload: err
        });
      })
  }, [productId]);

  return state;
};

export default useProductQuery;
