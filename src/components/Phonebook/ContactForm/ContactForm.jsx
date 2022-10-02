import React, { Component } from 'react'

export default class ContactForm extends Component {
    render() {
      state = {
        contacts: [],
        name: '',
        number: '',
    };
    handlePhonebook = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value });
        
    };
    nameId = nanoid();
    numberId = nanoid();
    handleSubmite = (e) => {
        e.preventDefault()
        const { name, number } = this.state
        this.setState({
            name: '',
            number: '',
        })
        console.log(name, number);
    };

    return (
      <div>ContactForm</div>
    )
  }
}
