import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomePage from './pages/HomePage';
import PostPage from './pages/PostPage';

const Stack = createStackNavigator();

const App = (): React.ReactElement => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Post">
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{headerTitle: '', headerTransparent: true}}
        />
        <Stack.Screen
          name="Post"
          component={PostPage}
          options={{headerTitle: '', headerTransparent: true}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
