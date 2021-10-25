import React from 'react'
import { View, Text } from 'react-native'

import { tailwind, getColor } from '../tailwind';

export default function Container({children}) {
  return (
    <View style={tailwind('flex-1 bg-primary')}>
      {children}
    </View>
  )
}
