/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable global-require */

import React from 'react';
import Translate, {translate} from '@docusaurus/Translate';

const QUOTES = [
  {
    thumbnail: require('./quotes/christopher-chedeau.jpg'),
    name: 'Anatoly Yakovenko',
    title: translate({
      id: 'homepage.quotes.christopher-chedeau.title',
      message: 'Cofounder, Solana Labs',
      description: 'Title of quote of Christopher Chedeau on the home page',
    }),
    text: (
      <Translate
        id="homepage.quotes.christopher-chedeau"
        description="Quote of Christopher Chedeau on the home page">
        Who is doing the building?

       As usual, we kick off by looking at the demographics of our community. Who are we, exactly?
      </Translate>
    ),
  },
  {
    thumbnail: require('./quotes/hector-ramos.jpg'),
    name: 'Raj Gokal',
    title: translate({
      id: 'homepage.quotes.hector-ramos.title',
      message: 'Cofounder, Solana Labs',
      description: 'Title of quote of Hector Ramos on the home page',
    }),
    text: (
      <Translate
        id="homepage.quotes.hector-ramos"
        description="Quote of Hector Ramos on the home page">
        What is the Jamstack Community building?

       Moving on from demographics, let is look at what we are building in 2022.
      </Translate>
    ),
  },
  {
    thumbnail: require('./quotes/ricky-vetter.jpg'),
    name: 'Lily Liu',
    title: translate({
      id: 'homepage.quotes.risky-vetter.title',
      message: 'President, Solana Foundation',
      description: 'Title of quote of Ricky Vetter on the home page',
    }),
    text: (
      <Translate
        id="homepage.quotes.risky-vetter"
        description="Quote of Ricky Vetter on the home page">
        How are we building?
        
        Technology selection should focus on actual use cases, and popular technologies have more advantages due to more open source contributions.
      </Translate>
    ),
  },
];

export default QUOTES;
