import React from 'react';

import {
  CodePane,
  Heading,
  List,
  ListItem,
  Notes,
  Slide,
  SlideSet
} from 'spectacle';

import AntSteps from '../elements/AntSteps';

import antSearchingPseudoCode from '../code/ant-searching-pseudo-code.ex';
import antGoingHomePseudoCode from '../code/ant-going-home-pseudo-code.ex';

export default (
  <SlideSet>
    <Slide>
      <Heading>Pheromones</Heading>

      <Notes>
        The answer, in short, is pheromones. Now, ants are a diverse set of
        creatures, but here's one common strategy:
      </Notes>
    </Slide>

    {AntSteps({
      name: 'Alice the Ant',
      image: './img/ant-1.jpg',
      bold: [1],
      notes: `
            Let's follow an Ant named Alice. Alice - who, like all worker ants, is
            female - wanders the world in a semi-random way, searching for food.
          `
    })}

    {AntSteps({
      name: 'Alice the Ant',
      image: './img/ant-1.jpg',
      bold: [2],
      notes: `
          But where ever Alice goes, she's generally able to keep track of where
          she is. Scientists think that some ants can keep track of landmarks,
          and others actually count their steps and know their location by dead
          reckoning. We know this because... 
          `
    })}

    <Slide bgImage="./img/ant-stilts.gif" bgSize="contain" bgRepeat="no-repeat">
      <Notes>
        Some scientists glued tiny stilts to the legs of desert ants, then gave
        them food and let them go back to their colony. They found that the ants
        totally overshot the colony, because their step counts and distance were
        off. They also found that they had been gluing tiny stilts onto ants,
        which is a pretty awesome way to do science.
      </Notes>
    </Slide>

    {AntSteps({
      name: 'Alice the Ant',
      image: './img/ant-1.jpg',
      bold: [3, 4, 5],
      notes: `
            Anyway. Once Alice comes across food, she picks up a piece, and
            heads back home. Since she knows where she is, she's able to take a
            pretty direct path back.
          `
    })}

    {AntSteps({
      name: 'Alice the Ant',
      image: './img/ant-1.jpg',
      bold: [6],
      notes: `
            But when Alice is traveling with food, she leaves a pheromone
            trail behind her, which other ants can smell. For some ants, the
            mechanism is just the food weighing them down enough to make their
            stingers drag across the ground.
          `
    })}

    {AntSteps({
      name: 'Alice the Ant',
      image: './img/ant-1.jpg',
      bold: [7, 8],
      notes: `
            In any case, once Alice drops the food off, she can head back out.
          `
    })}

    {AntSteps({
      name: 'Bobbie the Mediocre Scout',
      image: './img/ant-2.jpg',
      notes: `
            Now let's follow Bobbie, another, less talented ant. She follows the same steps,
            but happens to find food that's twice as far out as Alice's. Still, she takes it back, leaving a pheromone trail behind her. 
          `
    })}

    <Slide>
      <Heading>Pheromones evaporate</Heading>

      <Notes>
        But there's an important caveat - pheromone trails evaporate over time.
        So because Bobbie's trip takes twice as long, Bobbie is laying down half
        the pheromones than Alice is for a given hour of collecting. And because
        the pheromones evaporate over time, Bobbie's trail will never get that
        strong.
      </Notes>
    </Slide>

    <Slide bgImage="./img/ant-3.jpg" bgDarken="0.5">
      <Heading fit>Eve the Follower</Heading>

      <List textColor="primary">
        <ListItem>Wander the area</ListItem>
        <ListItem>If pheromones found:</ListItem>
        <ListItem>Decide to follow them if they're strong</ListItem>
        <ListItem>Otherwise keep wandering</ListItem>
      </List>

      <Notes>
        This is important for our last ant, Eve. It turns out, there's another
        step in the ant algorithm Alice and Bobbie are following - if, while
        wandering, they come across a pheromone trail, they may decide to follow
        it to food, depending on how strong the trail is.
      </Notes>
    </Slide>
    <Slide bgImage="./img/aco-image.png" bgSize="contain" bgRepeat="no-repeat">
      <Notes>
        Now we see how this comes together. If in Eve's wandering she comes
        across Bobbie's weak trail, she may choose to pass it by. But when she
        comes across Alice's strong trail, she knows there's food close by, and
        she's more likely to get on the trail. Over time, more and more ants
        make that same choice, find food, and lay down their own pheromones on
        the way back. So the colony forms up and pretty quickly collects the
        closest food. Then, once the food has been collected, Alice's trail
        evaporates, and ants wander off, perhaps to find Bobbie's trail and
        focus on it next.
      </Notes>
    </Slide>

    <Slide>
      <Heading>Recruitment Strategy</Heading>

      <Notes>
        This is known as a recruitment strategy - a way for members of a swarm
        to tell other members - "hey, I found something good, help me out."
      </Notes>
    </Slide>

    <Slide>
      <Heading>That's cool (maybe). So what?</Heading>

      <Notes>
        So that's more or less how ants work! Which is interesting, maybe. But
        as a developer, what's maybe more interesting is that what Alice and
        friends were doing sounds a lot like code.
      </Notes>
    </Slide>

    <Slide>
      <Heading fit>Alice in Pseudo Code: Searching</Heading>
      <CodePane lang="elixir" source={antSearchingPseudoCode} />
      <Notes>
        In fact, it's pretty straightforward to translate our ant's instructions
        into some pseudo code like this. There are two main cases here - one
        where the ant doesn't have food, and one where she does. In the no food
        case, if Alice sees food she grabs it. If she sees a strong pheromone
        trail she gets on it. And if she sees a weak trail, or nothing, she
        carries on.
      </Notes>
    </Slide>

    <Slide>
      <Heading fit>Alice in Pseudo Code: Going Home</Heading>
      <CodePane lang="elixir" source={antGoingHomePseudoCode} />
      <Notes>
        If Alice is carrying food on the other hand, then she deposits
        pheromones and keeps going towards on toward home. When she gets home,
        she drops off the food and heads back out. That's pretty algorithmic.
      </Notes>
    </Slide>
  </SlideSet>
);
