import React from 'react';
import { List } from 'react-native-paper';

export function Listt(){
    return(
      <List.Item
        title="First Item"
        description="Item description"
        left={props => <List.Icon {...props} icon="folder" />}
      />
    );  
}