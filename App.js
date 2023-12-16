import React, { useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { View, StyleSheet, ActivityIndicator } from 'react-native'
import * as Location from 'expo-location'

import { WEATHER_API_KEY } from '@env'
import Tabs from './src/components/Tabs'
import { useGetWeather } from './src/hooks/useGetWeather'
import ErrorItem from './src/components/ErrorItem'

const App = () => {
  const [loading, error, weather] = useGetWeather()

  const { container } = styles

  if (weather && weather.list && !loading) {
    return (
      <NavigationContainer>
        <Tabs weather={weather} />
      </NavigationContainer>
    )
  }

  return (
    <View style={container}>
      { error ? (
          <ErrorItem />
        ) : (
          <ActivityIndicator size={'large'} color={'blue'} />
        )
      }
    </View>
  )
}

const styles =  StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1
  }
})

export default App