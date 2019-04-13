import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import Header from './Header';
import TrackList from './TrackList';
import TrackDetail from './TrackDetail';


const App = () => {
  return (
    <div className="ui container" style={{ fontFamily: 'Titillium Web' }}>
      <HashRouter>
        <div>
          <Header />
          <Route path="/" exact component={TrackList} />
          <Route path="/tracks/:id" exact component={TrackDetail} />
        </div>
      </HashRouter>
    </div>
  );
};

export default App;
