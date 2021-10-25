import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import PropTypes from "prop-types";
import { tailwind } from '../tailwind';

import { Ionicons, FontAwesome5, FontAwesome, MaterialCommunityIcons, MaterialIcons, AntDesign } from '@expo/vector-icons';

function Footer({ navigation, active }) {
  return (
    <>
      <View style={[tailwind('flex-row h-16 justify-around items-center')]}>

        <TouchableOpacity style={tailwind(`flex-1 justify-center items-center`)} onPress={() => navigation.navigate('Home')}>
          <MaterialIcons name="dashboard" size={24} style={tailwind(`text-${active === 'Dashboard' ? 'secondary' : 'white'}`)} />
          <Text style={tailwind(`text-${active === 'Dashboard' ? 'secondary' : 'white'} font-bold`)}>Dashboard</Text>
        </TouchableOpacity>
        <TouchableOpacity style={tailwind(`flex-1 justify-center items-center`)} onPress={() => navigation.navigate('Scan')}>
          <MaterialCommunityIcons name="qrcode-scan" size={24} style={tailwind(`text-${active === 'Scan' ? 'secondary' : 'white'}`)} />
          <Text style={tailwind(`text-${active === 'Scan' ? 'secondary' : 'white'} font-bold`)}>Claim Deposit</Text>
        </TouchableOpacity>

        <TouchableOpacity style={tailwind(`flex-1 justify-center items-center`)} onPress={() => navigation.navigate('Shopping')}>
          <FontAwesome name="shopping-cart" size={24} style={tailwind(`text-${active === 'Shopping' ? 'secondary' : 'white'}`)} />
          <Text style={tailwind(`text-${active === 'Shopping' ? 'secondary' : 'white'} font-bold`)}>Shopping</Text>
        </TouchableOpacity>

        <TouchableOpacity style={tailwind(`flex-1 justify-center items-center`)} onPress={() => navigation.navigate('Settings')}>
          <FontAwesome name="user-circle-o" size={24} style={tailwind(`text-${active === 'Settings' ? 'secondary' : 'white'}`)} />
          <Text style={tailwind(`text-${active === 'Settings' ? 'secondary' : 'white'} font-bold`)}>Settings</Text>
        </TouchableOpacity>

      </View>
    </>
  )
}

Footer.propTypes = {
  active: PropTypes.string.isRequired
};

export default Footer;
