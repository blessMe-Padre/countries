import React from 'react';
import axios from 'axios';

import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import { IoArrowBack } from 'react-icons/io5';

import { searchByCountry } from '../config'
import { Info } from '../components/Info';

export const Details = () => {
    const { name } = useParams();
    const [country, setCountry] = useState(null);

    useEffect(() => {
        axios.get(searchByCountry(name)).then(({ data }) => setCountry(data[0]));
    }, [name]);

    return (
        <>
            <Link to="/" className='backLink'><IoArrowBack /> Назад</Link>
            <div>
                {country && <Info {...country} />}
            </div>
        </>
    )
}
