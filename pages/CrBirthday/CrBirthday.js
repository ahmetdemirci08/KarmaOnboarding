import { Text, View, Button,TextInput,ImageBackground,Image,TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import DateTimePicker from '@react-native-community/datetimepicker';
import {addDoc,collection,doc,setDoc} from 'firebase/firestore'
import {db} from '../../config'

import styles from './CrBirthday.style';

const CrBirthday = ({navigation})=> {

  const [birthday,setBirthday]=useState("")

 
  const handleSubmitPicture =()=>{
    navigation.navigate('CrPicturePage')
      
    const docRef = doc(db, "users", "user");
    
    const data = {
      birthday:birthday
    };
    
    setDoc(docRef, data,{merge:true})
    .then(docRef => {
        console.log("Entire Document has been updated successfully");
    })
    .catch(error => {
        console.log(error);
    })
  }
  
 

  return (
<View style={styles.container} >
      <Image
              style={styles.background_image}
              source={require('../../assets/Star.png')}
      />
      <View style={styles.text_container} >
      <Text style={styles.header}> Doğum Tarihini Giriniz</Text>
      
      <View style={styles.input_container}>
        <TextInput style={styles.password}
        backgroundColor='white'
        placeholderTextColor="rgba(0, 0, 0, 1)"
        placeholder='Birthday'
        value={birthday}
        onChangeText={text=>setBirthday(text)}
        />

      </View>
      <TouchableOpacity
         style={styles.button_container}
         onPress={handleSubmitPicture}
       >
         <Text style={styles.buttontext}> Devam et </Text> 
        </TouchableOpacity>
      
      </View>

      

    </View>
  );
}
export default CrBirthday