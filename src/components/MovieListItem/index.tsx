import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Movie } from '../../service';
import { colors } from '../../style';
import PosterPortrait from '../PosterPortrait';

type Props = {
  movie: Movie;
  onPress: () => void;
};

const styles = StyleSheet.create({
  container: {
    width: '50%',
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colors.white,
    marginHorizontal: 3,
  },
});

const MovieListItem = ({ movie, onPress }: Props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <PosterPortrait
        imageURL={movie.posterPortraitUrl}
        width="90%"
        height="90%"
      />
      <Text style={styles.text} numberOfLines={1}>
        {movie.title}
      </Text>
    </TouchableOpacity>
  );
};

export default MovieListItem;
