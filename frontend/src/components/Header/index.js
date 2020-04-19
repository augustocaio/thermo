import React from 'react';
import styled from 'styled-components';

import { useHistory } from 'react-router-dom';

const SCHeader = styled.section`
  position: sticky;
  top: 0;
  left: 0;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.3);
  z-index: 1;
`;

const UpperHeader = styled.section`
  width: 100vw;
  height: 80px;
  background-color: #3399ff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  box-sizing: border-box;
`;

const Logo = styled.div`
  span {
    font-size: 3rem;
    font-weight: bolder;
    color: #333;
    &.white {
      color: white;
    }
  }
`;

const SubHeader = styled.section`
  height: 40px;
  width: 100vw;
  background-color: #3399ff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  box-sizing: border-box;

  button {
    font-size: 1.3rem;
    font-weight: 800;
    color: white;
    width: 100%;
    height: 100%;
    background-color: transparent;
    border: none;
  }
`;

const Avatar = styled.div`
  height: 60px;
  width: 60px;
  border-radius: 30px;
  border: 2px solid white;
  background-color: white;

  img {
    width: 100%;
  }
`;

export default function Header() {
  const history = useHistory();

  return (
    <SCHeader>
      <UpperHeader>
        <Logo>
          <span>Thermo</span>
          <span className="white">SMART</span>
        </Logo>

      </UpperHeader>
      <SubHeader>
        <button onClick={() => history.push('/new_device')}>Adicione Aparelho</button>
        <button onClick={() => history.push('/')}>Monitoramento</button>
        <button>Sobre nós</button>
        <button>Contate-nos</button>
      </SubHeader>
    </SCHeader>
  );
}
