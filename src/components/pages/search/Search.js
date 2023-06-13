import React, { useEffect, useContext, useState } from "react";
import { SafeAreaView, ImageBackground, Button, View, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, TextInput } from "react-native";
import axios from "axios";

/* Ekranlar */
import Detail from "../detail/Detail";
/* Stil */
import styles from './Search.styles'
/* Image */
import backG from '/Users/eslemkurt/Desktop/AwesomeProject/assets/arkaPlanDunya.png';

import { GlobalContext } from "../../../Context/GlobalState";


const Search = ({ navigation }) => {
    const api = {
        key: 'd71f609a686f5b1e90f8523ea76a61eb',
    };

    const { sehir, setSehir, sehirBilgi, setSehirBilgi } = useContext(GlobalContext)

    useEffect(() => {
        async function sehirAra() {
            try {
                const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${sehir}&units=metric&appid=${api.key}&lang=tr`);
                setSehirBilgi(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        sehirAra();
    }, [sehir])

    function aramaYapmak() {
        setSehir('')
        navigation.navigate(Detail)
    }

    return (
        <ImageBackground
            source={backG}
            style={{ width: '100%', height: '100%' }}>
            <SafeAreaView style={styles.container}>
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View style={styles.inputContainer} >
                            <TextInput
                                style={styles.textInput}
                                onChangeText={setSehir}
                                value={sehir}
                                placeholder='Şehir ara...'
                            />
                            <Button
                                title="ara"
                                onPress={aramaYapmak}
                            />
                        </View>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </ImageBackground>
    )
}
export default Search;

