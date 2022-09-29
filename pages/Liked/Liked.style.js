import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';



const styles = StyleSheet.create({
    container: {
    flex:1
      
    },
    button1:{
      height: 42,
      width:170,
      borderRadius:10
    },
    button2:{
      height: 42,
      width:170,
      borderRadius:10
    },
    button_container:{
      height:98,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-evenly',
    },

    card_container:{
      flex: 1,
      flexDirection:'row',
      flexWrap: "wrap",
      justifyContent:'flex-start'    
},

  });
  export default styles;