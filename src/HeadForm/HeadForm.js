import React from 'react';

class HeadForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            query: '',
            printType: 'all',
            filter: 'partial'
        }
    }

    queryChanged = (query) => {
        this.setState({
            query
        })
    }

    printTypeChanged = (printType) => {
        this.setState({
            printType
        })
    }

    filterChanged = (filter) => {
        this.setState({
            filter
        })
    }


    render() {
        
        const options = {
            printType: [
                'all',
                'books',
                'magazines'
            ],
            filter: [
                'partial',
                'full',
                'free-ebooks',
                'paid-ebooks',
                'ebooks'
            ]
        }

        return (
            <form onSubmit={e => this.props.handleSubmit(
                e, 
                this.state.printType, 
                this.state.filter, 
                this.state.query)}>
                <label htmlFor="query">Search:</label>
                <input
                    type="text"
                    name="Search"
                    id="query"
                    placeholder="Search"
                    value={this.state.query}
                    onChange={e => this.queryChanged(e.target.value)} />
                <label htmlFor="printType">Type of book:</label>
                <select 
                    id="printType"
                    value={this.state.printType}
                    onChange={e => this.printTypeChanged(e.target.value)}>
                    {options.printType.map((option, i) => {
                        return <option key={i} value={option}>{option}</option>
                    })}
                </select>
                <label htmlFor="filter">Filter By:</label>
                <select
                    id="filter"
                    value={this.state.filter}
                    onChange={e => this.filterChanged(e.target.value)}>
                    {options.filter.map((option, i) => {
                        return <option key={i} value={option}>{option}</option>
                    })}
                </select>
                <button type="submit">
                    Submit
                </button>
            </form>
        )
    }
}

export default HeadForm;