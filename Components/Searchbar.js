import React from 'react';
import { Searchbar } from 'react-native-paper';
import { View } from 'react-native';

export class Search extends React.Component {
  state = {
    firstQuery: '',
  };

  render() {
    const { firstQuery } = this.state;
    
    return (
      <View>
        <Searchbar >
          value={firstQuery}   
          onChangeText={query => { this.setState({ firstQuery: query }); }}
          onIconPress={ () => this.computeGeoCoord()}
        </Searchbar>
        />
      </View>
    );
  }
}
/*
const styles = StyleSheet.create({
  
});*/
