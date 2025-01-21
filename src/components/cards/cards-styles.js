import styled from "styled-components";

export const CardContainer = styled.div`
  perspective: 1000px;
  width: 295px;
  height: 540px;
  margin: 10px;
  cursor: pointer;
  :hover.card-inner {
    transform: rotateY(-180deg);
  }

  .card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }
  .card-front,
  .card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    gap: 10px;
    border: 4px solid black;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .card-front {
    background: white;
  }

  .card-back {
    background: #f5f5f5;
    transform: rotateY(180deg);
    justify-content: center;
  }

  .card-img {
    width: 200px;
    height: 150px;
    margin: 10px 0;
  }

  .card-logo {
    max-width: 50%;
    max-height: 50%;
  }

  .imgs__container {
  }

  .text__container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }

  .hache__tres {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: var(--verdeOscuro);
    color: var(--amarillo);
    height: 35px;
  }

  .container__info {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgb(28, 119, 104);
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
  }

  .p__description {
    width: 75%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--amarillo);
  }

  .p__detalles {
    width: 80%;
    height: 65%;
    padding: 1rem 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
    text-align: center;
  }
`;
