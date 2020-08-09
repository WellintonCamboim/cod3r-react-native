import React from 'react'
import { View, StyleSheet } from 'react-native'
import Quadrado from './Quadrado'

export default props => {
    return (
        <View style={style.FlexV2}>
            <Quadrado color="green"/>
            <Quadrado color="red" />
            <Quadrado color="blue" />
            <Quadrado color="yellow" />
            <Quadrado color="pink" />
        </View>
    )
}

const style = StyleSheet.create({
    FlexV2: {
        flex: 1,
        width: '100%',
        justifyContent: "space-evenly",
        alignItems: "flex-end", 
        backgroundColor: '#000',
    },
})