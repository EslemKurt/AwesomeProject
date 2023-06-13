import React, { useContext } from "react";
import { SafeAreaView, View, Text, Image, ImageBackground, TouchableOpacity } from "react-native";

import Search from "../search/Search";

import styles from './Detail.styles';

import { GlobalContext } from "../../../Context/GlobalState";

import backG from '/Users/eslemkurt/Desktop/AwesomeProject/assets/havaBackG.png';
import simgeKonum from '/Users/eslemkurt/Desktop/AwesomeProject/assets/simgeKonum.png';
import nemIcon from '/Users/eslemkurt/Desktop/AwesomeProject/assets/iconNem.png';
import basincIcon from '/Users/eslemkurt/Desktop/AwesomeProject/assets/gauge.png';
import ruzgarIcon from '/Users/eslemkurt/Desktop/AwesomeProject/assets/ruzgarIcon.png';

import Grafik from '../../grafik/Grafik';
import WeatherInfo from '../../weatherInfo/WeatherInfo';
import MainIcon from '../../mainIcon/MainIcon';

function Detail({ navigation }) {
    const { sehir, sehirBilgi } = useContext(GlobalContext);

    const temp = Math.round(sehirBilgi.main.temp);
    const feelsLike = Math.round(sehirBilgi.main.feels_like);
    const tempMax = Math.round(sehirBilgi.main.temp_max);
    const tempMin = Math.round(sehirBilgi.main.temp_min);
    const name = sehirBilgi.name;
    const main = sehirBilgi.weather[0].main;
    const description = sehirBilgi.weather[0].description;
    const icon = sehirBilgi.weather[0].icon;
    const pressure = sehirBilgi.main.pressure;
    const speed = sehirBilgi.wind.speed;
    const humidity = sehirBilgi.main.humidity;

    var time = new Date();


    function geriDon() {
        navigation.navigate(Search);
    };

    return (
        <ImageBackground
            source={backG}
            style={{ width: '100%', height: '100%' }}>
            <SafeAreaView style={styles.container}>

                {/* şehir, saat, ve konum*/}
                <View style={styles.ayirContainers}>
                    <View style={styles.cityContainer}>
                        <Text style={styles.textCity}>{name}</Text>
                        <Text style={styles.textClock}>{time.getHours()}.{time.getMinutes()}</Text>
                    </View>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={geriDon}>
                        <View style={styles.simgeContainer}>
                            <Image
                                source={simgeKonum}
                                style={{ width: 24, height: 32, opacity: 0.9 }} />
                        </View>
                    </TouchableOpacity>
                </View>

                {/* ana ıcon */}
                <MainIcon icon={icon} />

                {/* sıcaklık */}
                <View style={styles.tempContainer}>
                    <Text style={styles.tempText}>{temp}°</Text>
                </View>

                { /* detaylar kutusu */}
                <View style={styles.detailContainer}>

                    {/*sıcaklık Grafik */}
                    <Grafik step={temp} steps={50} height={10} props='sıcaklık' color='rgba(255, 235, 185, 0.9)' />
                    <Grafik step={feelsLike} steps={50} height={10} props='hissedilen' color='rgba(250, 205, 213, 1.0)' />
                    <Grafik step={tempMax} steps={50} height={10} props='maxSıcaklık' color='rgba(255, 174, 156, 0.8)' />
                    <Grafik step={tempMin} steps={50} height={10} props='minSıcaklık' color='rgba(190, 224, 225, 0.8)' />

                    {/* hava durumu bilgisi */}
                    <WeatherInfo main={main} description={description} icon={icon} />

                    {/* basınç, nem ve rüzgar */}
                    <View style={styles.nemBasRuzContainer}>
                        <View style={styles.nemContainer} >
                            <Text style={styles.nemText}>nem</Text>
                            <Image
                                source={nemIcon}
                                style={styles.nemIcon} />
                            <Text style={styles.nemText}> %{humidity}</Text>
                        </View>
                        <View style={styles.basincContainer}>
                            <Text style={styles.basıncText}>basınç</Text>
                            <Image
                                source={basincIcon}
                                style={{ height: '50%', width: '50%', marginLeft: '25%', marginTop: '5%', resizeMode: 'stretch', }} />
                            <Text style={styles.basıncText}> {pressure} hPa</Text>
                        </View>
                        <View style={styles.ruzgarContainer}>
                            <Text style={styles.ruzgarText}>rüzgar</Text>
                            <Image
                                source={ruzgarIcon}
                                style={{ height: '50%', width: '50%', resizeMode: 'stretch', marginLeft: '25%', marginTop: '2%' }} />
                            <Text style={styles.ruzgarText}> {speed} km/sa</Text>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </ImageBackground>
    )
}
export default Detail;

//<Button title='bass' onPress={geriDon} />