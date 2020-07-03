import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Search } from './Components/Searchbar';
import List from './Components/List'

const App = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Manga Reader</Text>
      <Search />
      List()
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    color:'black',
    fontSize: 35,
    marginTop: 50,
  },
});

export default App;