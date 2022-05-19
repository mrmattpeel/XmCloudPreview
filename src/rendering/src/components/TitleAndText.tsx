import { Text, RichText, Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type TitleAndTextProps = ComponentProps & {
  fields: {
    //Heading: Field<string>;
    //Content: Field<string>;
  };
};

const TitleAndText = (/*{ fields }: TitleAndTextProps*/): JSX.Element => (
  <div className="title-and-text title-and-text--align-center title-and-text--theme-block footer-links">
    <h1 className="title-and-text__heading">Our package holidays</h1>
    <div className="title-and-text__content js-trigger-modal">
      <div className="wrapper">
        <p>Here at <strong><em>Jet2holidays</em></strong>, we’re proud to be the UK’s second largest tour operator and deliver Package Holidays You Can Trust. With accommodation, return flights, transfers and a 22kg baggage allowance wrapped up into an ATOL-protected package holiday, it’s no wonder we take millions of happy customers away each year! We’ve got thousands of 2 to 5-star hotels to pick from, along with a variety of board options that range from Self Catering to All Inclusive Plus. Not to mention family-friendly deals with our <a href="/free-child-place-finder">Free Child Places</a>*! Our hotels can be found across more than 70 sun and city holiday destinations in Europe and beyond. Among our sunshine collection we’ve got classics such as Spanish holidays to the <a href="/destinations/spain/costa-blanca">Costa Blanca</a>, <a href="/destinations/balearics/majorca">Majorca</a> and <a href="/destinations/canary-islands/tenerife">Tenerife</a>, along with gems of the Mediterranean, such as <a href="/destinations/cyprus">Cyprus</a>, <a href="/destinations/greece">Greece</a> and <a href="/destinations/malta">Malta</a>. There are city breaks to <a href="/destinations/italy/rome">Rome</a>, <a href="/destinations/spain/barcelona">Barcelona</a>, <a href="/destinations/france/paris">Paris</a> and <a href="/destinations/czech-republic/prague">Prague</a> too if you’re after a cultured getaway to one of the world’s best cities. Best of all, you can secure your ideal holiday straight away with an ultra-low £60pp deposit* and spread the remaining cost with <a href="/part-payment">Pay Monthly</a>*! Enjoy peace of mind knowing you’re booking with a Which? Recommended Provider and Tripadvisor’s Best Airline – UK.</p>
        <p>*Terms and conditions apply</p>
      </div>
    </div>
  </div>
);

//export default withDatasourceCheck()<HubBarProps>(HubBar);
export default TitleAndText;
