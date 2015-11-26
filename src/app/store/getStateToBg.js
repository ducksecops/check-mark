import { onConnect } from 'crossmessaging';
import getState from './getStoredState';
import { receiveNotification } from '../actions/extension';

export default function(configure, callback) {
  getState(configure, store => {
    onConnect(
      () => ({ name: 'init', state: { session: store.getState().session } }),
      {
        'redux-notify': (message) => { store.dispatch(receiveNotification(message.action)); }
      }
    );
    callback(store);
  });
}
