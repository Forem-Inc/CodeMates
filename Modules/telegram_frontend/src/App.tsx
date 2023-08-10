import React from 'react';

import Header from './components/Header/Header';
import ContentWrapper from './components/ContentWrapper/ContentWrapper';
import NavPanel from './components/NavPanel/NavPanel';

function App() {
  return (
    <div className="App" style={{ backgroundColor: '#EFEEF4', height: '100vh', display: 'flex', flexDirection: 'column'}}>
      <Header />
      <ContentWrapper />
      <NavPanel />
    </div>
  );
}

export default App;
