import { Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import axios from 'axios';
import AutoCompleteBox from './AutoCompleteBox';

type DestinationSearchProps = ComponentProps & {
  fields: {
    DestinationLabel: Field<string>;
    SearchBoxPlaceholderText: Field<string>;
  };
};

const sayHello = (name: string) => {
  console.log(`Greetings ${name}`);
};

const makeSearchRequest = (searchTerm: string) => {
  axios.get(`https://www.xmcloudpreview.localhost/api/jet2/destinations/${searchTerm}`);
}

const DestinationSearch = ({ fields }: DestinationSearchProps): JSX.Element => (
  <div>
      <label htmlFor="search-input-desktop">{fields.DestinationLabel}</label>
      <input
        onClick={() => sayHello('Nick')}
        onKeyDown={() => makeSearchRequest('Ibiza')}
        id="search-input-desktop"
        type="search"
        placeholder="hello"
      />
      <br/>
      <br/>
      <label htmlFor="search-input-desktop">{`NEW ${fields.DestinationLabel}`}</label>
      <AutoCompleteBox />
  </div>
);

export default withDatasourceCheck()<DestinationSearchProps>(DestinationSearch);
