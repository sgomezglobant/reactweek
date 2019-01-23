import React from 'react';

// Components
import Layout from '../components/layout';
import SEO from '../components/seo';

// Sections
import Speakers from '../components/speakers';
import Schedule from '../components/schedule';
import Map from '../components/map';
import Organization from '../components/organization';
import Communities from '../components/communities';
import Volunteers from '../components/volunteers';
import Register from '../components/register';

import '../styles/page.css';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Speakers />
    <Schedule />
    <Map />
    <Register />
    <Organization />
    <Communities />
    <Volunteers />
  </Layout>
);

export default IndexPage;
