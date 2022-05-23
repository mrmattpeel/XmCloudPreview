import { Field } from '@sitecore-jss/sitecore-jss-nextjs';
import AutoCompleteBox from './AutoCompleteBox';

type DestinationSearchProps = {
  fields: {
    DestinationLabel: Field<string>;
    SearchBoxPlaceholderText: Field<string>;
  };
};

const DestinationSearchInteral = ({ fields }: DestinationSearchProps): JSX.Element => (
  <div className='search-nav-input__form'>
    <AutoCompleteBox phText={fields.DestinationLabel.value} />
  </div>
);

export default (DestinationSearchInteral);
