import React from 'react';
import FastImage from 'react-native-fast-image';
import PortraitPlaceholder from '../../assets/movie_placeholder_portrait.png';

type Props = {
  imageURL: string | null;
  width: string | number;
  height: string | number;
};

const PosterPortrait = ({ imageURL, width, height }: Props) => {
  const imageSource = imageURL ? { uri: imageURL } : PortraitPlaceholder;

  return (
    <FastImage
      source={imageSource}
      style={{ width, height }}
      resizeMode={FastImage.resizeMode.contain}
    />
  );
};

export default PosterPortrait;
