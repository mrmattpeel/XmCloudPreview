import { useState } from "react";
import axios from 'axios';
import ResultsList from "./ResultsList";

const AutoCompleteBox = ({ suggestions }: any): JSX.Element => {

    // const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    // const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
    const [showResults, setShowResults] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    //const [input, setInput] = useState("");

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

        // Filter our suggestions that don't contain the user's input
        // const unLinked = suggestions.filter(
        //   (suggestion: String) =>
        //     suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
        // );
    
        //setInput(e.currentTarget.value);
        //setFilteredSuggestions(unLinked);
        //setActiveSuggestionIndex(0);
        
      };

   return (
    <div>
      <input type="text" onChange={onChange} />
      {showResults && searchResults && <ResultsList searchResults={searchResults} />}
    </div>
  );
};

export default AutoCompleteBox;