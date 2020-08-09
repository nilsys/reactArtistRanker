import React, { useContext } from 'react';
import { GlobalContext } from '../store/GlobalState';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';
import { Counter } from './Counter';

export const ArtistsList = () => {
  const { artists, removeArtist } = useContext(GlobalContext);

  return (
    <div>
      <ListGroup className="mt-4">
        {artists.length > 0 ? (
          <>
            {artists.map((artist) => (
              <ListGroupItem className="d-flex" key={artist.id}>
                <img
                  className="artist-img"
                  src={artist.picture}
                  alt="Artist picture"
                  width="80"
                  height="auto"
                ></img>
                <div>
                <strong className="artist-name">{artist.name}</strong>
                <p>your rating: {artist.rating}</p>
                </div>
                <div className="ml-auto">
                <Counter /> 
                  <Link
                    className="btn btn-warning mr-1"
                    to={`/edit/${artist.id}`}
                  >
                    <i class="fas fa-edit"></i> Edit
                  </Link>
                  <Button
                    onClick={() => removeArtist(artist.id)}
                    color="danger"
                  >
                    {' '}
                    <i className="fas fa-user-minus"></i> Delete
                  </Button>
                </div>
              </ListGroupItem>
            ))}
          </>
        ) : (
          <div>
            <h4>Artist list is empty</h4>
            <h4><i class="far fa-frown"></i></h4>
          </div>
        )}
      </ListGroup>
    </div>
  );
};
