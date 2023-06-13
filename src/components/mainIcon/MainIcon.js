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



const MainIcon = ({ icon }) => {
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
            <Image
                style={{
                    width: '70%', height: '110%', resizeMode: 'cover', overflow: 'visible'
                }}
                source={resim}
            />
        </View>
    )
}
export default MainIcon;

const styles = StyleSheet.create({

    hDBilgisiC: {
        //backgroundColor: 'lightblue',
        opacity: 0.8,
        flexDirection: 'row',
        justifyContent: 'center',
        height: '30%',
    },
});