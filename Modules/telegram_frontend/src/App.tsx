import React, {useState} from 'react';

// Components
import Header from './components/Header/Header';
import ContentWrapper from './components/ContentWrapper/ContentWrapper';
import NavPanel from './components/NavPanel/NavPanel';
// Pages
import Carusel from './pages/Carusel';
import MyProfile from './pages/MyProfile';


function App() {
  const [ currentPageIndex, setCurrentPageIndex ] = useState( 0 );
  const handleClick = ( currentPageIndex: number ) => { setCurrentPageIndex(currentPageIndex) };

  return (
    <div className="App" style={{ backgroundColor: '#EFEEF4', height: '100vh', display: 'flex', flexDirection: 'column'}}>
      <Header handleClick={ handleClick } currentPageIndex={ currentPageIndex }/>
      <ContentWrapper>
        { currentPageIndex == 0 && <Carusel/> }
        { currentPageIndex == 1 && <Carusel/> }
        { currentPageIndex == 2 && <Carusel/> }
        { currentPageIndex == 3 && <MyProfile/> }
      </ContentWrapper>
      <NavPanel handleClick={ handleClick } currentPageIndex={ currentPageIndex }/>
    </div>
  );
}

export default App;
