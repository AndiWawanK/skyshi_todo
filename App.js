/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import RootNavigation from 'navigations';
import moment from 'moment';
import 'moment/locale/id';
import {LogBox} from 'react-native';

moment.locale('id');
const App = () => {
  LogBox.ignoreLogs([
    'VirtualizedLists should never be nested inside plain ScrollViews with the same orientation because it can break windowing and other functionality - use another VirtualizedList-backed container instead.',
  ]);
  return <RootNavigation />;
};

export default App;
