import React, { useState, useEffect } from "react";
import { TDA_CLIENT_ID, TDA_REFRESH_TOKEN } from "@apis/config";
import { TDAmeritrade } from "@knicola/tdameritrade";

const index = () => {
    const [code, setCode] = useState("");

    const td = new TDAmeritrade({
        apiKey: TDA_CLIENT_ID,
        redirectUri: "http://localhost",
        sslKey: 'C:\Users\Minhtality\selfsigned.key',
        sslCert: 'C:\Users\Minhtality\selfsigned.crt',
    });

    const getAccessToken = async (code) => {
        const accessToken = await td.getAccessToken(decodeURIComponent(code));
        localStorage.setItem('refreshToken', accessToken.refresh_token);
        localStorage.setItem('accessToken', accessToken.access_token);
    }

    const getRefreshToken = async () => {
        await td.getAccessToken(TDA_REFRESH_TOKEN);
    }

    const getAccounts = async () => {
        let accounts = await fetch("https://api.tdameritrade.com/v1/accounts?fields=positions", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        }).then((res) => res.json()).then((data) => data[0]);

        
        console.log('acounts',accounts);
    };

    
    const REDIRECT_URI = "http://localhost";
    const CONSUMER_ID = `${TDA_CLIENT_ID}`;
    function login() {

        const loginUrl = new URL(`https://auth.tdameritrade.com/auth?response_type=code&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&client_id=${encodeURIComponent(CONSUMER_ID)}%40AMER.OAUTHAP`);
        const loginWindow = window.open(loginUrl, "_blank");
    }

    const submithandler = (e) => {
        e.preventDefault();
        const code = e.target[0].value;
        setCode(code);
        getAccessToken(code);
    }

    return (
        <div>
            <p>Hello world</p>
            <form onSubmit={submithandler}>
                <input type="text" placeholder="Enter Auth Code" />
            </form>
            <button onClick={login}>Auth</button>
            <button onClick={getAccounts}>Get Accounts</button>
        </div>
    );
};

export default index;
