import React from "react";
import "./Main.scss";
import loader from '../../images/loader.svg'
class Main extends React.Component {
    render() {
        const { results, isLoading, showResults } = this.props;
        return (
            <>
                {(isLoading) ? <img className="loader" src={loader} alt="loader" /> :
                    (showResults) ?
                        <main >
                            <div className="ip-adress">
                                <p>IP Address</p>
                                <h4>{results.ip}</h4>
                            </div>
                            <div className="location">
                                <p>Location</p>
                                <h4>{results.location?.region}{', '}
                                    {results.location?.country} {' '}
                                    {results.as?.asn}</h4>
                            </div>
                            <div className="time">
                                <p>Timezone</p>
                                <h4>UTC {results.location?.timezone}</h4>
                            </div>
                            <div className="isp">
                                <p>ISP</p>
                                <h4>{results.isp}</h4>
                            </div>
                        </main>
                        : null
                }
            </>
        );
    }
}

export default Main;