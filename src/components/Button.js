import React from 'react'

const Button = ({ name, handleUpdate }) => {
    return (
        <button onClick={handleUpdate} style={{
            padding: 10,
            width: 150,
            background: '#999',
            color: '#FFFFFF',
            cursor: 'pointer',
            borderRadius: 8,
            marginTop: 15
        }}>
            {name}
        </button>
    )
}

export default Button
