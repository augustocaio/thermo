import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import ProductCard from '../../components/ProductCard';
import TheoImage from '../../images/per.webp';
import HttpService from '../../services/http'

import Background from  '../../images/background.jpg'


const Page = styled.div`
  background-color: #3399ff;
  width: 100vw;
  padding: 0 0 30px;
  background-image: url(${ Background });
  min-height: 10000vh;
`;


const lorem =
  'Especialidade corrida. Eu exercitation do est ea consequat mollit duis reprehenderit sit. Pariatur elit veniam sit eiusmod pariatur enim proident. Labore aliqua mollit sunt enim est id irure proident tempor commodo adipisicing amet.';

// const products = [
//   {
//     image: TheoImage,
//     title: 'Reinaldo',
//     description: lorem,
//     price: '80,00'
//   },
//   {
//     image: TheoImage,
//     title: 'Cristiano',
//     description: lorem,
//     price: '65,50'
//   },
//   {
//     image: TheoImage,
//     title: 'Pedro',
//     description: lorem,
//     price: '65,50'
//   }
// ];





export default function Results(){
  const [products, setProducts] = useState([])
  const [prev, setPrev] = useState([])
  useEffect(() => {
    HttpService.get("info", {})
      .then(result => {
        console.log(Object.values(result.data.aparelhos));
        setProducts(Object.values(result.data.aparelhos));
        setPrev(result.data.previsao);
        console.log((result.data.previsao));
      })
      .catch(error => console.error(error));
  }, []);
    return(
        <Page>
        <Header />
        {console.log(products),
        products.map((ap) => {
          return (
            <ProductCard
              image={ap.grafico}
              aparelho={ap.aparelho}
              prev = {prev}
              id = {ap.id}
              // emailprof={aparelhos.status}
              // price={"55,00"}
            />
          );
          
        })
        }
      </Page>
    );

};
