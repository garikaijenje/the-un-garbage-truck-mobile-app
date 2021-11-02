import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity, StyleSheet, Platform, Dimensions } from 'react-native';
import PropTypes from "prop-types";
import { tailwind, getColor } from '../tailwind';

import { Ionicons, FontAwesome5, FontAwesome, MaterialCommunityIcons, MaterialIcons, AntDesign } from '@expo/vector-icons';

import Constants from 'expo-constants'
import { responsiveSize, percentageSize, styles } from '../utilities';

function Header({ navigation, title, noback }) {

  return (
    <>
      <StatusBar barStyle='light' style='light' />
      <View style={[tailwind('flex-row px-5 justify-between items-center pb-3 bg-primary'), styles.header]}>
        <View>
          {!noback &&
            <TouchableOpacity onPress={() => navigation.goBack()} style={[tailwind('bg-white rounded-full'), { paddingVertical: percentageSize(0.5), paddingHorizontal: percentageSize(0.65)}]}>
              <Ionicons name="arrow-back-outline" size={percentageSize(3)} style={tailwind('text-black')} />
            </TouchableOpacity>
          }
        </View>
        <View>
          <Text style={[tailwind('text-white uppercase font-bold'), { fontSize: percentageSize(3)}]}>{title}</Text>
        </View>
        <View>
          {/* <TouchableOpacity style={tailwind('justify-center items-center')} onPress={() => navigation.navigate('Login')}>
            <MaterialIcons name="logout" size={30} style={tailwind('text-primary')} />
          </TouchableOpacity> */}
        </View>
      </View>
    </>
  )

}

Header.propTypes = {
  title: PropTypes.string.isRequired
};

// const styles = StyleSheet.create({
//   header: {
//     paddingTop: Constants.statusBarHeight + percentageSize(5),
//   },
//   shadow: {
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 1,
//     },
//     shadowOpacity: 0.50,
//     shadowRadius: .41,
//     elevation: 8
//   }
// })

export default Header;
