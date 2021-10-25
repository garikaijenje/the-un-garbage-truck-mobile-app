import React from 'react'
import { View, Text } from 'react-native'

import { tailwind, getColor } from '../tailwind';

export default function Content({children}) {
  return (
    <View style={tailwind('flex-1 bg-white rounded-tl-large')}>
      {children}
    </View>
  )
}
