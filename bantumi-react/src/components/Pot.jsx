import React, { useEffect, useState } from "react";
import Hand from "./Hand";

export default function Pot({ beans, onClick, className}) {
    const [nrOfBeans, setNrOfBeans] = useState(beans)
    const [animationState, setAnimationState] = useState()

    useEffect(() => {
        setNrOfBeans(beans)
        if(beans != 0) {
            setAnimationState(true)
            setTimeout(() => {
                setAnimationState(false)
            }, 500)
        }
    }, [beans])

    return (
        <div className={className? className : "pot"} onClick={onClick}>
            <p>{nrOfBeans}</p>
            {animationState && <Hand />}
        </div>
    )

}