import React from 'react';
import {Text,View,Button} from 'react-native'
import style from './style/style'

const Register=({navigation})=>{
    return(
        <View style={style.gaya}>
            <Text>Register</Text>
            <Button
                title="Go to Login"
                onPress={() => navigation.navigate('Login')}
            />
        </View>
    )
}

export default Register