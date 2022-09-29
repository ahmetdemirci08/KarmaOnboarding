import { Text, View,Button ,ScrollView,TouchableOpacity} from 'react-native'
import React from 'react'
import styles from './Users.style';
import FetchUser from '../../components/FetchUser'

const Users=({navigation}) => {
  const GoLiked=()=>{
    navigation.navigate('LikedPage')
  }

  

  return (
    <View style={styles.container}>
      <ScrollView>
      <View style={styles.card_container}>        
        <FetchUser/>
      </View>
      </ScrollView>
    <View style={styles.button_container}>
      
      <View style={styles.button1}>
      <Button title='Kullanıcılar' />
      </View>

      <View style={styles.button2}>
      <Button   title='Beğenenler' onPress={GoLiked}/>
      </View>

    </View>
    </View>
  )
}
export default Users