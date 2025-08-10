import React from 'react';
import {Article, Numbers, Recent, Upcoming, Activities, Events, Leaders, Specialnews } from '../components';
import Button from '../components/button/button';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Article />
      <Specialnews />
      <Numbers />
      <Leaders />
      <section className='volunteer-awards'> {/*this is a bandaid fix i will improve this when its not past my bedtime :/*/}
        <h2>Volunteer Awards</h2>
        <Link 
          to="/volunteerawards"
          style={{
            fontWeight: "bold",
            padding: "0.6rem 1.5rem",
            fontSize: "1.25rem",
            marginBottom: "2rem",
            display: "flex",
            borderRadius: "12px",
            justifyContent: "center",
          }}
        >
          <Button type="greenButton" text="More" />
        </Link>
      </section>
      <Activities />
      <Events />
      <Recent />
      <Upcoming />
    </>
  )
}

export default Home