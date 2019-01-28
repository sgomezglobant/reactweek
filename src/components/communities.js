import React from 'react'

import OrganizationItem from './organizationItem'
import data from '../data'
import '../styles/communities.scss'

const Communities = () => (
  <section className="rw-comunities"> 
    <div className="rw-communities__title">
      <i className="icon ion-ios-people-outline"></i>
      <h3>{data.organization.communitiesTitle}</h3>
      <div className="rw-communities__list">
        {
          data.organization.communities.map((community, index) => {
            return (
              <OrganizationItem key={index} item={community} />
            )
          })
        }
      </div>
    </div>
  </section>
);

export default Communities;