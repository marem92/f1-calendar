import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import TrackList from './TrackList';
import TrackDetail from './TrackDetail';

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={TrackList} />
          <Route path="/track" exact component={TrackDetail} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
