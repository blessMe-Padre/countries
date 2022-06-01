import React from 'react';
import styled from 'styled-components';


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

const InfoImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const InfoTitle = styled.h1`
  margin: 0;
  font-weight: var(--fw-normal);
`;

const ListGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 4rem;
  }
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  line-height: 1.8;
  & > b {
    font-weight: var(--fw-bold);
  }
`;

export const Info = (props) => {
    const {
        name,
        nativeName,
        flag,
        capital,
        population,
        region,
        subregion,
        topLevelDomain,
        currencies = [],
        languages = [],
    } = props;

    return (
        <Wrapper>
            <InfoImage src={flag} alt={name} />

            <div>
                <InfoTitle>{name}</InfoTitle>
                <ListGroup>
                    <List>
                        <ListItem>
                            <b>Оригинальное название:</b> {nativeName}
                        </ListItem>
                        <ListItem>
                            <b>Население:</b> {population}
                        </ListItem>
                        <ListItem>
                            <b>Регион:</b> {region}
                        </ListItem>
                        <ListItem>
                            <b>Подрегион:</b> {subregion}
                        </ListItem>
                        <ListItem>
                            <b>Столица:</b> {capital}
                        </ListItem>
                    </List>
                    <List>
                        <ListItem>
                            <b>Домен:</b>{' '}
                            {topLevelDomain.map((d) => (
                                <span key={d}>{d}</span>
                            ))}
                        </ListItem>
                        <ListItem>
                            <b>Валюта:</b>{' '}
                            {currencies.map((c) => (
                                <span key={c.code}>{c.name} </span>
                            ))}
                        </ListItem>
                        <ListItem>
                            <b>Языки:</b>{' '}
                            {languages.map((l) => (
                                <span key={l.name}> {l.name}</span>
                            ))}
                        </ListItem>
                    </List>
                </ListGroup>
            </div>
        </Wrapper>
    );
};