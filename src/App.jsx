import React from "react";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
class App extends React.Component {
    state = {
        searchText: '',
        results: [],
        showResults: false,
        isLoading: false,
        error: ''
    }
    handleSearch = (e) => {
        this.setState({
            searchText: e.target.value
        })
    }

    handleSearchSubmit = (e) => {
        e.preventDefault();
        this.setState({
            isLoading: true,
            showResults: true
        })

        if (!this.state.searchText.trim()) {
            this.setState({
                showResults: false,
                isLoading: false,
                error: "Inputni to'ldiring!"
            })
        } else {
            this.setState({
                showResults: true,
                isLoading: true,
                error: ''
            })
        }

        fetch(`https://geo.ipify.org/api/v2/country?apiKey=at_KYQWYbOEZMOzAxPrb89wdU9j6PiuJ&
        ${isNaN(this.state.searchText) ? 'domain' : 'ipAddress'}=${this.state.searchText}`)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    results: (data.messages) ? this.setState({ showResults: false, error: data.messages }) : data,
                    isLoading: false
                })
            })
    }

    render() {
        return (
            <>
                <Header error={this.state.error} handleSearch={this.handleSearch}
                    searchText={this.state.searchText} handleSearchSubmit={this.handleSearchSubmit} />
                <Main showResults={this.state.showResults} results={this.state.results} isLoading={this.state.isLoading} />
            </>
        )
    }
}
export default App;