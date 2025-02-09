import AddPlayer from "./AddPlayer.jsx";
import PlayersList from "./PlayersList.jsx";
import {useState} from "react";
import TeamName from "./TeamName.jsx";
import TeamTrainer from "./TeamTrainer.jsx";
import Teams from "./Teams.jsx";

const DetailTeams = () => {
    const [teamPlayers, setTeamPlayers] = useState([]);


    const addPlayer = (player) => {
        if (teamPlayers.length > 11) {
            return alert("No more than 12!")
        } else if (teamPlayers.find((teamPLayer) => teamPLayer.id === player.id)) {
            return console.log('already exist');
        } else {
            return setTeamPlayers([player, ...teamPlayers]);
        }
    };

    const deletePlayer = (id) => {
        const newTeam = teamPlayers.filter(teamPlayer => teamPlayer.id !== id)
        setTeamPlayers(newTeam);
    }

    const addTrainer = (trainer) => {

    }

    return (
        <div className=" mx-auto min-h-screen ">
            <AddPlayer addPlayer={addPlayer}/>
            <TeamName/>
            <div className="flex justify-evenly ">
                <Teams/>
                <div className="flex-1">
                    <PlayersList teamPlayers={teamPlayers} deletePlayer={deletePlayer}/>
                </div>
                <TeamTrainer/>
            </div>

        </div>
    );
};

export default DetailTeams;
