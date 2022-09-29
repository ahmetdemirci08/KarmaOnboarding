import { useEffect,useState } from 'react'
import { Alert, FlatList ,ScrollView,Text, LogBox  , TextInput, TouchableOpacity, View,SafeAreaView} from 'react-native'
import {firebase} from '../config'

import PictureCard from './PictureCard'

const FetchUser =()=>{
    const [users, setUsers] = useState("")
    const [text, setText] = useState("")

    const userRef=firebase.firestore().collection('users')

   const handlegolike=()=>{

    navigation.navigate('LikedPage')
   }

    const handleSetData=()=>{firebase.firestore().collection('users').add({
        title: this.state.textInput,
        complete: false,
      })
    }


    useEffect(() => {
      userRef.onSnapshot(
        querySnapshot =>{
            const users=[]
            querySnapshot.forEach((doc)=>{
                const {name,birthday,picture}=doc.data()
                users.push({
                    id:doc.id,
                    name,
                    birthday,
                    picture,
                    
                })
            })
            setUsers(users)
        }
      )
    }, [])


    return(
        <View >
            <FlatList
                numColumns={2} 
                data={users}
                keyExtractor={item => item.id}
                renderItem={({item})=>(  
                    <PictureCard picture={item.picture} name={item.name} birthday={item.birthday} />
                    )}
                />
            <TouchableOpacity onPress={handleSetData}>
            <TextInput         
            onChangeText={setText}
            value={text} />
            </TouchableOpacity>
        
        </View>
        

    

    )
}

export default FetchUser