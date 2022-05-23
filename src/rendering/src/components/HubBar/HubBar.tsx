import { withDatasourceCheck, Field } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import HubBarItem from './HubBarItem';
import Link from 'next/link';
import React from 'react';

type HubBarProps = ComponentProps & {
  fields: {
    Links: Link[];
  };
};

type Link = ComponentProps & {
  fields: {
    Title: Field<string>;
    Href: any;
  };
};

const HubBar = ({ fields }: HubBarProps): JSX.Element => (
  <div className="hub">
    <div className="close-menu-overlay"></div>
    <nav className="hub-container container">
      <ul className="hub-nav-menu hub-wrapper">
        {React.Children.toArray(
          fields.Links.map((link: Link) => {
            return (
              <HubBarItem
                itemName={link.fields.Title.value}
                itemUrl={link.fields.Href.value.href}
              />
            );
          })
        )}
      </ul>
    </nav>
  </div>
);

export default withDatasourceCheck()<HubBarProps>(HubBar);
