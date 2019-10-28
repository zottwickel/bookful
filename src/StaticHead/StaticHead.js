import React from 'react';
import './StaticHead.css';
import HeadForm from '../HeadForm/HeadForm';

class StaticHead extends React.Component {
    render() {
        return (
            <header>
                <h1>Bookful</h1>
                <h2>Search for your book below</h2>
                <HeadForm handleSubmit={this.props.handleSubmit}/>
            </header>
        )
    }
}

export default StaticHead;