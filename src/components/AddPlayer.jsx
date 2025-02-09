import {useEffect, useState} from "react";

const AddPlayer = ({addPlayer}) => {
    const [players, setPlayers] = useState([]);
    const [selectedPlayer, setSelectedPlayer] = useState({});
    const [searchTerm, setSearchTerm] = useState("");

    const fetchPlayers = async (first_name) => {
        const response = await fetch(`http://localhost:3000/data?q=${first_name}`)
        if (!response.ok) throw new Error("broken heart");
        const data = await response.json();
        setPlayers(data || [])
        setSelectedPlayer(data[0].id);
    };
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            fetchPlayers(searchTerm);
        }, 500);

        return () => clearTimeout(timeoutId);
    }, [searchTerm]);

    return (
        <div className="w-3xl mx-auto border p-4">
            <input
                className="border p-2 w-full"
                type="text"
                placeholder="Введите имя игрока..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            <select
                onClick={(e) => setSelectedPlayer(e.target.value)}
                className="w-full mt-2 p-2 border">
                {players.map((player) => (
                    <option key={player.id}
                            value={player.id}>
                        {player.name}
                        {player.first_name} {player.last_name}
                    </option>
                ))}
            </select>

            <button className="w-full border p-2 mt-2 cursor-pointer"
                    onClick={() =>{
                        const player = players.find((player) => player.id === +selectedPlayer);
                        addPlayer(player)}}>Add player
            </button>
        </div>
    );
};

export default AddPlayer;
