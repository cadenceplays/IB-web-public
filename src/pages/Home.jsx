import React from 'react';
import {Article, Numbers, Recent, Upcoming, Activities, Events, Leaders, Specialnews } from '../components';

const Home = () => {
  return (
    <>
      <Article />
      <Specialnews />
      <Numbers />
      <Activities />
      <Events />
      <Leaders />
      <Recent />
      <Upcoming />
    </>
  )
}

export default Home