import React, { Component } from 'react';
import NavigationService from './src/utils/navigationService';
import { AppNavigator } from './src/navigators';

class App extends Component {
  render() {
    return (
      <AppNavigator
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
    );
  }
}

export default App;