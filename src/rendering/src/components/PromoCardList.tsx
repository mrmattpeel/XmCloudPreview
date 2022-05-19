import { Text, RichText, Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type PromoCardListProps = ComponentProps & {
  fields: {
    //Heading: Field<string>;
    //Content: Field<string>;
  };
};

const PromoCardList = (/*{ fields }: PromoCardListProps*/): JSX.Element => (
  <div>
  <div className="margin--top">
    <div className="title-and-text__content js-trigger-modal">
      <div className="section">
        <div className="wrapper">
          <h2 className="text-align-center margin--bottom-half">Holiday inspiration</h2>
        </div>
      </div>
    </div>
  </div>
  <div className="content-scrollable">
    <div className="wrapper">
      <div className="promo-card-wrapper">
        <div className="promo-card-item ">
          <a href="/all-inclusive" title="All Inclusive" >
            <img className="promo-card-item__img" src="https://www.jet2holidays.com/-/media/jet2holidays/images/components/image elements/promo cards/beach/streamlined homepage/all_inclusive.jpg" />
            <div className="promo-card-copy">
              <div className="promo-card-copy__line1">All Inclusive</div>
              <div className="promo-card-copy__line2"></div>
            </div>
          </a>
        </div>
        <div className="promo-card-item">
          <a href="/this-summer">
            <img className="promo-card-item__img" src="https://www.jet2holidays.com/-/media/jet2holidays/images/components/image elements/promo cards/beach/streamlined homepage/april_22/this summer - non fam.png" alt="" />
            <div className="promo-card-copy">
              <div className="promo-card-copy__line1">This summer</div>
              <div className="promo-card-copy__line2"></div>
            </div>
          </a>
        </div>
        <div className="promo-card-item">
          <a href="/indulgent-escapes">
            <img className="promo-card-item__img" src="https://www.jet2holidays.com/-/media/jet2holidays/images/components/image elements/promo cards/beach/streamlined homepage/luxe_collection.jpg" alt="" />
            <div className="promo-card-copy">
              <div className="promo-card-copy__line1">Indulgent Escapes</div>
              <div className="promo-card-copy__line2"></div>
            </div>
          </a>
        </div>
        <div className="promo-card-item  ">
          <a href="/adult-holidays" title="Adult holidays">
            <img className="promo-card-item__img" src="https://www.jet2holidays.com/-/media/jet2holidays/images/components/image elements/promo cards/beach/streamlined homepage/adults_only.jpg" alt="" />
            <div className="promo-card-copy">
              <div className="promo-card-copy__line1">Adults Only</div>
              <div className="promo-card-copy__line2"></div>
            </div>
          </a>
        </div>
        <div className="promo-card-item">
          <a href="">
            <div className="">
              <div className="brand-label">
                <h2 className="brand-label__text brand--family blue">Hotel Chain of the Week</h2>
              </div>
            </div>
              <img className="promo-card-item__img" src="https://www.jet2holidays.com/-/media/jet2holidays/images/components/image elements/promo cards/beach/streamlined homepage/may_22/spain streamline.jpeg" alt="" />
              <div className="promo-card-copy">
                <div className="promo-card-copy__line1">Save £50pp*</div>
                <div className="promo-card-copy__line2"></div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

//export default withDatasourceCheck()<HubBarProps>(HubBar);
export default PromoCardList;
