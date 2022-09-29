import { useEffect,useState } from 'react'
import { FlatList ,ScrollView,Text, TextInput, TouchableOpacity, View,SectionList} from 'react-native'
import {firebase} from '../config'

import PictureCard from './PictureCard'

const FetchLikedUser =({imageUri})=>{
    const [users, setUsers] = useState("")
    const [text, setText] = useState("")


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
    const handleSetData=()=>{firebase.firestore().collection('LikedUsers').add({
        title: this.state.textInput,
        complete: false,
      })

    }
    
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

export default FetchLikedUser