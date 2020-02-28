import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './components/Main/Main';
import Authentication from './components/Authentication/Authentication';
import ChangeInfo from './components/ChangeInfo/ChangeInfo';
import OrderHistory from './components/OrderHistory/OrderHistory';

StatusBar.setHidden(true);
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator 
            initialRouteName="Main"
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Main" component={Main} />
            <Stack.Screen name="OrderHistory" component={OrderHistory} />
            <Stack.Screen name="ChangeInfo" component={ChangeInfo} />
            <Stack.Screen name="Authentication" component={Authentication} />
            
        </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
