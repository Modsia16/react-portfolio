import { createGlobalStyle } from 'styled-components';
// initial global style start with NavBar - end with Footer
const GlobalStyles = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    :root{
        --white : #ffffff;
        --black : #000000;
        --grey : #e1e1e1;
        --light-grey : #C0C0C0;
        --dark-grey : #333;
        --red : #ff0000;
        --dark-slate-grey : #2f4f4f; 
        --blue : #000080;
        --yellow : #C6D32C;
        --light-blue : #27B5DD;
    }
    ul, li {
        list-style: none;
        text-decoration: none;
    }
    a {
        color: var(--yellow);
    }
    .active{
        color: var(--white);
    }
    `;

    export default GlobalStyles;