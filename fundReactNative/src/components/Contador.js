import React, { Fragment, useState } from 'react'
import { Button, Text } from 'react-native'
import style from './style'

// export default props => {
//     // let numero = props.inicial
//     const [numero, setNumero] = useState(props.inicial)

//     const inc = () => {
//         setNumero(numero + props.passo)
//     }

//     const dec = () => setNumero(numero - props.passo)

//     return (
//         <Fragment>
//             <Text style={style.fontG}>{numero}</Text>
//             <Button title="+" onPress={inc} />
//             <Button title="-" onPress={dec} />
//         </Fragment>
//     )
// }

export default ({ inicial = 0, passo = 7 }) => {
    // let numero = props.inicial
    const [numero, setNumero] = useState(inicial)

    const inc = () => {
        setNumero(numero + passo)
    }

    const dec = () => setNumero(numero - passo)

    return (
        <Fragment>
            <Text style={style.fontG}>{numero}</Text>
            <Button title="+" onPress={inc} />
            <Button title="-" onPress={dec} />
        </Fragment>
    )
}