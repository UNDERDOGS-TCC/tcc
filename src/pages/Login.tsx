import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Animated} from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';

const Login: React.FC = () => {
    const navigation = useNavigation();
    const images = {
        brasil: require('../../assets/brasil.jpg'),
    };

    return (
        <View style={styles.container}>
            <View >
            <View style={styles.imageAndText}>
                <Image style={styles.imageBrasil} source={images.brasil} />
                <Text style={styles.textServicos}> Serviços{"\n"}
                    <Text style={styles.textPublicos}> Públicos
                    </Text>
                </Text>
            </View>

            <TextInput style={styles.inputUser}
                placeholder="Usuário"/>
            <TextInput style={styles.inputPassword}
                secureTextEntry={true}
                placeholder="Senha"/>

            <TouchableOpacity style={styles.botao}
            onPress={() => navigation.navigate('Home' as never)}>
                <Text style={styles.botaoText}>Entrar</Text>
            </TouchableOpacity>
            </View>
            <Text style={{ padding: 20, fontSize: 18, marginTop: 20 }}>Não tem uma conta?</Text>

            <TouchableOpacity >
                <Text style={styles.textCriarConta}>Criar conta</Text>
            </TouchableOpacity>
            
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 180,
        marginTop: 80,
    },
    imageBrasil: {
        width: 90,
        height: 90,
    },
    imageAndText: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
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
        width: 320,
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
        width: 320,
        height: 40,
        backgroundColor: '#F1F7FD',
        borderWidth: 1,
        borderColor: '#9FCCFE',
        borderRadius: 50,
        fontSize: 16,
        padding: 15,
    },
    botao: {
        marginTop: 30,
        width: 320,
        height: 40,
        backgroundColor: '#00346C',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    botaoText: { 
        fontSize: 20,
        color: '#FFFFFF',
    },
    textCriarConta: {
        color: '#0066FF',
        fontSize: 18,
    },
});