import { Text, RichText, Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type FooterProps = ComponentProps & {
  fields: {
    Title: Field<string>;
    Content: Field<string>;
  };
};

const Footer = ({ fields }: FooterProps): JSX.Element => (
  <div>
    <Text tag="h2" field={fields.Title} />
    <RichText field={fields.Content} />
  </div>
);

export default withDatasourceCheck()<FooterProps>(Footer);
