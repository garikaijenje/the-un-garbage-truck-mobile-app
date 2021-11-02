
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet, Text, View, Image, TextInput, TouchableOpacity,
  KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard,
  ScrollView, ActivityIndicator
} from 'react-native';


import { Ionicons, FontAwesome5, FontAwesome, MaterialCommunityIcons, MaterialIcons, AntDesign } from '@expo/vector-icons';
// import Constants from 'expo-constants'


import { responsiveSize, percentageSize, styles } from '../utilities';

import { tailwind } from '../tailwind';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Container from '../components/Container';
import Content from '../components/Content';

import { shona } from 'shonacss';

export default function Home({navigation}) {
  return (
    <Container>
      <Header navigation={navigation} noback title="The Un-Garbage Truck" />
      <Content>
        <View style={tailwind('flex-1 px-8')}>

          <ScrollView showsVerticalScrollIndicator={false} >
          
            <View style={[tailwind('flex-row justify-center items-center'), shona('%:margin-top-10')]}>
            <View style={tailwind('w-20 justify-center items-start pl-2 pt-2')}>
            <View style={[tailwind('bg-white p-5 rounded-full text-black'),styles.shadow]}>
              <FontAwesome5 name="user-alt" size={24} style={tailwind('text-primary')} />
            </View>
            </View>
            <View style={tailwind('flex-1 justify-center items-start')}>
              <View><Text style={tailwind('text-3xl font-bold')}>Hi, Garikai</Text></View>
              <View><Text style={tailwind('text-gray-500')}>Welcome back</Text></View>
            </View>
          </View>

          <View>
            <View style={tailwind('h-20 bg-gray-300 mx-5 mt-10 mb-2 rounded-xl')}></View>
            <View style={tailwind('h-20 bg-secondary m-2 -mt-20 rounded-xl')}></View>
            <View style={tailwind('flex-row p-5 h-20 bg-primary rounded-xl -mt-20 justify-between items-center')}>
              <View style={tailwind('justify-center items-center')}>
                  <Text style={[tailwind('text-white font-bold text-3xl'), shona('%:text-size-5')]}>$16.00</Text>
                <Text style={tailwind('text-white')}>Balance</Text>
              </View>
              <View style={tailwind('justify-center items-center')}>
                <TouchableOpacity style={tailwind('bg-secondary p-2 rounded-lg')}>
                  <Text style={tailwind('text-primary font-bold')}>Widthdraw</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* <View style={tailwind('flex-row h-40 justify-center items-center')}>
            <View style={tailwind('flex-1')}>
              <Text style={tailwind('text-center')}>Continue doing the amazing work you're doing. The environment thanks you!</Text>
            </View>

            <View style={tailwind('flex-1')}>
              <Image resizeMode="contain" style={tailwind('w-full')} source={require('../assets/you-rock.png')} />
            </View>
          </View> */}

          <View>
            <Text style={[tailwind('text-3xl text-gray-400 font-bold my-5'),shona('%:text-size-4')]}>Past Claims (Deposits)</Text>
          </View>

            <View style={[tailwind('flex-row h-20 bg-gray-200 rounded-2xl my-2 justify-around items-center p-5')]}>
              <View style={tailwind('w-14 justify-around items-center')}>
                <View style={tailwind('bg-gray-300 p-2 rounded-lg')}>
                    <FontAwesome5 name="recycle" size={24} color="black" />
                </View>
              </View>
              <View  style={tailwind('flex-1')}>
                <Text style={[tailwind('text-black font-bold text-2xl'),shona('%:text-size-2.5')]}>Milk Container</Text>
              </View>
              <View style={tailwind('w-20')}>
                <Text style={[tailwind('text-primary font-bold text-right text-2xl'),shona('%:text-size-2.5')]}>+ $2.50</Text>
                <Text style={[tailwind('text-gray-500 text-right text-lg'), shona('%:text-size-2')]}>25 Aug</Text>
              </View>
            </View>
            <View style={[tailwind('flex-row h-20 bg-gray-200 rounded-2xl my-2 justify-around items-center p-5')]}>
              <View style={tailwind('w-14 justify-around items-center')}>
                <View style={tailwind('bg-gray-300 p-2 rounded-lg')}>
                    <FontAwesome5 name="recycle" size={24} color="black" />
                </View>
              </View>
              <View  style={tailwind('flex-1')}>
                <Text style={[tailwind('text-black font-bold text-2xl'),shona('%:text-size-2.5')]}>Milk Container</Text>
              </View>
              <View style={tailwind('w-20')}>
                <Text style={[tailwind('text-primary font-bold text-right text-2xl'),shona('%:text-size-2.5')]}>+ $2.50</Text>
                <Text style={[tailwind('text-gray-500 text-right text-lg'), shona('%:text-size-2')]}>25 Aug</Text>
              </View>
            </View>
            <View style={[tailwind('flex-row h-20 bg-gray-200 rounded-2xl my-2 justify-around items-center p-5')]}>
              <View style={tailwind('w-14 justify-around items-center')}>
                <View style={tailwind('bg-gray-300 p-2 rounded-lg')}>
                    <FontAwesome5 name="recycle" size={24} color="black" />
                </View>
              </View>
              <View  style={tailwind('flex-1')}>
                <Text style={[tailwind('text-black font-bold text-2xl'),shona('%:text-size-2.5')]}>Milk Container</Text>
              </View>
              <View style={tailwind('w-20')}>
                <Text style={[tailwind('text-primary font-bold text-right text-2xl'),shona('%:text-size-2.5')]}>+ $2.50</Text>
                <Text style={[tailwind('text-gray-500 text-right text-lg'), shona('%:text-size-2')]}>25 Aug</Text>
              </View>
            </View>
            <View style={[tailwind('flex-row h-20 bg-gray-200 rounded-2xl my-2 justify-around items-center p-5')]}>
              <View style={tailwind('w-14 justify-around items-center')}>
                <View style={tailwind('bg-gray-300 p-2 rounded-lg')}>
                    <FontAwesome5 name="recycle" size={24} color="black" />
                </View>
              </View>
              <View  style={tailwind('flex-1')}>
                <Text style={[tailwind('text-black font-bold text-2xl'),shona('%:text-size-2.5')]}>Milk Container</Text>
              </View>
              <View style={tailwind('w-20')}>
                <Text style={[tailwind('text-primary font-bold text-right text-2xl'),shona('%:text-size-2.5')]}>+ $2.50</Text>
                <Text style={[tailwind('text-gray-500 text-right text-lg'), shona('%:text-size-2')]}>25 Aug</Text>
              </View>
            </View>

          
           

          </ScrollView>
          
        </View>
      </Content>
      <Footer navigation={navigation} active="Dashboard"/>
    </Container>
  )
}

