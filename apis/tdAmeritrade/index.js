import { TDA_QUOTES_API, TDA_OPTIONS_CHAIN, TDA_CLIENT_ID } from "../config";

// Request takes in a list of symbols separated by commas and returns a list of quotes
export const getQuotes = async (symbols) => {
    const response = await fetch(TDA_QUOTES_API + `?apikey=${TDA_CLIENT_ID}&symbol=${symbols}`);
    const data = await response.json();
    return data;
};

// Request takes in a symbol and returns a list of options chains
export const getOptionsChain = async (symbol) => {
    const response = await fetch(TDA_OPTIONS_CHAIN + `?apikey=${TDA_CLIENT_ID}&symbol=${symbol}`);
    const data = await response.json();
    return data;
}
    