import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CollectionTable from '../components/CollectionTable.js';

function CollectionPage({ setGame }) {
    const navigate = useNavigate();

    const [games, setGames] = useState([]);

    const getGames = async () => {
        const response = await fetch('/log');
        const games = await response.json();
        setGames(games);
    }

    const onEditGame = async game => {
        setGame(game);
        navigate("/EditPage");
    }

    const onDeleteGame = async _id => {
        const response = await fetch(`/log${_id}`, { method: 'DELETE' });
        if (response.status === 204) {
            const getResponse = await fetch('/log');
            const games = await getResponse.json();
            setGames(games);
        } else {
            console.error(`Game with id: ${_id} could not be deleted due to an internal error - status code: ${response.status}`)
        }
    }

    useEffect(() => {
        getGames();
    }, []);

    return (
        <>
        <h2>Current Collection of Boardgames</h2>
        <p> Here are all of the games that are currently in my collection!</p>

        <CollectionTable
            games={games}
            onEdit={onEditGame}
            onDelete={onDeleteGame}
            />
        </>
    );
}

export default CollectionPage;