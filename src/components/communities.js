import React from 'react'

import OrganizationItem from './organizationItem'
import data from '../data'
import '../styles/organization.scss'

const Communities = () => (
  <section className="comunities-container"> 
    <div>
      <div className="title-container">
        <i className="icon ion-ios-people-outline"></i>
        <h3>{data.organization.communitiesTitle}</h3>
        <div className="item-group communities-list">
          {
            data.organization.communities.map((community, index) => {
              return (
                <OrganizationItem key={index} item={community} />
              )
            })
          }
        </div>
      </div>
    </div>
  </section>
);

export default Communities;