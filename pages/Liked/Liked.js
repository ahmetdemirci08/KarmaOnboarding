import { Text, View,Button,ScrollView } from 'react-native'
import React, { Component } from 'react'
import styles from './Liked.style';
import FetchLikedUser from '../../components/FetchLikedUser';

const Liked=({navigation}) => {
  const GoMatches=()=>{
    navigation.navigate('UsersPage')
  }


  return (
    <View style={styles.container}>
      <ScrollView>
      <View style={styles.card_container}>        
      <FetchLikedUser/>
      </View>
      </ScrollView>
    <View style={styles.button_container}>
      
      <View style={styles.button1}>
      <Button title='Kullanıcılar'onPress={GoMatches} />
      </View>

      <View style={styles.button2}>
      <Button  title='Beğenenler' />
      </View>
    </View>
    </View>
  )
}
export default Liked