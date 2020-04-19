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
  useEffect(() => {
    HttpService.get("athlete?regiao="+window.localStorage.getItem("regiao")+"&modalidade="+window.localStorage.getItem("modalidade"), {})
      .then(result => {
        setProducts(result.data.athletes);
      })
      .catch(error => console.error(error));
  }, []);


    return(
        <Page>
        <Header />
        {products.map((product) => {
          return (
            <ProductCard
              image={product.imagem}
              title={product.nome}
              emailprof={product.email}
              description={product.description}
              price={"55,00"}
            />
          );
        })}
      </Page>
    );

};
