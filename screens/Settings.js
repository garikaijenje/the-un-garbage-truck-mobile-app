
import React from 'react'
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

import { Entypo, MaterialIcons } from '@expo/vector-icons';

export default function Settings({navigation}) {
  return (
    <Container>
      <Header navigation={navigation} title="Settings" />
      <Content>
          <View style={tailwind('flex-1 p-5')}>
          
          <TouchableOpacity onPress={() => navigation.navigate('About')} style={[tailwind('w-full bg-white rounded-2xl flex-row justify-start items-center p-5'), styles.shadow]}>
              <View style={tailwind('w-10 justify-center items-center')}>
                <Entypo name="info-with-circle" size={40} style={tailwind('text-primary')} />
              </View>
              <View style={tailwind('flex-1 px-5')}>
                <Text style={tailwind('font-bold text-xl')}>About The Un-Garbage App</Text>
                <Text style={tailwind('text-gray-500')}>A quick read about our app and benefits.</Text>
              </View>
              <View style={tailwind('w-10 justify-center items-center')}>
                <MaterialIcons name="keyboard-arrow-right" size={40} style={tailwind('text-primary')} />
              </View>
            </TouchableOpacity>

          </View>

        <TouchableOpacity onPress={() => navigation.navigate('Login')} style={tailwind('h-12 bg-secondary m-5 rounded-xl justify-center items-center')}>
          <Text style={tailwind('text-primary font-bold text-2xl')}>Logout</Text>
        </TouchableOpacity>
      </Content>
      <Footer navigation={navigation} active="Settings"/>
    </Container>
  )
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#888',
    shadowOffset: {
      width: 10,
      height: 15,
    },
    shadowOpacity: 0.50,
    shadowRadius: .41,
    elevation: 20
  }
})
