import React, { useState } from "react";

export default function Pot({ beans }) {
    const [nrOfBeans, setNrOfBeans] = useState(beans)

    return (
        <div className="pot">
            <p>{nrOfBeans}</p>
        </div>
    )

}