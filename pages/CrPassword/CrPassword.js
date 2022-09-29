import { Text, View,TextInput,ImageBackground,Image,TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import {doc,setDoc} from 'firebase/firestore'
import {db} from '../../config'
import styles from './CrPassword.style';
 

const CrPassword = ({navigation})=> {
  const [password, setPassword] = useState("");
  const [isSelected, setSelection] = useState(false);

  const handleSubmitPassword =()=>{
    navigation.navigate('UsersPage')
    const docRef = doc(db, "users", "user");
    
    const data = {
      password:password
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
      <Text style={styles.header}> En az 6 karakterden oluşan
bir parola girmelisin</Text>
      <Text style={styles.header2}>Sana Nasıl Hitap Edelim</Text>
      
      <View style={styles.input_container}>
        <TextInput style={styles.password}
        backgroundColor='white'
        placeholderTextColor="rgba(0, 0, 0, 1)"
        placeholder='Password'
        value={password}
        onChangeText={text=>setPassword(text)}
        secureTextEntry

        />
        
      </View>
       
       
      <TouchableOpacity
         style={styles.button_container}
         onPress={handleSubmitPassword}
       >
         <Text style={styles.buttontext}> Devam et </Text> 
        </TouchableOpacity>
        <Text style={styles.bottom_Text1}>Kullanım Koşulları, Gizlilik Politikası ve KVKK Metnini okudum onaylıyorum.</Text>
      </View>

      
      

       

    </View>
  );
}
export default CrPassword