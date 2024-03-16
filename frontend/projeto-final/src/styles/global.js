import { createGlobalStyle } from "styled-components";
import "./constants.css"
export default createGlobalStyle`
    * {
        font-family: "Raleway", sans-serif;
        font-optical-sizing: auto;
        font-weight: 500;
        font-style: normal;
    }
    ::selection {
        color: var(--steel-white);
        background-color: var(--pastel-blue);
    }
    body {
        background-color: var(--obsidian);
        margin: 15px;
        margin-right: 0;
    }
    button {
        transition: 0.2s;
    }
    button:hover {
        background-color: var(--pastel-blue) !important;
        cursor: pointer;
    }
    input {
        background-color: var(--obsidian-gray);
        border: none;
        color: var(--steel-white);
        width: 250px;
        height: 50px;
        display: inline-flex;
        text-indent: 10px;
        border-radius: 30px;
    }
    input:focus {
        outline: none;
    }
    .blockedInput {
        cursor: not-allowed;
        color: var(--steel-gray);
    }
`;
