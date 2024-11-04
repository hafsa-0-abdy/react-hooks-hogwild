import React from 'react';
import HogTile from './HogTile';
import HogDetails from './HogDetails';
import { Grid } from 'semantic-ui-react';

function HogList({ hogs, setSelectedHog , selectedHog }) {
	return (
		<Grid container>
            {hogs.map(hog => (
                <Grid.Column key={hog.name} width={4}>
                    <HogTile hog={hog} setSelectedHog={setSelectedHog} />
                    {selectedHog && selectedHog.name === hog.name && (
                        <HogDetails hog={selectedHog} />
                    )}
                </Grid.Column>
            ))}
        </Grid>
        
	);
    
}

export default HogList;