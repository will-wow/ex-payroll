import React from 'react';

import { Heading, Notes, Slide, SlideSet, CodePane } from 'spectacle';

import antType from '../code/ant-type.ex';
import tileType from '../code/tile-type.ex';
import tileUnionType from '../code/tile-union-type.ex';
import tilePatternMatch from '../code/tile-pattern-match.ex';
import pointMoveTypes from '../code/point-move-types.ex';

export default (
  <SlideSet>
    <Slide>
      <Heading>Data Types</Heading>

      <Notes>
        So now that we've got our base contexts figured out, the next step is to
        set up our data types - the structs and other things that describe the
        domain. Then we can figure out how the data will be interpreted and
        transformed as the simulation progresses.
      </Notes>
    </Slide>

    <Slide>
      <Heading>{'%Ant{}'}</Heading>

      <CodePane lang="elixir" source={antType} />

      <Notes>
        A reasonable place to start might be to define our humble ant. Like we
        discussed earlier, and ant only really knows two facts - where they are
        in the world, and if they're carrying food or not. So our Ant model is
        equally simple - it knows its x, y coordinates, and it has a food?
        boolean. You'll notice I also defined a type for our ant. Types
        obviously aren't required in Elixir - but declaring types for structs
        lets the static type checker dialyzer be a lot smarter, and is also a
        nice bit of documentation. In the Elixir standard library, as well as in
        typed functional languages like OCaml, It's idiomatic to name the main
        type in a module t...
      </Notes>
    </Slide>

    <Slide>
      <Heading>Struct type naming</Heading>

      <CodePane
        lang="elixir"
        source={`
        @spec some_function(Ant.t()) :: any
        def some_function(ant = %Ant{}) do
          ...
        end
      `}
      />

      <Notes>
        ...that way you can say a function takes an Ant.t, like in this
        function, and it's clear what you mean.
      </Notes>
    </Slide>

    <Slide>
      <Heading>What does the world look like?</Heading>

      <Notes>
        The few other types in this domain will focus on the world of the
        simulation, and how an ant can interact with it. So what does that world
        look like?
      </Notes>
    </Slide>

    <Slide bgImage="./img/world.png" bgSize="contain" bgRepeat="no-repeat">
      <Notes>
        For this simulation, the world is pretty simple. It's a grid of tiles,
        surrounded by impassable rocks. The world is mostly empty land, but has
        a few brown food tiles for the ants to find, and a pink colony for them
        to start at and return the food to. Given this, how could we represent
        it in types?
      </Notes>
    </Slide>

    <Slide>
      <CodePane lang="elixir" source={tileType} />

      <Notes>
        Well, they're pretty much just the way I described them. Land tiles can
        have pheromones on them, food tiles have some food to be collected, the
        home colony has food that's been collected, and rocks don't have any
        particular data associated with them. For brevity I've skipped the types
        here, but pheromone is a float, while food is an integer.
      </Notes>
    </Slide>

    <Slide>
      <Heading size={4}>
        Discriminated Union, Tagged Union, Disjoint Union, Variant, or Sum Type
      </Heading>
      <CodePane lang="elixir" source={tileUnionType} />

      <Notes>
        Given those types, we can define a Tile.t, which can be any one of the
        four sorts of tile. This is a key concept in typed functional
        programming, and is called a Discriminated Union, Tagged Union, Disjoin
        Union, Variant, or Sum Type, depending on the language. Whatever you
        call it, the point is that a Tile.t could be any sort of tile, but we
        can use pattern matching to figure out which one it is. That's what
        makes a Tagged Union different from a simple Union type.
      </Notes>
    </Slide>

    <Slide>
      <Heading fit>Pattern Match a Tagged Union</Heading>
      <CodePane lang="elixir" source={tilePatternMatch} />

      <Notes>
        So for instance because we know that we have a Tile.t in this rating
        function, we can make some decision based on what type it is. Obviously
        this kind of pattern matching is common in Elixir, but it's nice to give
        the technique a name (or, several names). Also, because I've declared
        the possible types of a Tile, it's easy to verify that rating is a
        "total function", in that it handles all possible inputs.
      </Notes>
    </Slide>

    <Slide>
      <Heading size={4}>Tuple Types</Heading>

      <CodePane lang="elixir" source={pointMoveTypes} />

      <Notes>
        A couple of other types, Points and Moves, round out our domain model.<br />
        Both of which are defined as pairs of integers, but points are x, y
        coordinates on the grid, and Moves are changes to x and y that go from
        -1 to 1. Even though they're internally represented in the same way,
        they have different modules so that we have a place to put functions
        that operate on one or the other and so that the types make it clear
        what x and y mean in a given function. Also if we some day want to
        change one of the data structures, we can do that work in one place.
      </Notes>
    </Slide>
  </SlideSet>
);
