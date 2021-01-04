import React from 'react';
import HomePageCards from './HomePageCards';

export default function HomePage() {
  return (
    <div id="homepage">
      <div id="homePageInfo">
        <h2>
          Understand the microorganisms living all around us with
          MicrobeTrackerJS
        </h2>
      </div>
      <HomePageCards />
    </div>
  );
}
