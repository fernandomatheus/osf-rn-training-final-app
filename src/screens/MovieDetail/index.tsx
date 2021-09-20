import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text } from 'react-native';
import { RootStackParamList } from '../../router/Router';

type Props = NativeStackScreenProps<RootStackParamList, 'MovieDetail'>;

const MovieDetail = ({ route }: Props) => {
  const { movie } = route.params;
  return (
    <View>
      <Text>{movie.title}</Text>
    </View>
  );
};

export default MovieDetail;
