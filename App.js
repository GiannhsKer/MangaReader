import * as React from 'react';
import {Search} from './Components/Searchbar'
import {Listt} from './Components/List'
import {View} from 'react-native'


export default class App extends React.Component {
  
  render() {
    return (
        <View>
          <Search/>
          <Listt/>
        </View>
        
    );
  }
}

