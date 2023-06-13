import React, { useRef, useState, useEffect } from "react";
import { View, Text, StyleSheet, Animated, } from 'react-native';

const Grafik = ({ step, steps, height, props, color }) => {
    const animatedValue = useRef(new Animated.Value(-1000)).current;
    const reactive = useRef(new Animated.Value(-1000)).current;
    const [width, setWidth] = useState(0);
    const deger = (-width + (width * step) / steps);

    useEffect(() => {
        Animated.timing(animatedValue, {
            toValue: reactive,
            duration: 400,
            useNativeDriver: true,
        }).start();
    }, []);

    useEffect(() => {
        reactive.setValue(-width + (width * step) / steps);
    }, [step, width])

    return (
        <View style={styles.sıcaklıkSutunGrafigi}>
            <View style={styles.sıcaklıkSutunGrafigiTextC}>
                <Text style={styles.sSGText}>{props}</Text>
            </View>
            <View
                onLayout={e => {
                    const newWidth = e.nativeEvent.layout.width;
                    setWidth(newWidth)
                }}
                style={{
                    height,
                    backgroundColor: 'rgba(217, 217, 217, 0.0)',
                    borderRadius: height,
                    overflow: 'hidden',
                    left: 3,
                    width: '75%',
                }}>

                <Animated.View style={{
                    height,
                    width: '100%',
                    borderRadius: height,
                    backgroundColor: color,
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    transform: [{
                        translateX: animatedValue,
                    }]

                }} />
                <View>
                    <Text style={{ fontSize: 8, paddingLeft: (243 + deger), color: '#B6B3C6' }}>{step}°C</Text>
                </View>

            </View>

        </View >
    )
};
export default Grafik;

const styles = StyleSheet.create({
    sıcaklıkSutunGrafigi: {
        top: 24,
        marginHorizontal: '7%',
        marginTop: '1%',
        backgroundColor: '#d9d9d',
        height: 13,
        borderRadius: 10,
        justifyContent: 'space-between',
        flexDirection: 'row',


    },
    sıcaklıkSutunGrafigiTextC: {
        backgroundColor: 'rgba(81, 81, 81, 0.5)',
        borderRadius: 10,
    },
    sSGText: {
        fontSize: 12,
        color: '#D2C4BE',
        fontWeight: '200',

    },

})