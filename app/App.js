import React, {Component} from 'react';
import { Provider } from 'react-redux';

import store from './store/index';
import Pessoas from './pessoas';

import RootNavigation from './navigation/';

type State = {}

type Props = {}

class App extends Component<Props,State> {
  render() {
    return (
      <Provider store={store}>
        {/* <Pessoas/> */}
        <RootNavigation/>
      </Provider>
    );
  }
}

export default App;