import styled from 'styled-components';

const StyledWrapper = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  margin-top: 50px;

  .title {
    font-weight: 600;
  }

  .rating-average {
    font-weight: 600;
    position: relative;
    top: 3px;
  }

  .product-info {
    align-items: center;

    h3 {
      margin-bottom: 0;
    }
  }
`;

export default StyledWrapper;
