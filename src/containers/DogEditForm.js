import React, { Component } from 'react'

export default class DogEditForm extends Component {
    state ={
        id: null,
        name: ''
    }

    componentDidMount() {
        this.setState({
            id: this.props.dog.id,
            name: this.props.dog.name
        })
    }

    handleChange = (e) => {
        this.setState({
           [e.target.name]: e.target.value 
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.toggleForm()
        this.props.editTheDog(this.state)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Dog Name:</label><br/>
                    <input name="name" value={this.state.name} onChange={this.handleChange} type="text"/>
                    <br/>
                    <br/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}
