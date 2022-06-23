import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FirstText, SecondText, Container, AulaButton } from "./style.js";
import { AdicionarLista } from "../../components/AdicionarLista.js";
import { api } from "../../services/api.js";

export const QuemSomos = () => {
  
  const[usuario, setUsuario] = useState({
    login:"",
    name:""
  })

  useEffect(()=>{
    const user = "Facebook"
    const getUsuario = async () =>{
      const response = await api.get(`users/${user}`)
      //setUsuario(response.data)
      console.log(response.data)
    }
    getUsuario() 
  },[])
  
  var { nome } = useParams();
  var { idade } = useParams();

  var navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }

  return (
    <>
      <Container>
        <FirstText>WISHLIST</FirstText>
        <SecondText>Adicione seus pedidos aqui:</SecondText>
        <AdicionarLista />
        <AulaButton onClick={handleClick}>Voltar</AulaButton>
      </Container>
    </>
  );
};
