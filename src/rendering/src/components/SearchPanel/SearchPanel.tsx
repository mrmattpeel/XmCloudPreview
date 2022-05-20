//import { Text, RichText, Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
//import { ComponentProps } from 'lib/component-props';

//type SearchPanelProps = ComponentProps & {
//  fields: {
    //Heading: Field<string>;
    //Content: Field<string>;
//  };
//};

const SearchPanel = (/*{ fields }: SearchPanelProps*/): JSX.Element => (
  <div className="search-panel--v2"> 
    <div className="search-panel--v2__container js-holidaysearch-container">
        <div className="search-box-wrapper search-box-wrapper--v2 search-box-wrapper--horizontal">
            <div className="wrapper">
                <div className="search-box-wrapper__inner">
                    <div className="search-box--v2 search-box js-edit-search-form search-box--horizontal">
                        <form action="/">
                            <div className="search-box-group search-box-group--from">
                                <div className="search-box-group__title">
                                    <label className="search-box-group__label" htmlFor="search-box-from">From</label>
                                </div>
                                <div className="search-box-group__field">
                                    <input className="search-box-group__input search-box-group__input--blue" name="departureAirports" placeholder="Type departure airport" type="text" />
                                    <span className="search-box-group__clear-input"></span>
                                </div>
                                <button className="search-box-group__link" type="button">See list</button>
                                <div className="search-box-group__autocomplete-wrapper-from"></div>
                            </div>{/*<!-- 
                            To: DO NOT REMOVE THE PLACEMENT OF THIS COMMENT
                            -->*/}<div className="search-box-group search-box-group--to">
                                <div className="search-box-group__title">
                                    <label className="search-box-group__label" htmlFor="search-box-to">To</label>
                                </div>
                                <div className="search-box-group__field">
                                    <input autoComplete="off" className="search-box-group__input search-box-group__input--blue" name="destinations" placeholder="Type destination or hotel" type="text" />
                                    <span className="search-box-group__clear-input"></span>
                                </div>
                                <button className="search-box-group__link" type="button">See list</button>
                            </div>{/*<!-- 
                            Departure Date: DO NOT REMOVE THE PLACEMENT OF THIS COMMENT
                            -->*/}<div className="search-box-group search-box-group--leaving">
                              <div className="search-box-group__title">
                                <label className="search-box-group__label" htmlFor="search-box-leaving">Leaving</label>
                              </div>
                              <div className="search-box-group__field">
                                <input className="search-box-group__input" name="departureDate" placeholder="Choose date" type="text" readOnly />
                                <button className="search-box-group__link" type="button"></button>
                              </div>
                            </div >{/*<!--
                            Duration: DO NOT REMOVE THE PLACEMENT OF THIS COMMENT
                            -->*/}<div className="search-box-group search-box-group--nights">
                              <div className="search-box-group__title">
                                <label className="search-box-group__label" htmlFor="search-box-nights">
                                  Nights
                                </label>
                              </div>
                              <div className="search-box-group__field form-select form-select--light form-select--choice">
                                <select id="search-box-nights" name="duration" className="search-box-group__input form-select__origin form-select__origin--nights" aria-required="true" aria-invalid="false"></select>
                              </div>
                            </div>{/*<!--
                            Occupancy: DO NOT REMOVE THE PLACEMENT OF THIS COMMENT
                            -->*/}<div className="search-box-group search-box-group--guests">
                                <div className="search-box-group__title">
                                    <label className="search-box-group__label" htmlFor="search-box-guests">Guests</label>
                                </div>
                                <div className="search-box-group__field">
                                  <input className="search-box-group__input" name="guests" placeholder="2 Adults" type="text" readOnly />
                                </div>
                                <button className="search-box-group__link" type = "button"> Change</button>
                            </div>{/*<!--
                            Submit: DO NOT REMOVE THE PLACEMENT OF THIS COMMENT
                            -->*/}<div className="search-box-group search-box-group--submit">
                              <div className="search-box-group__title">
                                <div className="search-box-group__label">&nbsp;</div>
                              </div>
                              <button className="search-box__submit button bttn bttn--primary" type="submit">
                                <span className="search-box__submit-text">Find my holiday</span>
                              </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
);

//export default withDatasourceCheck()<HubBarProps>(HubBar);
export default SearchPanel;