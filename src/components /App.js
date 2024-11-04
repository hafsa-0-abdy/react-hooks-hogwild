import React,{useState} from "react";
import Nav from "./Nav";
import HogList from "./HogList"; 
import hogs from "../porkers_data";


function App() {
	const [selectedHog, setSelectedHog] = useState(null);
	const [filterGreased, setFilterGreased] = useState(false);
	const [sortCriteria, setSortCriteria] = useState('name');
	// To filter hogs based on greased status

	const filteredHogs = filterGreased ? hogs.filter(hog => hog.greased) : hogs;

	const sortedHogs = [...filteredHogs].sort((a, b) => {
		if (sortCriteria === 'name') {
			return a.name.localeCompare(b.name);
		} else {
			return a.weight - b.weight; // Sort by weight
		}
	});
	return (
		<div className="App">
			<Nav setFilterGreased={setFilterGreased} setSortCriteria={setSortCriteria} />
			<HogList hogs={sortedHogs} setSelectedHog={setSelectedHog} selectedHog={selectedHog}/>
			
		</div>
		
		
	);
}

export default App;