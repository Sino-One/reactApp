import React from 'react'
import {useSelector} from 'react-redux'

export default function Number() {

    const count = useSelector(state => state.number)

    return (
        <div>
            <h1>Les données : {count}</h1>
        </div>
    )
}
