import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    text-align: center;
    background: ${({ theme }) => theme.body};
    color: #00d548;
    position: relative;
    font-family: "Karla", sans-serif;
    transition: all 0.25s linear;
  }
  
  .title {
    font-size: 120%;
    margin-left: 5%;
    text-align: left;
    color: #00d548;
  }
  
  .footer {
    position: fixed;
    right: 0px;
    left: 0px;
    bottom: 0px;
    width: 100%;
    background-color: ${({ theme }) => theme.footer};
    color: #00d548;
    text-align: center;
  }

  .themeButton {
    background-color: ${({ theme }) => theme.themeButton};
    color: #00d548;
    padding: 10px 10px;
    text-align: center;
    position: absolute;
    display: inline-block;
    right: 1%;
    top: 1%;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border: 2px solid #00d548;
  }
  
  form > h1{
    margin-top: 8%;
  }

  table {
    width: 60%;
    margin-top: 5%;
    margin-left: 20%;
    margin-right: 20%;
    
  }
  table, th, td {
    padding: 1%;
  }

  input[type=submit] {
    background-color: #00d548;
    border: none;
    color: white;
    padding: 16px 32px;
    text-decoration: none;
    margin: 5% 1px;
    cursor: pointer;
    border-radius: 8px;
    font-size: 120%;
  }

  input[type=checkbox] {
    margin-left: 3%;
  }

  .chooseCurrency {
    margin-top: 3%;
  }

  .chooseCurrency > select {
    margin-left: 1%;
  }

  .newsComponent {
    border: 2px solid;
    border-radius: 8px;
    padding: 2%;
    position: absolute;
    z-
  }
  
`;
