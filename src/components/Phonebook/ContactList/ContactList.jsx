import css from "../Phonebook.module.css"
import PropTypes from 'prop-types'

export default function ContactList({ items, removeContact }) {
    const element = items.map(({name, number, id}) => {
        return <li key={id}>{name}: {number} <span className={css.remove} onClick={() => removeContact(id)}>Delete</span></li>
    })
  return (
    <ul>{element}</ul>
  )
}

ContactList.propTypes = {
  name: PropTypes.number,
  number: PropTypes.number,
  id: PropTypes.string,
  removeContact: PropTypes.func, 
  items: PropTypes.array,
};