import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  font-family: "Montserrat", sans-serif;
}

:root {
  --verdeOscuro: #004d40;
  --amarillo: #ffca28;
  --gris:rgba(181, 179, 179, 0.53);
  --celeste:rgb(178, 178, 178);
}

h1{
    color: var(--amarillo);
}

body{
  overflow-x: hidden;
}

`;

export const Btn = styled.button`
  background-color: var(--verdeOscuro);
  color: var(--amarillo);
  border: 3px solid var(--amarillo);
  border-radius: 18px;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: bold;
  margin-top: 15px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  :hover {
    background-color: var(--verdeOscuro);
    transform: scale(1.3);
  }
`;

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--gris);
`;

export const FilterContainer = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 55px;
  padding: 3rem 0;

  @media (min-width: 1024px) and (max-width: 1200px) {
    width: 1024px;
  }
`;
