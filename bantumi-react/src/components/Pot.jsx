import React, { useEffect, useState } from "react";

export default function Pot({ beans, onClick }) {
    const [nrOfBeans, setNrOfBeans] = useState(beans)
    useEffect(() => {
        setNrOfBeans(beans)
    }, [beans])
    return (
        <div className="pot" onClick={onClick}>
            <p>{nrOfBeans}</p>
        </div>
    )

}