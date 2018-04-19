import React from "react";

import { CodePane, Image, Heading, Notes, Slide, SlideSet } from "spectacle";

import NoteList from "../elements/NoteList";

import employeesEx from "../code/employees.ex";
import employeesJs from "../code/employees.js";
import payController from "../code/pay_controller.ex";
import payComponent from "../code/pay-component.txt";

export default (
  <SlideSet>
    <Slide>
      <Heading size={3}>Contexts</Heading>

      <Image src="./img/tree-ex.png" />

      <NoteList
        notes={[
          "So we've got our functions piping data and organized into modules, but, always a big question in JS, where do our files go?",
          "Phoenix 1.3 introduced the concept of contexts as a way to organize your code.",
          "keep your web controllers and whatever in one place, and bushiness logic in another",
          "organize biz logic in contexts, cohesive bundles of structs, functions, and modules",
          "Each context has a single public interface file that your web code, and other contexts, can call into",
          "In JS, there are infinite ways to structure your code.",
          "But we've got a great organizational strategy right here, why not use it in JS?"
        ]}
      />
    </Slide>

    <Slide>
      <Heading size={3}>Contexts in JS</Heading>

      <Image src="./img/tree-js.png" />

      <NoteList
        notes={[
          "This is a react project, but this would work fine in Angular or whatever.",
          "We can put our framework code in a web directory, and keep our business logic in contexts, just like in Phoenix.",
          "We can have an index.js file in each context that re-exports public functions"
        ]}
      />
    </Slide>

    <Slide>
      <Heading size={3}>Employees Context</Heading>
      <CodePane textSize="2rem" lang="elixir" source={employeesEx} />

      <Notes>
        The employee module we saw earlier goes into the Employees context in
        our phoenix app. The context module, employees/employees.ex, then can
        delegate to the Employee functions to make them public, or potentially
        have its own glue logic.
      </Notes>
    </Slide>

    <Slide>
      <Heading size={3}>Employees Context JS</Heading>
      <CodePane textSize="2rem" lang="javascript" source={employeesJs} />

      <NoteList
        notes={[
          "We can do something similar in JS",
          "import the functions from employees, and re-export them. If we call this file employees/index.js, we can just import from employees elsewhere, which is nice."
        ]}
      />
    </Slide>

    <Slide>
      <Heading size={3}>Phoenix Web Code</Heading>
      <CodePane lang="elixir" source={payController} />

      <Notes>
        Finally, in our elixir app, we have a controller in the web side of the
        code import from the employees and hours contexts to do the work of
        calculating pay. All the complicated logic is implemented and tested
        outside of our framework code, so this is pretty simple.
      </Notes>
    </Slide>

    <Slide>
      <Heading size={3}>React Web Code</Heading>
      <CodePane lang="javascript" source={payComponent} />

      <NoteList
        notes={[
          "And our JS React component follows the same premise",
          "It imports our contexts, and uses their functions to do all the calculations, while it handles worrying about state and rending HTML. That same nice separation of concerns from Elixir is just as nice in JavaScript.",
          "So, with modules, pipelines, and contexts in JavaScript, you can..."
        ]}
      />
    </Slide>

    <Slide
      bgImage="./img/all-the-things.jpg"
      bgSize="contain"
      bgRepeat="no-repeat"
    >
      <Notes>Elixir ALL the things!</Notes>
    </Slide>

    <Slide>
      <Heading>Thanks!</Heading>
    </Slide>
  </SlideSet>
);
