import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {
  createStackNavigator,
} from "@react-navigation/stack"
import { NavigationContainer } from '@react-navigation/native';

import MovieScreen from "./screens/MovieScreen"
import SearchScreen from "./screens/SearchScreen"


function MainStackNav() {
  return (
      <MainStack.Navigator>
          <MainStack.Screen name="search" component={SearchScreen} />
          <MainStack.Screen name="movie" component={MovieScreen} />
      </MainStack.Navigator>
  )
}
const Stack = createStackNavigator()

const MainStack = createStackNavigator()

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
          <Stack.Navigator
              screenOptions={ ({ navigation, route }) => ({
                headerTintColor: '#FFF',
                headerStyle: {
                  backgroundColor: '#f4511e',
                },
              headerTitleStyle: {
                  fontWeight: 'bold',
                },
              })}
          >
          <Stack.Screen 
                name="Main" 
                component={MainStackNav} 
          />
          </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
