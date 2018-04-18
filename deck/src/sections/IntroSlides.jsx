import React from "react";

import {
  Heading,
  Image,
  List,
  ListItem,
  Notes,
  Quote,
  Slide,
  SlideSet,
  Text,
  Link
} from "spectacle";

export default (
  <SlideSet>
    <Slide>
      <Heading
        size={2}
        caps
        lineHeight={1}
        textColor="secondary"
        margin="1rem 0"
      >
        Applying Elixir Patterns in JavaScript
      </Heading>

      <Heading fit caps textColor="tertiary">
        Will Ockelmann-Wagner | @WowItsWillWow | wow@carbonfive.com
      </Heading>

      <Notes>- Hi I'm Will</Notes>
    </Slide>

    <Slide>
      <Heading size={2}>Elixir spoils you</Heading>

      <Notes>
        - if you're here at the meetup you'll agree Elixir is a particularly
        pleasant language - whenever I'm pairing in another langage, I feel like
        Phoebe from Magic School Bus
      </Notes>
    </Slide>

    <Slide
      bgImage="./img/at-my-old-school.gif"
      bgSize="contain"
      bgRepeat="no-repeat"
    >
      <Notes>
        - In Elixir, this is a lot easier - In Elixir, we could just...
      </Notes>
    </Slide>

    <Slide>
      <Heading size={2}>But Javascript is whatever you want it to be</Heading>

      <Notes>
        - true if we're working on the frontend - But Javascript is whatever you
        want it to be - gift and a curse - talk about how we can take some of
        the best parts of elixir and bring them into Javascript - won't be for
        every project, but if your team is already working in Elixir
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
        - here are three techniques to make our frontend code a little more
        elixir-y - Modules - if we organize our data structures and functions
        correctly, we can basically replicate elixir modules - Contexts -
        Phoenix has some really good ideas about how to split your application
        and domain logic. Turns out they're equally good ideas on the frontend -
        Pipelines - One of the best parts of elixir, and you can get most of the
        way there in JS, without any Stage 1 syntax
      </Notes>
    </Slide>

    <Slide>
      <Link href="http://localhost:4000/#/">
      <Heading fit>Sample Payroll App</Heading>
      </Link>

      <Notes>
        - useful to have something a little more complicated than a ToDo app
        - build an app where an hourly employee can enter their hours, and calculate their pay for the day.
        - what makes this slightly complicated is California Wage and Hours laws.
        - Heads up, the next slide is extremely boring.
      </Notes>
    </Slide>

    <Slide>
      <Heading fit>California Overtime Rules</Heading>

      <List>
        <ListItem>
          One and one-half times the employee's regular rate of pay for all
          hours worked in excess of eight hours up to and including 12 hours in
          any workday, and for the first eight hours worked on the seventh
          consecutive day of work in a workweek; and
        </ListItem>
        <ListItem>
          Double the employee's regular rate of pay for all hours worked in
          excess of 12 hours in any workday and for all hours worked in excess
          of eight on the seventh consecutive day of work in a workweek.
        </ListItem>
      </List>

      <Notes>
        - I warned you.
        - Basically this says that you get paid your normal hourly wage (straight time) for the first 8 hours of a day, time and a half for the next 4, and double time after that
        - After working 40 straight time hours in a week, (like on a Saturday) you get time and a half no matter what
        - On your seventh day straight working, you get time and a half for the first 8 hours, and double after that.
        - What's important is a day's pay is a function of the hours worked that day, and the hours worked during the week.
      </Notes>
    </Slide>

    <Slide>
      <Heading fit>Building a front-end</Heading>

      <List>
        <ListItem>
          Existing Phoenix API that calculates pay
        </ListItem>
        <ListItem>
          Building React app
        </ListItem>
      </List>

      <Notes>
        - So here's the situation. We've got a sweet Phoenix API that calculates pay
        - Product thinks users want more interactivity, so we're building a React app that does the same calculations
        - we'll see how we might have implemented the Elixir side, and how we can borrow some Elixir idioms when re-implementing it in JS 
      </Notes>
    </Slide>

    <Slide
      bgImage="./img/payroll-react.png"
      bgSize="contain"
      bgRepeat="no-repeat"
    >
      <Notes>
        Here's the final React app. Web brutalism at its finest.
      </Notes>
    </Slide>
  </SlideSet>
);
