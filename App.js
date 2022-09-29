import { Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



import Home from './pages/Home/Home';
import Login from './pages/Login/Login';

import  CrBirthday from './pages/CrBirthday/CrBirthday';
import CrPicture from './pages/CrPicture/CrPicture';
import CrPassword from './pages/CrPassword/CrPassword';
import CrUsername from './pages/CrUsername/CrUsername';
import Liked from './pages/Liked/Liked'
import Users from './pages/Users/Users'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomePage" component={Home} options={{title:"",}}/>
        <Stack.Screen name="LoginPage"component={Login}options={{title:"Giriş Yap",headerTitleAlign:'center'}}/>
        <Stack.Screen name="CrBirthdayPage" component={CrBirthday} options={{title:"Kayıt ol",headerTitleAlign:'center'}}/>
        <Stack.Screen name="CrPicturePage"component={CrPicture}options={{title:"Kayıt ol",headerTitleAlign:'center'}}/>
        <Stack.Screen name="CrPasswordPage" component={CrPassword}options={{title:"Kayıt ol",headerTitleAlign:'center'}}/>
        <Stack.Screen name="CrUsernamePage" component={CrUsername}options={{title:"Kayıt ol",headerTitleAlign:'center'}}/>
        <Stack.Screen name="LikedPage" component={Liked}/>
        <Stack.Screen name="UsersPage" component={Users}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

