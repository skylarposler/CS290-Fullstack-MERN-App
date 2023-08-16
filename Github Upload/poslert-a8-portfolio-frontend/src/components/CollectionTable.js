import React from "react";
import CollectionRow from "./CollectionRow.js";
import { IoIosAddCircle } from 'react-icons/io';
import { useNavigate } from "react-router-dom";

function CollectionTable({ game}) {
    const navigate = useNavigate();
    return (
        <table id="games">
            <caption>Current boardgames in the collection.</caption>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Purchase Date</th>
                    <th>Instructions Included</th>
                    <th>Expansions Owned</th>
                    <th>Favorite</th>
                </tr>
            </thead>
            <tbody>
            <IoIosAddCircle OnClick={navigate("./CreatePage")} />
                {game.map((game, i) => 
                    <CollectionRow
                        game={game}
                        key={i}
                    />)}
            </tbody>
        </table>
    );
}

export default CollectionTable;