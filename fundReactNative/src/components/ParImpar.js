import React from 'react'
import { Text, View } from 'react-native'
import style from './style'

// export default ({ num = 0 }) => {
//     if (num % 2 === 0) {
//         return (
//             <View>
//                 <Text style={style.fontG}>O resultado é: </Text>
//                 <Text style={style.fontG}>Par</Text>
//             </View>
//         )
//     } else {
//         return (
//             <View>
//                 <Text style={style.fontG}>O resultado é: </Text>
//                 <Text style={style.fontG}>Ímpar</Text>
//             </View>
//         )
//     }
// }

export default ({ num = 0 }) => {
    return (
        <View>
            <Text style={style.fontG}>O resultado é: </Text>
            {num % 2 === 0
                ? <Text style={style.fontG}>Par</Text>
                : <Text style={style.fontG}>Ímpar</Text>
            }
        </View>
    )

}