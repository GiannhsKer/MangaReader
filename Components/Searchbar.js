import * as React from 'react';
import { Searchbar } from 'react-native-paper';
import {StyleSheet} from 'react-native';

export class Search extends React.Component {
  state = {
    firstQuery: '',
  };

  render() {
    const { firstQuery } = this.state;
    return (
      <Searchbar
        style = {styles.search}
        
        onChangeText={query => { this.setState({ firstQuery: query }); }}
        value={firstQuery}
      />
    );
  }
}

const styles = StyleSheet.create({
  searchbar: {
    marginTop: 32 ,
    placeholder:"Search",
  },
});