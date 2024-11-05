import React, { useState } from "react";
import Nav from "./Nav";
import HogList from "./HogList"; 
import hogs from "../porkers_data";

function App() {
    const [selectedHog, setSelectedHog] = useState(null); 
    const [filterGreased, setFilterGreased] = useState(false);
    const [sortCriteria, setSortCriteria] = useState('name');
    
    
    const [hiddenHogs, setHiddenHogs] = useState({});

    
    const handleHideHog = (hogName) => {
        setHiddenHogs((prevState) => ({
            ...prevState,
            [hogName]: !prevState[hogName],
        }));
    };

    const filteredHogs = filterGreased ? hogs.filter(hog => hog.greased) : hogs;

    const sortedHogs = [...filteredHogs].sort((a, b) => {
        if (sortCriteria === 'name') {
            return a.name.localeCompare(b.name);
        } else {
            return a.weight - b.weight;
        }
    });

    return (
        <div className="App">
            <div className="container">
                <Nav setFilterGreased={setFilterGreased} setSortCriteria={setSortCriteria} />
                <h1>HOG WILD</h1>
                <HogList 
                    hogs={sortedHogs} 
                    selectedHog={selectedHog}
                    setSelectedHog={setSelectedHog} 
                    hiddenHogs={hiddenHogs} 
                    handleHideHog={handleHideHog} 
                />
            </div>
        </div>
    );
}

export default App;
