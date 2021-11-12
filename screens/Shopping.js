
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet, Text, View, Image, TextInput, TouchableOpacity,
  KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard,
  ScrollView, ActivityIndicator, Dimensions
} from 'react-native';

import Constants from 'expo-constants'

import { tailwind, getColor } from '../tailwind';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Container from '../components/Container';
import Content from '../components/Content';

import { Entypo, MaterialIcons } from '@expo/vector-icons';

import { responsiveSize, styles } from '../utilities';

export default function Shopping({navigation}) {
  return (
    <Container>
      <Header navigation={navigation} title="Shopping" />
      <Content>

            <ScrollView scrollEventThrottle={16} >

            <View style={tailwind('flex-1 pt-5 mt-10')}>
              <Text style={[tailwind('text-2xl font-bold px-5'), { fontSize: responsiveSize(25)}]}>What can we help you find, Daniel?</Text>
            </View>

            <View style={tailwind('h-44 mt-5 px-2')}>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
              <View style={[tailwind('h-36 w-36 my-4 mx-2 bg-white rounded-xl'), styles.shadow]}>
                <Image resizeMode="contain" style={tailwind('h-36 w-36')} source={require('../assets/prod1.png')} />
                <View style={tailwind('absolute top-0 left-0 m-2 px-2 py-1 rounded-lg text-white bg-black')}>
                <Text style={tailwind('text-white')}>$2.50</Text>
                </View>
              </View>
              <View style={[tailwind('h-36 w-36 my-4 mx-2 bg-white rounded-xl'), styles.shadow]}>
                <Image resizeMode="contain" style={tailwind('h-36 w-36')} source={require('../assets/prod2.png')} />
                <View style={tailwind('absolute top-0 left-0 m-2 px-2 py-1 rounded-lg text-white bg-black')}>
                <Text style={tailwind('text-white')}>$2.50</Text>
                </View>
              </View>
              <View style={[tailwind('h-36 w-36 my-4 mx-2 bg-white rounded-xl'), styles.shadow]}>
                <Image resizeMode="contain" style={tailwind('h-36 w-36')} source={require('../assets/prod3.png')} />
                <View style={tailwind('absolute top-0 left-0 m-2 px-2 py-1 rounded-lg text-white bg-black')}>
                <Text style={tailwind('text-white')}>$2.50</Text>
                </View>
              </View>
              <View style={[tailwind('h-36 w-36 my-4 mx-2 bg-white rounded-xl'), styles.shadow]}>
                <Image resizeMode="contain" style={tailwind('h-36 w-36')} source={require('../assets/prod4.png')} />
                <View style={tailwind('absolute top-0 left-0 m-2 px-2 py-1 rounded-lg text-white bg-black')}>
                <Text style={tailwind('text-white')}>$2.50</Text>
                </View>
              </View>
              
              </ScrollView>
            </View>

            </ScrollView>
      
      </Content>
      <Footer navigation={navigation} active="Shopping"/>
    </Container>
  )
}

