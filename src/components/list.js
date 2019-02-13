import React from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { Card } from 'react-bootstrap';


export default function List() {
    return (
        <div>
            <h3>Bootstrap Example</h3>
            <ul className="list">
              <li>
                <Card>
                  <Card.Header as="h5">Name</Card.Header>
                  <Card.Body>
                    <Card.Title>Position</Card.Title>
                    <Card.Text>
        Detail about the position
                    </Card.Text>
                    <Button variant="primary">Learn more</Button>
                  </Card.Body>
                </Card>
              </li>
              <li>
                <ButtonToolbar>
                  <Button size='sm' variant="primary"> 
                    Primary
                    </Button>
                    <Button size='sm' variant="warning"> 
                    Warning
                    </Button>
                </ButtonToolbar>
              </li>             
            </ul>
        </div>
    );
}
