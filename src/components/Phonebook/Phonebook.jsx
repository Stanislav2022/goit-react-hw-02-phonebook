import { Component } from 'react'
import css from "./Phonebook.module.css";
// import { nanoid } from 'nanoid'
import ContactForm from "./ContactForm/ContactForm"

export default class Phonebook extends Component {
    
    
    render() {
    return (
        <>
            <div className={css.form}>
                <h1>Phonebook</h1>
                <ContactForm/>
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
