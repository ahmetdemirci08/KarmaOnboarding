import { Text, View, Button,TextInput,Image,TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import {doc,setDoc} from 'firebase/firestore'
import {db} from '../../config'
import styles from './CrUsername.style';

const CrUsername = ({navigation})=> {
  const [username, setUsername] = useState("");

  const handleBirthdaypage =()=>{
    navigation.navigate('CrBirthdayPage')
    setDoc(doc(db,"users","user"),{
      name:username,

     })
  }

  return (
    
    <View style={styles.container} >
      <Image
              style={styles.background_image}
              source={require('../../assets/Star.png')}
      />
      <View style={styles.text_container} >
      <Text style={styles.header}> KARMA ya Hoşgeldin</Text>
      <Text style={styles.header2}>Sana Nasıl Hitap Edelim</Text>
      
      <View style={styles.input_container}>
        <TextInput style={styles.username}
        backgroundColor='white'
        placeholderTextColor="rgba(0, 0, 0, 1)"
        placeholder='Username'
        value={username}
        onChangeText={text=>setUsername(text)}
        />

      </View>
      <TouchableOpacity
         style={styles.button_container}
         onPress={handleBirthdaypage}
       >
         <Text style={styles.buttontext}> Devam et </Text> 
        </TouchableOpacity>
      
      </View>

      

    </View>
  );
}
export default CrUsername