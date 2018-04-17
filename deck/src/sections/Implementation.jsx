import React from 'react';

import {
  CodePane,
  Heading,
  Notes,
  Slide,
  SlideSet,
  Text,
  Link
} from 'spectacle';

import Steps from '../elements/Steps';

import antGenServer from '../code/ant-gen-server.ex';
import dynamicSupervisor from '../code/dynamic-supervisor.ex';
import simulationsSupervisorStart from '../code/simulations-supervisor-start.ex';
import antMove from '../code/ant-move.ex';

import AntGifSlide from '../elements/AntGifSlide';

const summarySteps = [
  'Skynet will run on the BEAM',
  'DynamicSupervisors, Registries, and Via Tuples',
  'Ants are cool',
  'Keep it in context',
  'Type your structs, name them `t`',
  'Think with processes'
];

export default (
  <SlideSet>
    <Slide>
      <Heading>Implementation</Heading>

      <Notes>
        Now that we've got some types, we can sketch out how our system will
        work. For the most part we're not going to dive into the actual
        implementation of these modules, but you may be interested in some of
        the mechanics of managing a bunch of processes.
      </Notes>
    </Slide>

    <Slide
      bgImage="./img/ant-tree_sims-supe.png"
      bgSize="contain"
      bgRepeat="no-repeat"
    >
      <Notes>
        So here's the supervision tree for the application. I want to be able to
        run multiple simulations at once, so the two top-level processes are a
        SimId Agent that keeps track of the ids of the different running
        simulations, and a SimulationsSupervisor, a DynamicSupervisor that can
        spin up many child SimulationSupervisors, and restart them when they
        have errors.
      </Notes>
    </Slide>

    <Slide>
      <Heading fit>:simple_one_for_one Supervisor</Heading>
      <CodePane lang="elixir" source={dynamicSupervisor} />

      <Notes>
        A quick note on DynamicSupervisors - they're a new addition in Elixir
        1.6, and replace the old :simple_one_for_one Supervisors. Both kinds of
        let you create many child processes at runtime, rather than supervising
        a static list of processes. The only difference with the new
        DynamicSupervisors is they have a slightly nicer syntax than
        :simple_one_for_one, and they can supervise multiple different types of
        children.
      </Notes>
    </Slide>

    <Slide>
      <Heading fit>Naming Processes</Heading>

      <CodePane lang="elixir" source={simulationsSupervisorStart} />

      <Notes>
        Whatever sort of dynamic supervisor you use though, there's a problem -
        naming. To work with an Erlang process, you need to know its name or pid
        to send it messages. That's easy for processes you only have one
        instance of, since you can give it a global name, often the name of its
        module, like with the SimulationsSupervisor. But for a process that
        you're going to have a bunch of, like an Ant, that doesn't work.
        Instead, we'll need a Registry, and a Via Tuple.
      </Notes>
    </Slide>

    <Slide>
      <Heading>Registry</Heading>

      <CodePane
        lang="elixir"
        source="{:via, Registry, {RegistryModule, data}"
      />

      <Notes>
        You can do a few things with registries, but the one that matters here
        is naming processes. Using the Registry, we can construct a via tuple,
        which is a data structure that can uniquely identify a process. That
        way, even if a process is dynamically started, and later restarted with
        new pid, you can still pass messages to it. A via tuple has this
        structure - a three-tuple of the atom :via, the registry module, and
        then some tuple that starts with the name of a module you've set up as a
        registry, and then whatever identifying information you want.
      </Notes>
    </Slide>

    <Slide
      bgImage="./img/ant-tree_sim-supe.png"
      bgSize="contain"
      bgRepeat="no-repeat"
    >
      <Notes>
        With that, we can start new SimulationSupervisors. Each
        SimulationSupervisor controls the supervisors for a given simulation,
        (super well-named), so they can all be taken down as one unit.
      </Notes>
    </Slide>

    <Slide>
      <Heading fit>SimulationSupervisor Via Tuple</Heading>

      <CodePane
        lang="elixir"
        source="{:via, Registry, {SimRegistry, {sim_id, :sim}}}"
      />

      <Notes>
        SimulationSupervisors can be referred to by their via tuple, which
        includes the SimRegistry, the simulation's ID, and an atom saying "hey,
        this is a simulation process"
      </Notes>
    </Slide>

    <Slide
      bgImage="./img/ant-tree_tile.png"
      bgSize="contain"
      bgRepeat="no-repeat"
    >
      <Notes>
        For each simulation, we have a TileSupervisor that supervises a bunch of
        tiles - four hundred, for a 20 by 20 grid. Each tile is a GenServer that
        holds our Tile.t data in state, and can be told to add pheromones or
        remove food from its state.
      </Notes>
    </Slide>

    <Slide>
      <Heading fit>Tile :via tuple</Heading>

      <CodePane
        lang="elixir"
        source="{:via, Registry, {SimRegistry, {sim_id, :tile, x, y}}}"
      />

      <Notes>
        The via tuple for the tiles includes the x, y coordinates of the tile.
        That's important because it means that, for an ant at some set of
        coordinates, we can easily look up all the tiles around it - for an at
        at 1, 1, all the tiles from between 0, 0 and 2, 2. That kind of lookup
        would be really inefficient if the tiles were in a big list.
      </Notes>
    </Slide>

    <Slide
      bgImage="./img/ant-tree_ant.png"
      bgSize="contain"
      bgRepeat="no-repeat"
    >
      <Notes>
        We also have a process for each ant, since that was the point of the
        whole exercise. But since there's nothing identifying about an ant -
        they move around, so they don't have stable x, y coordinates like a tile
        - we need a little AntId Agent to assign a unique identifier to each
        ant, and be able to loop through all the IDs to send commands to the
        whole swarm.
      </Notes>
    </Slide>

    <Slide>
      <Heading>Ant GenServer</Heading>

      <CodePane lang="elixir" source={antGenServer} />

      <Notes>
        The Ant GenServers, like Tiles, keep an Ant.t in memory. They can take
        external commands to move themselves, and, after the move phase, to
        deposit pheromones if the ant has food.
      </Notes>
    </Slide>

    <Slide>
      <Heading fit>Looking around</Heading>

      <CodePane lang="elixir" source={antMove} />

      <Notes>
        To decide where to move, each ant asks the Worlds context for its
        surroundings, which is a list of tiles. The ant then does a weighted
        random selection from that list, using the ACO algorithm, and picks up
        food if it sees it. If the ant already has food, since it knows where it
        is in the world, and where the colony is, it knows which direction to go
        to get to home. Since the Tile GenServer logic is in the Worlds context,
        the Ants are able to work with tiles without needing to know how they're
        persisted. So if we decided to store tiles in a map, or a database, the
        Ants context wouldn't need to change.
      </Notes>
    </Slide>

    <Slide bgImage="./img/ant-tree.png" bgSize="contain" bgRepeat="no-repeat">
      <Notes>
        Those are the highlights! With this simple supervision tree, we're able
        to spin up a hundred ants and four hundred tiles, and have them work
        together in a useful way. And, now that we've gone through building this
        thing, let's see it in action!
      </Notes>
    </Slide>

    <AntGifSlide />

    <Slide>
      <Heading>What did we learn?</Heading>

      <Notes>So, what did we learn here?</Notes>
    </Slide>

    <Slide bgImage="./img/elixir-terminator.jpg" bdDarken="0.5">
      <Steps textColor="primary" steps={summarySteps} bold={1} />

      <Notes>
        Well first of all, this is how Skynet starts - and OTP supervisors
        already know how to terminate.
      </Notes>
    </Slide>

    <Slide>
      <Steps steps={summarySteps} bold={2} />
      <Notes>
        DynamicSupervisors, Registries, and Via Tuples are useful for handing
        large numbers of processes.
      </Notes>
    </Slide>

    <Slide bgImage="./img/ant-1.jpg" bgDarken="0.5">
      <Steps textColor="primary" steps={summarySteps} bold={3} />
      <Notes>Ants are pretty cool, we learned that.</Notes>
    </Slide>

    <Slide>
      <Steps steps={summarySteps} bold={4} />
      <Notes>
        Keep your business logic in your contexts. We didn't even look at the
        phoenix web code here, because there's nothing to see - the turn
        endpoint just immediately calls out to the Simulations context to cause
        a turn and get back the state of the simulation.
      </Notes>
    </Slide>

    <Slide bgImage="./img/mr-t.jpg" bgDarken="0.5">
      <Steps textColor="primary" steps={summarySteps} bold={5} />
      <Notes>
        It's useful to declare the types of your data structures, including
        structs - and you can name the main type in a module T.
      </Notes>
    </Slide>

    <Slide>
      <Steps steps={summarySteps} bold={6} />
      <Notes>
        Finally, you can do a lot with processes. The funny thing about this
        program is, even though we're running all these processes, it's
        essentially synchronous - every turn we wait for all the ants to move,
        then have them all place their pheromones, then gather everything up for
        display, then respond to the client. So why go through the trouble of
        all these GenServers? Well one potential benefit is concurrency - on a
        multi-core processor, having the ants be able to do things in parallel
        could improve performance. For something pretty fast like this though,
        that's not going to matter that much. A more important gain is fault
        tolerance. Without processes, a bug in my code could corrupt the state
        of the whole simulation. With every ant in its own process, if an ant
        manages to wander off the edge of the world, it's killed, logs a
        message, and then gets restarted back at the colony. If it was essential
        that the simulation never go down, that would be really useful.
      </Notes>
    </Slide>

    <Slide>
      <Steps steps={summarySteps} bold={6} />
      <Notes>
        But finally - it's a nice way to think. I'm simulating independently
        acting ants, so it's nice to model them that way. In some ways, it's
        almost object oriented - we've got what are essentially a bunch of
        instances of ant and tile classes, each with its own state, and methods
        we can call to update them. But, we get the benefits of OOP - nice
        models - without the drawbacks of mutable state and crazy inheritance
        trees and all the other reasons we like to use Elixir instead. Going
        all-in on processes isn't going to be the right fit for every project,
        but I think it is a good fit for more projects than we realize.
      </Notes>
    </Slide>

    <Slide>
      <Heading>Thanks!</Heading>

      <Text margin="2rem 0 0">
        <Link href="https://github.com/will-wow/ants">
          github.com/will-wow/ants
        </Link>
      </Text>

      <Notes>
        That's it! If you want to crib any code, or play with the ants yourself,
        that's all in the repo here! Thanks!
      </Notes>
    </Slide>
  </SlideSet>
);
