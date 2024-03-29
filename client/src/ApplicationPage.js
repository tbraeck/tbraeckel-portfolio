import React, { useContext } from 'react';
import { AppContext } from './contexts/AppContext';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

const ApplicationPage = () => {
    const {allApps} = useContext(AppContext)
    const { id } = useParams();

    const selectedApp = allApps.find((app) => app.id === parseInt(id));
   
    if (!selectedApp) {
      return <div>Loading...</div>;
    }

  return (
    <div className="full-height-page">
        <Card style={{marginTop: "0px"}}>
        <Card.Img style={{width: "48rem", left: "2rem"}} variant="top" src={selectedApp.image} />
        <Card.Body>
          <Card.Title>{selectedApp.name}</Card.Title>
          <Card.Text>{selectedApp.description}</Card.Text>
          <Link to={selectedApp.link} target="_blank" rel="noopener noreferrer">
             GITHUB
          </Link>
          <br></br>
          <Link to={selectedApp.demo} target="_blank" rel="noopener noreferrer">
            DEMO
          </Link>
         
        </Card.Body>
      </Card>
      </div>
  )
}

export default ApplicationPage
