import { Text, View, Button,Image,ImageBackground,TouchableOpacity} from 'react-native'
import React, { useState ,useEffect} from 'react'
import styles from './CrPicture.style';
import SelectedImage from '../../components/SelectedImage';
import PictureButton from '../../components/PictureButton';


const CrPicture = ({navigation})=> {
  const [ImageUri, setImageUri] = useState();

  const handlePicture =()=>{
    navigation.navigate('CrPasswordPage')

  
  }

  return (
    <View style={styles.container} >
      <Image
              style={styles.background_image}
              source={require('../../assets/Star.png')}
      />
      <View style={styles.text_container} >
      <Text style={styles.header}>Bir Fotoğraf seçebilir misin</Text>
          <PictureButton />

      <TouchableOpacity
         style={styles.button_container}
         onPress={handlePicture}
       >
         <Text style={styles.buttontext}> Devam et</Text> 
        </TouchableOpacity>
  
      
      </View>
  

  
      
    </View>
  );
}
export default CrPicture