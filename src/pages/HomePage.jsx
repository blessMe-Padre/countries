import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

import { List } from '../components/List';
import { Card } from '../components/Card'
import { Controls } from '../components/Controls'
import { ALL_COUNTRIES } from '../config'

export const HomePage = ({ setCountries, countries }) => {
    const [filteredCountries, setFilteredCountries] = useState(countries);


    const handleSearch = (search, region) => {
        let data = [...countries];

        if (region) {
            data = data.filter((country) => country.region.includes(region));
        }

        if (search) {
            data = data.filter((country) =>
                country.name.toLowerCase().includes(search.toLowerCase())
            );
        }

        setFilteredCountries(data);
    };

    useEffect(() => {
        if (!countries.length)
            axios.get(ALL_COUNTRIES).then(
                ({ data }) => setCountries(data)
            )
                .catch(function (error) {
                    console.log(error);
                })
    }, []);

    useEffect(() => {
        handleSearch();
        // eslint-disable-next-line
    }, [countries]);

    return (
        <>
            <Controls onSearch={handleSearch} />
            <List>
                {
                    filteredCountries.map((country) => {
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

                        return (
                            <Link className='linkClass' key={country.name} to={`/country/${country.name}`}>
                                <Card key={country.name} {...countryInfo} />
                            </Link>
                        )

                    })}
            </List>

        </>
    )
}
