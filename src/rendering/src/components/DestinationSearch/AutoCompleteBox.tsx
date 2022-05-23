import { useState } from 'react';
import axios from 'axios';
import ResultsList from './ResultsList';

interface ComponentProps {
  phText: string;
}

// type Search = {
//   results: Result[];
// };

// type Result = {
//   displayName: string;
//   id: string;
//   name: string;
//   path: string;
// };

// type SearchResponse = {
//   data: Search;
// };

const AutoCompleteBox = (props: ComponentProps): JSX.Element => {
  const [showResults, setShowResults] = useState<boolean>(false);
  const [searchResults, setSearchResults] = useState<string[]>([]);

  const onChange = async (e: React.FormEvent<HTMLInputElement>) => {
    const userInput = e.currentTarget.value;

    if (userInput.length >= 3 && userInput.length < 20) {
      const searchResp = await axios.get(`/api/jet2/destinations/${userInput}`);
      const searchResults = searchResp.data.search.results.map((result: any) => {
        return result.displayName;
      });
      setSearchResults(searchResults);
      setShowResults(true);
    } else {
      setShowResults(false);
    }
  };

  return (
    <form className='search-nav-input__input-wrapper'>
      <input className='search-nav-input__input js-search-nav-input ui-autocomplete-input' type="text" onChange={onChange} placeholder={props.phText} />
      {showResults && searchResults && <ResultsList searchResults={searchResults} />}
    </form>
  );
};

export default AutoCompleteBox;
