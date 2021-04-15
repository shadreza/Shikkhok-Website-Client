import React from 'react';
import Button from '@material-ui/core/Button';
import './SearchBox.css';

const SearchBox = () => {
    return (
        <div className="searchBoxMainDiv">
            <input className="inputBoxWritingPart" type="text" placeholder="type your product name">
            </input>
            <Button className="searchButton" variant="contained" color="primary">
                Search
            </Button>
        </div>
    );
};

export default SearchBox;