import { Text, View, Button,TextInput,Image,TouchableOpacity} from 'react-native'
import React, { useState,useEffect} from 'react'
import styles from './Login.style';
import {auth} from '../../config';
import { useNavigation } from '@react-navigation/native';


export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const navigation= useNavigation()
  
  useEffect(() => {

    const unsubscribe=auth.onAuthStateChanged(user=>{
      if (user) {
        navigation.navigate('UsersPage')
      }
    })
      return unsubscribe
  }, [])
  

const handleLogIn=()=>{
  auth
  .signInWithEmailAndPassword(email,password)
  .then(userCredential=>{
    const user = userCredential.user;
    console.log('Logged in with', user.email)
  })
  .catch(error=> alert(error.message))
}
  

  return (
    <View style={styles.container} >
      <Image
              style={styles.background_image}
              source={require('../../assets/Star.png')}
      />
      <View style={styles.text_container} >
      <Text style={styles.header}> KARMAYA HOŞGELDİN!</Text>
      <Text style={styles.header2}>Haydi maceraya başlayalım</Text>
      <View style={styles.input_container}>
        <TextInput style={styles.username}
        backgroundColor='white'
        placeholderTextColor="rgba(0, 0, 0, 1)"
        placeholder='Username'
        onChangeText={setEmail}
        />
        <TextInput style={styles.password}
        backgroundColor='white'
        placeholderTextColor="rgba(0, 0, 0, 1)"
        placeholder='Password'
        onChangeText={setPassword }
        secureTextEntry
        />

      </View>
      <TouchableOpacity
         style={styles.button_container}
         onPress={handleLogIn}
       >
         <Text style={styles.buttontext}> Giriş Yap </Text> 
        </TouchableOpacity>
      </View>

  
      
      
    </View>
  );
}