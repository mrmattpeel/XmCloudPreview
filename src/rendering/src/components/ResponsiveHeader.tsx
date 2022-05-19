import { Text, RichText, Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type ResponsiveHeaderProps = ComponentProps & {
  fields: {
    //Heading: Field<string>;
    //Content: Field<string>;
  };
};

const ResponsiveHeader = (/*{ fields }: ResponsiveHeaderProps*/): JSX.Element => (
  <div className="r-desktop-header">
    <div className="container">
      <div className="r-desktop-header__wrapper">
        <div className="r-desktop-header__logo-container">
          <a href="/" ><img src="http://www.jet2holidays.com/-/media/images/jet2holidays logo.png?h=140&amp;w=556&amp;la=en&amp;hash=B7A73FC0F70BEFB70A1EC7C519473A20B2D6254A" className="r-desktop-header__logo" alt="Jet2holidays - Package holidays you can trust" /></a>
        </div>
        <div className="r-desktop-header__phone">
          <a className="r-desktop-header__phone-link" href="tel:0800 408 0778">0800 408 0778</a>
          <p className="r-desktop-header__phone-subtext"><svg className="r-desktop-header__phone-info js-component-tooltip" data-tooltip-id="tooltip-call-today" height="12" width="12" xmlns="http://www.w3.org/2000/svg"><use xlinkHref="#icon-info" xmlnsXlink="http://www.w3.org/1999/xlink"></use></svg> Call today from 8am-10pm</p>
        </div>
        <div className="r-desktop-header__mmb">
          <a href="/mmb/direct/login" className="r-desktop-header__mmb-btn" title="Manage My Booking" >
            Manage My Booking
            <p className="r-desktop-header__mmb-subtext">
              <span className="r-desktop-header__mmb-span">Online check in</span>
              <span className="r-desktop-header__mmb-span">Add Holiday Essentials</span>
            </p>
          </a>
        </div>
      </div>
      <nav className="nav-bar">
        <ul className="nav-bar__list">
          <li className="nav-bar__item">
            <a href="/" className="nav-bar__title">
              <svg className="hide-small" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><use xlinkHref="#icon-home" xmlnsXlink="http://www.w3.org/1999/xlink"></use></svg>
              <span className="hide-large">Home</span>
            </a>
          </li>
          <li className="nav-bar__item nav-bar__item--mega-menu">
            <div className="nav-bar__title js-holiday-types">
              Holiday types
              <svg className="hide-small nav-bar__dropdown-icon nav-bar__dropdown-icon--chevron" height="11" width="11" xmlns="http://www.w3.org/2000/svg"><use xlinkHref="#icon-arrow-down-bold" xmlnsXlink="http://www.w3.org/1999/xlink"></use></svg>
              <svg className="hide-small nav-bar__dropdown-icon nav-bar__dropdown-icon--close" height="11" width="11" xmlns="http://www.w3.org/2000/svg"><use xlinkHref="#icon-close" xmlnsXlink="http://www.w3.org/1999/xlink"></use></svg>
            </div>
          </li>
          <li className="nav-bar__item nav-bar__item--mega-menu">
            <div className="nav-bar__title js-holiday-types">
              Destinations
              <svg className="hide-small nav-bar__dropdown-icon nav-bar__dropdown-icon--chevron" height="11" width="11" xmlns="http://www.w3.org/2000/svg"><use xlinkHref="#icon-arrow-down-bold" xmlnsXlink="http://www.w3.org/1999/xlink"></use></svg>
              <svg className="hide-small nav-bar__dropdown-icon nav-bar__dropdown-icon--close" height="11" width="11" xmlns="http://www.w3.org/2000/svg"><use xlinkHref="#icon-close" xmlnsXlink="http://www.w3.org/1999/xlink"></use></svg>
            </div>
          </li>
          <li className="nav-bar__item nav-bar__item--mega-menu">
            <div className="nav-bar__title js-holiday-types">
              Offers
              <svg className="hide-small nav-bar__dropdown-icon nav-bar__dropdown-icon--chevron" height="11" width="11" xmlns="http://www.w3.org/2000/svg"><use xlinkHref="#icon-arrow-down-bold" xmlnsXlink="http://www.w3.org/1999/xlink"></use></svg>
              <svg className="hide-small nav-bar__dropdown-icon nav-bar__dropdown-icon--close" height="11" width="11" xmlns="http://www.w3.org/2000/svg"><use xlinkHref="#icon-close" xmlnsXlink="http://www.w3.org/1999/xlink"></use></svg>
            </div>
          </li>
          <li className="nav-bar__item nav-bar__item--mega-menu">
            <div className="nav-bar__title js-holiday-types">
              Inspiration
              <svg className="hide-small nav-bar__dropdown-icon nav-bar__dropdown-icon--chevron" height="11" width="11" xmlns="http://www.w3.org/2000/svg"><use xlinkHref="#icon-arrow-down-bold" xmlnsXlink="http://www.w3.org/1999/xlink"></use></svg>
              <svg className="hide-small nav-bar__dropdown-icon nav-bar__dropdown-icon--close" height="11" width="11" xmlns="http://www.w3.org/2000/svg"><use xlinkHref="#icon-close" xmlnsXlink="http://www.w3.org/1999/xlink"></use></svg>
            </div>
          </li>
          <li className="nav-bar__item nav-bar__item--mega-menu">
            <div className="nav-bar__title js-holiday-types">
              More
              <svg className="hide-small nav-bar__dropdown-icon nav-bar__dropdown-icon--chevron" height="11" width="11" xmlns="http://www.w3.org/2000/svg"><use xlinkHref="#icon-arrow-down-bold" xmlnsXlink="http://www.w3.org/1999/xlink"></use></svg>
              <svg className="hide-small nav-bar__dropdown-icon nav-bar__dropdown-icon--close" height="11" width="11" xmlns="http://www.w3.org/2000/svg"><use xlinkHref="#icon-close" xmlnsXlink="http://www.w3.org/1999/xlink"></use></svg>
            </div>
          </li>
        </ul>

        <div className="nav-bar__tabs hide-small">
          <ul className="nav-bar__tabs-list">
            <li className="nav-bar__tabs-list-search-hotel-button-item">
              <div className="search-nav-button">
                <a href="#search-nav-button" className="search-nav-button__btn js-toggle-search-nav-button-btn" aria-selected="false" role="button">Find Hotel / Destination</a>
              </div>
            </li>
            <li>
              <div className="shortlists-nav-button">
                <a href="#loggedout" className="shortlists-nav-button__btn js-toggle-shortlist-btn" id="shortlists" aria-selected="false" role="button">
                  Shortlists
                  <span className="shortlists-nav-button__btn-label"></span>
                </a>
              </div>
            </li>
            <li>
              <div className="dealfinder-button" data-component="Deals/OffersMenu/OffersMenuButton">
                <a href="#dealfinder" className="dealfinder-button__btn js-toggle-dealfinder-btn" id="dealfinder" aria-selected="false" role="button">
                  Offers
                  <span className="dealfinder-button__btn-label">New</span>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
);

//export default withDatasourceCheck()<HubBarProps>(HubBar);
export default ResponsiveHeader;
