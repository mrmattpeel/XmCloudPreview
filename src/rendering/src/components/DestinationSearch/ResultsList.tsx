const ResultsList = (props: any) => {
  const hasData = (searchResultsData: any) => {
    return searchResultsData.length > 0;
  };

  return hasData(props.searchResults) ? (
    <ul>
      {props.searchResults.map((destination: string) => {
        return <li>{destination}</li>;
      })}
    </ul>
  ) : (
    <div>
      <em>No destinations found!</em>
    </div>
  );
};

export default ResultsList;
