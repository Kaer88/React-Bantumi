import { useState } from "react";

export default function Pot() {
    const [nrOfBeans, setNrOfBeans] = useState(0)

    return (
        <div className="pot">
            <p>{nrOfBeans}</p>
        </div>
    )

}