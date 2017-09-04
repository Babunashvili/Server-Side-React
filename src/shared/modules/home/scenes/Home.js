import React, { Component } from "react";
import { connect } from "react-redux";
import {
    fromJS
} from 'immutable'
import { reposListFetch } from "../../repos/actions/reposActions";
import "./Home.css";

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
            <div>
                <ul>
                    {this.props.repos.map(repo => <li key={repo.get('id')} >{repo.get('full_name')}</li>)}
                </ul>
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

