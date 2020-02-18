import React from 'react';
import {Text,View,Button} from 'react-native'
import style from './style/style'

const Login=(props)=>{
    const Gotohome=()=>{
        props.navigation.navigate('Drawermain')
    }
    return(
        <View style={style.gaya}>
            <Text>Login</Text>
            <Button
                title="Go to Register"
                onPress={() => props.navigation.navigate('Register')}
            />
            <View style={{marginTop:10}}>
                <Button
                    color='tomato'
                    title="Go to Home"
                    onPress={Gotohome}
                />
            </View>
        </View>
    )
}

export default Login