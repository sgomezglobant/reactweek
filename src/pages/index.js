import React from 'react';

// Components
import Layout from '../components/layout';
import SEO from '../components/seo';

// Sections
import Speakers from '../components/speakers';
import Schedule from '../components/schedule';
import Map from '../components/map';
import Organization from '../components/organization';
import Volunteers from '../components/volunteers';
import RegisterButton from '../components/registerButton';

import { LocationIcon } from '../components/icons';

import '../styles/page.scss';

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[
        `React`,
        `React Week`,
        `Medellin`,
        `Globant`,
        `Developer Week`
      ]}
    />
    <Schedule />
    <Speakers />
    <div className="rw-call-to-action">
      <LocationIcon />
      <h3 className="rw-section__title">Lugar</h3>
      <RegisterButton />
      <Map />
    </div>
    <Organization />
    <Volunteers />
  </Layout>
);

export default IndexPage;
