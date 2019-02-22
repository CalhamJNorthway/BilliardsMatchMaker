import * as React from 'react';
import * as ReactDOM from 'react-dom';

import MainPage from './containers/MainPage';
import { Provider } from 'react-redux';
import thunk, { ThunkAction, ThunkMiddleware } from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { user } from './redux/reducers/index';
import './index.css';

export type ThunkResult<R> = ThunkAction<R, any, undefined, any>;

export const store: any = createStore(
  user,
  compose(applyMiddleware(thunk))
);
ReactDOM.render(
  <Provider store={store}>
    <MainPage />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
