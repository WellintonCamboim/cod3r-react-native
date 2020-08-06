import React, { useState } from 'react'
import { Text, TextPropTypes } from 'react-native'
import Filho from './Filho'
import style from '../style'

export default props => {
    const [texto, setTexto] = useState('')
    const [num, setNum] = useState(0)

    function exibirValor(numero, texto) {
        setNum(numero)
        setTexto(texto)
        }
    return (
        <>
            <Text style={style.fontG}>
                {texto}{num}
            </Text>
            <Filho
                min={1}
                max={60}
                funcao={exibirValor}
            />
        </>
    )

}
