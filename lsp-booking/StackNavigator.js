import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const StackNavigator = () => {
  const Tab = createBottomTabNavigator()
  const Stack = createNativeStackNavigator()

  function BottomTab() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Home" />
      </Tab.Navigator>
    )
  }

  return (
    <view>
      <Text>StackNavigator</Text>
    </view>
  )
}

export default StackNavigator

const styles = StyleSheet.create({})
