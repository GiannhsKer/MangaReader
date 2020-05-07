import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Search } from './Components/Searchbar';
import { Listt } from './Components/List'


const App = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>My App</Text>
      <Search />
      <Listt />
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
    color:'red',
    fontSize: 35,
    marginTop: 50,
  },
  // search: {
  //   marginTop: 20,
    
  // },
  // list: {
  //   marginTop: 300,
  // }
});

export default App;
