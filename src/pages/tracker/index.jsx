import React, { useState } from "react";
import { tdAmeritrade, loginTD } from "@apis/TdAmeritrade";

const index = () => {
    const [code, setCode] = useState("");
    const [account, setAccount] = useState([]);
    const [showSync, setShowSync] = useState(false);

    const getAccessToken = async (code) => {
        const accessToken = await tdAmeritrade.getAccessToken(
            decodeURIComponent(code)
        );
        localStorage.setItem("refreshToken", accessToken.refresh_token);
        localStorage.setItem("accessToken", accessToken.access_token);
    };

    // get access token from refresh token
    const refreshAccessToken = async () => {
        const accessToken = await tdAmeritrade.refreshAccessToken(
            localStorage.getItem("refreshToken")
        );
        localStorage.setItem("accessToken", accessToken.access_token);
    };

    const getAccounts = async () => {
        await fetch("https://api.tdameritrade.com/v1/accounts?fields=positions",
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
            }
        )
        .then((res) => {
            if (res.status === 401 && localStorage.getItem("refreshToken")) {
                setShowSync(true);
            }
            return res.json();
        })
        .then((data) => setAccount(data[0]?.securitiesAccount));
    };

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
            <button onClick={loginTD}>Auth</button>
            <button onClick={getAccounts}>Get Accounts</button>
            {showSync && <button onClick={refreshAccessToken}>Sync</button>}
        </div>
    );
};

export default index;
