import { Component } from 'react'
import css from "./Phonebook.module.css";
import { nanoid } from 'nanoid'

export default class Phonebook extends Component {
    state = {
        contacts: [],
        name: ''
    };
    handleName = (e) => {
        this.setState({ name: e.target.value });
    }
    nameId = nanoid();

    
    render() {
        const { nameId } = this;
    return (
        <>
            <div>
                <h2>Phonebook</h2>
                <div className={css.form}>
                    <label htmlFor={nameId} >Name</label>
                    <input className={css.input} id={nameId} type="text" value={this.state.name} onChange={this.handleName} />
                </div>
                 <div>
                    <label htmlFor={nameId} >Number</label>
                    <input
                        className={css.input}
                        id={nameId}
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                    <button>Add contact</button>
                </div>
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
