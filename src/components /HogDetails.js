import React from 'react'
import { Card} from 'semantic-ui-react';

function HogDetails({ hog }) {

  return (
      <Card className="hog-details" >
          <Card.Content>
              <Card.Meta>
                  <span className='date'>Specialty: {hog.specialty}</span>
              </Card.Meta>
              <Card.Description>
                  <p><strong>Weight:</strong> {hog.weight} lbs</p>
                  <p><strong>Greased:</strong> {hog.greased ? "Yes" : "No"}</p>
                  <p><strong>Highest Medal Achieved:</strong> {hog["highest medal achieved"]}</p>
              </Card.Description>
          </Card.Content>
      </Card>
  );
}

export default HogDetails;