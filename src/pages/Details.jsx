import React from 'react'

export const Details = ({ match }) => {
    return (
        <div>Details {match.params.name}</div>
    )
}
