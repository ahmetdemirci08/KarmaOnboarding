import { Button, ImageBackground, Text, View,SafeAreaView} from 'react-native'
import React from 'react'
 
import styles from './Home.style';



const Home=({navigation})=> {

  
  const HandleLogin =()=>{
      navigation.navigate('LoginPage')
  };  
  const HandleRegister =()=>{
 
    navigation.navigate('CrUsernamePage')
};  
  
  return (
    <SafeAreaView style={styles.container}>
          
      <View style={styles.text_container}>
      <ImageBackground
          style={styles.background_image}
          source={require('../../assets/image2.png')}>
        <Text style={styles.header}>Ruh eşini keşfetmeye hazır mısın?</Text>
        <Text style={styles.header2}>Doğum haritanda gizlenen sırları keşfet, kadim bilgiye kulak ver!</Text>
        </ImageBackground>
      </View>
      <View style={styles.button_container}>
        <View style={styles.login_button}>
        <Button 
        onPress={HandleLogin}
         title="Giriş Yap"
        color="
        rgba(132, 74, 255, 1)"/>
        </View>
        <View style={styles.register_button}>
        <Button 
        onPress={HandleRegister}
          title=" Kayıt ol"
          color="rgba(67, 67, 67, 1)"
        />
        </View>
        <Text style={styles.bottom_text}>Devam ederek <Text style={styles.bottom_text2}>Kullanım Koşullarımızı ve Gizlilik Politikamızı </Text>
        kabul etmiş sayılırsınız.</Text>
      </View>
     
    </SafeAreaView>

    
  );
}

export default Home;