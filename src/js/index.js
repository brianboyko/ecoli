import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import store from './store/configureStore';
import App from './containers/App';
injectTapEventPlugin();

const MOUNT_NODE = document.getElementById('root');

export default class Root extends Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <App foo="bar"/>
      </Provider>
    );
  }
}


ReactDOM.render(<Root store={store} />, MOUNT_NODE);
