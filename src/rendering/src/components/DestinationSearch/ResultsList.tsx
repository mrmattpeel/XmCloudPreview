import React from 'react';

const ResultsList = (props: any) => {
  const hasData = (searchResultsData: any) => {
    return searchResultsData.length > 0;
  };

  return hasData(props.searchResults) ? (
    <div className='search-nav-input__autocomplete-wrapper'>
    <ul className="ui-menu ui-widget ui-widget-content ui-autocomplete ui-front">
      {React.Children.toArray(
      props.searchResults.map((destination: string) => {
        return <li className='ui-menu-item'>
          <div className='ui-menu-item-wrapper ui-menu-item-wrapper--destination'>
          <p className='ui-menu-item-title'>
          {destination}
          </p>
          </div>
          </li>;
      })
      )}
    </ul>
    </div>
  ) : (
    <div>
      <em>No destinations found!</em>
    </div>
  );
};

export default ResultsList;
