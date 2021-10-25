
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet, Text, View, Image, TextInput, TouchableOpacity,
  KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard,
  ScrollView, ActivityIndicator
} from 'react-native';

import Constants from 'expo-constants'

import { tailwind } from '../tailwind';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Container from '../components/Container';
import Content from '../components/Content';

export default function Home({navigation}) {
  return (
    <Container>
      <Header navigation={navigation} noback title="The Un-Garbage Truck" />
    <Content>
      <View style={tailwind('flex-1 justify-center items-center')}>
        <Text>Home</Text>
      </View>
    </Content>
      <Footer navigation={navigation} active="Dashboard"/>
    </Container>
  )
}

const styles = StyleSheet.create({
  top: {
    paddingTop: Constants.statusBarHeight,
  }
})
