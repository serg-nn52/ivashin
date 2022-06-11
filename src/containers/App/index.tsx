/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Content from 'components/Content';
import Footer from 'components/Footer';
import Header from 'components/Header';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Content />
      <Footer />
    </>
  );
};

export default App;
