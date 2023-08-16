import mongoose from "mongoose";
import 'dotenv/config';

mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);

const connect = mongoose.connection;

connect.once("open", (err) => {
    if(err){
        res.status(500).json({ error: 'Error 500: Cannot connect to server.'});
    } else {
        console.log('Fully connected to Game Collections using MongoDB!')
    }
});

function getDate(date){
    return new Date(date).toLocaleString(undefined, {
        year: "2-digit",
        month: "2-digit",
        day: "2-digit"
    }).split("/").join("-");
}


const gameSchema = mongoose.Schema({
    name: { type: String, required: true},
    purchase_date: { type: Date, required: true, min: '2020-03-01', default: Date.now },
    instructions: { type: String, required: true},
    expansions_owned: { type: Number, required: true, min: 0 },
    favorite: { type: String, requried: true}
});


const Game = mongoose.model("Game", gameSchema);

const createGame = async (name, purchase_date, instructions, expansions_owned, favorite) => {
    const game = new Game({
        name: name,
        purchase_date: date,
        instructions: instructions,
        expansions_owned: expansions_owned,
        favorite: favorite
    });
    return game.save()
}

const findGame = async () => {
    const locate = Game.find();
    return locate.exec();
}

const findGameById = async (id) => {
    const locate = Game.findById(id);
    return locate.exec();
}

const updateGame = async (id, name, purchase_date, instructions, expansions_owned, favorite) => {
    const result = await Game.replaceOne({_idx: id}, {
        name: name,
        purchase_date: date,
        instructions: instructions,
        expansions_owned: expansions_owned,
        favorite: favorite
    });
    return {
        id: id,
        name: name,
        purchase_date: date,
        instructions: instructions,
        expansions_owned: expansions_owned,
        favorite: favorite
    }
}

const deleteGameById = async (id) => {
    const result = await Game.deleteOne({ _id: id });
    return result.deletedCount;
}

export { createGame, findGame, findGameById, updateGame, deleteGameById }