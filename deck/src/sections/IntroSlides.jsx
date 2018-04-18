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
      <Heading size={2} caps lineHeight={1} textColor="secondary" margin="1rem 0">
        Applying Elixir Patterns in JavaScript
      </Heading>

      <Heading fit caps textColor="tertiary">
      Will Ockelmann-Wagner | @WowItsWillWow | wow@carbonfive.com
      </Heading>

      <Notes>
        - Hi I'm Will
      </Notes>
    </Slide>

    <Slide>
      <Heading size={2}>Elixir spoils you</Heading>

      <Notes>
        - if you're here at the meetup you'll agree Elixir is a particularly pleasant language
        - whenever I'm pairing in another langage, I feel like Phoebe from Magic School Bus
      </Notes>
    </Slide>

    <Slide bgImage="./img/at-my-old-school.gif" bgSize="contain" bgRepeat="no-repeat">
      <Notes>
        - In Elixir, this is a lot easier
        - In Elixir, we could just...
      </Notes>
    </Slide>

    <Slide>
      <Heading size={2}>But Javascript is whatever you want it to be</Heading>

      <Notes>
        - true if we're working on the frontend
        - But Javascript is whatever you want it to be
        - gift and a curse
        - talk about how we can take some of the best parts of elixir and bring them into Javascript
        - won't be for every project, but if your team is already working in Elixir
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
        - here are three techniques to make our frontend code a little more elixir-y
        - Modules - if we organize our data structures and functions correctly, we can basically replicate elixir modules
        - Contexts - Phoenix has some really good ideas about how to split your application and domain logic. Turns out they're equally good ideas on the frontend
        - Pipelines - One of the best parts of elixir, and you can get most of the way there in JS, without any Stage 1 syntax
      </Notes>
    </Slide>
  </SlideSet>
);
