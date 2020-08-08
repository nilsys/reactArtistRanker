import React, { useContext, useReducer } from 'react';
import { GlobalContext } from '../store/GlobalState';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';

export const ArtistsList = () => {
  const { artists, removeArtist } = useContext(GlobalContext);
  console.log(artists);

  return (
    <div>
      <h1> Artists List </h1>
      <ListGroup className="mt-4">
        {artists.length > 0 ? (
          <>
            {artists.map((artist) => (
              <ListGroupItem className="d-flex" key={artist.id}>
                <strong>{artist.name}</strong>
                <div className="ml-auto">
                  <Link
                    className="btn btn-warning mr-1"
                    to={`/edit/${artist.id}`}
                  >
                    Edit
                  </Link>
                  <Button
                    onClick={() => removeArtist(artist.id)}
                    color="danger"
                  >
                    {' '}
                    Delete
                  </Button>
                </div>
              </ListGroupItem>
            ))}
          </>
        ) : (
          <h4>Artist list is empty</h4>
        )}
      </ListGroup>
    </div>
  );
};
