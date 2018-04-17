import React from 'react';

import { Slide, Heading, Notes } from 'spectacle';

import Steps from './Steps';

export default function AntSteps({ name, image, bold, notes }) {
  const steps = [
    'Wander the area',
    'Keep track where you are',
    'Come across food',
    'Grab some',
    'Head straight home',
    'Leave a pheromone trail behind',
    'Drop off food',
    'Go back for more'
  ];

  return (
    <Slide bgImage={image} bgDarken="0.5">
      <Heading fit>{name}</Heading>

      <Steps textColor="primary" steps={steps} bold={bold} />

      <Notes>{notes}</Notes>
    </Slide>
  );
}
