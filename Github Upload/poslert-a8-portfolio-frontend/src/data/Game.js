import React from "react";


function Game({game}) {
    return (
        <tr>
            <td>{game.name}</td>
            <td>{game.date.slice(0,10)}</td>
            <td>{game.instructions}</td>
            <td>{game.expansions_owned}</td>
            <td>{game.favorite}</td>
        </tr>
    );
}

export default Game;