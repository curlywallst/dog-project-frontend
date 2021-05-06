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
        fetch("http://localhost:9292/owners", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
        .then(r => r.json())
        .then(data => {
            console.log("New Owner", data)
            this.props.history.push('/owners')
        })
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
