import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet, Button, TouchableOpacity, Image } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import BarcodeMask from 'react-native-barcode-mask';

import styled from 'styled-components/native';

import { tailwind, getColor } from '../tailwind';
import Constants from 'expo-constants'

import { Ionicons, FontAwesome5, FontAwesome, MaterialCommunityIcons, MaterialIcons, AntDesign } from '@expo/vector-icons';
import Header from '../components/Header';
import Footer from '../components/Footer';

import Container from '../components/Container';
import Content from '../components/Content';



export default function Scan2({navigation, active}) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState('Not yet scanned')

  const [counter, setCounter] = useState(1)

  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })()
  }

  // Request Camera Permission
  useEffect(() => {
    askForCameraPermission();
  }, [scanned]);

  // What happens when we scan the bar code
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    // setScanned((prevState) => !prevState ? true : false);
    // setText(data)
    console.log(counter+ ' Type: ' + type + '\nData: ' + data)
    // setCounter(counter + 1)
  };

  // Check permissions and return the screens
  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text>Requesting for camera permission</Text>
      </View>)
  }
  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={{ margin: 10 }}>No access to camera</Text>
        <Button title={'Allow Camera'} onPress={() => askForCameraPermission()} />
      </View>)
  }

  // Return the View
  return (
    <Container>
    <Header title="Claim Deposit" navigation={navigation}/>
    <Content>
      <View style={tailwind('flex-1 justify-center items-center')}>
          {!scanned ?
          <>
          <View style={styles.barcodebox}>
            <BarCodeScanner onBarCodeScanned={scanned ? undefined : handleBarCodeScanned} width={600} height={600} />
          </View>

          <Text style={tailwind('font-bold text-3xl mt-5 text-secondary')}>Scan Container</Text>
          <Text style={tailwind('text-gray-500 text-lg mx-20 text-center')}>Position your smartphone camera close to the QR Code</Text>
          </>
        :
        <>
          <View style={tailwind('h-40 w-full p-5 justify-center items-center mb-10')}>
            <Image resizeMode="contain" style={tailwind('w-full')} source={require('../assets/well-done.png')} />
          </View>
          <Text style={tailwind('font-bold text-3xl mt-5 text-primary')}>Congratulations!</Text>
          <Text style={tailwind('text-gray-500 text-lg mx-20 text-center')}>Thank you for claiming your deposit and saving the environment</Text>
          </>
          }
      
        {scanned &&
        <View style={tailwind(' w-full px-20 mt-10')}>
          <TouchableOpacity onPress={() => setScanned(false)} style={tailwind('justify-center items-center bg-secondary w-full p-5 py-3 rounded-xl')}>
            <Text style={tailwind(' text-primary text-lg font-bold uppercase')}>SCAN ANOTHER</Text>
          </TouchableOpacity>
        </View>}
        
      {/* {scanned && <Button title={'Scan again'} onPress={() => setScanned(false)} style={tailwind('bg-secondary')} />} */}
    </View>
      </Content>
    <Footer navigation={navigation} active="Scan"/>
    </Container>
  );
}

const styles = StyleSheet.create({
  top: {
    paddingTop: Constants.statusBarHeight + 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  maintext: {
    fontSize: 16,
    margin: 20,
  },
  barcodebox: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
    width: 300,
    overflow: 'hidden',
    borderRadius: 30,
    backgroundColor: 'tomato',

    borderWidth: 4,
    borderColor: getColor('primary'),
    borderStyle: 'solid'
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.50,
    shadowRadius: .41,
    elevation: 8
  }
});
