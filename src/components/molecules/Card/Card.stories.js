import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from './Card';

storiesOf('Molecules/sCard', module)
    .add('Notes', () => <Card />)
    .add('Twitters', () => <Card cardType="twitters" />)
    .add('Articles', () => <Card cardType="articles" />);
