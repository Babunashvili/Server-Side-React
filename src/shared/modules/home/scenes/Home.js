import React, { Component } from "react";
import { connect } from "react-redux";
import {
    fromJS
} from 'immutable'
import { reposListFetch } from "../../repos/actions/reposActions";
import "./Home.css";
import reactJsLogo from '../../../resources/assets/images/react.svg';

class Home extends Component {

    static initialAction() {
        return reposListFetch();
    }

    componentDidMount() {
        if (!this.props.common) {
            this.props.reposListFetch()
        }
    }

    render() {
        return (
            <div className="home">
                <div className="home__content">
                <a href="#" className="home__logo-link">
                    <img className="home__logo-img" src={reactJsLogo} alt="React Logo" />
                </a>
                <h4 className="home__heading">React-Redux Server Side</h4>
                <nav className="home__nav">
                    <ul className="home__nav-list">
                    <li className="home__nav-list-item">
                        <a href="https://github.com/david-babunashvili/React-Redux-Boilerplate#readme" target="_blank" rel="noopener noreferrer" className="home__nav-list-link">DOCUMENTATION</a>
                    </li>
                    <li className="home__nav-list-item">
                        <a href="https://github.com/david-babunashvili/React-Redux-Boilerplate" target="_blank" rel="noopener noreferrer" className="home__nav-list-link">GITHUB</a>
                    </li>
                    <li className="home__nav-list-item">
                        <a href="https://github.com/david-babunashvili/React-Redux-Boilerplate/issues" target="_blank" rel="noopener noreferrer" className="home__nav-list-link">BUGS</a>
                    </li>
                    </ul>
                </nav>
                </div>
                <div>
                {/*<ul>
                    {this.props.repos.map(repo => <li key={repo.get('id')} >{repo.get('full_name')}</li>)}
                </ul>*/}
             </div>
            </div>
             
        );
    }
}

const mapDispatchToProps = dispatch => ({
    reposListFetch: payload => dispatch(reposListFetch())
});

const mapStateToProps = state => ({
    repos: state.repos.get('repos')
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

