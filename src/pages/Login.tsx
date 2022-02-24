import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Animated, Keyboard } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';

const Login: React.FC = () => {
    const navigation = useNavigation();
    const images = {
        brasil: require('../../assets/brasil.jpg'),
    };
    
    const entrar = () => {
        navigation.reset({
            index: 0,
            routes: [{name: 'Home' as never}]
        })
    }

    const [offset] = useState(new Animated.ValueXY({ x: 0, y: 80 }));
    const [opacity] = useState(new Animated.Value(0));
    const [logo] = useState(new Animated.ValueXY({ x: 90, y: 90 }));

    useEffect(() => {

        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow);
        const KeyboardDidHideListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide);

        Animated.parallel([
            Animated.spring(offset.y, {
                toValue: 0,
                speed: 4,
                bounciness: 30,
                useNativeDriver: true,
            }),
            Animated.timing(opacity, {
                toValue: 1,
                duration: 200,
                useNativeDriver: true
            })
        ]).start();
    }, []);

    function keyboardDidShow() {
        Animated.parallel([
            Animated.timing(logo.x, {
                toValue: 20,
                duration: 50,
                useNativeDriver: true
            }),
            Animated.timing(logo.y, {
                toValue: 25,
                duration: 50,
                useNativeDriver: true
            }),
        ]).start();
    }

    function keyboardDidHide() {
        Animated.parallel([
            Animated.timing(logo.x, {
                toValue: 90,
                duration: 90,
                useNativeDriver: true
            }),
            Animated.timing(logo.y, {
                toValue: 90,
                duration: 90,
                useNativeDriver: true
            }),
        ]).start();
    }

    return (
        <KeyboardAvoidingView style={{ padding: 10, alignItems: 'center', }}>


            <View style={styles.container}>
                <Animated.Image style={{ width: logo.x, height: logo.y, }} source={images.brasil} />
                <Text style={styles.textServicos}> Serviços{"\n"}
                    <Text style={styles.textPublicos}> Públicos
                    </Text>
                </Text>
            </View>

            <Animated.View style={[{
                opacity: opacity,
                transform: [
                    { translateY: offset.y }
                ]
            }]}>
                <TextInput style={styles.inputUser}
                    placeholder="Usuário"
                />
                <TextInput style={styles.inputPassword}
                    secureTextEntry={true}
                    placeholder="Senha"
                />

                <TouchableOpacity style={styles.botao}
                onPress={() => entrar()}
                >
                    <Text style={styles.botaoText}>Entrar</Text>
                </TouchableOpacity>

                <View style={styles.botaoCriarConta}>
                    <Text style={{ padding: 10, fontSize: 18 }}>Não tem uma conta?</Text>
                    <TouchableOpacity
                    >
                        <Text style={styles.textCriarConta}>Criar conta</Text>
                    </TouchableOpacity>
                </View>
            </Animated.View>
        </KeyboardAvoidingView>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    imageBrasil: {
        width: 90,
        height: 90,
    },
    textServicos: {
        color: '#FFDF00',
        fontSize: 40,
        fontStyle: 'italic',
        fontWeight: '600',
    },
    textPublicos: {
        color: '#009C3B',
        fontSize: 40,
        fontStyle: 'italic',
        fontWeight: '600',
    },
    inputUser: {
        marginTop: 50,
        width: 300,
        height: 40,
        backgroundColor: '#F1F7FD',
        borderWidth: 1,
        borderColor: '#9FCCFE',
        borderRadius: 50,
        fontSize: 16,
        padding: 15,
    },
    inputPassword: {
        marginTop: 20,
        width: 300,
        height: 40,
        backgroundColor: '#F1F7FD',
        borderWidth: 1,
        borderColor: '#9FCCFE',
        borderRadius: 50,
        fontSize: 16,
        padding: 15,
    },
    botao: {
        marginTop: 20,
        width: 300,
        height: 40,
        backgroundColor: '#00346C',
        borderWidth: 1,
        borderRadius: 50,
        fontSize: 16,
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    botaoText: {
        fontSize: 20,
        color: '#FFFFFF',
    },
    botaoCriarConta: {
        marginTop: 20,
        width: 300,
        height: 40,
        backgroundColor: '#f2f2f2f2',
        fontSize: 16,
        padding: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textCriarConta: {
        color: '#0066FF',
        fontSize: 18,
    },
});