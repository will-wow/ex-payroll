import React from 'react';

import { Notes, Slide, List, ListItem } from 'spectacle';

export default class AntGifSlide extends React.Component {
  render() {
    return (
      <Slide bgImage="./img/ants.gif" bgSize="contain" bgRepeat="no-repeat">
        <Notes>
          <List>
            <ListItem>Wander randomly at first</ListItem>
            <ListItem>Find all the food</ListItem>
            <ListItem>Focus on closest</ListItem>
            <ListItem>After evaporate, find next closest food</ListItem>
            <ListItem>
              client ReasonReact - competitor to elm, topic for another talk
            </ListItem>
            <ListItem>did work well with typed elixir</ListItem>
            <ListItem>
              web request every 50ms to do a turn and get state
            </ListItem>
            <ListItem>turns taking about 6ms</ListItem>
          </List>
        </Notes>
      </Slide>
    );
  }
}
