import React, { Component } from 'react';
import { BrowserRouter} from 'react-router-dom';

import Blog from './containers/Blog/Blog';
// import Axios from './Axios';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <div className="App">
          
          <Blog />
        </div>
      
      </BrowserRouter>
    
    );
  }
}

export default App;
