import React, { Fragment } from 'react'
import { Text } from 'react-native'
import style from './style'
import If from './If'

export default props => {
    const usuario = props.usuario || {}

    return (
        <Fragment>
            <If teste={true && usuario.nome && usuario.email}>
                <Text style={style.fontG}> Usuário Logado:</Text>
                <Text style={style.fontG}>
                    {usuario.nome} - {usuario.email}
                </Text>
            </If>
        </Fragment>
    )
}