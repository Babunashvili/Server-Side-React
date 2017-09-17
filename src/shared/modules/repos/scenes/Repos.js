import React, { Component } from "react";
import { connect } from "react-redux";
import {
    fromJS
} from 'immutable'
import {
    Link
} from 'react-router-dom'
import { reposListFetch } from "../../repos/actions/reposActions";
import reactJsLogo from '../../../resources/assets/images/react.svg'
import "./Repos.css";

class Repos extends Component {

    static initialAction() {
        return reposListFetch();
    }

    componentDidMount() {
        if (!this.props.repos) {
            this.props.reposListFetch()
        }
    }

    render() {
        return (
            <div className="repos">
                <h2 className="repos__heading">React Repos on Github</h2>
                <ul className="repos__list">
                    {this.props.repos.map(repo => <li className="repos__list-item" key={repo.get('id')} >{repo.get('full_name')}</li>)}
                </ul>
                <Link className="repos__back" to="/">&larr; Back to home</Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(Repos);

