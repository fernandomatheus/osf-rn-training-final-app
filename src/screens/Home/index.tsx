import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ErrorContent from '../../components/ErrorContent';
import Loading from '../../components/Loading';
import MovieListItem from '../../components/MovieListItem';
import { RootStackParamList } from '../../router/Router';
import { getMovies, Movie } from '../../service';
import { colors } from '../../style';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bodyBackgroundColor,
  },
});

const Home = ({ navigation }: Props) => {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    getMovies()
      .then(response => setMovies(response.data))
      .catch(err => setError(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorContent message="Não há filmes disponíveis no momento" />;
  }

  return (
    <FlatList
      style={styles.container}
      numColumns={2}
      data={movies}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <MovieListItem
          movie={item}
          onPress={() => navigation.push('MovieDetail', { movie: item })}
        />
      )}
    />
  );
};

export default Home;
