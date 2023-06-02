import React, { useEffect, useState } from 'react'

export default function BigPot({ beans }) {
    const [nrOfBeans, setNrOfBeans] = useState(beans)
    useEffect(() => {
        setNrOfBeans(beans)
    }, [beans])
    return (
        <div className='big-pot'>
            <p>{nrOfBeans}</p>
        </div>
    )

}