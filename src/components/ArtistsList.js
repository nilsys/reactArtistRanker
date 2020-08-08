import React, { useContext } from 'react';
import { GlobalContext } from '../store/GlobalState';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';

export const ArtistsList = () => {
  const
  return (
    <div>
      <h1> Artists List </h1>
      <ListGroup className="mt-4">
        <ListGroupItem className="d-flex">
          <strong>Artist One</strong>
          <div className="ml-auto">
            <Link className="btn btn-warning mr-1" to="/edit/1">Edit</Link>
            <Button color="danger"> Delete</Button>
          </div>
        </ListGroupItem>
        <ListGroupItem className="d-flex">
          <strong>Artist One</strong>
          <div className="ml-auto">
            <Link className="btn btn-warning mr-1" to="/edit/1">Edit</Link>
            <Button color="danger"> Delete</Button>
          </div>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
};
