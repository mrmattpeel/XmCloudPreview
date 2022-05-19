import { useState } from "react";
import axios from 'axios';
import ResultsList from "./ResultsList";

const AutoCompleteBox = (props: any): JSX.Element => {
    const [showResults, setShowResults] = useState(false);
    const [searchResults, setSearchResults] = useState([]);

    const onChange = async (e: React.FormEvent<HTMLInputElement>) => {
        const userInput = e.currentTarget.value;
    
        if(userInput.length >= 3 && userInput.length < 20){
          const searchResp: any = await (await axios.get(`https://www.xmcloudpreview.localhost/api/jet2/destinations/${userInput}`)).data.search.results;
          const searchResults = searchResp.map((result: any) => {
            return result.displayName;
          });
          setSearchResults(searchResults);
          setShowResults(true);
        }
        else{
          setShowResults(false);
        }
      };

   return (
    <span>
      <input type="text" onChange={onChange} placeholder={props.phText} />
      {showResults && searchResults && <ResultsList searchResults={searchResults} />}
    </span>
  );
};

export default AutoCompleteBox;