import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
/* @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap'); */
/* @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700;1,800&display=swap'); */

  :root {
    --primary-color: #7E76D5;
    --background: #FFF9E7;
    --white: #F6F6F6;
    /* --gray: #a1a1a1; */
    --gray: #5F7067;
    --yellow: #F8CD53;
    --green: #6FD660;
    --black: #181818;
  }

  body {
    background-color: var(--background);
    /* font-family: 'Inter'; */
    /* font-family: 'Roboto'; */
    /* font-family: 'Open Sans'; */
    /* font-family: 'Open Sans'; */
    font-family: 'Quicksand', sans-serif;
  }

  button {
    border-radius: 8px 2px;
    font-family: 'Quicksand', sans-serif;
    font-weight: 600;
  }

  span {
    /* font-family: 'Lobster', cursive; */
    font-family: 'Shadows Into Light', cursive;
  }
`

export default GlobalStyle
