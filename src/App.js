import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Router from './navigation/root-services'
import { NavigationContainer } from '@react-navigation/native'
import NavigationServices from './Screens/NavigationServices'



export default function App(){
  return (
        <>
          <NavigationContainer ref={(ref) => NavigationServices.setTopLevelNavigator(ref)}>
                  <Router/>
          </NavigationContainer>
        </>
  )
}

const styles = StyleSheet.create({})