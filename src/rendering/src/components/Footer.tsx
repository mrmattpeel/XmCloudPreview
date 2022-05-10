import { Text, RichText, Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type HeaderProps = ComponentProps & {
  fields: {
    Title: Field<string>;
    Content: Field<string>;
  };
};

const Footer = ({ fields }: HeaderProps): JSX.Element => (
  <div>
    <Text tag="h2" field={fields.Title} />
    <RichText field={fields.Content} />
  </div>
);

export default withDatasourceCheck()<HeaderProps>(Footer);
