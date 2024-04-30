import React from 'react';
import styled from 'styled-components';

const NotFoundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8f9fa; /* Use your desired background color */
`;

const NotFoundContent = styled.div`
  text-align: center;
`;

const NotFoundText = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: #343a40; /* Use your desired text color */
`;

export default function NotFound() {
  return (
    <NotFoundContainer>
      <NotFoundContent>
        <h1>404</h1>
        <NotFoundText>The page you are looking for was not found</NotFoundText>
      </NotFoundContent>
    </NotFoundContainer>
  );
}
