import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  Linking,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from '../../style';

type Props = {
  trailerURL: string;
};

const styles = StyleSheet.create({
  touchableContainer: {
    width: '100%',
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 5,
  },
  text: {
    fontSize: 16,
    marginLeft: 10,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

const TrailerButton = ({ trailerURL }: Props) => {
  return (
    <TouchableOpacity
      style={styles.touchableContainer}
      onPress={() => Linking.openURL(trailerURL)}>
      <View style={styles.container}>
        <Icon name="play" size={30} color="#000" />
        <Text style={styles.text}>Assistir o trailer</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TrailerButton;
