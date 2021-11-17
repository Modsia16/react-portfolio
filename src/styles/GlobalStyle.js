import { createGlobalStyle } from 'styled-components';
// initial global style start with NavBar - end with Footer
const GlobalStyles = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    :root{
        --white : #fff;
        --black : #000;
        --grey : #e1e1e1;
        --light-grey : #f5f5f5;
        --dark-grey : #333;
        --red : #ff0000;
        --dark-slate-grey : #2f4f4f;
    }
    ul, li {
        list-style: none;
        text-decoration: none;
    }
    `;

    export default GlobalStyles;