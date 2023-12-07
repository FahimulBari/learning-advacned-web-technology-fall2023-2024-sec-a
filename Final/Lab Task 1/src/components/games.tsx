"use client"
import { Dispatch, useState } from "react";

export type Game = {
    id: string,
    name: string
}

let initialGames: Game[] = [
    {
        id: "1",
        name: "GTA Vice City"
    },
    {
        id: "2",
        name: "Nfs Most Wanted"
    }
]


export default function GameComponent(){

    const [games, addGames] = useState(initialGames); 
    const [newGame, setNewGame] = useState<Game>({id:'', name: ''});
    
    const addGameToArray = () => {
        addGames([...games, newGame]);  
        initialGames = [...games, newGame];   
        console.log(initialGames)
    }

    return(  
        <>
            <Show stateFunction = {addGames}/>   {/* OR >>  {Show(addGames)}  << */}       
            <div>
                <input value={newGame.id} onChange={e => setNewGame({...newGame, id: e.target.value})} />
                <input value={newGame.name} onChange={e => setNewGame({...newGame, name: e.target.value})} />
                <button onClick={addGameToArray}>Insert</button>  
            </div>
        </>
    );
}

const Show = ({ stateFunction }: { stateFunction: Dispatch<any>}) => {
    return (
      <div>
        {initialGames.map((game) => (
          <div key={game.id}>
            {game.id}: {game.name} <a href="#" onClick={() => Delete(game.id, stateFunction)}>Delete</a>
          </div>
        ))}
      </div>
    );
  };
  

const Delete = (id: string, stateFunction: Dispatch<any>) => {
    // Filter out the game with the specified id
    const updatedGames = initialGames.filter((game) => game.id !== id);

    // Update the state to re-render the component
    stateFunction(updatedGames);
    initialGames = [...updatedGames];
}

