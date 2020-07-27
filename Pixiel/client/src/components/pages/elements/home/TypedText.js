import React from "react";
import Typed from "react-typed";

//Testo animato della pagina principale
const textLines = [
    `Benvenuto su Pixiel`,
    `qui puoi creare la tua chat room`,
    `e invitare chiunque a partecipare`,
    `Immetti il tuo Nickname`,
    `e il nome della stanza`,
    `per chattare con i tuoi amici`
];

const TypedText = () => {
        return (
            <>
                <div style={{ fontSize: "20px", fontFamily: "Nishuki Pixels" }}>
                <Typed strings={textLines} typeSpeed={100} />
                </div>
            </>
        )
}

export default TypedText;