import { TDA_QUOTES_API, TDA_CLIENT_ID } from "../config";

export const getQuotes = async (symbols) => {
    const response = await fetch(TDA_QUOTES_API + `?apikey=${TDA_CLIENT_ID}&symbol=${symbols}`);
    const data = await response.json();
    return data;
    };
    