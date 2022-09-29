import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';



const styles = StyleSheet.create({
    container: {
       flex:1,
       position:'absolute',
       top:65
    },


    background_image:{
      flex:1,
      backgroundColor:'black',
      width:'100%',
      height:83,
      left:6,
      borderTopRightRadius:20,
      borderTopLeftRadius:20,
      resizeMode:'cover',

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

    header:{
      fontSize:27,
      color:"white",
      fontWeight:'bold'
    },
    header2:{
      fontSize:18,
      color:"white"
    },
    input_container:{
       marginTop:45
    },
    username:{
      margin:10,
      padding:10,
      borderRadius:15,
      width:356,
      marginBottom:100
    },
    password:{
      margin:10,
      padding:10,
      borderRadius:15
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
      backgroundColor:'white',
      width:356,
      height:57
      
    }
  });
  export default styles;