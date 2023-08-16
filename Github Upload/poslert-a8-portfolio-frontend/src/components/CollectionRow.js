import React from "react";
import { MdDeleteForever, MdEdit } from 'react-icons/md'

function CollectionRow({ game, onDelete, onEdit }) {
    return (   <tr>
        <td><MdDeleteForever onClick={() => onDelete(game._id)} title="Clicking delete icon will delete this entry in the collection."/></td>
        <td><MdEdit onClick={() => onEdit(game)} title="Allows you to edit the information for this game entry."/></td>
        <td title="Name of board game.">{game.name}</td>
        <td title="When did you purchase this game?">{game.date.slice(0,10)}</td>
        <td title="Did this game come with instructions?">{game.instructions}</td>
        <td title="Do you own any expansions for this board game?">{game.expansions_owned}</td>
        <td title="Is this one of your favorite games?">{game.favorite}</td>
        <td></td>
    </tr>
    );


}

export default CollectionRow;