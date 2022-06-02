import styled,{ createGlobalStyle } from 'styled-components'


export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: sans-serif;
    }

    

     body , #root{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100vw;
        height: 100vh;
        background-color:#F7F7FF;
    }
`

export default GlobalStyle;