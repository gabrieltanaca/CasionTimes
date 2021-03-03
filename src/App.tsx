import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './pages/Home';
import Post from './pages/Post';

const Stack = createStackNavigator();

const App = (): React.ReactElement => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerTitle: '', headerTransparent: true}}
        />
        <Stack.Screen
          name="Post"
          component={Post}
          options={{headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
