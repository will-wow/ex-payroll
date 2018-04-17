import React from 'react';

import { Text, S, Heading, Image, Notes, Slide, SlideSet } from 'spectacle';

import CiteLink from '../elements/CiteLink';

export default (
  <SlideSet>
    <Slide>
      <Heading fit>Marco Dorigo: Ant Fan</Heading>
      <Image src="./img/marco-dorigo.jpg" margin="2rem auto" width="75%" />

      <Notes>
        As it turns out, we're not the first to notice that ants seem similar to
        computer programs. Back in '92, a man named Marco Dorigo (who as you can
        see is into both ants and robots, I can relate) came up with what he
        called the Ant System, for his PhD thesis. This was the start of what's
        now called Ant Colony Optimization, or ACO, which is a method of
        applying Alice's ant algorithm to tricky problems like the traveling
        salesman and knapsack problems.
      </Notes>
    </Slide>

    <Slide>
      <Heading fit>Ant Colony Optimization algorithm</Heading>
      <Image src="./img/aco-formula.svg" margin="2rem auto" width="75%" />

      <Notes>
        This is the general formula for ACO. There's a lot of greek in here, but
        really all it is, is:
      </Notes>
    </Slide>

    <Slide>
      <Heading fit>Ant Colony Optimization algorithm</Heading>
      <Image src="./img/aco-formula.svg" margin="2rem auto" width="75%" />

      <Text>
        <S type="underline">Pheromones * Desirability</S>
        <br />
        Sum(Pheromones * Desirability)
      </Text>

      <Notes>
        For a set of possible moves, the probability of picking one of them is
        the amount of pheromone deposited on the move, to the power of some
        influence factor (2.0 by default in the literature), times the
        desirability of the move (which might relate to distance in a traveling
        salesman problem, or value in a knapsack problem), also taken to some
        factor, divided by the sum of the value of all the other available
        moves.
      </Notes>
    </Slide>

    <Slide>
      <Heading fit>Traveling Salesman Problem</Heading>
      <Image src="./img/salesman.png" />
      <CiteLink href="https://en.wikipedia.org/wiki/File:Aco_TSP.svg" />

      <Notes>
        The traveling salesman problem is a classic hard problem in computer
        science. A traveling salesperson wants to visit a bunch of cities in the
        least amount of time possible. How do they do that? Well it turns out
        there's no easy way to figure it out, but ACO is a pretty good approach.
      </Notes>
    </Slide>

    <Slide>
      <Heading fit>Traveling Salesman Problem: ACO Solution</Heading>
      <Image src="./img/aco-salesman.png" />
      <CiteLink href="https://en.wikipedia.org/wiki/File:Aco_TSP.svg" />

      <Notes>
        With Ant Colony Optimization, you have a bunch of ants randomly traverse
        a graph of cities, making sure to visit each one once. Afterwards, each
        ant drops a pheromone trail on its path, with the strength of the trail
        corresponding to how short the trip was. Since the ants use the ACO
        algorithm to choose the moves, over multiple iterations the ants
        coalesce onto an optimal solution. Pretty smart ants!
      </Notes>
    </Slide>
  </SlideSet>
);
