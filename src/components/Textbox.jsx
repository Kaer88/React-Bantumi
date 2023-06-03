import React, { useContext, useState } from "react"

export default function Textbox() {
   
    const [toggleState, setToggleState] = useState(false)


    return (

        <div id="textbox">
            <button 
                id="toggle-rules-btn" 
                onClick={() => setToggleState(!toggleState)}>Szabályok</button>
            {
                toggleState &&
                <>
                    <div>
                        <h1>Mancala - Bantumi</h1>
                        <h4>Szabályok:</h4>
                        <ul>

                            <li>
                                A játékosok felváltva választanak az előttük lévő 6 tálból, melyekben 4-4 bab van. 
                            </li>
                            <li>
                                A kiválasztott tálból a játékos kiveszi a babokat és egyesével leteszi a következő tálakba az óramutató járásával ellentétesen haladva, míg a bab el nem fogy a kézből
                            </li>
                            <li>
                                A játékosok jobb oldalán helyezkedik el a gyűjtőedény. A babok letétele során a saját gyüjtőedénybe is teszünk egy babot, de az ellenfél gyűjtőedényét kihagyjuk!
                            </li>
                            <li>
                                Ha az utolsó letett bab saját oldali üres tálba kerül, akkor azt, illetve az ellenfél szemben lévő táljából az összes babot a saját eredménytálunkba tehetjük
                            </li>
                            <li>
                                Ha az utolsó letett bab a játékos saját eredménytáljába kerül, akkor még egyszer ugyanaz a játékos jön
                            </li>
                            <li>
                                Minden egyéb esetben a következő játékos kerül sorra
                            </li>
                        </ul>
                        <h4>Játék vége:</h4>
                        <ul>
                            <li>
                                Ha bármelyik oldalon lévő tálakból elfogy az összes bab, vége a játéknak
                            </li>
                            <li>
                                A másik térfélen megmaradt babokat annak a játékosnak az eredménytálába tesszük, amelyik oldalon vannak a megmaradt babok.
                            </li>
                            <li>
                                Amelyik játékosnak a játék végén több bab van az eredménytáljában, az a győztes!
                            </li>
                        </ul>
                    </div>
                </>
            }

        </div>
    )
}