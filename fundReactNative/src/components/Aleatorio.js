import React, { Fragment } from 'react'
import { Text } from 'react-native'
import style from './style'

// export default (props) => {
//     console.warn(props)
//     const x = props.x
//     const y = props.y
//     const valor = x + y

//     if (x >= y) {
//         const max = x
//         const min = y
//         return (
//             < Text style={style.fontG} > O valor {max} é maior que valor {min} !
//                 O valor aleatório é {valor} !
//             </Text >
//         )
//     } else {
//         const max = y
//         const min = x
//         return (
//             < Text style={style.fontG} > O valor {max} é maior que valor {min} !
//                 O valor aleatório é {valor} !
//             </Text >

//         )
//     }
// }

// export default props => {
//     // const { min, max } = props
//     const { x, y } = props
//     const delta = x - y + 1
//     const aleatorio = parseInt(Math.random() * delta ) + y

//     return (
//         <Text style={style.fontG}>
//             O valor aleatório é {aleatorio}!
//         </Text> 

//     )
// }

export default ({ x, y }) => {
    const delta = x - y + 1
    const aleatorio = parseInt(Math.random() * delta) + y

    return (
        <Text style={style.fontG}>
            O valor aleatório é {aleatorio}!
        </Text>

    )
}