import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../style';

type Props = {
  message: string;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.bodyBackgroundColor,
  },
  text: {
    color: colors.white,
  },
});

const ErrorContent = ({ message }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
};

export default ErrorContent;
