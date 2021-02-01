import React, { lazy, Suspense } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import './app.scss';
import GameDetail from './pages/gameDetail/GameDetail';

const Home = lazy(() => import('./pages/home/Home'));
function App() {
  const location = useLocation();
  return (
    <div className='App'>
      {/* <Switch location={location} key={location.key}> */}
      <Route path={['/', '/games/:id']} exact>
        <Suspense fallback={<h1>loading...</h1>}>
          <Home />
        </Suspense>
      </Route>
      <Route path='/games/:id' exact>
        <GameDetail />
      </Route>
      {/* </Switch> */}
    </div>
  );
}

export default App;
