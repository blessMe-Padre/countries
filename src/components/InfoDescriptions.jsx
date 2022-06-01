import React from 'react';
import styled from 'styled-components';


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

export const InfoDescriptions = ({ props }) => {

    return (
        <ListGroup>
            <List>
                <ListItem>
                    <b>Оригинальное название:</b> {props.nativeName}
                </ListItem>
                <ListItem>
                    <b>Население:</b> {props.population}
                </ListItem>
                <ListItem>
                    <b>Регион:</b> {props.region}
                </ListItem>
                <ListItem>
                    <b>Подрегион:</b> {props.subregion}
                </ListItem>
                <ListItem>
                    <b>Столица:</b> {props.capital}
                </ListItem>
            </List>
            <List>
                <ListItem>
                    <b>Домен:</b>{' '}
                    {props.topLevelDomain.map((d) => (
                        <span key={d}>{d}</span>
                    ))}
                </ListItem>
                <ListItem>
                    <b>Валюта:</b>{' '}
                    {props.currencies.map((c) => (
                        <span key={c.code}>{c.name} </span>
                    ))}
                </ListItem>
                <ListItem>
                    <b>Языки:</b>{' '}
                    {props.languages.map((l) => (
                        <span key={l.name}> {l.name}</span>
                    ))}
                </ListItem>
            </List>
        </ListGroup>
    )
}
