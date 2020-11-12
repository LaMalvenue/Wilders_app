import React, {createContext, useContext, useEffect, useState} from "react";
import axios from "axios";

export const WildersContext = createContext();

export const WildersContextProvider = ({children}) => {
    const [wilders, setWilders] = useState([]);

    return (
        <div>
        <WildersContext.Provider value={{wilders, setWilders}}>
            {children}
        </WildersContext.Provider>
        </div>
    );
};

export function useWilders() {
    const { wilders, setWilders } = useContext(WildersContext);
    const fetchWilders = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/wilder');
            const wildersResponse = response.data.result;
            setWilders(wildersResponse);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchWilders();
    }, []);

    return {
        wilders,
        update: () => fetchWilders()
    };
}