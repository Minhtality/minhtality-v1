import React from "react";

// interface CardProps {
//     title: string;
//     thumbnail?: string;
//     avatar?: string;
//     author: string;
//     date: string;
//     tags: string[];
// }

const index = () => {
    const REDIRECT_URI = "http://localhost";
    const CONSUMER_ID = "1IFFH2FVMRIB3AIOYV5XYCWG7NNJLYAJ";
    const tdAuth = async () => {
        try {
            // Replace YOUR_CLIENT_ID with your actual client ID
            // Replace YOUR_REDIRECT_URI with your actual redirect URI
            // Replace YOUR_API_KEY with your actual API key
            const authUrl = `https://auth.tdameritrade.com/auth?response_type=code&redirect_uri=http%3A%2F%2Flocalhost&client_id=${CONSUMER_ID}%40AMER.OAUTHAP`;

            // Open the TD Ameritrade login page in a new window
            window.open(authUrl, "_blank");
        } catch (error) {
            console.error(error);
        }
    };

    // Call the tdAuth function to open the login page

    return (
        <div>
            <p>Hello world</p>
            <button onClick={tdAuth}>Auth</button>
        </div>
    );
};

export default index;
