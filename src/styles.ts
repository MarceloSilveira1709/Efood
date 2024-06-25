import styled, { createGlobalStyle } from "styled-components";

export const colors = {
  pink: '#E66767',
  beige: '#FFEBD9',
  white: '#FFFFFF',
  lightBeige:'#FFF8F2',
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
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
    background-color: ${colors.lightBeige};
    color: ${colors.white};
  }

  .container{
    width: 100%;
    margin: 0 auto;
    display: grid;

    @media (max-width: ${breakpoints.desktop}) {

    }
  }
`




