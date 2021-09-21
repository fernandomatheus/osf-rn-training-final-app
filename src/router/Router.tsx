import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
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

const homeOptions: NativeStackNavigationOptions = {
  title: 'CineFortaleza',
  headerTintColor: colors.white,
  headerStyle: { backgroundColor: colors.headerBackgroundColor },
};

const movieDetailOptions: NativeStackNavigationOptions = {
  headerShown: true,
  headerTransparent: true,
  headerShadowVisible: false,
  headerTitle: '',
  headerTintColor: colors.white,
};

export default () => (
  <NavigationContainer>
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} options={homeOptions} />
      <HomeStack.Screen
        name="MovieDetail"
        component={MovieDetail}
        options={movieDetailOptions}
      />
    </HomeStack.Navigator>
  </NavigationContainer>
);
