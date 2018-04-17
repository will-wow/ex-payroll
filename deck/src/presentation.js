import React from 'react';

import { Deck } from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

import IntroSlides from './sections/IntroSlides';
import AliceBobbieEveSlides from './sections/AliceBobbieEveSlides';
import AcoSlides from './sections/AcoSlides';
import OtpIntroSlides from './sections/OtpIntroSlides';
import Contexts from './sections/Contexts';
import Types from './sections/Types';
import Implementation from './sections/Implementation';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quarternary: '#CECECE'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
);

theme.screen.components.codePane.fontSize = '2rem';
theme.print.components.codePane.fontSize = '2rem';

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transitionDuration={500} theme={theme}>
        {IntroSlides}
        {AliceBobbieEveSlides}
        {AcoSlides}
        {OtpIntroSlides}
        {Contexts}
        {Types}
        {Implementation}
      </Deck>
    );
  }
}
