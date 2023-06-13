import React, { useRef, useState, useEffect } from "react";
import { View, Text, StyleSheet, Image } from 'react-native';

import clear from '../../../assets/weatherImage/clear.png';
import brokenCloudsNight from '../../../assets/weatherImage/brokenCloudsNight.png';
import clearNight from '../../../assets/weatherImage/clearNight.png';
import fewClouds from '../../../assets/weatherImage/fewClouds.png';
import fewCloudsNight from '../../../assets/weatherImage/fewCloudsNight.png';
import rain from '../../../assets/weatherImage/rain.png';
import rainNight from '../../../assets/weatherImage/rainNight.png';
import scatteredClouds from '../../../assets/weatherImage/scatteredClouds.png';
import scatteredCloudsNight from '../../../assets/weatherImage/scatteredCloudsNight.png';
import showerRain from '../../../assets/weatherImage/showerRain.png';
import thunderstorm from '../../../assets/weatherImage/thunderstorm.png';
import brokenClouds from '../../../assets/weatherImage/brokenClouds.png';



const WeatherInfo = ({ icon, main, description }) => {
    switch (icon) {

        case '01d':
            resim = clear;
            break;

        case '02d':
            resim = fewClouds;
            break;

        case '03d':
            resim = scatteredClouds;
            break;

        case '04d':
            resim = brokenClouds;
            break;

        case '09d':
            resim = showerRain;
            break;

        case '10d':
            resim = rain;
            break;

        case '11d':
            resim = thunderstorm;
            break;

        case '13d':
            resim = snow;
            break;

        case '50d':
            resim = mist;
            break;

        case '01n':
            resim = clearNight;
            break;

        case '02n':
            resim = fewCloudsNight;
            break;

        case '03n':
            resim = resim = scatteredCloudsNight;
            break;

        case '04n':
            resim = brokenCloudsNight;
            break;

        case '09n':
            resim = showerRain;
            break;

        case '10n':
            resim = rainNight;
            break;

        case '11n':
            resim = thunderstorm;
            break;

        case '13n':
            resim = snow;
            break;

        case '50n':
            resim = mist;
            break;

        default:
            resim = clear;

    }

    return (
        <View style={styles.hDBilgisiC}>
            <View style={styles.bilgiImage}>
                <Image
                    style={{
                        width: 90, height: 70, marginRight: '20%', marginBottom: '65%',
                    }}
                    source={resim}
                />
            </View>
            <View style={styles.hDBilgisiTextC}>
                <Text style={styles.hDBilgisiText}>{main}</Text>
                <Text style={styles.hDBilgisiTextIki}>{description}</Text>
            </View>
        </View>
    )
}
export default WeatherInfo;

const styles = StyleSheet.create({

    hDBilgisiC: {
        marginHorizontal: '6%',
        height: 90,
        top: '13%',
        backgroundColor: 'lightblue',
        opacity: 0.8,
        borderRadius: 15,
        justifyContent: 'space-between',
        flexDirection: 'row-reverse',
    },
    hDBilgisiTextC: {
        paddingLeft: '6%',
    },
    hDBilgisiText: {
        marginTop: '8%',
        fontSize: 30,
        color: '#3A3333',
        fontWeight: '300',
    },
    hDBilgisiTextIki: {
        fontSize: 23,
        color: '#4E5757',
        fontWeight: '200',
    },
    bilgiImage: {
        maxWidth: '30%',
        paddingTop: '20%',
        alignItems: 'center',
        justifyContent: 'center',
        height: 90,
    },
});
