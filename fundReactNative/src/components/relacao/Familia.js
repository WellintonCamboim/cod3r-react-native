import React, { Fragment } from 'react'
import { Text } from 'react-native'
// import Membro from './Membro'

export default props => {
    return (
        <Fragment>
            <Text>[Ínicio]Membros da Família: </Text>
           {props.children}
           <Text>[Fim]Membros da Família: </Text>
            {/* <Membro nome="Ana" sobrenome="Silva" />
            <Membro nome="Júlia" sobrenome="Silva" /> */}
            
        </Fragment>
    )
}