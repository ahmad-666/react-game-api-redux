import React, { lazy, Suspense } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import './app.scss';

const Home = lazy(() => import('./pages/home/Home'));
function App() {
  const location = useLocation();
  return (
    <div className='App'>
      <Switch location={location} key={location.key}>
        <Route path='/' exact>
          <Suspense fallback={<h1>loading...</h1>}>
            <Home />
          </Suspense>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
