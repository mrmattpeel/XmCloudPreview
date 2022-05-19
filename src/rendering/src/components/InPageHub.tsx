import { Text, RichText, Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type InPageHubProps = ComponentProps & {
  fields: {
    //Heading: Field<string>;
    //Content: Field<string>;
  };
};

const InPageHub = (/*{ fields }: InPageHubProps*/): JSX.Element => (
  <div>
    <div className="section covid-hub">
      <div className="covid-hub__wrapper wrapper">
        <ul className="covid-hub__list">
          <li className="covid-hub__list-item">
            <span className="covid-hub__header">
              <img className="covid-hub__header-icon" src="https://www.jet2holidays.com/-/media/Jet2holidays/Images/USP%20Strip/Lock-darker.svg" />
              <a href="/safe-travel" className="covid-hub__link"><strong>COVID 19 hub<span>:</span></strong></a>
            </span>
          </li>
          <li className="covid-hub__list-item">
            <p className="covid-hub__list-title">
              <a href="/safe-travel/travel-requirements" className="covid-hub__link">Travel requirements</a>
            </p>
          </li>
          <li className="covid-hub__list-item">
            <p className="covid-hub__list-title">
              <a href="/speedy-and-smooth-refunds" className="covid-hub__link">Refund guarantee</a>
            </p>
          </li>
          <li className="covid-hub__list-item">
            <p className="covid-hub__list-title">
              <a href="/safe-travel#videos" className="covid-hub__link">Passport validity</a>
            </p>
          </li>
          <li className="covid-hub__list-item">
            <p className="covid-hub__list-title">
              <a href="/covid-19-faqs" className="covid-hub__link">COVID-19 FAQs</a>
            </p>
          </li>
          <li className="covid-hub__list-item">
            <p className="covid-hub__list-last-title">
              <a href="/covid-19-faqs" className="covid-hub__link">COVID-19 FAQs</a>
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

//export default withDatasourceCheck()<HubBarProps>(HubBar);
export default InPageHub;
