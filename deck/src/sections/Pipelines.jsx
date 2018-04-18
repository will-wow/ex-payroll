import React from "react";

import { CodePane, Heading, Notes, Slide, SlideSet } from "spectacle";

import overtimeEx from "../code/overtime.ex";
import overtimeJs from "../code/overtime.js";
import ramdaJs from "../code/ramda.js";

export default (
  <SlideSet>
    <Slide>
      <Heading>|> Pipelines</Heading>

      <Notes>Next up is pipelines.</Notes>
    </Slide>

    <Slide>
      <Heading size={4}>Employee</Heading>
      <CodePane lang="elixir" source={overtimeEx} />

      <Notes>
        - The pipe operator is one of the best parts of Elixir - it lets you
        write these beautiful pipelines of functions, with the return value of
        each function feeding into the first argument of the next one - Here we
        take the list of previous hours worked in the week, get just the first 8
        hours of each one, sum them together, and use that with the day count
        and the current hours to calculate pay
      </Notes>
    </Slide>

    <Slide>
      <Heading textAlign="left">|> in JS is coming</Heading>
      <Heading textAlign="left">|> maybe</Heading>

      <Notes>
        - It's worth noting the pipe operator is actually a Stage 1 proposal in
        JavaScript - But... it's actually two competing proposals, and it's
        still very in flux. - Though babel does support it if you want to try
        it. - Still, though there may come a day when we can use the pipe
        operator in JavaScript...
      </Notes>
    </Slide>

    <Slide
      bgImage="./img/not-this-day.gif"
      bgSize="contain"
      bgRepeat="no-repeat"
    >
      <Notes>But it is not this day.</Notes>
    </Slide>

    <Slide>
      <Heading>But we can get close</Heading>

      <Notes>
        - But we can get close!, with Ramda and lodash/fp - Ramda and lodash/fp
        is a topic for a whole talk (which I've given) - But basically they're
        functional utility libraries, like lodash or underscore, with one big
        difference: their functions are all curried, and they take their data
        argument last.
      </Notes>
    </Slide>

    <Slide>
      <Heading size={4}>Ramda</Heading>
      <CodePane lang="javascript" source={ramdaJs} />

      <Notes>
        - Here's how currying plays out. - Normally, if I wanted to write a
        function to add two numbers, I would write a function that takes and x
        and a y. - If I wanted a function that adds 1 to a number, I could make
        a new function that takes an x and calls add(x, 1) - That's fine, but
        currying makes that less verbose. If a curried function is expecting two
        arguments x and y, but only gets x, it returns a function that, when
        given a y, run the logic, and adds them together or whatever. - You can
        see I can implement this myself with partial application, use Ramda's
        curry function to do the work for me, or just use Ramda's
        already-curried add function. - However I do it, I can then define that
        same addOne function by calling add with one argument. Then when I call
        it with a y, it does the addition.
        - The important part is currying lets you take a function that takes multiple arguemnts, give it all but its last data argument, and get back a unary function that just takes one argument.
        - Hey, that sounds similar to the pipe operator!
      </Notes>
    </Slide>

    <Slide>
      <Heading size={4}>Ramda Pipelines</Heading>
      <CodePane lang="javascript" source={overtimeJs} />

      <Notes>
        - This is where the magic happens. Ramda and lodash/fp have a pipe function, that takes any number of unary funtions, and then some piece of data, and passes it through the pipeline, just like in Elixir. 
        - The syntax isn't quite as awesome
        - you have to make your functions curried
        - The data parameter comes first in Elixir, but last with Ramda pipes
        - But lets you write that same piped logic.
      </Notes>
    </Slide>

    <Slide>
      <Heading size={4}>Elixir (again)</Heading>
      <CodePane lang="elixir" source={overtimeEx} />

      <Notes>
        As a reminder, here's the elixir implementation. As you can see, it's almost exactly the same as the javascript pipe one.
      </Notes>
    </Slide>
  </SlideSet>
);
