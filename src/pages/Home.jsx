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
      <section className='volunteer-awards'>
        <div style={{ display: "flex", gap: "1rem", marginBottom: "2rem" }}>
          <Link 
            to="/volunteerawards"
            style={{
              fontWeight: "bold",
              padding: "0.6rem 1.5rem",
              fontSize: "1.25rem",
              display: "flex",
              borderRadius: "12px",
              justifyContent: "center",
            }}
          >
            <Button type="greenButton" text="Volunteer Awards" />
          </Link>

          <Link 
            to="/chiefprogrammentor"
            style={{
              fontWeight: "bold",
              padding: "0.6rem 1.5rem",
              fontSize: "1.25rem",
              display: "flex",
              borderRadius: "12px",
              justifyContent: "center",
            }}
          >
            <Button type="greenButton" text="Our Chief Program Mentor" />
          </Link>
        </div>
      </section>

      <Activities />
      <Events />
      <Recent />
      <Upcoming />
    </>
  )
}

export default Home