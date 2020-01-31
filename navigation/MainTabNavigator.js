import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import StationScreen from '../screens/StationScreen';
import MapScreen from '../screens/MapScreen';

const ListStack = createStackNavigator(
  {
    Home: StationScreen,
  }
);

ListStack.navigationOptions = {
  tabBarLabel: 'List',
};

const MapStack = createStackNavigator(
  {
    Links: MapScreen,
  }
);

MapStack.navigationOptions = {
  tabBarLabel: 'map',
};

export default createBottomTabNavigator({
  ListStack,
  MapStack,
});