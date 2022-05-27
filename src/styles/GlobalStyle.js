import { createGlobalStyle } from 'styled-components';
// initial global style start with NavBar - end with Footer
const GlobalStyles = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    :root{
        --white : #ECF0F1;
        --black : #000000;
        --grey : #757575;
        --light-grey : #BDBDBD;
        --dark-grey : #424242;
        --red : #B71C1C;
        --dark-slate-grey : #212121; 
        --blue : #0D47A1;
        --yellow : #EEFF41;
        --light-blue : #40C4FF;
    }
    ul, li {
        list-style: none;
        text-decoration: none;
    }
    a {
        text-decoration: none;
        color: var(--yellow);
    }
    .active{
        color: var(--white);
    }
    button {
        outline: none;
    }
    .container {
        max-width: 1200px;
        margin: 0 auto;
        width: 90%;
    }
    `;

    export default GlobalStyles;