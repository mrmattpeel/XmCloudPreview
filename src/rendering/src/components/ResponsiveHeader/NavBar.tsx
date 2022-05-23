import {
  withDatasourceCheck,
  ImageField,
  Image,
  Link,
  LinkField,
  Field
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import React from 'react';
import DestinationSearchInteral from '../DestinationSearch/DestinationSearchInteral';

type NavBarProps = ComponentProps & {
  fields: {
    HomeLink: LinkField;
    HomeIcon: ImageField;
    MenuOptions: MenuLinkModel[];
    DestinationSearchBox: DestinationSearchProps;
  };
};

type MenuLinkModel = {
  fields: {
    LinkItem: LinkField;
  };
};

type DestinationSearchProps = ComponentProps & {
  fields: {
    DestinationLabel: Field<string>;
    SearchBoxPlaceholderText: Field<string>;
  };
};

const NavBar = (props: NavBarProps) => {
  return (
    <div className="container">
      <nav className="nav-bar">
        <ul className="nav-bar__list">
          <li className="nav-bar__item">
            <Link field={props.fields.HomeLink}>
              <Image media={props.fields.HomeIcon} />
            </Link>
          </li>
          {React.Children.toArray(
            props.fields.MenuOptions.map((menuItem: MenuLinkModel) => {
              return (
                <li className="nav-bar__item nav-bar__item--mega-menu">
                  <Link
                    field={menuItem.fields.LinkItem}
                    className="nav-bar__title js-holiday-types"
                  />
                </li>
              );
            })
          )}
                  </ul>
          <div className="nav-bar__tabs hide-small">
            <ul className="nav-bar__tabs-list">
              <li className="nav-bar__tabs-list-search-hotel-item">
                <div className="search-nav-button">
                  <DestinationSearchInteral fields={props.fields.DestinationSearchBox.fields} />

                  {/* <a
                    href="#search-nav-button"
                    className="search-nav-button__btn js-toggle-search-nav-button-btn"
                    aria-selected="false"
                    role="button"
                  >
                    Find Hotel / Destination
                  </a> */}
                </div>
              </li>
              </ul>
              </div>

          {/*

          <div className="nav-bar__tabs hide-small">
            <ul className="nav-bar__tabs-list">
              <li className="nav-bar__tabs-list-search-hotel-button-item">
                <div className="search-nav-button">
                  <a
                    href="#search-nav-button"
                    className="search-nav-button__btn js-toggle-search-nav-button-btn"
                    aria-selected="false"
                    role="button"
                  >
                    Find Hotel / Destination
                  </a>
                </div>
              </li>
              <li>
                <div className="shortlists-nav-button">
                  <a
                    href="#loggedout"
                    className="shortlists-nav-button__btn js-toggle-shortlist-btn"
                    id="shortlists"
                    aria-selected="false"
                    role="button"
                  >
                    Shortlists
                    <span className="shortlists-nav-button__btn-label"></span>
                  </a>
                </div>
              </li>
              <li>
                <div
                  className="dealfinder-button"
                  data-component="Deals/OffersMenu/OffersMenuButton"
                >
                  <a
                    href="#dealfinder"
                    className="dealfinder-button__btn js-toggle-dealfinder-btn"
                    id="dealfinder"
                    aria-selected="false"
                    role="button"
                  >
                    Offers
                    <span className="dealfinder-button__btn-label">New</span>
                  </a>
                </div>
              </li> */}
      </nav>
    </div>
  );
};

export default withDatasourceCheck()<NavBarProps>(NavBar);
