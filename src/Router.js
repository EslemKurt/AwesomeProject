import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { GlobalProvider } from './Context/GlobalState';

import Search from './components/pages/search/Search';
import Detail from './components/pages/detail/Detail';

const Stack = createStackNavigator();

function App() {

  return (
    <GlobalProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false, }}>
          <Stack.Screen name="Search" component={Search} />
          <Stack.Screen name="Detail" component={Detail} />
        </Stack.Navigator>
      </NavigationContainer>
    </GlobalProvider>
  );
};
export default App;


