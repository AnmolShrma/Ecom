import * as React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import GroupList from '../../usecases/GroupList';
import Checkout from '../../usecases/Checkout';
import TabBar from '../../components/CustomTab';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="GroupList"
      tabBar={(props) => <TabBar {...props} />}>
      <Tab.Screen name="GroupList" component={GroupList} />
      <Tab.Screen name="Checkout" component={Checkout} />
    </Tab.Navigator>
  );
};

export default AppNavigator;
