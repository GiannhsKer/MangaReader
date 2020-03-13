import * as React from 'react';
import {Search} from './Components/Searchbar'
import {Listt} from './Components/List'


export default class App extends React.Component {
  
  render() {
    return (
        <React.Fragment>
          <Search/>
          <Listt/>
        </React.Fragment>
        
    );
  }
}

