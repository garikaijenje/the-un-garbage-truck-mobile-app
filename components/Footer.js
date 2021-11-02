import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Dimensions } from 'react-native';
import PropTypes from "prop-types";
import { tailwind } from '../tailwind';

import { Ionicons, FontAwesome5, FontAwesome, MaterialCommunityIcons, MaterialIcons, AntDesign } from '@expo/vector-icons';

import { responsiveSize, percentageSize } from '../utilities/responsive';


function Footer({ navigation, active }) {

  
  return (
    <>
      <View style={[tailwind('flex-row justify-around items-center'), { height: percentageSize(10)}]}>

        <TouchableOpacity style={tailwind(`flex-1 justify-center items-center`)} onPress={() => navigation.navigate('Home')}>
          <MaterialIcons name="dashboard" size={percentageSize(4)} style={tailwind(`mb-1 text-${active === 'Dashboard' ? 'secondary' : 'white'}`)} />
          <Text style={[tailwind(`text-${active === 'Dashboard' ? 'secondary' : 'white'}`), { fontSize: percentageSize(2) }]}>Dashboard</Text>
        </TouchableOpacity>
        <TouchableOpacity style={tailwind(`flex-1 justify-center items-center`)} onPress={() => navigation.navigate('Scan')}>
          <MaterialCommunityIcons name="qrcode-scan" size={percentageSize(4)} style={tailwind(`mb-1 text-${active === 'Scan' ? 'secondary' : 'white'}`)} />
          <Text style={[tailwind(`text-${active === 'Scan' ? 'secondary' : 'white'}`), { fontSize: percentageSize(2) }]}>Claim Deposit</Text>
        </TouchableOpacity>

        <TouchableOpacity style={tailwind(`flex-1 justify-center items-center`)} onPress={() => navigation.navigate('Shopping')}>
          <FontAwesome name="shopping-cart" size={percentageSize(4)} style={tailwind(`mb-1 text-${active === 'Shopping' ? 'secondary' : 'white'}`)} />
          <Text style={[tailwind(`text-${active === 'Shopping' ? 'secondary' : 'white'}`), { fontSize: percentageSize(2) }]}>Shopping</Text>
        </TouchableOpacity>

        <TouchableOpacity style={tailwind(`flex-1 justify-center items-center`)} onPress={() => navigation.navigate('Settings')}>
          <FontAwesome name="user-circle-o" size={percentageSize(4)} style={tailwind(`mb-1 text-${active === 'Settings' ? 'secondary' : 'white'}`)} />
          <Text style={[tailwind(`text-${active === 'Settings' ? 'secondary' : 'white'}`), { fontSize: percentageSize(2) }]}>Settings</Text>
        </TouchableOpacity>

      </View>
    </>
  )
}

Footer.propTypes = {
  active: PropTypes.string.isRequired
};

export default Footer;
