import React from 'react'
import { View, StyleSheet } from 'react-native'
import Quadrado from './Quadrado'

export default props => {
    return (
        <View style={style.FlexV3}>
            <Quadrado color="green" lado={20} />
            <Quadrado color="red" lado={30} />
            <Quadrado color="blue" lado={40} />
            <Quadrado color="yellow" lado={50} />
            <Quadrado color="pink" lado={60} />
        </View>
    )
}

const style = StyleSheet.create({
    FlexV3: {
        // flex: 1,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "flex-start",
        height: 350,
        width: '100%',
        backgroundColor: '#000',
    },
})