import { Colors } from "consts";
import styled from "styled-components";
import {FunctionComponent, useState} from "react";
import {NameMetaData} from "models";
import {NameContractService} from "Services/NameContractService";
import {ROOT_NAME} from "consts";
import { Input } from "Components";
import {SubHeader} from "Components/Headers";
import {Name, NameList} from "Components/NameList";
import {useDebouncedCallback} from "use-debounce";
import AddressLink from "Components/AddressLink";
import {BigParagraph} from "Components/Display";

export interface NameSearchProps {

}

const SearchResults = styled.div``;

const SearchError = styled.div`
    background: ${Colors.WARN};
    padding: 10px;
    font-size: 1.5rem;
    margin: 10px 0;
    border-radius: 5px;
    color: ${Colors.LIGHT};
`;

const NameSearchWrapper = styled.div`
    max-width: 600px;
`;

const isSearchValid = (val: string) => val.trim() !== '';

export const NameSearch: FunctionComponent<NameSearchProps> = ({ }) => {
    const [searchValue, setSearchValue] = useState('');
    const [searchResults, setSearchResults] = useState<NameMetaData[]>([]);
    const [searchResultTerm, setSearchResultTerm] = useState('');
    const [searchError, setSearchError] = useState('');

    const nameService = new NameContractService(ROOT_NAME);

    const clearSearchParams = () => {
        setSearchResults([]);
        setSearchResultTerm('');
        setSearchError('');
    };

    const debouncedSearch = useDebouncedCallback((target: string) => {
        setSearchValue(target);
        clearSearchParams();
        if (!isSearchValid(target)) {
            return;
        }
        nameService.searchNames(target)
            .then(searchResultArray => {
                if (searchResultArray.length === 0) {
                    setSearchError(`No results found for "${target}"`);
                }
                setSearchResults(searchResultArray);
                setSearchResultTerm(target);
            })
            .catch(e => {
                if (e instanceof Error) {
                    setSearchError(e.message);
                }
            });
    }, 500);

    const handleSearchTextInput = (text: string) => {
        setSearchValue(text);
        debouncedSearch(text);
    };

    return <NameSearchWrapper>
        <SubHeader>Search for Names</SubHeader>
        <br />
        <form>
            <Input label={"Search"} value={searchValue} onChange={handleSearchTextInput} />
        </form>
        {searchError && <SearchError>{searchError}</SearchError>}
        {!searchError && searchResults.length > 0 && <SearchResults>
            <SubHeader>Results for "{searchResultTerm}":</SubHeader>
            <NameList>
                {searchResults.map((result, i) => <Name key={`result-${i}`}>
                    <BigParagraph>Name: {result.name}</BigParagraph>
                    <br />
                    <AddressLink address={result.address} />
                </Name>)}
            </NameList>
        </SearchResults>}
    </NameSearchWrapper>;
};
