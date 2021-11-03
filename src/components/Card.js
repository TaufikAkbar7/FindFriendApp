import React from 'react'

const Card = ({ data }) => {
    return (
        <div style={{
            padding: 15,
            border: '2px solid #000'
        }}>
            <img aria-label="person image" src={data.picture.large} style={{
                objectFit: 'cover',
                objectPosition: 'center',
                height: 250
            }}/>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column'
            }}>
                <h2>{data.name.first} {data.name.last}</h2>
                <p>{data.phone}</p>
                <p>{data.location.country}</p>
            </div>
        </div>
    )
}

export default Card
