import { Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import AutoCompleteBox from './AutoCompleteBox';

type DestinationSearchProps = ComponentProps & {
  fields: {
    DestinationLabel: Field<string>;
    SearchBoxPlaceholderText: Field<string>;
  };
};

const DestinationSearch = ({ fields }: DestinationSearchProps): JSX.Element => (
  <div>
      <label>{fields.DestinationLabel.value}</label>
      <AutoCompleteBox phText={fields.SearchBoxPlaceholderText.value} />
  </div>
);

export default withDatasourceCheck()<DestinationSearchProps>(DestinationSearch);
