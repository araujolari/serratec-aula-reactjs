import { useNavigate } from "react-router-dom";
import { Container, FirstButton } from "./style";
import { imagem } from "../img/foto-react.jpg"

export const Home = () => {
  let navigate = useNavigate();

  function handleClick() {
    navigate("/quemsomos");
  }

  return (
    <>
      <Container>
      <img src={require('../img/foto-react.jpg')} width="30%" height="40%" />
      <h1>Bem-Vindo(a)!</h1>
      <FirstButton onClick={handleClick}>Quem Somos?</FirstButton>
      </Container>
    </>
  );
};
