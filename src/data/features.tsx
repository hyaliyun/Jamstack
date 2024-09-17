/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import Translate, {translate} from '@docusaurus/Translate';

export type FeatureItem = {
  title: string;
  image: {
    src: string;
    width: number;
    height: number;
  };
  text: JSX.Element;
};

const FEATURES: FeatureItem[] = [
  {
    title: translate({
      message: 'What is Jamstack?',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/undraw_typewriter.svg',
      width: 1009.54,
      height: 717.96,
    },
    text: (
      <Translate id="homepage.features.powered-by-mdx.text">
        Jamstack is an architectural approach that decouples the web experience layer from data and business logic, improving flexibility, scalability, performance, and maintainability.

        Jamstack removes the need for business logic to dictate the web experience.

        It enables a composable architecture for the web where custom logic and 3rd party services are consumed through APIs.
      </Translate>
    ),
  },
  {
    title: translate({
      message: 'Why Jamstack?',
      id: 'homepage.features.built-using-react.title',
    }),
    image: {
      src: '/img/undraw_react.svg',
      width: 1108,
      height: 731.18,
    },
    text: (
      <Translate id="homepage.features.built-using-react.text">
        First, it improves website performance and security, reducing server load and attack surface through pre-generated pages and static hosting;

        Second, it simplifies maintenance and expansion. Pre-generation and CDN caching make websites easy to deploy, expand and maintain;

        Third, it improves developer experience and flexibility, supports a variety of modern development tools and frameworks, and promotes efficient collaboration and rapid iteration.
      </Translate>
    ),
  },
  {
    title: translate({
      message: 'Web Technologies',
      id: 'homepage.features.ready-for-translations.title',
    }),
    image: {
      src: '/img/undraw_around_the_world.svg',
      width: 1137,
      height: 776.59,
    },
    text: (
      <Translate id="homepage.features.ready-for-translations.text">
        Jamstack architecture: By combining JavaScript, API and pre-built markup,
        API economy and headless technology: API economy uses Web API for commercial exchange to promote industrial change;
        Deployment and performance optimization: Atomic deployment and immutable deployment ensure stable and reliable updates; CDN, pre-rendering/pre-generation accelerate content access;
      </Translate>
    ),
  },
  {
    title: translate({
      message: 'Jamstack full stack',
      id: 'homepage.features.document-versioning.title',
    }),
    image: {
      src: '/img/undraw_version_control.svg',
      width: 1038.23,
      height: 693.31,
    },
    text: (
      <Translate id="homepage.features.document-versioning.text">
        Jamstack emphasizes front-end rendering, serverless backend and API-driven content generation to achieve flexibility and performance optimization of modern Web development.
        Headless technology improves system flexibility and maintainability by separating back-end services from front-end display layers.
        Static site generators and serverless architecture further improve the deployment efficiency and user experience of Web applications.
      </Translate>
    ),
  },
  {
    title: translate({
      message: 'Who is doing',
      id: 'homepage.features.content-search.title',
    }),
    image: {
      src: '/img/undraw_algolia.svg',
      width: 1137.97,
      height: 736.21,
    },
    text: (
      <Translate id="homepage.features.content-search.text">
       Serverless technology is rising rapidly: adoption has grown significantly, jumping from 46% last year to 71%, changing the role of front-end developers and the way projects are built.

       Jamstack continues to lead the web standard: as a modern architecture for web development

       It is expected that the Jamstack architecture will continue to become the standard for web development and influence the skill improvement of developers and project strategy planning.
      </Translate>
    ),
  },
];

export default FEATURES;
