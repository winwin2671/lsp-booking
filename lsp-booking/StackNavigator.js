import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AntDesign } from '@expo/vector-icons'
const StackNavigator = () => {
  const Tab = createBottomTabNavigator()
  const Stack = createNativeStackNavigator()

  function BottomTab() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Entypo name="home" size={24} color="black" />
              ) : (
                <AntDesign name="home" size={24} color="black" />
              ),
          }}
        />
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
