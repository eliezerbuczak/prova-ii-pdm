import {ActivityIndicator, Alert, Text, TextInput, View} from 'react-native';
import React, {useEffect, useState} from "react";
import FullScreen from "../components/containers/FullScreen";
import Logo from "../components/ui/Logo";
import ButtonEntrar from "../components/ui/ButtonEntrar";
import {router} from "expo-router";
import {ActionSheetProvider} from '@expo/react-native-action-sheet';
import useAuth from "../firebase/hooks/useAuth";
import InputText from "../components/ui/InputText";

export default function index() {
    const { user, login, loading } = useAuth();
    const [email, setEmail] = useState("user@example.com");
    const [password, setPassword] = useState("123456");

    useEffect(() => {
        if (user) {
            router.replace("/pets/");
        }
    }, [user]);

    if (loading) return(
    <FullScreen>
        <View className="items-center justify-center h-full"><ActivityIndicator size="large" color="#0000ff"/>
        </View>
        </FullScreen>)

    return (
        <ActionSheetProvider>
            <FullScreen>
                <View className="items-center justify-center h-full">
                    <Logo/>
                    <InputText
                        label="Usuário"
                        value={email}
                        placeholder="Digite seu nome de usuário"
                        onChangeText={setEmail}
                    />
                    <InputText
                        label="Senha"
                        value={password}
                        placeholder="Digite sua senha"
                        secureTextEntry
                        onChangeText={setPassword}
                    />
                    <View className="mt-12">
                        <ButtonEntrar onPress={async ()=>{
                            try {
                                await login(email, password);
                            }catch (e:any) {
                                console.error(e)
                                Alert.alert("Login Error", e.toString())
                            }

                        }}/>
                    </View>

                </View>


            </FullScreen>
        </ActionSheetProvider>
    )
}