import React from "react";
import "./Header.scss";
import Search from "../Search/Search";
class Header extends React.Component {
    render() {
        return (
            <>
                <header>
                    <h1>IP Address Tracker</h1>
                    <Search handleSearch={this.props.handleSearch}
                        handleSearchSubmit={this.props.handleSearchSubmit}
                        searchText={this.props.searchText}
                        error={this.props.error}
                    />
                </header>
            </>
        )
    }
}

export default Header