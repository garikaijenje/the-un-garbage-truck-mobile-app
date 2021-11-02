
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet, Text, View, Image, TextInput, TouchableOpacity,
  KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard,
  ScrollView, ActivityIndicator
} from 'react-native';

import { shona } from 'shonacss';

import Constants from 'expo-constants'

import { tailwind, getColor } from '../tailwind';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Container from '../components/Container';
import Content from '../components/Content';

import { responsiveSize, percentageSize, styles } from '../utilities';

import { Entypo, MaterialIcons } from '@expo/vector-icons';

export default function Settings({navigation}) {

  return (
    <Container>
      <Header navigation={navigation} title="Settings" />
      <Content>
          <View style={tailwind('flex-1 p-5')}>
          
          <TouchableOpacity onPress={() => navigation.navigate('About')} style={[tailwind('w-full bg-white rounded-2xl flex-row justify-start items-center'), shona('%:p-2') ,styles.shadow]}>
              <View style={tailwind('w-10 justify-center items-center')}>
                <Entypo name="info-with-circle" size={40} style={tailwind('text-primary')} />
              </View>
            <View style={[tailwind('flex-1'), shona('%:px-1')]}>
                <Text style={[tailwind('font-bold'), { fontSize: percentageSize(2) }]}>About The Un-Garbage App</Text>
                <Text style={[tailwind('text-gray-500'), shona('%:ts-3')]}>A quick read about our app and benefits.</Text>
              </View>
            <View style={[tailwind('w-10 justify-center items-center'), shona('%:w-5')]}>
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


