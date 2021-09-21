import SegmentedControl from '@react-native-segmented-control/segmented-control';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PosterLandscape from '../../components/PosterLandscape';
import PosterPortrait from '../../components/PosterPortrait';
import TrailerButton from '../../components/TrailerButton';
import { RootStackParamList } from '../../router/Router';
import { colors } from '../../style';

type Props = NativeStackScreenProps<RootStackParamList, 'MovieDetail'>;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bodyBackgroundColor,
  },
  posterPortraitContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  movieTitle: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    alignSelf: 'center',
  },
  detailsContainer: {
    flex: 1,
    margin: 5,
  },
  boldText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  regularText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '400',
  },
  synopsis: {
    marginBottom: 8,
  },
  segmentedControl: {
    marginTop: 15,
  },
});

const MovieDetail = ({ route }: Props) => {
  const { movie } = route.params;
  const renderTrailerButton = () => {
    if (movie.trailers.length) {
      return <TrailerButton trailerURL={movie.trailers[0].url} />;
    }
    return null;
  };

  return (
    <View style={styles.container}>
      <PosterLandscape imageURL={movie.posterHorizontalUrl}>
        <View style={styles.posterPortraitContainer}>
          <PosterPortrait
            imageURL={movie.posterPortraitUrl}
            width={170}
            height={170}
          />
        </View>
      </PosterLandscape>
      <View style={styles.detailsContainer}>
        <Text style={styles.movieTitle}>{movie.title}</Text>
        <Text style={styles.boldText}>
          Classificação:{' '}
          <Text style={styles.regularText}>{movie.contentRating}</Text>
        </Text>
        <Text style={[styles.boldText, styles.synopsis]} numberOfLines={3}>
          Synopsis: <Text style={styles.regularText}>{movie.synopsis}</Text>
        </Text>

        {renderTrailerButton()}

        <SegmentedControl
          style={styles.segmentedControl}
          values={['Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado']}
        />
      </View>
    </View>
  );
};

export default MovieDetail;
