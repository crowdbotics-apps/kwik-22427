import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile169828Navigator from '../features/UserProfile169828/navigator';
import Tutorial169827Navigator from '../features/Tutorial169827/navigator';
import NotificationList169799Navigator from '../features/NotificationList169799/navigator';
import Settings169798Navigator from '../features/Settings169798/navigator';
import Settings169790Navigator from '../features/Settings169790/navigator';
import UserProfile169788Navigator from '../features/UserProfile169788/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile169828: { screen: UserProfile169828Navigator },
Tutorial169827: { screen: Tutorial169827Navigator },
NotificationList169799: { screen: NotificationList169799Navigator },
Settings169798: { screen: Settings169798Navigator },
Settings169790: { screen: Settings169790Navigator },
UserProfile169788: { screen: UserProfile169788Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
