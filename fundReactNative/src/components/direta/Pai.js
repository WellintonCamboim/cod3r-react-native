import React, {Fragment} from 'react'
import { View, Text } from 'react-native'
import style from '../style'
import Filho from '../direta/Filho'

export default props => {
    let x = 12
    let y = 100
    return (
        <Fragment>
            <Filho a={x} b={y}></Filho>
            <Filho a={x + 100} b={y + 200}></Filho>
        </Fragment>

    )
}