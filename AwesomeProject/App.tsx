import {StyleSheet, Text, View} from 'react-native';
import Header from './components/header/Header';

import React from 'react';
import Main from './components/Main/Main';
import Counter from './components/Stateful_component/Counter';

const App = () => {
  return (
    <View>
      <Text>App</Text>
      <Text>This is header</Text>
      <Header />
      <Main />
      <Counter />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
