import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';

export default function App({navigation}) {
    const [passwordVisible, setPasswordVisible] = useState(true);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    }
    return (
        <View style={styles.container}>
            <View style={{ width: '100%', height: '55%', justifyContent: 'space-between' }}>
                <View>
                    <View>
                        <Text style={styles.txt}>
                            Email or Username
                        </Text>
                        <TextInput
                            style={styles.txtInput}
                            outlineColor='gray'
                            placeholder='Nhập email or username...' />
                    </View>
                    <View>
                        <Text style={styles.txt}>
                            Password
                        </Text>
                        <TextInput
                            secureTextEntry={passwordVisible}
                            style={styles.txtInput}
                            right={
                                <TextInput.Icon
                                    icon={passwordVisible ? 'eye' : 'eye-off'}
                                    onPress={togglePasswordVisibility}
                                />
                            }
                            placeholder='Nhập password...' />
                    </View>
                </View>
                <Pressable 
                onPress={()=>{navigation.navigate('Home')}}
                style={styles.btnLogin}>
                    <Text style={{
                        fontSize: 20,
                        color: '#fff',
                        fontWeight: 'bold'
                    }} >Login</Text>
                </Pressable>
                <Pressable style={styles.btn}>
                    <Text style={{
                        fontSize: 14,
                        color: '#fff',
                        fontWeight: 'bold'
                    }} >Login without password</Text>
                </Pressable>
            </View>
            <View style={{ width: '100%', height: '40%' }}>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },
    txt: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 10
    },
    txtInput: {
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
        backgroundColor: '#fff',
        color: '#474444',
        fontSize: 20,
        marginBottom: 20,
    },
    btnLogin: {
        width: 150,
        height: 50,
        backgroundColor: '#1CDE43',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    btn: {
        width: 200,
        height: 30,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#fff',
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    }
});