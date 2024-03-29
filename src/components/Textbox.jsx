import React, { useContext, useState } from "react"

export default function Textbox() {
   
    const [toggleState, setToggleState] = useState(false)


    return (
        <>
        <button 
                id="toggle-rules-btn" 
                onClick={() => setToggleState(!toggleState)}>Szabályok</button>
        <div id="textbox">
            
            {
                toggleState &&
                <>
                    <div>
                        <h1>Mancala - Bantumi</h1>
                        <h4>Játékostábla:</h4>
                        <ul>
                            <li>
                                1. Játékos: Alsó térfél
                            </li>
                            <li>
                                2. Játékos: Felső térfél
                            </li>
                        </ul>
                        <h4>Szabályok:</h4>
                        <ul>

                            <li>
                                A játékosok a térfelükön lévő 6 tál közül választanak egyet, mindegyikben alapesetben 4 bab van. 
                            </li>
                            <li>
                                A kiválasztott tálból a játékos kiveszi a babokat és egyesével leteszi a következő tálakba, körben az óramutató járásával ellentétesen haladva, míg a bab el nem fogy a kézből.
                            </li>
                            <li>
                                A játékosok jobb oldalán helyezkedik el a nagyobb gyűjtőedény. A babok letétele során a saját gyüjtőedénybe is teszünk egy babot, de az ellenfél gyűjtőedényét kihagyjuk!
                            </li>
                            <li>
                                Ha az utolsó letett bab saját oldali üres tálba kerül, akkor azt, illetve az ellenfél szemben lévő táljából az összes babot a saját gyűjtőedényünkbe tehetjük. Ez a Rablás!
                            </li>
                            <li>
                                Ha az utolsó letett bab a játékos saját gyűjtőedényébe kerül, még egyszer ugyanaz a játékos jön.
                            </li>
                            <li>
                                Minden egyéb esetben a következő játékos kerül sorra.
                            </li>
                        </ul>
                        <h4>Játék vége:</h4>
                        <ul>
                            <li>
                                Ha bármelyik térfélen a tálakból elfogy az összes bab, vége a játéknak.
                            </li>
                            <li>
                                A másik játékos a táljaiból összegyűjti a maradék babokat és a gyüjtőedényébe teszi.
                            </li>
                            <li>
                                Amelyik játékosnak a játék végén több bab van az gyüjtőedényében, az a győztes!
                            </li>
                        </ul>
                    </div>
                </>
            }

        </div>
        </>
    )
}