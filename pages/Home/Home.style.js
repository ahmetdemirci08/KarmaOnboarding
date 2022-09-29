import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';



const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor:'rgba(255, 255, 255, 1) '


    },
    background_image:{
        resizeMode:'cover',
        flex:1,
        justifyContent:'center',
        width:'100%',
        height:375,
        position:'absolute',
        backgroundColor:'rgba(255, 255, 255, 1) '

    },
    bottom_text:{
      fontSize:13,
      textAlign:'center',
      lineHeight:15,
      alignSelf:'center',
      marginLeft:10,
      color:'rgba(115, 115, 115, 1)'
    },
    bottom_text2:{
      color:'rgba(101, 35, 241, 1)'
    },

    text_container:{
      justifyContent:'center',
      alignItems:'center',
      flex:1,
      
    },

    header:{
      alignItems:'center',
      fontSize:36,
      fontWeight:'bold',
      justifyContent:'center',
      marginBottom:15,
      textAlign:"center"
      
    },
    header2:{
      alignItems:'center',
      fontSize:18,
      fontWeight:'Gilroy-Light',
      justifyContent:'center',
      textAlign:"center"
    },
    button_container:{
      flexDirection:'column',
      backgroundColor:'rgba(255, 255, 255, 1) '

    },
    login_button:{
      margin:15
    },
    
    register_button:{
      margin:15
    }
  });
  

  export default styles;