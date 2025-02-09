import {useEffect, useState} from "react";

const AddComponent = ({fetchQ, addSelected}) => {
    const [items, setItems] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    const fetchPlayers = async (searchTerm) => {
        const response = await fetch(`http://localhost:3000/${fetchQ}?q=${searchTerm}`)
        if (!response.ok) throw new Error("broken heart");
        const data = await response.json();
        setItems(data || [])
        setSelectedItem(data[0].id);
    };
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            fetchPlayers(searchTerm);
        }, 500);

        return () => clearTimeout(timeoutId);
    }, [searchTerm]);
    return (<div className="w-lg mx-auto border p-4">
        <input
            className="border p-2 w-full"
            type="text"
            placeholder="Enter search term"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
            onChange={(e) => setSelectedItem(e.target.value)}
            className="w-full mt-2 p-2 border">
            {items.map((item) => (<option key={item.id} value={item.id}>
                {item.name || `${item.first_name} ${item.last_name}`}
            </option>))}
        </select>

        <button
            className="w-full border p-2 mt-2 cursor-pointer"
            onClick={() => {
                const selected = items.find((item) => item.id === +selectedItem);
                if (selected) addSelected(selected);
            }}>
            Add
        </button>
    </div>);
};

export default AddComponent;
