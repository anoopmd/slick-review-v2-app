import { useReducer } from 'react';
import produce from 'immer';

const reducer = (state, action) => {
  switch (action.type) {
    case 'product:loaded': {
      return produce(state, (draft) => {
        draft.product = action.payload;
        draft.isLoading = false;
        draft.isError = false;
      });
    }

    case 'product:load-error': {
      return produce(state, (draft) => {
        draft.isLoading = false;
        draft.isError = true;
      });
    }

    case 'product-rating:added': {
      return produce(state, (draft) => {
        if(draft.product && draft.product.id) {
          draft.product.ratings.push(action.payload);
        }
      });
    }

    default: {
      return state;
    }
  }
}

const initialState = {
  isLoading: true,
  isError: false,
  product: null
};

const useProductState = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return [state, dispatch];
};

export default useProductState;

