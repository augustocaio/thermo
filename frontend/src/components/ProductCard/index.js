import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import HttpService from "../../services/http"


const SCProductCard = styled.div`
  margin: 40px auto;
  width: 90vw;
  height: 500px;
  background-color: white;
  display: grid;
  grid-template-columns: 3fr 3fr 2fr;
  background-color: #333;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Description = styled.div`
  color: white;
  padding: 5%;
  box-sizing: border-box;
  h1 {
    font-size: 2rem;
  }
`;

const Price = styled.div`
  color: green;
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  div {
    height: 60px;
    display: grid;
    grid-template-columns: 5fr 5fr;
    grid-gap: 20px;
    padding: 0 5%;
    select, option {
      font-size: 1rem;
      text-align: center;
      border: none;
      border-radius: 10px;
      padding: 5%;
      box-sizing: border-box;
      height: 100%;
      width: 100%;
    }
    button {
      font-size: 1.1rem;
      height: 100%;
      width: 100%;
      background-color: green;
      color: white;
      border: none;
      border-radius: 10px;
    }
  }
`;



export default function ProductCard({ image, aparelho, prev, id }) {
  const history = useHistory()
  const [horario, setHorario] = useState('')

  return (
    <SCProductCard>
      <img src={"data:image/png;base64, "+image} alt={aparelho} />
    
      <img src={"data:image/png;base64, "+prev.grafico} alt={'prev'} />
      <Price>
        <p>Aparelho: { aparelho}</p>
        
        <div>
          <button class='green' onClick={() => 
          {
            if(window.confirm('Deseja ligar o aparelho?'))
            { {HttpService.put("info/aparelho/"+id)}
              history.push("/ordered")
            }
          }}>Ligar</button>
          <button class='red' onClick={() => {if(window.confirm('Deseja desligar o aparelho?')){
            {HttpService.put("info/aparelho/"+id)}
              history.push("/ordered") 
            }}}>Desligar</button>
            
        </div>
      </Price>
    </SCProductCard>
  );
}