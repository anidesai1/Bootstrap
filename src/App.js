import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Footer from './Footer';
import LeftMenu from './LeftMenu';
import ControlledCarousel from './ControlledCarousel'; 

const App = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <div className="d-flex flex-grow-1">
      <LeftMenu />
        <div className="flex-grow-1 p-3">
          <ControlledCarousel />
          <p>This is the main content area.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;