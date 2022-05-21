import {
  Field,
  withDatasourceCheck,
  ImageField,
  Image,
  Link,
  LinkField,
  Text,
  Placeholder,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type ResponsiveHeaderProps = ComponentProps & {
  fields: {
    LogoImage: ImageField;
    PhoneNumber: LinkField;
    PhoneNumberText: Field<string>;
    MmbLink: LinkField;
    MmbSubText: Field<string>;
    MmbSubText2: Field<string>;
    NavBarPlaceHolder: Field<string>;
  };
};

const ResponsiveHeader = (props: ResponsiveHeaderProps): JSX.Element => {
  return (
    <div className="r-desktop-header">
      <div className="container">
        <div className="r-desktop-header__wrapper">
          <div className="r-desktop-header__logo-container">
            <a href="/">
              <Image media={props.fields.LogoImage} />
            </a>
          </div>
          <div className="r-desktop-header__phone">
            <Link field={props.fields.PhoneNumber} />
            <Text
              tag="p"
              className="r-desktop-header__phone-subtext"
              field={props.fields.PhoneNumberText}
            />
          </div>
          <div className="r-desktop-header__mmb">
            <span className="r-desktop-header__mmb-btn">
              <Link field={props.fields.MmbLink} className="r-desktop-header__mmb-btn" />
              <p className="r-desktop-header__mmb-subtext">
                <Text
                  tag="span"
                  className="r-desktop-header__mmb-span"
                  field={props.fields.MmbSubText}
                />
                <Text
                  tag="span"
                  className="r-desktop-header__mmb-span"
                  field={props.fields.MmbSubText2}
                />
              </p>
            </span>
          </div>
        </div>
        <Placeholder rendering={props.rendering} name={props.fields.NavBarPlaceHolder.value} />
        {/* <Placeholder
        rendering={props.rendering}
        name={props.fields.NavBarPlaceHolder.value}
        renderEach={(component, index) => (
          <div className="col-sm" key={index}>
            {component}
          </div>
        )}
        renderEmpty={(components) => <div className="col-sm">{components}</div>}
      /> */}
      </div>
    </div>
  );
};

export default withDatasourceCheck()<ResponsiveHeaderProps>(ResponsiveHeader);
