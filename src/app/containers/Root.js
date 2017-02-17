import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import BridgeApp from './App';

export default class Root extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  };

  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <BridgeApp />
      </Provider>
    );
  }
}
