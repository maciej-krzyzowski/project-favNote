import { configure, addDecorator } from '@storybook/react';
import { theme } from './../src/theme/mainTheme';
import React from 'react';
import { ThemeProvider } from 'styled-components';

function loadStories() {
    const req = require.context('../src/components', true, /\.stories\.js$/);
    req.keys().forEach(filename => req(filename));
}

addDecorator(story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>);

configure(loadStories, module);
