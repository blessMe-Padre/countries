import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { IoArrowBack } from 'react-icons/io5'


export const Details = () => {
    const { name } = useParams();

    return (
        <>
            <Link to="/" className='backLink'><IoArrowBack /> Назад</Link>
            <div>Details {name}</div>
        </>
    )
}
