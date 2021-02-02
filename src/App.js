import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './app.scss';
import Nav from './components/nav/Nav';
import SearchResult from './pages/searchResult/SearchResult';
import Slider from './components/slider/Slider';
import slide0ImgSrc from './assets/imgs/slide0.jpg';
import slide1ImgSrc from './assets/imgs/slide1.jpg';
import slide2ImgSrc from './assets/imgs/slide2.jpg';
import slide3ImgSrc from './assets/imgs/slide3.jpg';
import Home from './pages/home/Home';

const sliderImgs = [slide0ImgSrc, slide1ImgSrc, slide2ImgSrc, slide3ImgSrc];

function App() {
  return (
    <div className='App'>
      <Nav />
      <Slider imgs={sliderImgs} timer={3000} />
      <Switch>
        <Route path={['/', '/games/:id']} exact>
          <Home />
        </Route>
        <Route path='/search' exact>
          <SearchResult />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
