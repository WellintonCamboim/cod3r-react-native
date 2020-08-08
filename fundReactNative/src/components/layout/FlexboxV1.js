import React from 'react'
import { View, StyleSheet } from 'react-native'
import Quadrado from './Quadrado'

export default props => {
    return (
        <View style={style.FlexV1}>
            <Quadrado color="green"/>
            <Quadrado color="red" />
            <Quadrado color="blue" />
            <Quadrado color="yellow" />
            <Quadrado color="pink" />
        </View>
    )
}

const style = StyleSheet.create({
    FlexV1: {
        flexGrow: 1,
        justifyContent: "space-between",
        backgroundColor: '#000',
    },
})