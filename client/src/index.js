import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { BrowserRouter as Router } from 'react-router-dom'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import Nav from './components/Nav'
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './reducers'
import routers from './routers'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, thunk)))

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Nav />
        {routers}
      </div>
    </Router>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
