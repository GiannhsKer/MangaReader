import React from 'react';
import { List } from 'react-native-paper';
import { StyleSheet } from 'react-native';

export function Listt(){
    return(
        <List.Item
          style={styles.list}
          title="Firs Item"
          description="Item description"
          left={props => <List.Icon {...props} icon="folder" />}
          
        />
    );  
}

const styles = StyleSheet.create({
  list: {
    marginTop: 40,
    marginRight: 100,
  }
});
