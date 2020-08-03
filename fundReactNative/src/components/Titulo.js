import React, { Fragment } from 'react'
import { Text } from 'react-native'
import style from './style'

export default props => (
    <Fragment>
        <Text style={style.fontG}>{props.principal}</Text>
        <Text>{props.secundario}</Text>
    </Fragment>
)