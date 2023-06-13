import React from "react"
import { StyleSheet } from "react-native"


export default StyleSheet.create({

    container: {
        flex: 1,

    },
    textCity: {
        fontSize: 21,
        color: '#D2C4BE',
        paddingTop: 3,
        fontWeight: '200',

    },
    textClock: {
        fontSize: 18,
        color: '#D2C4BE',
        opacity: 0.8,
        fontWeight: '200',

    },
    ayirContainers: {
        alignContent: 'space-around',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        flexDirection: 'row-reverse',

    },
    cityContainer: {
        backgroundColor: 'rgba(217, 217, 217, 0.1)',
        margin: 7,
        paddingLeft: 15,
        borderRadius: 20,
        height: 55,
        width: 130,

    },
    simgeContainer: {
        backgroundColor: 'rgba(217, 217, 217, 0.1)',
        margin: 7,
        paddingLeft: 15,
        borderRadius: 50,
        height: 55,
        width: 55,
        justifyContent: 'center',

    },
    tempContainer: {
        height: 150,
        paddingLeft: '38%',
        //top: '30%',
        justifyContent: 'center',

    },
    tempText: {
        fontSize: 90,
        color: '#FCF1DD',
        opacity: 0.7,
        fontWeight: '200',

    },
    detailContainer: {
        overflow: 'scroll',
        height: 400,
        width: '94%',
        //top: '30%',
        left: '3%',
        backgroundColor: 'rgba(217, 217, 217, 0.2)',
        borderRadius: 25,

    },
    sıcaklıkSutunGrafigi: {
        top: 24,
        marginHorizontal: '7%',
        //left: '7%',
        //width: '87%',
        backgroundColor: '#d9d9d',
        height: 13,
        borderRadius: 10,
        justifyContent: 'space-between',
        flexDirection: 'row-reverse',

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
    sıcaklıkSutunGrafigiSutunC: {
        backgroundColor: 'rgba(217, 217, 217, 0.0)',
        borderRadius: 10,
        left: 3,
        width: '70%',

    },
    sSGSutun: {
        backgroundColor: 'rgba(217, 217, 217, 0.7)',
        borderRadius: 10,
        height: 13,
        flexDirection: 'row',
        maxWidth: '100%',
        marginEnd: 70,

    },
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

    },
    hDBilgisiText: {
        marginTop: '8%',
        marginLeft: '15%',
        fontSize: 30,
        color: '#3A3333',
        fontWeight: '300',

    },
    hDBilgisiTextIki: {
        //marginTop: '3%',
        marginLeft: '15%',
        fontSize: 23,
        color: '#4E5757',
        fontWeight: '200',

    },
    bilgiImage: {
        paddingEnd: '7%',
        paddingTop: '12%',
        justifyContent: 'center',
        height: 50,
        weight: 100,

    },
    nemBasRuzContainer: {
        marginHorizontal: '6%',
        height: 120,
        top: '16%',
        justifyContent: 'space-between',
        flexDirection: 'row-reverse',

    },
    nemContainer: {
        height: 120,
        backgroundColor: '#d9d9d9',
        borderRadius: 10,
        minWidth: '27%',


    },
    nemIcon: {
        left: '30%',
        resizeMode: 'stretch',

    },
    basincContainer: {
        height: 120,
        borderRadius: 10,
        minWidth: '27%',
        backgroundColor: '#d9d9d9',

    },
    ruzgarContainer: {
        height: 120,
        borderRadius: 10,
        minWidth: '27%',
        backgroundColor: '#d9d9d9',

    },
    nemText: {
        marginTop: '3%',
        marginLeft: '3%',
        fontSize: 16,
        color: '#3A3333',
        fontWeight: '200',

    },
    basıncText: {
        marginTop: '3%',
        marginLeft: '3%',
        fontSize: 16,
        color: '#3A3333',
        fontWeight: '200',

    },
    ruzgarText: {
        marginTop: '3%',
        marginLeft: '3%',
        fontSize: 16,
        color: '#3A3333',
        fontWeight: '200',


    },
    item: {
        backgroundColor: '#0C3E5F',
        margin: 10,
        peddingTop: 10,
        borderRadius: 10,
        height: 140,
        opacity: 0.6,

    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: { height: 2 },
        shadowOpacity: 2,
        shadowRadius: 2,

    },
})