import { createSwitchNavigator, createAppContainer  } from 'react-navigation';

import Home from '../screens/home'
import Media from '../screens/media/media'
import Business from '../screens/business/business'
import Education from '../screens/education/education'
import Engineering from '../screens/engineering/engineering'
import Finance from '../screens/finance/finance'
import JobSearch from '../screens/jobSearch/jobSearch'
import Technology from '../screens/technology/technology'

import DrawerNavigator from './drawerNavigator'

const AppNavigator = createSwitchNavigator(
  {
    Home: { screen: DrawerNavigator },
    Media: { screen: Media},
    Business: { screen: Business},
    Education: { screen: Education},
    Engineering: { screen: Engineering},
    Finance: { screen: Finance},
    JobSearch: { screen: JobSearch},
    Technology: { screen: Technology}
  },
  { headerMode: 'none', initialRouteName: 'Home' }
);

export default createAppContainer(AppNavigator);