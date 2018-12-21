import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { Text } from 'react-native';

import store from './store/index';
import Pessoas from './pessoas';

type State = {}

type Props = {}

class App extends Component<Props,State> {
  render() {
    return (
      <Provider store={store}>
        <Pessoas/>
      </Provider>
    );
  }
}

export default App;