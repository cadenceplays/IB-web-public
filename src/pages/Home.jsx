import React from 'react';
import {Article, Numbers, Recent, Upcoming, Activities, Events, Leaders, Specialnews } from '../components';

const Home = () => {
  return (
    <>
      <Article />
      <Specialnews />
      <Numbers />
      <Leaders />
      <Activities />
      <Events />
      <Recent />
      <Upcoming />
    </>
  )
}

export default Home