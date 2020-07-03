import React, { Component }from 'react'
import { TouchableOpacity, StyleSheet, Text, View} from 'react-native'
// import { FlatList, StyleSheet, Text, View } from 'react-native'

// export class List extends Component {
//    state = {
//       mangas: [
//          {
//             title: 'One Piece',
//             volumes: '10',
//          },
//          {
//             title: 'Berserk',
//             volumes: 84,
//          },
//       ]
//    }
//    // alertItemName = (item) => {
//    //    alert(item.name)
//    // }
//    render() {
//       return (
//          <View>
//             {
//                this.state.mangas.map((item, index) => (
//                   <TouchableOpacity
//                      key = {item.title}
//                      style = {styles.container}
//                      onPress = {() => this.alertItemName(item)}>
//                      <Text style = {styles.text}>
//                         {item.title + "\t\t\ Chapters: "+item.volumes}
//                      </Text>
//                   </TouchableOpacity>
//                ))
//             }
//          </View>
//       )
//    }
// }

 List = () => {

      return (
      <View style={styles.container}>
         <FlatList
            mangas={[
            {
               title: 'One Piece',
               volumes: '10',
            },
            {
               title: 'Berserk',
               volumes: 84,
            },
            ]}
            renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
         />
      </View>
      );
}

const styles = StyleSheet.create ({
  container: {
    marginTop: 30,
    backgroundColor: 'white',
    alignItems: 'center',
   },
   text: {
      color: 'black',
      fontSize: 20,
   }
})

export default List