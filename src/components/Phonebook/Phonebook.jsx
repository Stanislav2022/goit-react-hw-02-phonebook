import { Component } from 'react'
import css from "./Phonebook.module.css";
// import { nanoid } from 'nanoid'
import ContactForm from "./ContactForm/ContactForm"

export default class Phonebook extends Component {
    state = {
        contacts: [],
        filter: ''
    };

    addContats = (data) => {
        this.setState((prev) => {
            return {
                contacts: [...prev.contacts, data]
            }
        })
    };
    
    render() {
        const { addContats } = this;
    return (
        <>
            <div className={css.form}>
                <h1>Phonebook</h1>
                <ContactForm onSubmit={ addContats} />
            </div>
            <div>
                <h2>Contacts</h2>
                <ul>
                    <li>Rosie</li>
                    <li>Hermione</li>
                    <li>Eden</li>
                </ul>

            </div>
       </>
    )
  }
}
