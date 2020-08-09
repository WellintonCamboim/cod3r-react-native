import React, { Fragment } from 'react'
import { View, StyleSheet } from 'react-native'
import Quadrado from './Quadrado'

export default props => {
    return (
        <Fragment>
            <View style={style.FlexV4}>
                <View style={style.V0} />
                <View style={style.V1} />
                <View style={style.V2} />
            </View >
        </Fragment >

    )
}

const style = StyleSheet.create({
    FlexV4: {
        flexGrow: 1,
        // flexDirection: "row",
        // justifyContent: "space-evenly",
        // alignItems: "flex-start",
        // height: 350,
        width: 100,
        backgroundColor: '#000',
    },
    V0: {
        backgroundColor: '#36c9a7',
        height:300,
    },
    V1: {
        backgroundColor: 'orange',
        flexGrow: 3,

    },
    V2: {
        backgroundColor: '#dd22c1',
        flexGrow: 1,
        // height:200,

    },
})