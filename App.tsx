import React from 'react';

import {Provider} from 'react-redux';
import store from './src/redux/store';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LandingScreen from './src/screens/landing/LandingScreen';
import JobsScreen from './src/screens/jobs/JobsScreen';
import JobDetailScreen from './src/screens/job-detail/JobDetailScreen';

const Stack = createNativeStackNavigator();

const LandingStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Landing Screen" component={LandingScreen} />
  </Stack.Navigator>
);

const JobsStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Jobs Screen" component={JobsScreen} />
    <Stack.Screen name="Job Detail Screen" component={JobDetailScreen} />
  </Stack.Navigator>
);

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Landing Stack" component={LandingStack} />
          <Stack.Screen name="Jobs Stack" component={JobsStack} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
