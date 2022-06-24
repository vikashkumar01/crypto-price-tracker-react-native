import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Home from './src/screen/Home'
import DetailCoins from './src/screen/DetailCoins'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
    <Stack.Navigator
    screenOptions={{
        headerTintColor: 'white',
        headerTitleAlign: 'center',
        headerStyle: { backgroundColor: 'tomato',  },
      }}>
      <Stack.Screen name="Home" component={Home}  options={{ title: 'Crypto Coins Price' }} />
      <Stack.Screen name="DetailCoins" component={DetailCoins} options={({ route }) => ({ title: route.params.SingleCoin.name })} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

