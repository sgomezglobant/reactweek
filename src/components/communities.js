import React from 'react';

import OrganizationItem from './organizationItem';
import data from '../data';
import '../styles/communities.scss';

const Communities = () => (
  <section className="rw-communities">
    <h3 className="rw-section__title">{data.organization.communitiesTitle}</h3>
    <div className="rw-communities__list">
      {data.organization.communities.map(community => {
        return <OrganizationItem key={community.name} item={community} />;
      })}
    </div>
  </section>
);

export default Communities;
