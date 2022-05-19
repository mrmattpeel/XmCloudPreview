import { withDatasourceCheck, Item } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

import Link from 'next/link';

type HubBarProps = ComponentProps & {
  fields: {
    Links: Item[];
    //Content: Field<string>;
  };
};

const HubBar = ({ fields }: HubBarProps): JSX.Element => (
  <div className="hub">
    <div className="close-menu-overlay"></div>
    <nav className="hub-container container">
      <ul className="hub-nav-menu hub-wrapper">
        <li className="hub-nav-menu__item hub-nav-menu__link--active">
          <Link href="/">
            <a className="hub-nav-menu__link">Jet2holidays {fields.Links.length}</a>
          </Link>
        </li>
        <li className="hub-nav-menu__item ">
          <Link href="/city-breaks">
            <a className="hub-nav-menu__link">Jet2CityBreaks</a>
          </Link>
        </li>
        <li className="hub-nav-menu__item ">
          <Link href="/villas">
            <a className="hub-nav-menu__link">Jet2Villas</a>
          </Link>
        </li>
        <li className="hub-nav-menu__item ">
          <Link href="/indulgent-escapes#indulgentEscapes">
            <a className="hub-nav-menu__link">Indulgent Escapes</a>
          </Link>
        </li>
        <li className="hub-nav-menu__item ">
          <Link href="/vibe">
            <a className="hub-nav-menu__link">VIBE</a>
          </Link>
        </li>
        <li className="hub-nav-menu__item ">
          <Link href="https://www.jet2.com/?utm_source=jet2holidays.com&amp;utm_medium=referral&amp;utm_term=jet2hub">
            <a className="hub-nav-menu__link">Jet2.com</a>
          </Link>
        </li>
        <li className="hub-nav-menu__item ">
          <Link href="/travel-agent-finder">
            <a className="hub-nav-menu__link">Agent Finder</a>
          </Link>
        </li>
        <li className="hub-nav-menu__item ">
          <Link href="https://www.jet2carhire.com/?adplat=homepageheaderH&amp;adcamp=homepage">
            <a className="hub-nav-menu__link" target="_blank">
              Jet2carhire
            </a>
          </Link>
        </li>
        <li className="hub-nav-menu__item ">
          <Link href="https://www.jet2insurance.com/?utm_source=holidays&amp;utm_medium=referral&amp;utm_campaign=topnavigationbar">
            <a className="hub-nav-menu__link" target="_blank">
              Jet2insurance
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default withDatasourceCheck()<HubBarProps>(HubBar);
