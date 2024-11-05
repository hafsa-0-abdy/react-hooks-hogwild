import React from 'react';
import HogTile from './HogTile';
import HogDetails from './HogDetails';  
import { Grid, Button } from 'semantic-ui-react';

function HogList({ hogs, selectedHog, setSelectedHog, hiddenHogs, handleHideHog }) {
    return (
        <Grid container>
            {hogs.map(hog => (
                <Grid.Column key={hog.name} width={4}>
                    
                    {!hiddenHogs[hog.name] && (
                        <>
                            
                            <HogTile hog={hog} setSelectedHog={setSelectedHog} />
                            
                        
                            <Button
                                onClick={() => handleHideHog(hog.name)}
                                color="red"
                                style={{ marginTop: '3px' }}
                            >
                                Hide
                            </Button>

                            
                            {selectedHog && selectedHog.name === hog.name && (
                                <HogDetails hog={selectedHog} />
                            )}
                        </>
                    )}
                </Grid.Column>
            ))}
        </Grid>
    );
}

export default HogList;
