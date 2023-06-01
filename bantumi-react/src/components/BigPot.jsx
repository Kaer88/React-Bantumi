import React, { useState } from 'react'

export default function BigPot({ beans }) {
    const [nrOfBeans, setNrOfBeans] = useState(beans)

    return (
        <div className='big-pot'>
            <p>{nrOfBeans}</p>
        </div>
    )

}