/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import RootNavigator from './frameworks/navigations';
import Loader from './components/Loader';
import LoaderHelper from './adapters/LoaderHelper';
import {CheckoutItemsProvider} from './context/CheckoutItemsProvider';

const App = () => {
  return (
    <CheckoutItemsProvider>
      <Loader ref={(ref) => LoaderHelper.setLoader(ref)} />
      <RootNavigator />
    </CheckoutItemsProvider>
  );
};

export default App;
