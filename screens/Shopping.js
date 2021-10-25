
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

export default function Shopping({navigation}) {
  return (
    <Container>
      <Header navigation={navigation} title="Shopping" />
      <Content>


            <ScrollView scrollEventThrottle={16} >

            <View style={tailwind('flex-1 pt-5 mt-10')}>
              <Text style={tailwind('text-2xl font-bold px-5')}>What can we help you find, Garikai?</Text>
            </View>

            <View style={tailwind('h-44 mt-5 px-2')}>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
              <View style={[tailwind('h-36 w-36 my-4 mx-2 bg-white rounded-xl'), styles.shadow]}>
                <Image resizeMode="contain" style={tailwind('h-36 w-36')} source={require('../assets/prod1.png')} />
                <Text style={tailwind('absolute top-0 left-0 m-2 px-2 py-1 rounded-lg text-white bg-black')}>$2.50</Text>
              </View>
              <View style={[tailwind('h-36 w-36 my-4 mx-2 bg-white rounded-xl'), styles.shadow]}>
                <Image resizeMode="contain" style={tailwind('h-36 w-36')} source={require('../assets/prod2.png')} />
                <Text style={tailwind('absolute top-0 left-0 m-2 px-2 py-1 rounded-lg text-white bg-black')}>$2.00</Text>
              </View>
              <View style={[tailwind('h-36 w-36 my-4 mx-2 bg-white rounded-xl'), styles.shadow]}>
                <Image resizeMode="contain" style={tailwind('h-36 w-36')} source={require('../assets/prod3.png')} />
                <Text style={tailwind('absolute top-0 left-0 m-2 px-2 py-1 rounded-lg text-white bg-black')}>$1.50</Text>
              </View>
              <View style={[tailwind('h-36 w-36 my-4 mx-2 bg-white rounded-xl'), styles.shadow]}>
                <Image resizeMode="contain" style={tailwind('h-36 w-36')} source={require('../assets/prod4.png')} />
                <Text style={tailwind('absolute top-0 left-0 m-2 px-2 py-1 rounded-lg text-white bg-black')}>$6.50</Text>
              </View>
              </ScrollView>
            </View>

            </ScrollView>

      
      </Content>
      <Footer navigation={navigation} active="Shopping"/>
    </Container>
  )
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.90,
    shadowRadius: 1,
    elevation: 10
  }
})
