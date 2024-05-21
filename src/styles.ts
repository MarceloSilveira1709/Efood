import styled, { createGlobalStyle } from "styled-components";

export const cores = {
  rosa: '#E66767',
  bege: '#FFEBD9',
  branca: '#FFFFFF',
  begeClaro:'#FFF8F2',

}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${cores.begeClaro};
    color: ${cores.branca};
  }

  .container{
    width: 100%;
    margin: 0 auto;
    display:grid;

  }
`




