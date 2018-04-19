import React from "react";

import { ListItem, List, Notes } from "spectacle";

export default function NoteList({ notes }) {
  const listItems = notes.map((note, index) => (
    <ListItem key={index} textSize="2rem">{note}</ListItem>
  ));

  return (
    <Notes>
      <List>{listItems}</List>
    </Notes>
  );
}
