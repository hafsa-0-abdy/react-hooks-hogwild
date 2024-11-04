import React from 'react';
import { Card } from 'semantic-ui-react';

function HogTile({ hog, setSelectedHog }) {
    return (
        <Card className="hog-tile" onClick={() => setSelectedHog(hog)}>
            <div className="image">
                <img src={hog.image} alt={hog.name} />
            </div>
            <Card.Content>
                <Card.Header>{hog.name}</Card.Header>
            </Card.Content>
        </Card>
    );
}

export default HogTile;
