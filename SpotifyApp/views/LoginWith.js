
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';

export default function App({navigation}) {
    return (
        <View style={styles.container}>
            <View style={{ width: '100%', height: '30%' }}>
            </View>
            <View style={{ width: '100%', height: '70%', justifyContent: 'space-around', alignItems: 'center' }}>
                <Image style={{ width: 70, height: 70 }} source={require('../assets/Icon/iconSpotify.svg')} />
                <View style={{ width: '100%' }}>
                    <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#fff', alignSelf: 'center' }}>
                        Millions of songs.
                    </Text>
                    <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#fff', alignSelf: 'center' }}>
                        Free on Spotify.
                    </Text>

                </View>
                <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                    <Pressable style={{ width: '80%', height: 50, backgroundColor: '#1CDE43', borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                            Sign up Free
                        </Text>
                    </Pressable>
                    <Pressable style={styles.btn}>
                        <Image resizeMode='contain' style={{ width: 24, height: 24, position: 'absolute', left: 10 }}
                            source={require('../assets/Icon/iconPhone.svg')} />
                        <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#fff', alignSelf: 'center' }}>
                            Continute with phone number
                        </Text>
                    </Pressable>
                    <Pressable style={styles.btn}>
                        <Image resizeMode='contain' style={{ width: 24, height: 24, position: 'absolute', left: 10 }}
                            source={require('../assets/Icon/iconGoogle.svg')} />
                        <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#fff', alignSelf: 'center' }}>
                            Continute with Google
                        </Text>
                    </Pressable>
                    <Pressable style={styles.btn}>
                        <Image resizeMode='contain' style={{ width: 24, height: 24, position: 'absolute', left: 10 }}
                            source={require('../assets/Icon/iconFB.svg')} />
                        <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#fff', alignSelf: 'center' }}>
                            Continute with Facebook
                        </Text>
                    </Pressable>
                    <Pressable style={styles.btn}>
                        <Image resizeMode='contain' style={{ width: 24, height: 24, position: 'absolute', left: 10 }}
                            source={require('../assets/Icon/iconApple.svg')} />
                        <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#fff', alignSelf: 'center' }}>
                            Continute with Apple
                        </Text>
                    </Pressable>
                    <Pressable 
                    onPress={()=>{navigation.navigate('Login')}}
                    style={{width:200,height:50,justifyContent:'center',alignItems:'center'}}>
                        <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#fff', alignSelf: 'center' }}>
                            Login
                        </Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundImage: "linear-gradient(20deg,#000 40%,#1CDE43 70%,#000 90%,#1CDE43,#000)",
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn: {
        marginTop:10,
        width: '80%',
        height: 50,
        backgroundColor: '#000',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: '#fff',
        flexDirection: 'row',
    }
});