import React from 'react';

import {
  Heading,
  Image,
  List,
  ListItem,
  Notes,
  Quote,
  Slide,
  SlideSet,
  Text
} from 'spectacle';

export default (
  <SlideSet>
    <Slide>
      <Heading size={2} caps lineHeight={1} textColor="secondary">
        Applying Elixir Patterns in JavaScript
      </Heading>

      <Notes>
        - Hi I'm Will
      </Notes>
    </Slide>

    <Slide>
      <Heading size={2}>Elixir is fun</Heading>

      <Notes>
        - We talk a lot about elixir's performance 
        - concurrency, etc.
        - also just a really pleasant language to work in
      </Notes>
    </Slide>

    <Slide>
      <Heading size={2}>Javascript is... whatever you want it to be</Heading>

      <Notes>
        - Javascript is... whatever you want it to be
        - Can be almost as nice, or a big annoying mess
      </Notes>
    </Slide>

    <Slide>
      <Heading size={2}>Three Elixir Patterns</Heading>

      <List>
        <ListItem>Modules</ListItem>
        <ListItem>Contexts</ListItem>
        <ListItem>Pipelines</ListItem>
      </List>

      <Notes>
        - make our frontend code a little more elixir-y
        - Modules - if we organize our data structures and functions correctly, we can basically replicate elixir modules
        - Contexts - Phoenix has some really good ideas about how to split your application and domain logic. Turns out they're equally good ideas on the frontend
        - Pipelines - One of the best parts of elixir, and you can get most of the way there in JS, without any Stage 1 syntax
      </Notes>
    </Slide>
  </SlideSet>
);
