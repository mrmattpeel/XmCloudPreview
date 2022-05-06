import { Text, RichText, Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type HeaderProps = ComponentProps & {
  fields: {
    Heading: Field<string>;
    Content: Field<string>;
  };
};

const Header = ({ fields }: HeaderProps): JSX.Element => (
  <div>
    <h1>Boom! - is this still working?</h1>
    <Text tag="h2" field={fields.Heading} />
    <RichText field={fields.Content} />
  </div>
);

export default withDatasourceCheck()<HeaderProps>(Header);
