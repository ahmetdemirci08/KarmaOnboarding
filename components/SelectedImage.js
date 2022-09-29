import { Image } from "react-native";

const SelectedImage=(props)=>{
 
        return (
            <Image source={{uri:props.image}} style={{    
                width:178,
                height:178,
                justifyContent:'center',
                alignItems:'center',}}/>

            );
 
    

}
export default SelectedImage