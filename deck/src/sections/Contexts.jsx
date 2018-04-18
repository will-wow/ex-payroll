import React from 'react';

import { Heading, Notes, Slide, SlideSet } from 'spectacle';

export default (
  <SlideSet>
    <Slide>
      <Heading>Phoenix 1.3 Contexts and You!</Heading>

      <Notes>
        Phoenix 1.3, introduced the concept of
        contexts as a way to organize your code. As a reminder, instead of
        putting all your logic in a flat hierarchy of schemas and controllers,
        1.3 encourages you to pull your business logic out into separate,
        cohesive bundles of structs, functions, and modules, called contexts.
      </Notes>
    </Slide>

    <Slide>
      <Heading fit>Defining our contexts</Heading>

      <Notes>
        So following 1.3 best practices, we'll start with defining some
        contexts. Coming up with good contexts for your domain in definitely an
        art, and I often find it pretty challenging.
      </Notes>
    </Slide>
  </SlideSet>
);
