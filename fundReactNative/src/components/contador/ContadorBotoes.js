import React, { Fragment } from 'react'
import { View, Button, StyleSheet } from 'react-native'

export default props => {
    return (
        <Fragment>
            <View style={styleButton.Button}>
                <Button title="+" onPress={props.inc} />
                <Button title="-" onPress={props.dec} />
            </View>
        </Fragment>
    )
}
const styleButton = StyleSheet.create({
    Button: {
        flexDirection: "row"
    }
})
