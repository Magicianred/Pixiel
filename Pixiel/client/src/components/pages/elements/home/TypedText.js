import React from "react";
import Typed from "react-typed";

//Testo animato della pagina principale
const textLines = [
    `Benvenuto su Pixiel`,
    `puoi creare la tua chat room`,
    `e invitare chi vuoi`,
    `Immetti il tuo Nickname`,
    `e il nome della stanza`,
    `per chattare con i tuoi amici!`
];

const TypedText = () => {
        return (
            <>
                <div style={{ fontSize: "20px", fontFamily: "Dogica Pixel" }}>
                <Typed strings={textLines} typeSpeed={100} />
                </div>
            </>
        )
}

export default TypedText;