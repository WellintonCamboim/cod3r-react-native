import React, {Fragment} from 'react'
import { View, Text } from 'react-native'
import style from '../style'
import Pai from '../direta/Pai'

export default props => {
    return (
        <Fragment>
            <Text style={style.fontG}>{props.a}</Text>
            <Text style={style.fontG}>{props.b}</Text>
        </Fragment>
    )
}