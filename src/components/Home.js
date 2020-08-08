import React from 'react'
import { Heading } from './Heading';
import { ArtistsList } from './ArtistsList';


export const Home = () => {
  return (
    <>
      <h1> Welcome to my Artists Ranking App </h1>
      <Heading />
      <ArtistsList />
    </>
  )
}
