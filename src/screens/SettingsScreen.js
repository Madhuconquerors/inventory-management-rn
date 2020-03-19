import React, {useState, useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import HeaderView from '../components/HeaderView';
const SettingsScreen=({navigation}) =>{
    async function Logout() {
      // console.log(await AsyncStorage.getItem('auth_key'));
      await AsyncStorage.removeItem('auth_key'); //Removing the token from local storage while logging out
      // console.log(await AsyncStorage.getItem('auth_key'));
      navigation.navigate('LoginScreen');
    }
    return (
      <View>
        <HeaderView navigation={navigation} title={"Settings"} />
        <Text>Logout from here</Text>
        <Button
          title="Logout"
          onPress={() => {
            Logout();
          }}></Button>
      </View>
    );
  }
  
  export default SettingsScreen;

