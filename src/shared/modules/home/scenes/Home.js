import React, { Component } from "react";
import { connect } from "react-redux";
import {
    Link
} from 'react-router-dom'
import {
    fromJS
} from 'immutable'
import { reposListFetch } from "../../repos/actions/reposActions";
import reactJsLogo from '../../../resources/assets/images/react.svg'
import "./Home.scss"

class Home extends Component {

    render() {
        return (
            <div className="home">
                <div className="home__content">
                    <a href="#" className="home__logo-link">
                        <img className="home__logo-img" src={reactJsLogo} alt="React Logo" />
                    </a>
                    <h4 className="home__heading">Server Side React</h4>
                    <nav className="home__nav">
                        <ul className="home__nav-list">
                            <li className="home__nav-list-item">
                                <a href="https://github.com/david-babunashvili/Server-Side-React#readme" target="_blank" rel="noopener noreferrer" className="home__nav-list-link">DOCUMENTATION</a>
                            </li>
                            <li className="home__nav-list-item">
                                <a href="https://github.com/david-babunashvili/Server-Side-React" target="_blank" rel="noopener noreferrer" className="home__nav-list-link">GITHUB</a>
                            </li>
                            <li className="home__nav-list-item">
                                <a href="https://github.com/david-babunashvili/Server-Side-React/issues" target="_blank" rel="noopener noreferrer" className="home__nav-list-link">BUGS</a>
                            </li>
                            <li className="home__nav-list-item">
                                <Link to="/repos" rel="noopener noreferrer" className="home__nav-list-link">EXAMPLE PAGE</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({});

const mapStateToProps = state => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

