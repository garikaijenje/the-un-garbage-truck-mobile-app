import { StyleSheet, Platform } from 'react-native'
import { responsiveSize, percentageSize } from "./responsive";
import Constants from 'expo-constants'

const styles = StyleSheet.create({
  header: {
    paddingTop: Constants.statusBarHeight + percentageSize(2),
  },
  shadow: Platform.OS === "ios" ? {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -0,
    },
    shadowOpacity: 0.20,
    shadowRadius: 5
  } : {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.9,
    shadowRadius: 1,
    elevation: 5
  },
  containerPadding: {
    padding: percentageSize(1)
  }

});

export default styles;