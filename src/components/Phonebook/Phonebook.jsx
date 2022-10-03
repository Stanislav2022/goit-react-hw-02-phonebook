import { Component } from 'react'
import css from "./Phonebook.module.css";
import { nanoid } from 'nanoid'
import ContactForm from "./ContactForm/ContactForm"
import ContactList from './ContactList/ContactList';

export default class Phonebook extends Component {
    state = {
        contacts: [
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
        filter: ''
    };

    addContats = (data) => {
        this.setState((prev) => {
            const newData = { id: nanoid(), ...data}
            return {
                contacts: [...prev.contacts, newData]
            }
        })
    };
    
    render() {
        const { addContats } = this;
        const { contacts } = this.state;
    return (
        <>
            <div className={css.form}>
                <h1>Phonebook</h1>
                <ContactForm onSubmit={ addContats} />
            </div>
            <div>
                <h2>Contacts</h2>
                <ContactList items={ contacts} />


            </div>
       </>
    )
  }
}
