import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import {Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;

import SideMenu from '../assets/components/sideMenu/index';
import Home from '../screens/home';
import Media from '../screens/media/media'
import Business from '../screens/business/business'
import Education from '../screens/education/education'
import Engineering from '../screens/engineering/engineering'
import Finance from '../screens/finance/finance'
import JobSearch from '../screens/jobSearch/jobSearch'
import Science from '../screens/science/science'
import Sales from '../screens/sales/sales'
import Student from '../screens/student/student'
import Technology from '../screens/technology/technology'


const MyDrawerNavigator = createDrawerNavigator({
  Home: {screen: Home},
  Media: {screen: Media},
  Business: {screen: Business},
  Education: { screen: Education},
  Engineering: { screen: Engineering},
  Finance: { screen: Finance},
  JobSearch: { screen: JobSearch},
  Science: { screen: Science},
  Sales: { screen: Sales},
  Student: { screen: Student},
  Technology: { screen: Technology}
},{
  contentComponent: SideMenu,
  drawerWidth: windowWidth*0.8
});



const AppDrawer = createAppContainer(MyDrawerNavigator);

export default AppDrawer;
