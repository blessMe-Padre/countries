import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'

import { List } from '../components/List';
import { Card } from '../components/Card'
import { Controls } from '../components/Controls'
import { ALL_COUNTRIES } from '../config'

export const HomePage = () => {
    const [countries, setCountries] = useState([]);

    const { push } = useHistory();

    useEffect(() => {
        axios.get(ALL_COUNTRIES).then(
            ({ data }) => setCountries(data)
        )
    }, []);

    return (
        <>
            <Controls />
            <List>
                {
                    countries.map((country) => {
                        const countryInfo = {
                            img: country.flags.png,
                            name: country.name,
                            info: [
                                {
                                    title: 'Население',
                                    description: country.population.toLocaleString(),
                                },
                                {
                                    title: 'Регион',
                                    description: country.region,
                                },
                                {
                                    title: 'Столица',
                                    description: country.capital,
                                },
                            ],
                        };

                        return <Card
                            key={country.name}
                            onClick={() => push(`/country/${country.name}`)}
                            {...countryInfo}
                        />
                    })}
            </List>

        </>
    )
}
