import { Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type DestinationSearchProps = ComponentProps & {
    fields: {
      DestinationLabel: Field<string>;
      SearchBoxPlaceholderText: Field<string>;
    };
  };

const sayHello = (name: string) => {
    console.log(`Hello ${name}`);
}


const destinationSearch = ({ fields }: DestinationSearchProps): JSX.Element => (
    <div>
        <form>
            <label htmlFor="search-input-desktop" className="search-nav-input__label">{fields.DestinationLabel.value}</label>
            <input onClick={() => sayHello("Nick")} onKeyDown={() => sayHello("Uncle Bob")} id="search-input-desktop" type="search" className="search-nav-input__input js-search-nav-input ui-autocomplete-input" placeholder="hello" />
        </form>
    </div>
  );

  export default withDatasourceCheck()<DestinationSearchProps>(destinationSearch);
