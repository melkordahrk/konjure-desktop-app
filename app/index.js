import React from 'react';
import {render} from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import Root from './containers/Root';
import {configureStore, history} from './store/configureStore';
import './app.global.css';

const store = configureStore();

exports.render = function (Component) {
  render(
    <AppContainer>
      <Component store={store} history={history}/>
    </AppContainer>,
    document.getElementById('root')
  );
};

exports.render(Root);

if (module.hot) {
  // eslint-disable-next-line global-require
  module.hot.accept('./containers/Root', () => exports.render(require('./containers/Root')));
}
