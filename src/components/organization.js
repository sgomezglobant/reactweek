import React from 'react'

import OrganizationItem from './organizationItem'
import data from '../data'
import '../styles/organization.scss'

const organization = () => (
  <section>
    <div className="sponsors-container">
      <div className="title-container">
        <i className="icon ion-ios-star-outline"></i>
        <h3>{data.organization.sponsorsTitle}</h3>
      </div>
      <div className="item-group sponsors-list">
        {
          data.organization.sponsors.map((sponsor, index) => {
            return (
              <OrganizationItem key={index} item={sponsor} />
            )
          })
        }
      </div>
    </div>
    <div className="comunities-container">
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

export default organization;
