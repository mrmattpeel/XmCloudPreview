import { Text, RichText, Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type HubBarProps = ComponentProps & {
  fields: {
    //Heading: Field<string>;
    //Content: Field<string>;
  };
};

const HubBar = (/*{ fields }: HubBarProps*/): JSX.Element => (
  <div className="hub">
    <div className="close-menu-overlay"></div>
    <nav className="hub-container container">
      <ul className="hub-nav-menu hub-wrapper">
        <li className="hub-nav-menu__item hub-nav-menu__link--active">
          <a href="/" className="hub-nav-menu__link" >Jet2holidays</a>
        </li>
        <li className="hub-nav-menu__item ">
          <a href="/city-breaks" className="hub-nav-menu__link" >Jet2CityBreaks</a>
        </li>
        <li className="hub-nav-menu__item ">
          <a href="/villas" className="hub-nav-menu__link" >Jet2Villas</a>
        </li>
        <li className="hub-nav-menu__item ">
          <a href="/indulgent-escapes#indulgentEscapes" className="hub-nav-menu__link" >Indulgent Escapes</a>
        </li>
        <li className="hub-nav-menu__item ">
          <a href="/vibe" className="hub-nav-menu__link" >VIBE</a>
        </li>
        <li className="hub-nav-menu__item ">
          <a href="https://www.jet2.com/?utm_source=jet2holidays.com&amp;utm_medium=referral&amp;utm_term=jet2hub" className="hub-nav-menu__link" >Jet2.com</a>
        </li>
        <li className="hub-nav-menu__item ">
          <a href="/travel-agent-finder" className="hub-nav-menu__link" >Agent Finder</a>
        </li>
        <li className="hub-nav-menu__item ">
          <a href="https://www.jet2carhire.com/?adplat=homepageheaderH&amp;adcamp=homepage" className="hub-nav-menu__link" target="_blank" >Jet2carhire</a>
        </li>
        <li className="hub-nav-menu__item ">
          <a href="https://www.jet2insurance.com/?utm_source=holidays&amp;utm_medium=referral&amp;utm_campaign=topnavigationbar" className="hub-nav-menu__link" target="_blank" >Jet2insurance</a>
        </li>
      </ul>
    </nav>
  </div>
);

//export default withDatasourceCheck()<HubBarProps>(HubBar);
export default HubBar;
