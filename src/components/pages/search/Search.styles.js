import React from "react"
import { StyleSheet } from "react-native"


export default StyleSheet.create({

    container: {
        flex: 1,
    },
    inputContainer: {

        backgroundColor: '#B5D1E5',
        height: 40,
        margin: 16,
        marginTop: '66%',
        //alignContent: 'space-around',
        //alignItems: 'flex-start',
        //height: 40,
        borderRadius: 8,
        opacity: 0.3,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    item: {
        backgroundColor: '#0C3E5F',
        margin: 10,
        peddingTop: 10,
        borderRadius: 10,
        height: 140,
        opacity: 0.5,
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: { height: 2 },
        shadowOpacity: 2,
        shadowRadius: 2,
    },
    textInput: {
        fontSize: 18,
        height: 40,
        //margin: 12,
        //borderWidth: 1,
        padding: 10,
        minWidth: 280,

    },

})