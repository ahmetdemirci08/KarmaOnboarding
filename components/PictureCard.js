import * as React from 'react';
import { Text, View,ImageBackground ,TouchableOpacity,Alert} from "react-native";

const PictureCard=(props)=> {


  const handleAlert=()=>{
    Alert.alert(
      (`${props.name} adlı kullanıcıya istek göndermek istediğine emin misin`),
         null,
     [ 
         {
         text:"Gönder",
         onPress:()=>null
         },
     {
         text:"Vazgeç",
         onPress:()=>null
     }
 ]
 )
  }

    return (
      <TouchableOpacity onPress={handleAlert}>
        <View >
        <View style={{  borderRadius: 10 }}>
          <ImageBackground  source={{uri:props.picture}} style={{ margin:10,padding:10, width: 186,height:186 ,backgroundColor: 'rgba(132, 74, 255, 1)'}}>
          
          <View style={{flex:1,flexDirection:'column',justifyContent:'flex-end'}}>
            <Text>{props.name}</Text>
            <Text>{props.birthday}</Text>
            </View>
          </ImageBackground>
        </View>
      </View>
      </TouchableOpacity>

    );
  }

  export default PictureCard
