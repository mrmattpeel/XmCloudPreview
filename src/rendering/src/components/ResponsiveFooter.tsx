import { Text, RichText, Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type ResponsiveFooterProps = ComponentProps & {
  fields: {
    //Title: Field<string>;
    //Content: Field<string>;
  };
};

const ResponsiveFooter = (/*{ fields }: ResponsiveFooterProps*/): JSX.Element => (
  <footer className="footer-v2" data-component="Content/Footer/ResponsiveFooter">
    <div className="container">
      <div className="footer-v2__info-columns">
        <div className="footer-v2__info-col">
          <h5 className="title-m footer-v2__info-heading">Travel Aware</h5>
          <div className="footer-v2__info-content">
            <p className="bold">Staying safe and healthy abroad</p>
            <p>The Foreign, Commonwealth &amp; Development Office have advice for staying safe and well abroad. To find out more about security, local laws and the latest travel information for your holiday destination, visit <a target="_blank" href="//www.gov.uk/travelaware" className="underline semibold">FCDO Travel Aware website</a> Keep up to date with current health information for your destination: <a target="_blank" href="/essential-holiday-information#essential9" className="underline semibold">Health and Medical Advice</a></p>
            <p className="bold">Imagery and recommendations</p>
            <p>Some of our photos and recommendations may not represent how things are at the moment because of COVID-19. However, your <a target="_blank" href="/safe-travel" className="underline semibold">safety is our number one priority</a>, so be assured that everything from onboard cleaning to in-resort care is in line with official guidelines.</p>
          </div>
        </div>
      </div>
      <div className="footer-v2__links">
        <div className="footer-v2__nav">
          <ul className="footer-v2__nav-list">
            <li className="footer-v2__nav-item">
              <a href="/terms-and-conditions" className="footer-v2__nav-link underline" title="Terms &amp; Conditions" >Terms &amp; Conditions</a>
            </li>
            <li className="footer-v2__nav-item">
              <a href="/terms-of-use" className="footer-v2__nav-link underline" title="Terms of use" >Terms of use</a>
            </li>
            <li className="footer-v2__nav-item">
              <a href="/promotions" className="footer-v2__nav-link underline" >Promotions</a>
            </li>
            <li className="footer-v2__nav-item">
              <a href="/privacy-policy" className="footer-v2__nav-link underline" title="Privacy policy" >Privacy policy</a>
            </li>
            <li className="footer-v2__nav-item">
              <a href="/cookies" className="footer-v2__nav-link underline" title="Cookies" >Cookies</a>
            </li>
            <li className="footer-v2__nav-item">
              <a href="/modern-slavery-act" className="footer-v2__nav-link underline" title="Modern Slavery Act" >Modern Slavery Statement</a>
            </li>
            <li className="footer-v2__nav-item">
              <a href="/republic-of-ireland-bookings" className="footer-v2__nav-link underline" title="Republic of Ireland bookings" >Republic of Ireland bookings</a>
            </li>
          </ul>
          <p>&#169;Jet2holidays.com 2002-22 A subsidiary of <a href="https://www.jet2plc.com/" className="footer-v2__nav-link underline" target="_blank" >Jet2 plc</a></p>
        </div>
        <div className="footer-v2__icons">
          <ul className="footer-v2__partner-icons">
            <li className="footer-v2__partner-logo-card">
              <svg className="icon " height="37" width="240" xmlns="http://www.w3.org/2000/svg"><use xlinkHref="#icon-payment-logos" xmlnsXlink="http://www.w3.org/1999/xlink"></use></svg>
            </li>
          </ul>
          <ul className="footer-v2__partner-icons">
            <li className="footer-v2__partner-logo">
              <a href="http://www.feefo.com/en-gb/reviews/jet2holidays-limited?displayFeedbackType=SERVICE&amp;timeFrame=ALL" className="footer-v2__partner-link" target="_blank">
                <img src="https://api.feefo.com/api/logo?merchantidentifier=jet2holidays-limited&amp;template=Service-Stars-White-175x44.png" />
              </a>
            </li>
          </ul>
          <ul className="footer-v2__partner-icons">
            <li className="footer-v2__partner-logo">
              <a href="/about-us" className="footer-v2__partner-link" target="_blank" >
                <svg className="icon " height="40" width="80" xmlns="http://www.w3.org/2000/svg">
                  <use xlinkHref="#icon-abta-logo-mono" xmlnsXlink="http://www.w3.org/1999/xlink"></use>
                </svg>
              </a>
            </li>
            <li className="footer-v2__partner-logo">
              <a href="http://www.caa.co.uk/ATOL-protection/Check-an-ATOL/ATOL-holder-search/" className="footer-v2__partner-link" target="_blank" >
                <svg className="icon " height="40" width="40" xmlns="http://www.w3.org/2000/svg">
                  <use xlinkHref="#icon-atol-logo-mono" xmlnsXlink="http://www.w3.org/1999/xlink"></use>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default ResponsiveFooter;
//export default withDatasourceCheck()<ResponsiveFooterProps>(ResponsiveFooter);
