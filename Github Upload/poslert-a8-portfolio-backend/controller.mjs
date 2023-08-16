import 'dotenv/config';
import express from "express";
import * as gamecollection from './model.mjs';

const PORT = process.env.PORT;
const app = express();

app.post('/log', (req, res) => {
    gamecollection.createGame(
        req.body.name,
        req.body.purchase_date, 
        req.body.instructions,
        req.body.expansions_owned,
        req.body.favorite
    )
        .then(game => {
            res.status(201).json(game);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ error: 'Cound not create game.' });

        });
});

app.get('/log', (req, res) => {
    gamecollection.findGame()
    .then(game => {
        if (game !== null) {
            res.json(game);
        } else {
            res.status(404).json({ Error: 'Game not found in collection.' });
        }
    })
    .catch(error => {
        console.long(error);
        res.status(400).json({ Error: 'Game could not be retrieved from collection.'});
    });
});

app.put('/log/:id', (req, res) => {
    gamecollection.updateGame(
        req.params.id,
        req.body.name,
        req.body.purchase_date, 
        req.body.instructions,
        req.body.expansions_owned,
        req.body.favorite
    )
    .then(game => {
        res.json(game);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Unable to update game in collection.' });
    });
});

app.delete('/log/:id', (req, res) => {
    gamecollection.deleteGameById(req.params.id)
    .then(deletedCount => {
        if (deletedCount === 1) {
            res.status(204).send();
        } else {
            res.status(404).json({ Error: 'Game ID not found in collection.' });
        }
    })
    .catch(error => {
        console.log(error);
        res.send({ Error: 'Game could not be deleted by ID.'});
    });
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});