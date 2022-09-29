import { Text, View ,TouchableOpacity,Image} from 'react-native'
import React, { useState } from 'react'
import * as ImagePicker from 'expo-image-picker';
import SelectedImage from './SelectedImage';


const PictureButton =(props)=>{

    const [selected,setSelected]=useState("true");
    const [ImageUri, setImageUri] = useState();

    const SelectImage =async()=>{
        try {
          const result= await ImagePicker.launchImageLibraryAsync();
          setImageUri(result.uri);
          setSelected(!selected)
        } catch (error) {
          console.log('Error reading Image' , error)
        }
      }
    return (
        <View style={{width:178,height:178}}>
        {
          selected ? (
            <View style={{backgroundColor:'rgba(219, 210, 255, 1)',width:178,height:178,justifyContent:'center',alignItems:'center'}}>
            <TouchableOpacity 
            onPress={SelectImage}> 
            <Image style={{color:'rgba(132, 74, 255, 1)',
                width:75,
                height:59,
                justifyContent:'center',
                alignItems:'center'
                }}source={require("../assets/Vector.png")}/>
           </TouchableOpacity>
            </View>  
          ):null
        }
            <View  style={{width:178,height:178,justifyContent:'center',
           alignItems:'center'}}>
           <SelectedImage  image={ImageUri}/>
           </View>
       </View>
       );
         
      
}
export default PictureButton