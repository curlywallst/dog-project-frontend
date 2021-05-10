import React, { Component } from 'react'

export default class OwnerForm extends Component {
    state ={
        name: ''
    }

    handleChange = (e) => {
        this.setState({
           [e.target.name]: e.target.value 
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addAnOwner(this.state)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Name:</label><br/>
                    <input name="name" value={this.state.name} onChange={this.handleChange} type="text"/>
                    <br/>
                    <br/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}
