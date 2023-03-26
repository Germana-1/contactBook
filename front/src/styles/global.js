import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-align: center;
    }
    button{
        cursor: pointer;
        border: none;
        background: transparent;
    } 
    ul, ol, li{
        list-style: none;
    }   
    body{
        background-color: #0000000d;
    }
    :root{
        --color-primary: #FF577F;
        --color-primary-focus: #FF427F;
        --color-primary-negative: #59323F;
        --color-grey-0: #121214;
        --color-grey-1: #868E96;
        --color-grey-2: #343B41;
        --color-grey-3: #212529;
        --color-grey-4: #F8F9FA; 
        --color-grey-5: #E8F0FE; 
        --color-white: #ffffff;
        --toastify-color-success:#3FE864;
        --toastify-color-error:#E83F5B;
        
    }  
    
    .dark{
        background-color: var(--color-grey-2);
    }

    .gradient {
    background-image: linear-gradient(
      to right,

      #8cb7f3,
      #a6cffa,
      #9b8bd9,
      #da8deb,
      #ff577f,
      #fb9cb2,
      #f3ab08,
      #ff577f,
      #fb9cb2,
      #9b8bd9,
      #da8deb
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: black;
  }
`;
