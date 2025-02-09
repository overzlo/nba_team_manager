const TeamTrainer = ({teamTrainer,}) => {
    return (
        <div className="w-lg mx-auto border p-4 bg-amber-100">
            <h2 className="text-xl font-semibold border-b mb-4">Head Coach</h2>
            { Object.keys(teamTrainer).length > 0 ? (
                <div
                    className="flex flex-col items-center bg-gradient-to-b from-pink-700 to-purple-500 text-white rounded-lg shadow-lg p-6">
                    <p className="mt-1 text-center font-semibold font-mono text-2xl">
                        {teamTrainer.first_name} {teamTrainer.last_name}
                    </p>
                    <img
                        className=" h-64 mt-4 rounded-lg"
                        src={teamTrainer.image_url}
                        alt={`${teamTrainer.first_name} ${teamTrainer.last_name}`}
                    />

                </div>
            ) : (
                <p className="text-center">No trainer assigned</p>
            )}
        </div>
    );
};

export default TeamTrainer;
