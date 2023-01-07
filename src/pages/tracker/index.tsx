import React from "react";
import { TDA_CLIENT_ID } from "@apis/config";

// interface CardProps {
//     title: string;
//     thumbnail?: string;
//     avatar?: string;
//     author: string;
//     date: string;
//     tags: string[];
// }

const index = () => {
    const REDIRECT_URI = "https://localhost:3000";
    const CONSUMER_ID = "";
    function login() {
        // Replace {consumer_id} with your actual consumer ID
        const loginUrl = `https://auth.tdameritrade.com/auth?response_type=code&redirect_uri=${encodeURIComponent(
            REDIRECT_URI
        )}&client_id=${encodeURIComponent(CONSUMER_ID)}%40AMER.OAUTHAP`;

        // Open the login window
        const loginWindow = window.open(loginUrl, "_blank");

        // Poll for the login window to close
        const interval = setInterval(() => {
            if (loginWindow.closed) {
                clearInterval(interval);

                // Get the URL of the current window
                const currentUrl = window.location.href;
                // Get the code query parameter from the URL

                // Save the code to local storage
                localStorage.setItem("code", currentUrl);
            }
        }, 1000);
    }

    // Call the tdAuth function to open the login page
    console.log(TDA_CLIENT_ID);
    return (
        <div>
            <p>Hello world</p>
            <button onClick={login}>Auth</button>
        </div>
    );
};

export default index;
