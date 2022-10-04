import { Component } from 'react';
import css from "./Phonebook.module.css";
import { nanoid } from 'nanoid';
import ContactForm from "./ContactForm/ContactForm";
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

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
        if (this.isDuplicate(data)) {
            return alert(`ERROR`)
        }
        this.setState((prev) => {
            const newData = { id: nanoid(), ...data}
            return {
                contacts: [...prev.contacts, newData]
            }
        })
    };
    removeContact = (id) => {
        this.setState((prev) => {
            const newContacts = prev.contacts.filter((item) =>
                item.id !== id);
            return {
                contacts: newContacts
            }
        })
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    };

    isDuplicate ({name, number}) {
        const { contacts } = this.state;
        const result = contacts.find((item) => item.name === name && item.number === number)
        return result
    }

    getFiltereContacts() {
        const { contacts, filter } = this.state;
        if (!filter) {
            return contacts;
        }
        const normalizedFilter = filter.toLocaleLowerCase();
        const filteredContacts = contacts.filter(({ name, number }) => {
            const normalizedName = name.toLocaleLowerCase();
            const normalizedNumber = number.toLocaleLowerCase();
            const result = normalizedName.includes(normalizedFilter) || normalizedNumber.includes(normalizedFilter);
            return result;
        })
        return filteredContacts;
    }

    render() {
        const { addContats, removeContact, handleChange } = this;
        const { filter } = this.state;
        const contacts = this.getFiltereContacts();
    return (
        <>
            <div className={css.form}>
                <h1>Phonebook</h1>
                <ContactForm onSubmit={ addContats} />
            </div>
            <div>
                <h2>Contacts</h2>
                
                <Filter filter={ filter} handleChange={handleChange}  />
                <ContactList items={contacts} removeContact={removeContact} />


            </div>
       </>
    )
  }
}
