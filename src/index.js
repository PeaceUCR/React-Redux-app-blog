import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {BrowserRouter, Route} from 'react-router-dom'
import promise from 'redux-promise';

import reducers from './reducers';
import PostsIndex from './components/post_index';
import NewPost from './components/new_post';
//add the promise to the middleware otherwise the promise in  the action will not be parsed
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>

    <BrowserRouter>
    	<div>
    		<Route path="/"  component={PostsIndex}/>
    		<Route path="/posts/new"  component={NewPost}/>
    	</div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
