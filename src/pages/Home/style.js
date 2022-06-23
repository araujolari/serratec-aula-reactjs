import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #212F3D;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
  color: white;
`;

export const FirstButton = styled.button`
cursor: pointer;
  background: #F1C40F;
  font-size: 1rem;
  font-family: sans-serif;
  color: black;
  border: 2px solid black;
  border-radius: 0.4rem;
  margin-top: 1rem;
  &:hover {
    background-color: #B7950B ;
    color: #333;
  }
`