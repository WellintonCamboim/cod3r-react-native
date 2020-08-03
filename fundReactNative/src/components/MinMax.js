import React from 'react'
import { Text } from 'react-native'
import style from './style'

// export default (props) => {
//     console.warn(props)
//     const x = props.min
//     const y = props.max
//     return (
//         <Text style={style.fontG} >
//             O valor {y} é maior que o valor {x} !
//         </Text >

//     )
// }

export default props => (
    <Text style={style.fontG} >
        O valor {props.max} é maior que o valor {props.min} !
    </Text >
)