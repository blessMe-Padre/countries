import React from 'react'

import styled from 'styled-components';

import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { filterByCode } from '../config';

const Meta = styled.div`
  margin-top: 3rem;
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
  align-items: flex-start;
  & > b {
    font-weight: var(--fw-bold);
  }
  @media (min-width: 767px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const TagGroup = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const Tag = styled.span`
  padding: 0 1rem;
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
  line-height: 1.5;
  cursor: pointer;
`;

export const MetaTags = ({ borders }) => {

    const [neighbors, setNeighbors] = useState([]);

    useEffect(() => {
        if (borders)
            axios
                .get(filterByCode(borders))
                .then(({ data }) => setNeighbors(data.map((c) => c.name)))
                .catch(function (error) {
                });
    }, [borders]);

    return (
        <Meta>
            <b>Общая граница&nbsp;с&nbsp;: </b>
            {!borders ? (
                <span>Нет общих границ</span>
            ) : (
                <TagGroup>
                    {neighbors.map((b) => (
                        <Link className='linkClass' key={b} to={`/country/${b}`}>
                            <Tag >
                                {b}
                            </Tag>
                        </Link>
                    ))}
                </TagGroup>
            )}
        </Meta>
    )
}
