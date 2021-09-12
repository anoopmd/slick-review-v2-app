import React from 'react';
import GlobalStyle from '../globalStyles';
import StyledWrapper from './StyledWrapper';
import Navbar from '../components/Navbar';
import Product from '../components/Product';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <React.Fragment>
      <main className="flex flex-grow slick-app">
        <GlobalStyle/>
        <div className="w-full">
          <StyledWrapper className="mx-auto px-6">
            <Navbar/>
            <Product />
          </StyledWrapper>
        </div>
      </main>
    </React.Fragment>
  );
};
export default App;