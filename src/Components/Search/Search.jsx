import React from "react";
import "./Search.scss";

class Search extends React.Component {
    render() {
        const { handleSearch, handleSearchSubmit, searchText, error } = this.props
        return (
            <>
                <form onSubmit={handleSearchSubmit}>
                    <input type="search" placeholder="Search for any IP address or domain"
                        onChange={handleSearch}
                        value={searchText}
                    />
                    <button type="search">&#62;</button>
                </form>
                <span className="error">{error}</span>
            </>
        );
    }
}
export default Search