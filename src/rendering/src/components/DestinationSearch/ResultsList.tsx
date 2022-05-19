const ResultsList = (searchResults: any) => {
    return searchResults.length ? (
      <ul>
        {searchResults.map((destination: string) => {
          return (
            <li>
              {destination}
            </li>
          );
        })}
      </ul>
    ) : (
      <div>
        <em>No destinations found!</em>
      </div>
    );
  };

  export default ResultsList;