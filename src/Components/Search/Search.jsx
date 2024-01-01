import React from "react";
import "./Search.scss";

class Search extends React.Component {
    render() {
        const { handleSearch, handleSearchSubmit, searchText, error } = this.props
        return (
            <>
                <form action="" onSubmit={handleSearchSubmit}>
                    <input type="text" placeholder="Search for any IP address or domain"
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