import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import LandscapePlaceholder from '../../assets/movie_placeholder_landscape.jpeg';

type Props = {
  imageURL: string | null;
  children: React.ReactNode;
};

const style = StyleSheet.create({
  imageBackground: {
    width: '100%',
    height: 200,
  },
});

const PosterLandscape = ({ imageURL, children }: Props) => {
  const imageSource = imageURL ? { uri: imageURL } : LandscapePlaceholder;

  return (
    <ImageBackground
      style={style.imageBackground}
      source={imageSource}
      blurRadius={30}>
      {children}
    </ImageBackground>
  );
};

export default PosterLandscape;
