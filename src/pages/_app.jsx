import React, { useEffect } from "react";
import Head from "next/dist/shared/lib/head";
import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { DarkIcon, LightIcon } from "../../public/icons";
import { createGlobalStyle } from "styled-components";
//TODO: currently hook not working

const lightTheme = {
    body: "rgb(242,242,242)",
    color: "#363537",
};

const darkTheme = {
    body: "rgb(32,33,36)",
    color: "#FAFAFA",
};

export const GlobalStyles = createGlobalStyle`
    body {
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.color};
        transition: all 0.25s linear;
        padding: 0;
        margin: 0;
        font-family: 'Raleway', sans-serif;
        overflow-x: hidden;
        -ms-overflow-style: none;  /* Internet Explorer 10+ */
        scrollbar-width: none;  /* Firefox */
    }
    body::-webkit-scrollbar {
        display: none;
    }
    svg {
        fill: ${({ theme }) => theme.color};
    }
    button {
        border: none;
        padding: 0;
    }
`;
const ToggleTheme = styled.button`
    /* Look into animating svg */
    position: fixed;
    top: 10px;
    right: 10px;
    background: transparent;
    cursor: pointer;
    svg {
        ${({ theme }) =>
            theme === "light"
                ? `
      fill: #fff;
      stroke: #363537;`
                : `
      fill:#fafafa;
      stroke: #fafafa`};
        stroke-width: 1px;
    }
`;

export default function App({ Component, pageProps }) {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        const localTheme = localStorage.getItem("theme");
        setTheme(localTheme);
    }, []);

    const toggleTheme = () => {
        theme === "light"
            ? (setTheme("dark"), localStorage.setItem("theme", "dark"))
            : (setTheme("light"), localStorage.setItem("theme", "light"));
    };

    return (
        <>
            <Head>
                <title>Minhtality</title>
            </Head>
            <div>
                <ThemeProvider
                    theme={theme === "dark" ? darkTheme : lightTheme}
                >
                    <GlobalStyles />
                    <ToggleTheme
                        theme={theme}
                        onClick={toggleTheme}
                        aria-label="theme toggle"
                    >
                        {theme === "light" ? <DarkIcon /> : <LightIcon />}
                    </ToggleTheme>
                    <Component {...pageProps} />
                </ThemeProvider>
            </div>
        </>
    );
}
