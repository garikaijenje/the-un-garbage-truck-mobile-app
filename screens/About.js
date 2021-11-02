
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

import { Entypo, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { shona } from 'shonacss';

export default function About({navigation}) {
  return (
    <Container>
      <Header navigation={navigation} title="About Us" />
      <Content>
        <View style={tailwind('flex-1 pb-0')}>
          
          <ScrollView >

            <View style={tailwind('p-5')}>

              <Text style={[tailwind('mb-5 text-xl text-black text-justify'),shona('%:ts-4')]}>
                This company was created as a direct result of my consumer experience. After years of shopping at traditional grocery stores, food co-ops, and farmer's markets I am convinced that there is a better way. Grocery stores have little if any regard for waste production and consumption. Farmer’s markets are great for fresh local and seasonal produce and can help eliminate waste, but they’re short on prepared foods, can be very inconvenient to access and still rely on single use packaging for any prepared foods on offer. The same is true for food co-ops – even those with bulk food sections require that you either use their disposable containers or schlep your own across town and back.
              </Text>

              <Text style={[tailwind('mb-5 text-xl text-black text-justify'), shona('%:ts-4')]}>
                Now, with grocery delivery services on the rise, I applaud the convenience and ease while cringing at YET ANOTHER layer of garbage that has been tacked on for the sake of our convenience.  Enter the Un-Garbage Truck. We take the convenience and ease of a grocery delivery service and flip that wastefulness on its head, alchemizing it into a brilliant solution. Want to order lots of local fresh fruits and veggies? No problem, our local distribution center delivers the best your area has to offer, all without the garbage. Want to buy bulk grains, cereals, nuts, granola etc.? No problem, we package it all up in reusable containers and bring it straight to your door. Love prepared foods like hummus, pesto, tomato sauce, dips and salsas? Wonderful, we’ll pack it right up in reusable containers and bring it right to your door. And what about all these durable aesthetically pleasing long life containers that my food came in? No problem, our delivery driver will pick them up, and refund your deposit. No muss, no fuss.
              </Text>

            </View>

            <View style={tailwind('justify-between p-5 items-center flex-row w-full bg-secondary rounded-tr-large rounded-tl-large')}>
              <View style={tailwind('')}>
                <Text style={[tailwind('text-2xl font-bold text-primary'), shona('%:ts-5')]}>Contact Us</Text>
                <Text style={[tailwind('text-primary font-bold'), shona('%:ts-3')]} >Send us an email to hello@ungarbagetruck.com</Text>
              </View>
              <View>
                {/* <MaterialCommunityIcons name="email-open" size={40} style={tailwind('text-primary')} /> */}
                <MaterialIcons name="mark-email-unread" size={40} style={tailwind('text-primary')} />
              </View>
            </View>


          </ScrollView>


          </View>

        

        
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
