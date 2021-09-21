import React from 'react';
import { StyleSheet, View } from 'react-native';
import Router from './src/router/Router';
import { colors } from './src/style';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bodyBackgroundColor,
  },
});

const App = () => {
  return (
    <View style={styles.container}>
      <Router />
    </View>
  );
};

export default App;
