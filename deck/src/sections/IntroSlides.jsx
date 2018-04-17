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
        What is this, a presentation for ants?
      </Heading>
      <Text margin="1px 0 0" textColor="tertiary" size={1} fit bold>
        Simulating Ant Foraging Behavior with OTP
      </Text>

      <Notes>
        Hi, I'm Will! I'm a developer at Carbon Five, here in our Santa Monica
        office. As Andrew said, we're an agile product development company, and
        work with companies from new startups learning how to do agile to large
        companies that want to get better at it. We also often host the Elixir
        LA meetup in Santa Monica, so hopefully I'll see some of you there.
        <br />
        So!
      </Notes>
    </Slide>

    <Slide bgImage="./img/ant-1.jpg" bgDarken="0.5">
      <Heading size={2} textColor="primary">
        Ants
      </Heading>

      <Notes>Today, we're going to talk about ants.</Notes>
    </Slide>

    <Slide
      transition={['fade']}
      bgColor="tertiary"
      bgImage="./img/ants-line.jpg"
      bgDarken="0.5"
    >
      <Heading size={2} textColor="primary">
        Swarms of Ants
      </Heading>
      <Notes>Swarms of ants</Notes>
    </Slide>

    <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
      <Heading size={2}>Also Elixir things</Heading>

      <List>
        <ListItem>Processes</ListItem>
        <ListItem>GenServer</ListItem>
        <ListItem>Registry</ListItem>
        <ListItem>DynamicSupervisor</ListItem>
        <ListItem>Contexts</ListItem>
        <ListItem>Types</ListItem>
      </List>

      <Notes>
        And, because you paid to go to an Elixir conference, we'll talk about
        some elixir stuff too, like:
        <ul>
          <li>Processes</li>
          <li>GenServers</li>
          <li>Registries</li>
          <li>DynamicSupervisors</li>
          <li>Contexts</li>
          <li>and Types</li>
        </ul>
      </Notes>
    </Slide>

    <Slide transition={['fade']} bgImage="./img/ant-2.jpg" bgDarken="0.5">
      <Heading size={2} textColor="primary">
        But mostly ants
      </Heading>
      <Notes>
        But mostly ants.<br />
        Now, a great man once said:
      </Notes>
    </Slide>

    <Slide>
      <Image src="./img/mib-people-are-dumb.gif" />
      <Notes>
        A person is smart. People are dumb, panicky, dangerous animals, and you
        know it.
        <br />
        <br />
        Luckily, we're not talking about people today. We're talking about ants,
        and they're just the opposite.
      </Notes>
    </Slide>

    <Slide bgColor="secondary">
      <Quote>
        An ant is dumb. A colony is a smart, efficient, coordinated group.
      </Quote>
      <Text size={4} margin="10px 0 0" textColor="tertiary">
        So how do they do it?
      </Text>
      <Notes>
        "An ant is dumb. (Apologies to any ants in the room). A colony is a
        smart, efficient, coordinated group." So how do they do it?
      </Notes>
    </Slide>
  </SlideSet>
);
