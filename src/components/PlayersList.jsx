import {useState} from "react";

const PlayersList = ({teamPlayers, deletePlayer}) => {
    const [topFive, setTopFive] = useState([]);


    const addToStart = (player) => {
        if (topFive.length > 4) {
            return alert("No more than 5");
        } else if (topFive.find(topFivePl => topFivePl.id === player.id)) {
            return alert("Already in the top 5");
        } else {
            setTopFive([player, ...topFive]);
        }
    };

    const deleteFromStart = (id) => {
        const newTopFive = topFive.filter((player) => player.id !== id);
        setTopFive(newTopFive);
    };

    return (
        <div className="w-3xl mx-auto border p-4">
            <div>

                <h2 className="text-xl font-semibold  border-b mb-4">Start Five</h2>
                <div className="flex flex-wrap justify-evenly gap-5">
                    {topFive.map(player => (
                        <li
                            onClick={() => deleteFromStart(player.id)}
                            key={player.id}
                            className="w-[220px] flex flex-col border shadow-lg rounded-lg overflow-hidden cursor-pointer transition-all duration-700 hover:[transform:rotateY(180deg)]"
                        >
                            <div className="relative w-full h-[180px] bg-gradient-to-b from-black to-orange-400">
                                <img className="object-cover w-full h-full" src={player.image_url}
                                     alt={`${player.first_name} ${player.last_name}`}/>
                                <div className="absolute top-0 right-0 p-2 text-amber-300 font-semibold text-center">
                                    <p>{player.team.abbreviation}</p>
                                    <p>#{player.jersey_number}</p>
                                </div>
                            </div>

                            <div
                                className="p-3 bg-gradient-to-t from-gray-500 to-orange-400 text-white text-center font-mono">
                                <p className="text-lg font-bold">{player.first_name} {player.last_name}</p>
                                <p className="text-sm">Position: {player.position}</p>
                            </div>
                        </li>
                    ))}
                </div>
            </div>

            <div className="">
                <h2 className="text-xl font-semibold  border-b mb-4">Roster</h2>
                <ul className="grid grid-cols-2">
                    {teamPlayers.map((player) => (
                        <li
                            key={player.id}
                            className="flex justify-between border shadow-md px-3 py-3 bg-amber-100"
                        >
                            <div
                                onClick={() => addToStart(player)}
                                className="flex flex-col items-center w-1/2 bg-gradient-to-t from-purple-500 to-yellow-500 hover:cursor-pointer hover:bg-none hover:bg-sky-500 transition duration-500 ease-in-out relative"
                            >
                                <p className="mt-1 text-center font-semibold font-mono">{player.first_name} {player.last_name}</p>
                                <img className="object-cover w-full h-full p-4" src={player.image_url}
                                     alt={`${player.first_name} ${player.last_name}`}/>
                                <p className="absolute inset-0 flex items-center justify-center text-white text-7xl font-semibold opacity-0 hover:opacity-100 transition-opacity duration-300">
                                    +
                                </p>
                            </div>
                            <div
                                className="text-right cursor-pointer relative hover:bg-red-400 p-2"
                                onClick={() => deletePlayer(player.id)}
                            >
                                <p className="text-sm font-medium">{player.team.full_name} - #{player.jersey_number}</p>
                                <p>Height: {player.height}, Weight: {player.weight}</p>
                                <p>Position: {player.position}</p>
                                <p>Country: {player.country}</p>
                                <p>Draft year: {player.draft_year}, Round {player.draft_round},
                                    Number {player.draft_number}</p>
                                <p>College: {player.college}</p>
                                <p className="absolute inset-0 flex items-center justify-center text-white text-7xl font-semibold opacity-0 hover:opacity-100 transition-opacity duration-300">
                                    -
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default PlayersList;