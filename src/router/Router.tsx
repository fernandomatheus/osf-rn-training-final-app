import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home';
import MovieDetail from '../screens/MovieDetail';
import { colors } from '../style';
import { Movie } from '../service';

const HomeStack = createNativeStackNavigator();

export type RootStackParamList = {
  Home: undefined;
  MovieDetail: { movie: Movie };
};

export default () => (
  <NavigationContainer>
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'CineFortaleza',
          headerTintColor: colors.white,
          headerStyle: { backgroundColor: colors.headerBackgroundColor },
        }}
      />
      <HomeStack.Screen name="MovieDetail" component={MovieDetail} />
    </HomeStack.Navigator>
  </NavigationContainer>
);
