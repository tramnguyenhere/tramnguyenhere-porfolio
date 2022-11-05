import React from 'react';
import NavigationBar from './components/nav/Nav';
import Layout from './components/body/layout/Layout';

const App = () => {
  return (
    <div className='theme'>
      <NavigationBar />
      <Layout />
    </div>
  );
};

export default App;
