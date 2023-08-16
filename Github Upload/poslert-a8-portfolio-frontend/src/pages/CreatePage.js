import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import icons here

export const CreatePage = () => {
    const [name, setName] = useState('Game Name');
    const [purchase_date, setPurchase_date] = useState();
    const [instructions, setInstructions] = useState('Yes/No');
    const [expansions_owned, setExpansions_owned] = useState('0');
    const [favorite, setFavorite] = useState('Yes/No');

    const navigate = useNavigate();

    const addGame = async () => {
        const newGame = { name, purchase_date, instructions, expansions_owned, favorite };

        const response = await fetch('log', {
            method: 'POST',
            body: JSON.stringify(newGame),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if(response.status === 201){
            alert("A new game has been added to the collection!");
        } else {
            alert("Failed to add new game to collection.")
        }
        navigate("/log");
    };

    return(
        <>
            <h2>Add Game.</h2>
            <article>Add a new board game.
            <table  id="games">
                <caption>Add a board game to the collection!</caption>
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
                        <td><button class="wait" onClick={addGame}>Add</button></td>
                    </tr>
                </tbody>

            </table>
            </article>
        </>
    )
};

export default CreatePage;