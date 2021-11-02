import { Platform, Dimensions } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

export const responsiveSize = (size) => {
  return RFValue(size, SCREEN_HEIGHT);
}
export const percentageSize = (size) => {
  return RFPercentage(size);
}

