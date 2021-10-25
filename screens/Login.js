
import React, { useState, useRef } from 'react'
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet, Text, View, Image, TextInput, TouchableOpacity,
  KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard,
  ScrollView, ActivityIndicator
} from 'react-native';

import Constants from 'expo-constants'

import { tailwind, getColor } from '../tailwind';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Container from '../components/Container';
import Content from '../components/Content';

import { Ionicons, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';

export default function Login({navigation}) {

  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <StatusBar barStyle='dark' style='dark' />
    <View style={[tailwind('flex-1 bg-white'), styles.header]}>

      <View style={tailwind('h-80 p-5 justify-center items-center')}>
          <Image resizeMode="contain" style={tailwind('w-full')} source={require('../assets/login.png')} />
      </View>
      <View style={tailwind('justify-center items-center p-5')}>
          <Text style={tailwind('text-4xl font-bold text-primary')}>Sign In</Text>
          <Text style={tailwind('text-xl text-gray-400')}>Please enter your email and password to login</Text>
      </View>
      <View style={tailwind('mx-5')}>

          <View style={tailwind('justify-center items-center mt-2')}>
            <TextInput placeholder="Email" style={tailwind('p-3 w-full rounded-lg bg-gray-300 text-lg pl-12 pr-8 text-primary')} />
            <MaterialCommunityIcons name="email" size={24} style={tailwind(`text-gray-500 absolute pl-2 left-0`)} />
          </View>
          <View style={tailwind('justify-center items-center mt-3')}>
            <TextInput secureTextEntry={!showPassword} placeholder="Password" style={tailwind('p-3 w-full rounded-lg bg-gray-300 text-lg pl-12 pr-8 text-primary')} />
            <Entypo name="lock" size={24} style={tailwind(`text-gray-500 absolute pl-2 left-0`)} />
            <TouchableOpacity onPress={() => setShowPassword((prevState) => !prevState)} style={tailwind('absolute pr-2 right-0')}>
              <Ionicons name={showPassword ? "md-eye" : "md-eye-off"} size={24} style={tailwind(`text-gray-500`)} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
          <Text style={tailwind('text-right font-bold text-primary mt-1')}>Forgot Password?</Text>
          </TouchableOpacity>
          
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Home')} style={tailwind('p-3 bg-primary m-10 rounded-xl justify-center items-center')}>
        <Text style={tailwind('text-white font-bold text-3xl')}>Login</Text>
      </TouchableOpacity>

      <View style={tailwind('p-5 justify-center items-center')}>
        <Text style={tailwind('text-xl text-gray-400')}>Don't have an account? <Text style={tailwind('text-primary font-bold')}>Signup</Text></Text>
      </View>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingTop: (Platform.OS === 'ios' ? Constants.statusBarHeight : Constants.statusBarHeight) + 20,
  },
})
