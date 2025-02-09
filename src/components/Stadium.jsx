const Stadium = ({teamStadium}) => {
    return (
        <div className="w-lg mx-auto border p-4 bg-amber-100">
            <h2 className="text-xl font-semibold border-b mb-4 text-center">Stadium</h2>
            {Object.keys(teamStadium).length > 0 ? (
                <div
                    className="flex flex-col items-center bg-gradient-to-b from-pink-700 to-purple-500 text-white rounded-lg shadow-lg p-6">
                    <p className="text-2xl font-bold">{teamStadium.name}</p>
                    <p className="text-lg">{teamStadium.city}</p>
                    <p className="text-md">Capacity: {teamStadium.capacity}</p>
                    <img
                        className="object-cover w-full h-64 mt-4 rounded-lg"
                        src={teamStadium.stadium_image_url}
                        alt={teamStadium.name}
                    />
                </div>
            ) : (
                <p className="text-center text-gray-500">No stadium assigned</p>
            )}
        </div>
    );
};

export default Stadium;
