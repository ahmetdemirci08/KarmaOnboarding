import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';



const styles = StyleSheet.create({
  container: {
    flex:1,
    position:'absolute',
    top:65
 },

    background_image:{
      justifyContent:'space-evenly',
      backgroundColor:'black',
      width:'100%',
      height:83,
      left:6,
      borderTopRightRadius:20,
      borderTopLeftRadius:20
    },
    icon:{
      color:'rgba(132, 74, 255, 1)',
      width:75,
      height:59,

    },

    text_container:{
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'center',
      width:397,
      height:360,
      left:6,
      backgroundColor:'black',
      borderBottomLeftRadius:20,
      borderBottomRightRadius:20
    },

    image:{
      width:178,
      borderRadius:10,
      height:178,
      justifyContent:'center',
      alignItems:'center',
    },
    header:{
      fontSize:27,
      color:"white",
      fontWeight:'bold',
      marginBottom:20
    },
    button:{
      backgroundColor:'white',
      
    },

    buttontext:{
      flex:1,
      color:'black',
      fontSize:18,
      fontWeight:'bold',
      textAlign:'center',
      textAlignVertical:'center'
      
    },
    
    button_container:{
      borderRadius:15,
      overflow: 'hidden',
      margin:10,
      backgroundColor:'white',
      width:356,
      height:57
      
    }
  });
  export default styles;