import {useState} from "react";

const TeamName = () => {
    const [teamName, setTeamName] = useState('Tamerlan Team');


    return (
        <div className="w-3xl mx-auto border p-4">
            <input
                className="w-full p-2 color bg-gradient-to-tr from-amber-400 to-sky-400 bg-clip-text text-5xl text-center text-transparent font-semibold "
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}/>
        </div>
    )
};

export default TeamName;