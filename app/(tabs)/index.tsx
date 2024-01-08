import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const index = () => {
  return (
    <View>
      <Link href={"/(modals)/login"}>
        Login
      </Link>
      <Link href={"/Games/112"}>Game 112</Link>
    </View>
  )
}

export default index