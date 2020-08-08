import React, { useState } from 'react'
import { View, Text, TextInput } from 'react-native'

export default props => {
    const [nome, setNome] = useState('Qual é o seu nome?')
    return (
        <View>
            <Text>{nome}</Text>
            <TextInput
                placeholder="Informe seu nome meu caro amigo"
                value={null}
                onChangeText={nome => setNome(nome)}
            />
        </View>
    )
}