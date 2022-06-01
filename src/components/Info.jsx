import React from 'react';
import styled from 'styled-components';

import { InfoDescriptions } from './InfoDescriptions';
import { MetaTags } from './MetaTags';


const Wrapper = styled.section`
  margin-top: 3rem;
  width: 100%;
  display: grid;
  grid-template-columns: 100%;
  gap: 2rem;
  @media (min-width: 767px) {
    grid-template-columns: minmax(100px, 400px) 1fr;
    align-items: center;
    gap: 5rem;
  }
  @media (min-width: 1024px) {
    grid-template-columns: minmax(400px, 600px) 1fr;
  }
`;

const InfoTitle = styled.h1`
  margin: 0;
  font-weight: var(--fw-normal);
`;

const InfoImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const Info = (props) => {

    return (
        <Wrapper>
            <InfoImage src={props.flag} alt={props.name} />
            <div>
                <InfoTitle>{props.name}</InfoTitle>
                <InfoDescriptions props={props} />
                <MetaTags borders={props.borders} />
            </div>
        </Wrapper>
    );
};