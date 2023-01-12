import React, { useState, useEffect } from "react";
import { TDA_CLIENT_ID, TDA_REFRESH_TOKEN } from "@apis/config";
import { TDAmeritrade } from "@knicola/tdameritrade";

const REDIRECT_URI = "http://localhost";
const CONSUMER_ID = `${TDA_CLIENT_ID}`;

const index = () => {
    const [code, setCode] = useState("");
    const [account, setAccount] = useState([]);
    const [showSync, setShowSync] = useState(false);
    const td = new TDAmeritrade({
        apiKey: TDA_CLIENT_ID,
        redirectUri: "http://localhost",
        sslKey: "C:UsersMinhtalityselfsigned.key",
        sslCert: "C:UsersMinhtalityselfsigned.crt",
    });

    const getAccessToken = async (code) => {
        const accessToken = await td.getAccessToken(decodeURIComponent(code));
        localStorage.setItem("refreshToken", accessToken.refresh_token);
        localStorage.setItem("accessToken", accessToken.access_token);
    };

    // get access token from refresh token
    const refreshAccessToken = async () => {
        const accessToken = await td.refreshAccessToken(
            localStorage.getItem("refreshToken")
        );
        localStorage.setItem("accessToken", accessToken.access_token);
    };

    const getAccounts = async () => {
        await fetch(
            "https://api.tdameritrade.com/v1/accounts?fields=positions",
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem(
                        "accessToken"
                    )}`,
                },
            }
        )
            .then((res) => {
                if (
                    res.status === 401 &&
                    localStorage.getItem("refreshToken")
                ) {
                    setShowSync(true);
                }
                return res.json();
            })
            .then((data) => setAccount(data[0]?.securitiesAccount));
    };

    function login() {
        const loginUrl = new URL(
            `https://auth.tdameritrade.com/auth?response_type=code&redirect_uri=${encodeURIComponent(
                REDIRECT_URI
            )}&client_id=${encodeURIComponent(CONSUMER_ID)}%40AMER.OAUTHAP`
        );
        window.open(loginUrl, "_blank");
    }

    const submithandler = (e) => {
        e.preventDefault();
        const code = e.target[0].value;
        setCode(code);
        getAccessToken(code);
    };

    return (
        <div>
            <p>Hello world</p>
            <form onSubmit={submithandler}>
                <input type="text" placeholder="Enter Auth Code" />
            </form>
            <pre>{JSON.stringify(account, 0, 2)}</pre>
            <button onClick={login}>Auth</button>
            <button onClick={getAccounts}>Get Accounts</button>
            {showSync && <button onClick={refreshAccessToken}>Sync</button>}
        </div>
    );
};

export default index;
