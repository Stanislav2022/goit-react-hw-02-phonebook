import { Component } from 'react'
import css from "./Phonebook.module.css";
import { nanoid } from 'nanoid'

export default class Phonebook extends Component {
    state = {
        contacts: [],
        name: ''
    };
    handleName = (e) => {
        this.setState({ title: e.target.value });
    }
    
  render() {
    return (
        <>
            <div>
                <h2>Phonebook</h2>
                <div className={css.form}>
                    <label htmlFor="">Name</label>
                    <input className={css.input} type="text" value={this.state.name} onChange={this.handleName} />
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
