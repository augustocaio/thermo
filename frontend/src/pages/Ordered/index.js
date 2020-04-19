import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import Header from '../../components/Header'
import { useHistory } from 'react-router-dom';
import AdsAcad from '../../images/academiads.jpg'
import AdsCard from '../../components/AdsCard';
import Background from  '../../images/background.jpg'
import AdvertisementsService from '../../services/Advertisements';

const Formbox = styled.div`
    width: 70vw;
    height: 8vh;
    margin-left: 15vw;
    margin-top: 15vh;
    opacity: 0.85;
    background-color: #3399ff;


    p {
    margin: auto; /* Important */ 
    text-align: center; 
    font-size: 3rem;
    font-weight: bolder;
    color: #333;
    &.white {
      color: white;
    }
  }
`


const Page = styled.div`
    background-image: url(${ Background });
    min-height: 100vh;
`


export default function Ordered(){
    const history = useHistory()
    const [advertisements, setAdvertisements] = useState([]);
    useEffect(
        () => {
        AdvertisementsService.getByOwner('suplastore').then(result => {
            setAdvertisements(result.data.advertisements);
        });
        },
        []
    );

    return(
        <Page>
            <Header />
            <Formbox>
                <div>
                    <p className="white">Adicionado com Sucesso!</p>
                </div>
            </Formbox>
            {/* {advertisements.map((advertisement) => {
                return (
                <AdsCard
                    key={advertisement.id}
                    image={advertisement.image}
                    link={advertisement.link}
                    />
            );
            })} */}

            
        </Page>
        
    );

};