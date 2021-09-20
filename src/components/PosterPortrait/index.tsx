import React from 'react';
import { Image } from 'react-native';
import PortraitPlaceholder from '../../assets/movie_placeholder_portrait.png';

type Props = {
  imageURL: string | null;
  width: string | number;
  height: string | number;
};

const PosterPortrait = ({ imageURL, width, height }: Props) => {
  const imageSource = imageURL ? { uri: imageURL } : PortraitPlaceholder;

  return (
    <Image
      source={imageSource}
      style={{ width, height }}
      resizeMode="contain"
    />
  );
};

export default PosterPortrait;
