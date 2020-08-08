import React, { useState, useContext } from 'react';
import { GlobalContext } from '../store/GlobalState';
import { Link, useHistory } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

export const AddArtist = () => {
  const [name, setName] = useState('');

  const { addArtist } = useContext(GlobalContext);
  const history = useHistory();
  const onSubmit = () => {
    const newArtist = {
      id: uuid(),
      name
    }
    addArtist(newArtist);
    history.push('/');
  }
  const onChange = (e) => {
    setName(e.target.value);
  }

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>Name</Label>
        <Input type="text" name="name" value={name} onChange={onChange} placeholder="Enter Artist Name"></Input>
      </FormGroup>
      <Button type="submit">Submit</Button>
      <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
    </Form>
  );
};
