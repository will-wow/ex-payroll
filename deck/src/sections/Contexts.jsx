import React from "react";

import { Image, Heading, Notes, Slide, SlideSet } from "spectacle";

export default (
  <SlideSet>
    <Slide>
      <Heading size={3}>Contexts</Heading>

      <Image src="./img/tree-ex.png" />

      <Notes>
        - So we've got our functions piping data and organized into modules,
        but, always a big question in JS, where do our files go? - Phoenix 1.3
        introduced the concept of contexts as a way to organize your code. -
        keep your web controllers and whatever in one place, and bushiness logic
        in another - organize biz logic in contexts, cohesive bundles of
        structs, functions, and modules - Each context has a single public
        interface file that your web code, and other contexts, can call into -
        In JS, there are infinite ways to structure your code. - But we've got a
        great organizational strategy right here, why not use it in JS?
      </Notes>
    </Slide>

    <Slide>
      <Heading size={3}>Contexts in JS</Heading>

      <Image src="./img/tree-js.png" />

      <Notes>
        - This is a react project, but this would work fine in Angular or
        whatever. - We can put our framework code in a web directory, and keep
        our business logic in contexts, just like in Phoenix. - We can have an
        index.js file in each context that re-exports public functions
      </Notes>
    </Slide>
  </SlideSet>
);
