import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons'

import CurrentWeather from '../screens/CurrentWeather'
import UpcomingWeather from '../screens/UpcomingWeather'
import City from '../screens/City'

const Tab = createBottomTabNavigator()

const Tabs = ({ weather }) => {
    return (
        <Tab.Navigator 
            screenOptions={{
                tabBarActiveTintColor: '#78A2CC',
                tabBarInactiveTintColor: 'grey',
                tabBarStyle: {
                    backgroundColor: 'white',
                },
                headerStyle: {
                    backgroundColor: 'white'
                },
                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 25,
                    color: '#78A2CC'
                }
            }}
        >
            <Tab.Screen 
                name={'Current'} 
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Feather name={'droplet'} size={25} color={focused ? '#78A2CC' : 'black'} />
                    )
                }} 
            > 
                {() => <CurrentWeather weatherData={weather.list[0]} />}
            </Tab.Screen>

            <Tab.Screen 
                name={'Upcoming'} 
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Feather name={'clock'} size={25} color={focused ? '#78A2CC' : 'black'} />
                    )
                }} 
            >
                {() => <UpcomingWeather weatherData={weather.list} />}
            </Tab.Screen>

            <Tab.Screen 
                name={'City'} 
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Feather name={'home'} size={25} color={focused ? '#78A2CC' : 'black'} />
                    )
                }} 
            >
                {() => <City weatherData={weather.city} />}
            </Tab.Screen>
        </Tab.Navigator>
    )
}

export default Tabs