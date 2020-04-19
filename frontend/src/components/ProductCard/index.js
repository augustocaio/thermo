import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import HttpService from "../../services/http"


const SCProductCard = styled.div`
  margin: 40px auto;
  width: 70vw;
  height: 300px;
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

interface Props {
  image: any;
  title: string;
  emailprof: string;
  price: number;
}

export default function ProductCard({ image, title, emailprof, price }: Props) {
  const history = useHistory()
  const [horario, setHorario] = useState('')

  return (
    <SCProductCard>
      <img src={image} alt={title} />
      <Description>
        <h1>{title}</h1>
        <p id='emailprof'>{emailprof}</p>
      </Description>
      <Price>
        <p>Aparelho: { }</p>

        <div>
          <button class='green' onClick={() => 
          {
            if(window.confirm('Deseja ligar o aparelho?'))
            {
              HttpService.post("student", 
                {
                //   "nome":nome,
                // "email":email,
                // "idade":idade,
                // "regiao":regiao,
                // "modalidade":modalidade,
                // "horario":horario,
                // "emailprof":emailprof,
                // "status":"Matriculado"
                }).then(result => history.push("/ordered")) 
            }
          }}>Ligar</button>
          <button class='red' onClick={() => {if(window.confirm('Deseja desligar o aparelho?'))            {
              HttpService.post("student", 
                {
                //   "nome":nome,
                // "email":email,
                // "idade":idade,
                // "regiao":regiao,
                // "modalidade":modalidade,
                // "horario":horario,
                // "emailprof":emailprof,
                // "status":"Rejeitado"
                }).then(result => history.push("/ordered")) 
            }}}>Desligar</button>
        </div>
      </Price>
    </SCProductCard>
  );
}