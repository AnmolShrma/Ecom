import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import AppNavigator from './app-navigator';
import ItemDetails from '../../usecases/ItemDetails';
import CartIcon from '../../components/CartIcon';

const RootStack = createStackNavigator();

export default RootNavigator = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="AppNavigator">
        <RootStack.Screen
          name="AppNavigator"
          component={AppNavigator}
          options={{headerShown: false}}
        />
        <RootStack.Screen
          name="ItemDetails"
          component={ItemDetails}
          options={{
            headerShown: true,
            headerTitle: '',
            headerBackTitleVisible: false,
            headerRight: () => <CartIcon />,
            headerRightContainerStyle: {
              paddingEnd: 20,
            },
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
