import styled from 'styled-components';

const StyledWrapper = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  margin-top: 50px;

  .title {
    font-weight: 600;
  }

  .product-average-rating {
    margin-top: 2rem;
    align-items: center;

    .rating {
      font-weight: 600;
      position: relative;
      top: 3px;
    }
  }
`;

export default StyledWrapper;
