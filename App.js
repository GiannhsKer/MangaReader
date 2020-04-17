import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Search } from './Components/Searchbar';
// import {Listt} from './Components/List'


const App = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <Search />
      {/* <Listt/> */}
    </View>
  );
};

App.defaultProps = {
  title: 'Manga Reader',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    padding: 40,
    textAlign: 'center',
    // clor:'white',
    fontSize: 35
  },
});

export default App;
