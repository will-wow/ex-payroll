import React from 'react';

import { Heading, List, ListItem, Notes, Slide, SlideSet } from 'spectacle';

export default (
  <SlideSet>
    <Slide>
      <Heading fit>What about Elixir?</Heading>

      <Notes>
        So ACO is an interesting technique - but if you want to do that kind of
        number crunching, Elixir isn't really your ideal language. But a few
        months ago I was reading about ACO (because that's how I roll on a
        Tuesday night), and it got me thinking about something else:
      </Notes>
    </Slide>

    <Slide>
      <Heading fit>Ants seem familiar</Heading>
      <List>
        <ListItem bold>State: (location and has_food)</ListItem>
        <ListItem>Actions: (move, pheromones, food)</ListItem>
        <ListItem>Logic: (state, surroundings) -> state</ListItem>
      </List>
      <Notes>
        An ant's got a little bit of state - it knows its location and if it has
        food.
      </Notes>
    </Slide>

    <Slide>
      <Heading fit>Ants seem familiar</Heading>
      <List>
        <ListItem>State: (location and has_food)</ListItem>
        <ListItem bold>Actions: (move, pheromones, food)</ListItem>
        <ListItem>Logic: (state, surroundings) -> state</ListItem>
      </List>
      <Notes>
        It can take a limited set of actions, like moving, depositing
        pheromones, and grabbing and dropping off food.
      </Notes>
    </Slide>

    <Slide>
      <Heading fit>Ants seem familiar</Heading>
      <List>
        <ListItem>State: (location and has_food)</ListItem>
        <ListItem>Actions: (move, pheromones, food)</ListItem>
        <ListItem bold>Logic: (state, surroundings) -> state</ListItem>
      </List>
      <Notes>
        And the ACO algorithm to determine the ant's next state is just a
        function of the ant's current state and its surroundings, plus some
        randomness. And that means...
      </Notes>
    </Slide>

    <Slide bgImage="./img/actors.jpg" bgDarken="0.5">
      <Heading textColor="primary">Ants are like Actors!</Heading>
      <Notes>
        Ants are like Actors!
        <br />
        Not that kind, but they do fit pretty well into the Actor model that
        Erlang and Elixir use for concurrency. Which got me wondering...
      </Notes>
    </Slide>

    <Slide>
      <Heading size={3}>
        Can you simulate a foraging ant colony using Elixir processes with
        GenServer?
      </Heading>

      <Notes>
        Can you simulate a foraging ant colony using Elixir processes with
        GenServer?
      </Notes>
    </Slide>

    <Slide>
      <Heading fit>(Spoiler alert: yup)</Heading>

      <Notes>
        So the short answer is yes, don't worry, we'll see this actually work at
        the end of the talk. But that's not really the point here.
      </Notes>
    </Slide>

    <Slide>
      <Heading fit>Thinking in OTP</Heading>

      <Notes>
        The point is, if you're like me, you spend most of your time writing
        CRUD applications, even in Elixir, and don't actually explicitly drop
        into OTP that often. When I'm trying to solve a problem, my instinct is
        to reach for database tables and endpoints.<br />
        <br />
        So today, I want to walk you through a "sufficiently complex" example of
        how you might go about building a program where you're thinking in
        actors, supervisors, and data types instead. You might not be writing an
        ant simulation (because how could you compete with this one?), but maybe
        you'll be inspired for your next problem.
      </Notes>
    </Slide>
  </SlideSet>
);
