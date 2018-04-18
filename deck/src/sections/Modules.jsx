import React from "react";

import { CodePane, Heading, Notes, Slide, SlideSet } from "spectacle";

import employeeEx from "../code/employee.ex";
import employeeJs from "../code/employee.js";
import employeeTs from "../code/employee.ts";
import importEmployeeCurly from "../code/import-employee-curly.jsx";
import importEmployeeJs from "../code/import-employee.jsx";
import importEmployeeEx from "../code/import_employee.ex";

export default (
  <SlideSet>
    <Slide>
      <Heading>Modules</Heading>

      <Notes>- First up is modules</Notes>
    </Slide>

    <Slide>
      <Heading size={4}>Employee Module</Heading>
      <CodePane lang="elixir" source={employeeEx} />

      <Notes>
        - a pretty standard Elixir module
        - you define a data structure that the functions will be working on
        - you can also use a type to define exactly what's in the struct (string names and a number wage)
        - functions generally take the struct as their first parameter
        - displaying their full name and title, or calculating their pay
        - In JS we could define an employee class that has those methods, but Elixir, functional, particularly with React classes are no go
      </Notes>
    </Slide>

    <Slide>
      <Heading size={4}>employee.js</Heading>
      <CodePane lang="javascript" source={employeeJs} />

      <Notes>
        - We can build the exact same sort of module in js
        - use JsDocs to define the struct
        - export functions that take the struct as a parameter
        - even destructure instead of pattern match the attributes
      </Notes>
    </Slide>

    <Slide>
      <Heading size={4}>employee.ts</Heading>
      <CodePane lang="typescript" source={employeeTs} />

      <Notes>
        - If you're writing typescript
        - And if you are, that's great
        - this works even better, since you can define an interface and actually get compile-time checking like in elixir
      </Notes>
    </Slide>

    <Slide>
      <Heading size={4}>Importing Elixir</Heading>
      <CodePane lang="elixir" source={importEmployeeEx} />

      <Notes>
        To use these functions, in Elixir, you can alias the module, and then use the functions prefixed with the module name.
      </Notes>
    </Slide>

    <Slide>
      <Heading size={4}>Importing JS</Heading>
      <CodePane lang="javascript" source={importEmployeeCurly} />

      <Notes>
        - In JavaScript, it's common right now to import your functions by name. 
        - It's shorter and maybe saves on unused code
        - But you it's nice to know that pay is an employee function instead of a variable or whatever
      </Notes>
    </Slide>

    <Slide>
      <Heading size={4}>Importing JS, Elixir Style</Heading>
      <CodePane lang="javascript" source={importEmployeeJs} />

      <Notes>
        - Happily the import star syntax gets us closer to elixir
        - Now our functions are prefixed with the module name
        - helps readability
        - getting more Elixir-y already!
      </Notes>
    </Slide>
  </SlideSet>
);
