import React, { useEffect, useState } from "react";
import Hand from "./Hand";

export default function Pot({ beans, onClick, className, delay }) {
    const [nrOfBeans, setNrOfBeans] = useState(beans)
    const [animationState, setAnimationState] = useState()

    useEffect(() => {
        setNrOfBeans(beans)
        if (beans != 0) {

            setTimeout(() => {
                setAnimationState(true);
                setTimeout(() => {
                    setAnimationState(false)
                }, 300)
            }, delay)
        }
    }, [beans])

    return (
        <div className={className} onClick={onClick}>
            <p>{animationState && nrOfBeans !=0 ? nrOfBeans - 1 : nrOfBeans}</p>
            {animationState && <Hand />}
        </div>
    )

}