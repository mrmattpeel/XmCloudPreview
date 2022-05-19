import { Text, RichText, Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import Image from 'next/image';

type HeroBannerProps = ComponentProps & {
  fields: {
    //Heading: Field<string>;
    //Content: Field<string>;
  };
};

const HeroBanner = (/*{ fields }: HeroBannerProps*/): JSX.Element => (
  <div className="">
    <div className="banner-v2 banner--horizontal banner-v2--horizontal-with-search white">
      <div className="banner-v2__carousel js-banner-v2__carousel">
        <div className="banner-v2-slide">
          <div className="banner-v2__slide ">
            <img className="banner-v2-slide__img" src="https://www.jet2holidays.com/-/media/jet2holidays/images/components/banners/homepage%20static%20banners/html%20-%20sun%20sea%20and%20savings/4-4-22/2000x560_holidays_desktop_1home.jpg" alt="banner-v2 image" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

//export default withDatasourceCheck()<HubBarProps>(HubBar);
export default HeroBanner;
