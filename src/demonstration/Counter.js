import React, { useState, useEffect } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const Counter = () => {
    const [count, setCount] = useState(0)
    const [newCount, setNewCount] = useState(0)
    const { container, title } = styles

    useEffect(() => {
      console.log(`Count changed`)

      return () => {
        console.log('useEffect Cleanup')
      }
    }, [count])
    

    return (
        <View style={container}>
            <Text style={title}>{`count : ${count}`}</Text>

            <Button 
                color={'green'} 
                title={'Increase the count'} 
                onPress={() => setCount(count + 1)} 
            />

            <Button 
                color={'red'} 
                title={'Decrease the count'}
                onPress={() => setCount(count - 1)}
            />

            <Button 
                color={'green'} 
                title={'Increase the count'}
                onPress={() => setNewCount(count - 1)}
            />

            <Button 
                color={'red'} 
                title={'Decrease the count'}
                onPress={() => setNewCount(count - 1)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#78A2CC'
    },
    
    title: {
        alignSelf: 'center',
        fontSize: 25,
        marginTop: 25
    }
})

export default Counter