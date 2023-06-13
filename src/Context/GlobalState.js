import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
    const [deger, setDeger] = useState('');
    const [sehir, setSehir] = useState('');
    const [sehirBilgi, setSehirBilgi] = useState({})

    return (
        <GlobalContext.Provider
            value={{
                deger: deger,
                setDeger,
                hava: 'bulutlu',
                ruzgar: ['Kuzey Batı', '25km/s', 'şiddetli'],
                sehir: sehir,
                setSehir,
                sehirBilgi: sehirBilgi,
                setSehirBilgi,
            }}>
            {props.children}
        </GlobalContext.Provider>
    )
}