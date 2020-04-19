import React from 'react';
import styled from 'styled-components';

const SCAdsCard = styled.div`
  margin: 40px auto;
  width: 70vw;
  height: 300px;
  background-color: white;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

interface Props {
  image: any;
  link: string;
}

export default function AdsCard({ image, link }: Props) {
  return (
    <SCAdsCard>
      <a href={link}>
        <img src={image} alt="Advertisement." />
      </a>
    </SCAdsCard>
  );
}
