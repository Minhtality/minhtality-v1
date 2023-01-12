import { TDA_CLIENT_ID } from "@apis/config";
import { TDAmeritrade } from "@knicola/tdameritrade";

const REDIRECT_URI = "http://localhost";
const CONSUMER_ID = `${TDA_CLIENT_ID}`;

export const tdAmeritrade = new TDAmeritrade({
    redirectUri: REDIRECT_URI,
    apiKey: CONSUMER_ID,
});

export const getAccessToken = async () => {
    const token = await tdAmeritrade.getAccessToken();
    return token;
};

export const refreshAccessToken = async () => {
    const token = await tdAmeritrade.refreshAccessToken(
        localStorage.getItem("refreshToken")
    );
    return token;
};

export const loginTD = () => {
    const loginUrl = new URL(
        `https://auth.tdameritrade.com/auth?response_type=code&redirect_uri=${encodeURIComponent(
            REDIRECT_URI
        )}&client_id=${encodeURIComponent(CONSUMER_ID)}%40AMER.OAUTHAP`
    );
    window.open(loginUrl, "_blank");
};
