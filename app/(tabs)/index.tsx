import { View, Text } from 'react-native'
import React from 'react'
import PrevTuto from '../components/PrevTuto'
import Box from '../components/box'

const index = () => {
  return (
    <View style={{padding: 40, paddingTop: 90}}>
      {/* <PrevTuto /> */} 
      <Box style={{ backgroundColor: "#1c4c56", }} children="box"/>
    </View>
  )
}

export default index