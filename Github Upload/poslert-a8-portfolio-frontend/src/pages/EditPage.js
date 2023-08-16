// import icons here 
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const EditPage = ({ game }) => {

    const [name, setName] = useState(game.name);
    const [purchase_date, setPurchase_date] = useState(game.date.slice(0,10));
    const [instructions, setInstructions] = useState(game.instructions);
    const [expansions_owned, setExpansions_owned] = useState(game.expansions_owned);
    const [favorite, setFavorite] = useState(game.favorite);
    
    const navigate = useNavigate();

    const editGame = async () => {
        const response = await fetch(`/log/${game._id}`, {
            method: 'PUT',
            body: JSON.stringify({
                name: name,
                purchase_date: purchase_date,
                instructions: instructions,
                expansions_owned: expansions_owned,
                favorite: favorite
            }),
            headers: {
                'Content-Type':'application/json',
            },
        });

        if (response.status === 200) {
            alert("The selected game has been updated.")
        } else {
            const errorMsg = await response.json();
            navigate("/log"); 
            alert("Could not update game.")
        }
    };

    return(
        <>
            <h2>Edit Game.</h2>
            <p></p>Use the table below to edit a current game in the collection!
            <table  id="games">
                <caption>Edit a board game in the collection.</caption>
                <thead>
                    <th>Name</th>
                    <th>Purchase Date</th>
                    <th>Instructions Included</th>
                    <th>Expansions Owned</th>
                    <th>Favorite</th>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td><label for="gamename" class="required">
                            <input type="text" value={name} id ="gamename"
                            onChange={g => setName(g.target.value)} required
                            autoFocus
                        />
                        </label></td>

                        <td>
                            <label for="purchasedate" class="required">
                                <input type="date" id="purchasedate" name="date" value={purchase_date}
                                required
                                onChange={g => setPurchase_date(g.target.value)}
                                pattern ="\d{2}-\d{2}-\d{2}"
                                />
                        </label></td>

                        <td><label for="instructions">
                            <input type="text" value={instructions} id="instructions" required
                            onChange={g => setInstructions(g.target.value)}
                            autoFocus
                        />
                        </label></td>

                        <td>
                            <label for="expannsionsowned" class="required">
                            <input 
                                type="number"
                                value={expansions_owned}
                                id="expansionsowned"
                                onChange={g => setExpansions_owned(g.target.value)} required
                            />
                            </label></td>

                        <td>
                            <label for="favorite" class="required">
                            <select
                                name="favorite"
                                onChange={g => setFavorite(g.target.value)}
                                requried 
                            >
                                <option value="Yes" selected>Yes</option>
                                <option value ="No">No</option>
                            </select>
                            </label></td>
                        <td><button class="wait" onClick={editGame}>Update</button></td>
                    </tr>
                </tbody>

            </table>
        </>
    )
};

export default EditPage;
