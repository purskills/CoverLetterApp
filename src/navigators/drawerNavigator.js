import { createDrawerNavigator, createAppContainer } from 'react-navigation';

import SideMenu from '../assets/components/sideMenu/index';
import Home from '../screens/home';
import Media from '../screens/media/media'
import Business from '../screens/business/business'
import Education from '../screens/education/education'
import Engineering from '../screens/engineering/engineering'
import Finance from '../screens/finance/finance'
import JobSearch from '../screens/jobSearch/jobSearch'
import Technology from '../screens/technology/technology'


const MyDrawerNavigator = createDrawerNavigator({
  Home: {screen: Home},
  Media: {screen: Media},
  Business: {screen: Business},
  Education: { screen: Education},
  Engineering: { screen: Engineering},
  Finance: { screen: Finance},
  JobSearch: { screen: JobSearch},
  Technology: { screen: Technology}
},{
  contentComponent: SideMenu,
  drawerWidth: 300
});



const AppDrawer = createAppContainer(MyDrawerNavigator);

export default AppDrawer;
