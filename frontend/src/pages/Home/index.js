import React, { useState } from 'react';
import styled from 'styled-components'
import Header from '../../components/Header'
import { useHistory } from 'react-router-dom';
import Background from  '../../images/background.jpg'
import HttpService from "../../services/http"


const Formbox = styled.div`
    width: 70vw;
    height: 30vh;
    margin-left: 15vw;
    margin-top: 15vh;
    opacity: 0.85;
    background-color: #3399ff;
    text-align: center;
    
    input,
    textarea,
    label,
    select,
    option,
    button {
    padding: 1em;
    margin-top: 2px;
    width: 85%;
    border: 1px solid grey;
    }

    button {
    background: lightgrey;
    }

    button:hover, button:focus {
    background: gold;
    outline: 0;
    
    }

    input:focus,
    textarea:focus {
    outline: 3px solid gold;
    border: 0;
    }

`
const Page = styled.div`
    background-image: url(${Background});
    min-height: 100vh;
`
export default function Home(){
    const [nome, setNome] = useState('')
    const [modelo, setModelo] = useState(18)
    const [marca, setMarca] = useState('')
    const [local, setLocal] = useState('')

    const history = useHistory()

    return(
        <Page>
            <Header />
            <Formbox>
                <div>
                    <input placeholder='Nome do Aparelho' onChange={(event) => {setNome(event.target.value)}}/>
                    <input placeholder='Modelo' onChange={(event) => {setModelo(event.target.value)}}/>
                    {/* <input placeholder='Email' onChange={(event) => {setEmail(event.target.value)}}/> */}
                    <select id="marca" onChange={(event) => {setMarca(event.target.value)}}>
                        <option value="" disabled selected>Escolha a Marca</option>
                        <option value="Gree">Gree</option>
                        <option value="Midea">Midea</option>
                        <option value="Daikin">Daikini</option>
                        <option value="Carrier">Carrier</option>
                        <option value="Fujitsu">Fujitsu</option>
                        <option value="Hitachi">Hitachi</option>
                        <option value="Hyundai">Hyundai</option>
                    </select>
                    <select id="local" onChange={(event) => {setLocal(event.target.value)}}>
                        <option value="" disabled selected>Escolha o local</option>
                        <option value="sala">Sala</option>
                        <option value="quarto">Quarto</option>
                    </select>
                   
                </div>
                <div>
                    <button onClick={() => {
                        {HttpService.post("info/aparelho", 
                        { "nome":nome,
                            "modelo":modelo,
                            "marca":marca,
                            "local":local,
                            "status":"Desligado"
                        }).then(result => history.push("/ordered")) }
                    }}>Submeter</button>
                </div>
            </Formbox>
            
        </Page>
        
    );

};