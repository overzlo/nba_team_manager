import PlayersList from "./PlayersList.jsx";
import {useState} from "react";
import TeamName from "./TeamName.jsx";
import TeamTrainer from "./TeamTrainer.jsx";
import Stadium from "./Stadium.jsx";
import AddComponent from "./AddСomponent.jsx";

const DetailTeams = () => {
    const [teamPlayers, setTeamPlayers] = useState([]);
    const [teamTrainer, setTeamTrainer] = useState({});
    const [teamStadium, setTeamStadium] = useState({});

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
        return setTeamTrainer(trainer);

    }

    const addStadium = (stadium) => {
        return setTeamStadium(stadium);
    }

    return (
        <div className=" mx-auto min-h-screen ">
            <AddComponent addSelected={addPlayer} fetchQ='data'/>
            <div className="flex justify-center">
                <div className="">
                    <AddComponent addSelected={addStadium} fetchQ='stadium'/>
                    <Stadium teamStadium={teamStadium}/>
                </div>
                <div className="">
                    <PlayersList teamPlayers={teamPlayers} deletePlayer={deletePlayer}/>
                    <TeamName teamStadium={teamStadium}/>
                </div>
                <div className="">
                    <AddComponent addSelected={addTrainer} fetchQ='trainer'/>
                    <TeamTrainer teamTrainer={teamTrainer}/>
                </div>
            </div>
        </div>
    );
};

export default DetailTeams;
